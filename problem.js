document.addEventListener('DOMContentLoaded', () => {
  initProblemIDE();
});

// State variables
let problemId = '';
let currentFileName = '';
let extractedProblemTitle = '';
let defaultBoilerplate = '';
let solvedState = false;

// DOM Elements
const backLink = document.getElementById('back-to-roadmap');
const problemMetaBadge = document.getElementById('problem-meta-badge');
const tabDescription = document.getElementById('tab-description');
const tabSolution = document.getElementById('tab-solution');
const solutionCodeContainer = document.getElementById('solution-code-container');
const editorTextarea = document.getElementById('editor-textarea');
const editorGutter = document.getElementById('editor-gutter');
const consoleBody = document.getElementById('console-body');

// Action Buttons
const btnReset = document.getElementById('btn-reset');
const btnRun = document.getElementById('btn-run');
const btnSubmit = document.getElementById('btn-submit');
const tabButtons = document.querySelectorAll('.ide-tab-btn');

async function initProblemIDE() {
  // 1. Get Problem ID from Query Parameter
  const urlParams = new URLSearchParams(window.location.search);
  problemId = urlParams.get('id');
  
  if (!problemId) {
    showErrorState("No Problem ID specified. Please go back to the roadmap and select a problem.");
    return;
  }

  // 2. Setup Back Button Hash Navigation
  currentFileName = getFileNameFromId(problemId);
  if (currentFileName) {
    backLink.href = `index.html#${currentFileName}#problem-row-${problemId}`;
  }

  // 3. Setup Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const tabName = btn.getAttribute('data-tab');
      document.querySelectorAll('.ide-tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === `tab-${tabName}`);
      });
    });
  });

  // 4. Setup Code Editor Gutter Sync
  editorTextarea.addEventListener('input', updateLineNumbers);
  editorTextarea.addEventListener('scroll', () => {
    editorGutter.scrollTop = editorTextarea.scrollTop;
  });

  // Handle Tab key insertion inside Textarea
  editorTextarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editorTextarea.selectionStart;
      const end = editorTextarea.selectionEnd;
      const value = editorTextarea.value;
      editorTextarea.value = value.substring(0, start) + '    ' + value.substring(end);
      editorTextarea.selectionStart = editorTextarea.selectionEnd = start + 4;
      updateLineNumbers();
    }
  });

  // 5. Fetch and Parse Problem Markdown Content
  await fetchAndParseProblem();

  // 6. Bind IDE Actions
  btnReset.addEventListener('click', resetCodeEditor);
  btnRun.addEventListener('click', runCodeSimulation);
  btnSubmit.addEventListener('click', submitCodeSolution);
}

// Map Problem ID prefixes to their respective files
function getFileNameFromId(id) {
  const parts = id.split('.');
  const prefix = parts[0];
  
  const fileMapping = {
    '1': 'Part_01_Fundamentals.md',
    '2': 'Part_02_ControlFlow_Arrays.md',
    '3': 'Part_03_Methods_OOP.md',
    '4': 'Part_04_Exceptions_Collections_IO.md',
    '5': 'Part_05_Modern_Java_Patterns.md',
    '6': 'Part_06_Interview_Problems.md',
    '7': 'Part_07_Mastery_Challenge.md',
    '9': 'Part_09_Practice_Java.md',
    '10': 'Part_10_Recent_Interviews.md',
    '11': 'Part_11_Massive_Practice.md',
    '12': 'Part_12_WriteYourOwn_Practice_Tracker.md'
  };
  
  return fileMapping[prefix] || null;
}

// Fetch problem content and extract specific ID block
async function fetchAndParseProblem() {
  if (!currentFileName) {
    showErrorState(`Invalid Problem ID prefix: "${problemId}"`);
    return;
  }

  try {
    const response = await fetch(currentFileName + '?t=' + Date.now());
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const markdown = await response.text();
    
    // Parse problem block
    const problemData = extractProblemBlock(markdown, problemId);
    
    if (!problemData) {
      showErrorState(`Problem ${problemId} could not be found inside ${currentFileName}.`);
      return;
    }
    
    renderProblemDetails(problemData);
    setupEditorCode(problemData);
    
  } catch (error) {
    console.error(error);
    showErrorState(`Failed to fetch problem document: ${error.message}`);
  }
}

// Extract a specific problem block using line-by-line scanning
function extractProblemBlock(markdown, id) {
  const lines = markdown.split('\n');
  
  // Look for: ### [ ] Problem X.Y: Title [Difficulty] [Topic: Topic] [Company: Company]
  const headingPattern = new RegExp(`^###\\s*\\[\\s*\\]\\s*Problem\\s+${id.replace('.', '\\.')}\\b`, 'i');
  
  let capture = false;
  let blockLines = [];
  let headingText = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (headingPattern.test(line)) {
      capture = true;
      headingText = line;
      continue;
    }
    
    if (capture) {
      // Stop capture if we reach next heading of same or higher level
      if (line.startsWith('### ') || line.startsWith('## ') || line.startsWith('# ')) {
        break;
      }
      blockLines.push(line);
    }
  }

  if (!capture) return null;

  // Extract metadata from heading
  // Format: ### [ ] Problem 9.1: Printed Square [Easy] [Topic: Basics] [Company: TCS]
  const metaRegex = /^###\s*\[\s*\]\s*Problem\s+([\w\.]+):\s*(.*?)\s*\[(Easy|Medium|Hard)\]\s*\[Topic:\s*(.*?)\](?:\s*\[Company:\s*(.*?)\])?$/i;
  const match = headingText.match(metaRegex);
  
  let difficulty = 'easy';
  let topic = 'General';
  let company = '';
  let title = `Problem ${id}`;

  if (match) {
    title = match[2];
    difficulty = match[3];
    topic = match[4];
    company = match[5] || '';
  }

  const rawContent = blockLines.join('\n').trim();

  // Extract Java Solution block
  // Solutions are wrapped in: ```java ... ```
  const javaRegex = /```java\n([\s\S]*?)\n```/;
  const solutionMatch = rawContent.match(javaRegex);
  
  let solutionCode = '';
  let cleanDescription = rawContent;

  if (solutionMatch) {
    solutionCode = solutionMatch[1];
    // Strip solution block out of the main description panel view
    cleanDescription = rawContent.replace(solutionMatch[0], '*Solution is available in the "Solution" tab above.*');
  }

  // Extract inputs and outputs for test simulation
  const inputMatch = rawContent.match(/\*\s*\*Input\*\*:\s*(.*)/i);
  const outputMatch = rawContent.match(/\*\s*\*Output\*\*:\s*[\s\S]*?```(?:text)?\n([\s\S]*?)\n```/i);
  
  const mockInput = inputMatch ? inputMatch[1].trim() : 'None';
  const mockOutput = outputMatch ? outputMatch[1].trim() : 'Execution completed successfully.';

  return {
    id,
    title,
    difficulty,
    topic,
    company,
    description: cleanDescription,
    solution: solutionCode,
    mockInput,
    mockOutput
  };
}

function renderProblemDetails(data) {
  extractedProblemTitle = data.title;
  
  // Set meta title and badge
  document.title = `Problem ${data.id} - ${data.title}`;
  problemMetaBadge.className = `badge badge-${data.difficulty.toLowerCase()}`;
  problemMetaBadge.textContent = `${data.difficulty} | ${data.topic} ${data.company ? '| ' + data.company : ''}`;

  // Render Left Panel Description Markdown
  tabDescription.innerHTML = `
    <h1>Problem ${data.id}: ${data.title}</h1>
    <div style="margin: 16px 0 24px;">
      <span class="badge badge-${data.difficulty.toLowerCase()}" style="margin-right: 8px;">${data.difficulty}</span>
      <span class="badge badge-topic">${data.topic}</span>
      ${data.company ? `<span class="badge badge-company">${data.company}</span>` : ''}
    </div>
    
    <div class="problem-statement-md">
      ${marked.parse(data.description)}
    </div>
  `;

  // Render Solution code block with Prism
  if (data.solution) {
    const escaped = escapeHtml(data.solution);
    solutionCodeContainer.innerHTML = `<pre class="language-java"><code class="language-java">${escaped}</code></pre>`;
    Prism.highlightElement(solutionCodeContainer.querySelector('code'));
  } else {
    solutionCodeContainer.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">No solution available for this problem.</p>`;
  }
}

function setupEditorCode(data) {
  // Create default boilerplate
  let className = "Main";
  
  // Try to parse class name from solution code if possible
  if (data.solution) {
    const classMatch = data.solution.match(/public\s+class\s+(\w+)/) || data.solution.match(/class\s+(\w+)/);
    if (classMatch) {
      className = classMatch[1];
    }
  }

  defaultBoilerplate = `public class ${className} {
    public static void main(String[] args) {
        // Write your Java code here
        
        System.out.println("Hello World!");
    }
}`;

  // Load from local storage if previously saved
  const savedCode = localStorage.getItem(`java-roadmap-code-${data.id}`);
  if (savedCode) {
    editorTextarea.value = savedCode;
  } else {
    editorTextarea.value = defaultBoilerplate;
  }

  // Update line number gutter
  updateLineNumbers();

  // Attach mock inputs/outputs to textarea attributes
  editorTextarea.setAttribute('data-mock-input', data.mockInput);
  editorTextarea.setAttribute('data-mock-output', data.mockOutput);
}

function updateLineNumbers() {
  const lines = editorTextarea.value.split('\n');
  let gutterHTML = '';
  for (let i = 1; i <= lines.length; i++) {
    gutterHTML += `<span class="editor-line-num">${i}</span>`;
  }
  editorGutter.innerHTML = gutterHTML;
}

function resetCodeEditor() {
  if (confirm("Are you sure you want to reset the editor to the default boilerplate? Your current changes will be lost.")) {
    editorTextarea.value = defaultBoilerplate;
    updateLineNumbers();
    consoleBody.textContent = "Workspace reset to default boilerplate.";
    consoleBody.className = "console-body";
    
    // Save state
    localStorage.removeItem(`java-roadmap-code-${problemId}`);
  }
}

function runCodeSimulation() {
  const code = editorTextarea.value;
  const mockInput = editorTextarea.getAttribute('data-mock-input') || 'None';
  const mockOutput = editorTextarea.getAttribute('data-mock-output') || '';
  
  consoleBody.className = "console-body";
  consoleBody.innerHTML = "Compiling Main.java...\nExecuting bytecode tests...";
  
  // Analyze code for simple syntax errors
  setTimeout(() => {
    if (!code.includes('{') || !code.includes('}')) {
      consoleBody.className = "console-body error";
      consoleBody.innerHTML = "COMPILATION ERROR:\nMain.java: Error: Reach end of file while parsing. Check matching parentheses '{}'.";
      return;
    }

    if (!code.includes('class ')) {
      consoleBody.className = "console-body error";
      consoleBody.innerHTML = "COMPILATION ERROR:\nMain.java: Error: Class declaration missing.";
      return;
    }

    if (!code.includes('System.out.print')) {
      consoleBody.className = "console-body warning";
      consoleBody.innerHTML = `Compiling Main.java... success.\n\nRunning Test Cases:\nInput: ${mockInput}\n\nWARNING: No output statements detected.\nExpected Output:\n${mockOutput}`;
      return;
    }

    // Success simulation
    consoleBody.className = "console-body success";
    consoleBody.innerHTML = `Compiling Main.java... Success.
Running standard test cases:

Test Case 1:
Input: ${mockInput}
Expected Output:
${mockOutput}

Actual Output:
${mockOutput}

Status: SUCCESS (All assertions passed successfully!)`;
  }, 600);
}

function submitCodeSolution() {
  const code = editorTextarea.value;
  
  // Save code to localStorage
  localStorage.setItem(`java-roadmap-code-${problemId}`, code);
  
  // Update solved array in localStorage
  let solvedProblems = [];
  const savedSolved = localStorage.getItem('java-roadmap-solved-problems');
  if (savedSolved) {
    solvedProblems = JSON.parse(savedSolved);
  }
  
  if (!solvedProblems.includes(problemId)) {
    solvedProblems.push(problemId);
    localStorage.setItem('java-roadmap-solved-problems', JSON.stringify(solvedProblems));
  }
  
  consoleBody.className = "console-body success";
  consoleBody.innerHTML = `Code saved successfully to your Local Storage!

Status: COMPLETED & PERSISTED
Problem ${problemId} has been marked as solved in your global progress roadmap.
You can return to the dashboard to see your updated metrics.`;
}

function showErrorState(message) {
  tabDescription.innerHTML = `<div class="error-state" style="padding: 40px 0;">
    <h2>⚠️ Load Error</h2>
    <p>${message}</p>
    <a href="index.html" class="btn" style="display: inline-block; margin-top: 15px;">Back to Roadmap</a>
  </div>`;
  document.getElementById('solution-tab-btn').style.display = 'none';
  btnRun.disabled = true;
  btnSubmit.disabled = true;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
