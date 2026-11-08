// Configuration and Roadmap Files
const files = [
  '00_Table_of_Contents.md',
  'Part_01_Fundamentals.md',
  'Part_02_ControlFlow_Arrays.md',
  'Part_03_Methods_OOP.md',
  'Part_04_Exceptions_Collections_IO.md',
  'Part_05_Modern_Java_Patterns.md',
  'Part_06_Interview_Problems.md',
  'Part_07_Mastery_Challenge.md',
  'Part_08_Weekly_Plans_Projects.md',
  'Part_09_Practice_Java.md',
  'Part_10_Recent_Interviews.md',
  'Part_11_Massive_Practice.md',
  'Part_12_WriteYourOwn_Practice_Tracker.md'
];

const fileTitles = {
  '00_Table_of_Contents.md': 'Table of Contents',
  'Part_01_Fundamentals.md': 'Milestone 1: Java Fundamentals',
  'Part_02_ControlFlow_Arrays.md': 'Milestone 2: Control Flow & Arrays',
  'Part_03_Methods_OOP.md': 'Milestone 3: Methods & OOP Foundations',
  'Part_04_Exceptions_Collections_IO.md': 'Milestone 4: Core Libraries',
  'Part_05_Modern_Java_Patterns.md': 'Milestone 5: Enterprise Features',
  'Part_06_Interview_Problems.md': 'Milestone 6: Interview Mastery',
  'Part_07_Mastery_Challenge.md': 'Java Mastery Challenge',
  'Part_08_Weekly_Plans_Projects.md': 'Weekly Plans & Projects',
  'Part_09_Practice_Java.md': 'Practice Java Center',
  'Part_10_Recent_Interviews.md': 'Recent Interviews',
  'Part_11_Massive_Practice.md': 'Milestone 7: Massive Practice Roadmap',
  'Part_12_WriteYourOwn_Practice_Tracker.md': 'Write-Your-Own Practice Tracker'
};

// State Variables
let currentFile = '00_Table_of_Contents.md';
let fileCache = {};
let searchIndex = [];
let isPreloaded = false;

// Active problem filter state
let activeFilters = {
  difficulty: 'all',
  topic: 'all',
  status: 'all',
  company: 'all'
};

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuToggle = document.getElementById('menu-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const themeToggle = document.getElementById('theme-toggle');
const breadcrumbs = document.getElementById('breadcrumbs');
const currentBreadcrumb = document.getElementById('current-breadcrumb');
const skeleton = document.getElementById('skeleton');
const contentEl = document.getElementById('content');
const contentNav = document.getElementById('content-nav');
const prevPartBtn = document.getElementById('prev-part');
const nextPartBtn = document.getElementById('next-part');
const prevPartTitle = document.getElementById('prev-part-title');
const nextPartTitle = document.getElementById('next-part-title');
const backToTopBtn = document.getElementById('back-to-top-btn');
const scrollProgressBar = document.getElementById('scroll-progress-bar');
const overallProgressBar = document.getElementById('overall-progress-bar');
const overallProgressText = document.getElementById('overall-progress-text');

// Filter Panel Elements
const filterPanel = document.getElementById('filter-panel');
const diffFilterButtons = document.querySelectorAll('#diff-filters .filter-btn');
const statusFilterButtons = document.querySelectorAll('#status-filters .filter-btn');
const topicFilterSelect = document.getElementById('topic-filter');
const companyFilterSelect = document.getElementById('company-filter');
const filterMatchCount = document.getElementById('filter-match-count');

// Search Elements
const quickSearchInput = document.getElementById('quick-search');
const searchClearBtn = document.getElementById('search-clear');
const searchModal = document.getElementById('search-modal');
const searchModalClose = document.getElementById('search-modal-close');
const modalSearchInput = document.getElementById('modal-search-input');
const searchIndexStatus = document.getElementById('search-index-status');
const searchResultsContainer = document.getElementById('search-results');

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  initTheme();
  initRouting();
  initSidebar();
  initSearch();
  initProgress();
  initScrollEvents();
  initPrint();
  initFilterWidgetEvents();
});

// 1. THEME MANAGEMENT
function initTheme() {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    const themeSetting = isDark ? 'dark' : 'light';
    localStorage.setItem('java-roadmap-theme', themeSetting);
    document.documentElement.setAttribute('data-theme-setting', themeSetting);
    if (contentEl.style.display !== 'none') {
      renderMermaid();
    }
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('java-roadmap-theme') === 'system') {
      document.documentElement.classList.toggle('dark', e.matches);
      if (contentEl.style.display !== 'none') {
        renderMermaid();
      }
    }
  });
}

// 2. ROUTING (Hash-based)
function initRouting() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash;
  if (!hash || hash === '#') {
    loadPage('00_Table_of_Contents.md');
    return;
  }
  const rawRoute = hash.substring(1);
  const routeParts = rawRoute.split('#');
  const filename = routeParts[0];
  const targetSection = routeParts[1] || null;
  
  if (files.includes(filename)) {
    loadPage(filename, targetSection);
  } else {
    loadPage('00_Table_of_Contents.md');
  }
}

// 3. MARKDOWN RENDERING PIPELINE WITH DYNAMIC PROBLEM CARDS
const renderer = new marked.Renderer();

// Same rules as GitHub's heading anchors, so one link works on GitHub and in this app
// (e.g. "## 📋 Table of Contents" -> "-table-of-contents")
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-');
}

// GitHub suffixes repeated headings with -1, -2, ...; reset per document via parseMarkdown()
let headingSlugCounts = {};

renderer.heading = function(text, level, raw) {
  const base = slugify(raw.replace(/<[^>]*>/g, ''));
  const count = headingSlugCounts[base] || 0;
  headingSlugCounts[base] = count + 1;
  const id = count === 0 ? base : `${base}-${count}`;
  return `<h${level} id="${id}">${text}</h${level}>`;
};

function parseMarkdown(md) {
  headingSlugCounts = {};
  return marked.parse(md);
}

renderer.code = function(code, language) {
  if (language === 'mermaid') {
    return `<div class="mermaid">${code}</div>`;
  }
  const validLang = !!(language && Prism.languages[language]);
  const highlighted = validLang ? Prism.highlight(code, Prism.languages[language], language) : escapeHtml(code);
  const langClass = validLang ? `language-${language}` : '';
  return `<pre class="${langClass}"><code class="${langClass}">${highlighted}</code></pre>`;
};

// External links (any absolute http(s) URL — always a different repo/site) open in a new tab;
// internal/relative links (in-app hash routes, anchors) stay in the same tab.
renderer.link = function(href, title, text) {
  const titleAttr = title ? ` title="${title}"` : '';
  const isExternal = /^https?:\/\//i.test(href || '');
  const targetAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${href}"${titleAttr}${targetAttrs}>${text}</a>`;
};

marked.use({ renderer });

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function processAlerts(html) {
  const alertTypes = {
    'NOTE': { class: 'alert-note', icon: 'info', label: 'Note' },
    'TIP': { class: 'alert-tip', icon: 'lightbulb', label: 'Tip' },
    'IMPORTANT': { class: 'alert-important', icon: 'exclamation-circle', label: 'Important' },
    'WARNING': { class: 'alert-warning', icon: 'exclamation-triangle', label: 'Warning' },
    'CAUTION': { class: 'alert-caution', icon: 'fire', label: 'Caution' }
  };
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const blockquotes = tempDiv.querySelectorAll('blockquote');
  
  blockquotes.forEach(bq => {
    const text = bq.innerHTML.trim();
    const match = text.match(/^<p>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(?:<br\s*\/?>)?\s*/i);
    
    if (match) {
      const type = match[1].toUpperCase();
      const alertInfo = alertTypes[type];
      let content = text.substring(match[0].length);
      if (!content.startsWith('<p>') && !content.startsWith('</p>')) {
        content = '<p>' + content;
      }
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert-box ${alertInfo.class}`;
      
      const titleDiv = document.createElement('div');
      titleDiv.className = 'alert-title';
      titleDiv.innerHTML = `${getIconSvg(alertInfo.icon)} <span>${alertInfo.label}</span>`;
      
      const bodyDiv = document.createElement('div');
      bodyDiv.className = 'alert-body';
      bodyDiv.innerHTML = content;
      
      alertDiv.appendChild(titleDiv);
      alertDiv.appendChild(bodyDiv);
      bq.parentNode.replaceChild(alertDiv, bq);
    }
  });
  return tempDiv.innerHTML;
}

function getIconSvg(iconName) {
  const svgs = {
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line></svg>`,
    'exclamation-circle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    'exclamation-triangle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`
  };
  return svgs[iconName] || '';
}

function wrapTables(html) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const tables = tempDiv.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
  return tempDiv.innerHTML;
}

// Client-side parser to group problems into interactive cards
// Looks for headings like: [ ] Problem 1.1: HelloWorld [Easy] [Topic: Syntax]
// Client-side parser to group problems into compact rows or cards
function renderProblemCards(html, forceCards = false) {
  const container = document.createElement('div');
  container.innerHTML = html;
  
  const children = Array.from(container.children);
  const solvedProblems = getSolvedProblems();
  const starredProblems = getStarredProblems();
  
  const problemRegex = /^\[\s*\]\s*Problem\s+([\w\.]+):\s*(.*?)\s*\[(Easy|Medium|Hard)\]\s*\[Topic:\s*(.*?)\](?:\s*\[Company:\s*(.*?)\])?$/i;

  if (forceCards) {
    // OLD CARD LAYOUT FOR PRINTING
    let currentCard = null;
    let cardBody = null;
    
    children.forEach(el => {
      const isHeading = el.tagName === 'H3';
      const text = isHeading ? el.textContent.trim() : '';
      const match = isHeading ? text.match(problemRegex) : null;
      
      if (match) {
        const pId = match[1];
        const pName = match[2];
        const pDifficulty = match[3].toLowerCase();
        const pTopic = match[4];
        const pCompany = match[5] || null;
        const isSolved = solvedProblems.includes(pId);
        
        if (currentCard) {
          currentCard.appendChild(cardBody);
          currentCard = null;
        }
        
        currentCard = document.createElement('div');
        currentCard.className = `problem-card ${isSolved ? 'solved' : ''}`;
        currentCard.setAttribute('data-id', pId);
        currentCard.setAttribute('data-difficulty', pDifficulty);
        currentCard.setAttribute('data-topic', pTopic.toLowerCase());
        currentCard.setAttribute('data-company', pCompany ? pCompany.toLowerCase() : '');
        
        const header = document.createElement('div');
        header.className = 'problem-card-header';
        header.innerHTML = `
          <div class="problem-header-left">
            <input type="checkbox" id="chk-${pId}" class="problem-checkbox" data-id="${pId}" ${isSolved ? 'checked' : ''}>
            <h3 class="problem-title" id="${slugify(text)}">Problem ${pId}: ${pName}</h3>
          </div>
          <div class="problem-header-right">
            <span class="badge badge-${pDifficulty}">${pDifficulty}</span>
            <span class="badge badge-topic">${pTopic}</span>
            ${pCompany ? `<span class="badge badge-company">${pCompany}</span>` : ''}
          </div>
        `;
        currentCard.appendChild(header);
        
        cardBody = document.createElement('div');
        cardBody.className = 'problem-card-body';
        
        el.parentNode.replaceChild(currentCard, el);
      } else {
        if (currentCard) {
          el.parentNode.removeChild(el);
          cardBody.appendChild(el);
        }
      }
    });
    
    if (currentCard) {
      currentCard.appendChild(cardBody);
    }
    
    return container.innerHTML;
  }

  // NEW COMPACT ROW LAYOUT FOR INTERACTIVE DASHBOARD
  let currentGroupContainer = null;
  let inBodyCapture = false;
  let groupCounter = 0;
 
  children.forEach(el => {
    const isHeading = el.tagName === 'H3';
    const text = isHeading ? el.textContent.trim() : '';
    const match = isHeading ? text.match(problemRegex) : null;
 
    if (match) {
      const pId = match[1];
      const pName = match[2];
      const pDifficulty = match[3].toLowerCase();
      const pTopic = match[4];
      const pCompany = match[5] || null;
      const isSolved = solvedProblems.includes(pId);
      const isStarred = starredProblems.includes(pId);
      
      inBodyCapture = true;
 
      // Determine container and counter BEFORE rendering HTML
      const prev = el.previousElementSibling;
      const isNewContainer = !(prev && prev.classList.contains('problems-list-container'));
      if (isNewContainer) {
        groupCounter = 1;
      } else {
        groupCounter++;
      }
 
      // Create compact row element
      const row = document.createElement('div');
      row.id = `problem-row-${pId}`;
      row.className = `problem-row ${isSolved ? 'solved' : ''}`;
      row.setAttribute('data-id', pId);
      row.setAttribute('data-difficulty', pDifficulty);
      row.setAttribute('data-topic', pTopic.toLowerCase());
      row.setAttribute('data-company', pCompany ? pCompany.toLowerCase() : '');
   
      const isPracticeOnly = pId.startsWith('11.');
      const titleHTML = isPracticeOnly 
        ? `<span class="problem-title-text" style="font-weight: 500;">${groupCounter}. ${pName}</span>`
        : `<a href="problem.html?id=${pId}" class="problem-link-anchor">
            ${groupCounter}. ${pName}
            <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>`;

      const solutionHTML = isPracticeOnly 
        ? (pCompany ? `<span class="badge badge-company">${pCompany}</span>` : '')
        : `<a href="problem.html?id=${pId}#solution" class="solution-link-anchor" title="View Solution">
            <svg class="solution-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </a>`;

      // Keep the heading's anchor so table-of-contents links still land on this row
      row.innerHTML = `
        <div class="problem-row-status">
          <span id="${el.id}"></span>
          <input type="checkbox" id="chk-${pId}" class="problem-checkbox" data-id="${pId}" ${isSolved ? 'checked' : ''}>
        </div>
        <div class="problem-row-star">
          <button class="star-btn ${isStarred ? 'active' : ''}" data-id="${pId}" aria-label="Favorite problem">★</button>
        </div>
        <div class="problem-row-title">
          ${titleHTML}
        </div>
        <div class="problem-row-difficulty">
          <span class="badge badge-${pDifficulty}">${pDifficulty}</span>
        </div>
        <div class="problem-row-topic-company">
          <span class="badge badge-topic">${pTopic}</span>
          ${(!isPracticeOnly && pCompany) ? `<span class="badge badge-company">${pCompany}</span>` : ''}
        </div>
        <div class="problem-row-solution">
          ${solutionHTML}
        </div>
      `;
 
      if (!isNewContainer) {
        currentGroupContainer = prev;
        currentGroupContainer.appendChild(row);
        el.parentNode.removeChild(el); // Remove original heading
      } else {
        // Create new container
        const isPractice = currentFile === 'Part_11_Massive_Practice.md';
        currentGroupContainer = document.createElement('div');
        currentGroupContainer.className = `problems-list-container${isPractice ? ' has-company-col' : ''}`;
        
        // Add header row
        const headerRow = document.createElement('div');
        headerRow.className = 'problem-header-row';
        headerRow.innerHTML = `
          <div class="problem-header-col status-col" title="Solved status"></div>
          <div class="problem-header-col star-col" title="Favorite star"></div>
          <div class="problem-header-col title-col">Title</div>
          <div class="problem-header-col diff-col">Difficulty</div>
          <div class="problem-header-col tags-col">Tags</div>
          ${isPractice 
            ? `<div class="problem-header-col solution-col company-header-col">Company</div>` 
            : `<div class="problem-header-col solution-col" title="View solution / editor"></div>`}
        `;
        currentGroupContainer.appendChild(headerRow);
        
        currentGroupContainer.appendChild(row);
        el.parentNode.replaceChild(currentGroupContainer, el); // Replace original heading with container
      }
    } else {
      // If we are scanning a problem body, we strip the elements out (hide them from the list view)
      if (inBodyCapture) {
        if (el.tagName === 'H2' || el.tagName === 'H1' || el.tagName === 'HR') {
          inBodyCapture = false; // Stop body capture when hitting a major boundary
        } else {
          el.parentNode.removeChild(el); // Strip body elements
        }
      }
    }
  });

  return container.innerHTML;
}

async function renderMermaid() {
  const mermaidDivs = document.querySelectorAll('#content .mermaid');
  if (mermaidDivs.length === 0) return;
  try {
    const isDark = document.documentElement.classList.contains('dark');
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'default',
      securityLevel: 'loose',
      flowchart: { useMaxWidth: true, htmlLabels: true }
    });
    await mermaid.run({
      querySelector: '#content .mermaid'
    });
  } catch (error) {
    console.error('Failed to render Mermaid:', error);
  }
}

// 4. MAIN PAGE LOADING ACTION
async function loadPage(filename, targetSection = null) {
  currentFile = filename;
  
  // Show skeleton
  skeleton.style.display = 'flex';
  contentEl.style.display = 'none';
  contentNav.style.display = 'none';
  filterPanel.style.display = 'none';
  
  // Update active sidebar nav indicators
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkFile = link.getAttribute('data-file');
    link.classList.toggle('active', linkFile === filename);
  });
  
  // Breadcrumb text update
  if (filename === '00_Table_of_Contents.md') {
    currentBreadcrumb.textContent = 'Table of Contents';
  } else {
    currentBreadcrumb.textContent = fileTitles[filename] || 'Java Practice Roadmap';
  }
  
  let markdownText = '';
  
  if (fileCache[filename]) {
    markdownText = fileCache[filename];
  } else {
    try {
      const response = await fetch(filename + '?t=' + Date.now());
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      markdownText = await response.text();
      fileCache[filename] = markdownText;
    } catch (error) {
      console.error(`Error loading page ${filename}:`, error);
      contentEl.innerHTML = `<div class="error-state">
        <h2>⚠️ Failed to load file</h2>
        <p>Could not fetch the document <code>${filename}</code>. Verify the file exists.</p>
        <button onclick="loadPage('${filename}')" class="btn">Retry</button>
      </div>`;
      skeleton.style.display = 'none';
      contentEl.style.display = 'block';
      return;
    }
  }

  let html = parseMarkdown(markdownText);
  html = processAlerts(html);
  html = wrapTables(html);
  html = renderProblemCards(html);
  
  contentEl.innerHTML = html;
  
  // Bind click/change handlers to dynamic problem checkboxes
  bindProblemCheckboxes();
  bindStarButtons();
  
  // Setup problem filters if cards are present on page
  setupFiltersForPage();
  
  skeleton.style.display = 'none';
  contentEl.style.display = 'block';
  contentNav.style.display = 'flex';
  
  setupBottomNav(filename);
  window.scrollTo({ top: 0 });
  
  if (targetSection) {
    setTimeout(() => {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  }
  
  setTimeout(async () => {
    await renderMermaid();
    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, 150);
  
  if (!isPreloaded) {
    lazyPreloadAndIndex();
  }
}

// Router intercept click handler for internal/external file links
document.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (link) {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http')) {
      const cleanHref = href.startsWith('#') ? href.substring(1) : href;
      const mdMatch = cleanHref.match(/^([^#]+\.md)(#.*)?$/);
      
      if (mdMatch) {
        e.preventDefault();
        const file = mdMatch[1];
        const headingHash = mdMatch[2] || '';
        const targetHash = `#${file}${headingHash}`;
        
        if (window.location.hash === targetHash) {
          loadPage(file, headingHash ? headingHash.substring(1) : null);
        } else {
          window.location.hash = targetHash;
        }
        
        if (sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
          sidebarOverlay.style.display = 'none';
        }
      } else if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, null, `#${currentFile}#${targetId}`);
        }
      }
    }
  }
});

function setupBottomNav(filename) {
  const currentIndex = files.indexOf(filename);
  
  if (currentIndex > 0) {
    const prevFile = files[currentIndex - 1];
    prevPartBtn.style.visibility = 'visible';
    prevPartBtn.href = `#${prevFile}`;
    prevPartTitle.textContent = fileTitles[prevFile];
  } else {
    prevPartBtn.style.visibility = 'hidden';
  }
  
  if (currentIndex < files.length - 1) {
    const nextFile = files[currentIndex + 1];
    nextPartBtn.style.visibility = 'visible';
    nextPartBtn.href = `#${nextFile}`;
    nextPartTitle.textContent = fileTitles[nextFile];
  } else {
    nextPartBtn.style.visibility = 'hidden';
  }
}

// 5. SIDEBAR drawer COLLAPSE (Desktop & Mobile)
function initSidebar() {
  menuToggle.addEventListener('click', () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('java-roadmap-sidebar-collapsed', sidebar.classList.contains('collapsed'));
    } else {
      sidebar.classList.add('active');
      sidebarOverlay.style.display = 'block';
    }
  });

  const closeSidebar = () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.add('collapsed');
      localStorage.setItem('java-roadmap-sidebar-collapsed', 'true');
    } else {
      sidebar.classList.remove('active');
      sidebarOverlay.style.display = 'none';
    }
  };

  sidebarClose.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);
  
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  });

  if (window.innerWidth > 1024) {
    const isCollapsed = localStorage.getItem('java-roadmap-sidebar-collapsed') === 'true';
    sidebar.classList.toggle('collapsed', isCollapsed);
  }
}

// 6. SCROLL PROGRESS & BACK TO TOP BUTTON
function initScrollEvents() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
    
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const percentage = (scrollTop / scrollHeight) * 100;
      scrollProgressBar.style.width = `${percentage}%`;
    } else {
      scrollProgressBar.style.width = '0%';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 7. STUDY READING / PRACTICE PROGRESS
function initProgress() {
  updateOverallProgress();
}

function getSolvedProblems() {
  const solved = localStorage.getItem('java-roadmap-solved-problems');
  return solved ? JSON.parse(solved) : [];
}

function updateOverallProgress() {
  const solvedProblems = getSolvedProblems();
  const totalProblemsCount = 1080; // Total bootcamp problem database size (730 prior total + 350 from the merged Write-Your-Own Practice Tracker, Part 12)
  
  const solvedCount = solvedProblems.length;
  const percent = Math.min(100, Math.round((solvedCount / totalProblemsCount) * 100));
  
  overallProgressBar.style.width = `${percent}%`;
  overallProgressText.textContent = `${solvedCount} / ${totalProblemsCount} Solved (${percent}%)`;
}

function bindProblemCheckboxes() {
  const checkboxes = contentEl.querySelectorAll('.problem-checkbox');
  checkboxes.forEach(chk => {
    chk.addEventListener('change', (e) => {
      const pId = chk.getAttribute('data-id');
      const card = chk.closest('.problem-row, .problem-card');
      let solvedProblems = getSolvedProblems();
      
      if (chk.checked) {
        if (!solvedProblems.includes(pId)) {
          solvedProblems.push(pId);
        }
        if (card) card.classList.add('solved');
      } else {
        solvedProblems = solvedProblems.filter(id => id !== pId);
        if (card) card.classList.remove('solved');
      }
      
      localStorage.setItem('java-roadmap-solved-problems', JSON.stringify(solvedProblems));
      updateOverallProgress();
      applyProblemFilters(); // Dynamically re-evaluate filter layout if items change solved status
    });
  });
}

function getStarredProblems() {
  const starred = localStorage.getItem('java-roadmap-starred-problems');
  return starred ? JSON.parse(starred) : [];
}

function bindStarButtons() {
  const stars = contentEl.querySelectorAll('.star-btn');
  stars.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.getAttribute('data-id');
      let starred = getStarredProblems();
      
      if (btn.classList.contains('active')) {
        starred = starred.filter(id => id !== pId);
        btn.classList.remove('active');
      } else {
        if (!starred.includes(pId)) {
          starred.push(pId);
        }
        btn.classList.add('active');
      }
      
      localStorage.setItem('java-roadmap-starred-problems', JSON.stringify(starred));
    });
  });
}

// 8. INTERACTIVE FILTER PANEL LOGIC
function initFilterWidgetEvents() {
  // Difficulty buttons
  diffFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      diffFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters.difficulty = btn.getAttribute('data-diff');
      applyProblemFilters();
    });
  });

  // Status buttons
  statusFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      statusFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters.status = btn.getAttribute('data-status');
      applyProblemFilters();
    });
  });

  // Topic select dropdown
  topicFilterSelect.addEventListener('change', () => {
    activeFilters.topic = topicFilterSelect.value;
    applyProblemFilters();
  });

  // Company select dropdown
  companyFilterSelect.addEventListener('change', () => {
    activeFilters.company = companyFilterSelect.value;
    applyProblemFilters();
  });
}

function setupFiltersForPage() {
  const cards = contentEl.querySelectorAll('.problem-row, .problem-card');
  
  if (cards.length === 0) {
    filterPanel.style.display = 'none';
    return;
  }
  
  // Show filters panel
  filterPanel.style.display = 'flex';
  
  // Reset active filter button states in DOM
  diffFilterButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-diff') === 'all'));
  statusFilterButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-status') === 'all'));
  
  activeFilters = { difficulty: 'all', topic: 'all', status: 'all', company: 'all' };
  
  // Repopulate topic dropdown dynamically based on topics present in this part
  const topics = new Set();
  const companies = new Set();
  cards.forEach(card => {
    const topic = card.getAttribute('data-topic');
    if (topic) topics.add(topic);
    const company = card.getAttribute('data-company');
    if (company) companies.add(company);
  });
  
  // Clear select and keep "All Topics"
  topicFilterSelect.innerHTML = '<option value="all">All Topics</option>';
  
  // Sort topics alphabetically and append options
  Array.from(topics).sort().forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    topicFilterSelect.appendChild(opt);
  });

  // Handle Company Filter Dropdown Visibility and Options
  const companyFilterGroup = document.getElementById('company-filter-group');
  if (companies.size > 0) {
    companyFilterGroup.style.display = 'flex';
    companyFilterSelect.innerHTML = '<option value="all">All Companies</option>';
    Array.from(companies).sort().forEach(company => {
      const opt = document.createElement('option');
      opt.value = company;
      opt.textContent = company.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      companyFilterSelect.appendChild(opt);
    });
  } else {
    companyFilterGroup.style.display = 'none';
    companyFilterSelect.innerHTML = '<option value="all">All Companies</option>';
  }
  
  applyProblemFilters();
}

function applyProblemFilters() {
  const cards = contentEl.querySelectorAll('.problem-row, .problem-card');
  if (cards.length === 0) return;
  
  let visibleCount = 0;
  
  cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const difficulty = card.getAttribute('data-difficulty');
    const topic = card.getAttribute('data-topic');
    const company = card.getAttribute('data-company');
    const isSolved = card.classList.contains('solved');
    
    const diffMatch = activeFilters.difficulty === 'all' || difficulty === activeFilters.difficulty;
    const topicMatch = activeFilters.topic === 'all' || topic === activeFilters.topic;
    const companyMatch = activeFilters.company === 'all' || company === activeFilters.company;
    
    let statusMatch = true;
    if (activeFilters.status === 'solved') statusMatch = isSolved;
    if (activeFilters.status === 'unsolved') statusMatch = !isSolved;
    
    if (diffMatch && topicMatch && statusMatch && companyMatch) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  
  filterMatchCount.textContent = `Matching: ${visibleCount} / ${cards.length}`;
}

// 9. BACKGROUND PRELOADING & INDEXING FOR SEARCH
async function lazyPreloadAndIndex() {
  isPreloaded = true;
  setTimeout(async () => {
    for (const file of files) {
      if (!fileCache[file]) {
        try {
          const res = await fetch(file + '?t=' + Date.now());
          if (res.ok) {
            const text = await res.text();
            fileCache[file] = text;
            indexMarkdownFile(file, text);
          }
        } catch (e) {
          console.warn(`Preloading failed for search indexing on ${file}:`, e);
        }
      } else {
        indexMarkdownFile(file, fileCache[file]);
      }
    }
    searchIndexStatus.style.display = 'none';
  }, 1000);
}

// Break markdown down into searchable heading-based sections
function indexMarkdownFile(filename, markdown) {
  const lines = markdown.split('\n');
  let currentHeading = 'Introduction';
  let currentSlug = '';
  let currentTextLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      if (currentTextLines.length > 0) {
        searchIndex.push({
          file: filename,
          partTitle: fileTitles[filename] || filename,
          heading: currentHeading,
          slug: currentSlug,
          text: currentTextLines.join(' ')
        });
        currentTextLines = [];
      }
      currentHeading = headingMatch[2];
      currentSlug = slugify(currentHeading);
    } else if (line.length > 0 && !line.startsWith('!') && !line.startsWith('[') && !line.startsWith('|')) {
      // Filter out pure markdown formatting artifacts to make search text clean
      currentTextLines.push(line);
    }
  }
  
  if (currentTextLines.length > 0) {
    searchIndex.push({
      file: filename,
      partTitle: fileTitles[filename] || filename,
      heading: currentHeading,
      slug: currentSlug,
      text: currentTextLines.join(' ')
    });
  }
}

// 10. SEARCH WIDGET INTERACTION
function initSearch() {
  quickSearchInput.addEventListener('focus', () => openSearchModal());
  quickSearchInput.addEventListener('click', () => openSearchModal());
  searchModalClose.addEventListener('click', closeSearchModal);
  
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearchModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== quickSearchInput && document.activeElement !== modalSearchInput) {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'Escape') {
      closeSearchModal();
    }
  });

  modalSearchInput.addEventListener('input', () => {
    performSearch(modalSearchInput.value);
  });
}

function openSearchModal() {
  searchModal.classList.add('active');
  modalSearchInput.value = quickSearchInput.value;
  modalSearchInput.focus();
  performSearch(modalSearchInput.value);
  searchIndexStatus.style.display = searchIndex.length === 0 ? 'flex' : 'none';
}

function closeSearchModal() {
  searchModal.classList.remove('active');
  quickSearchInput.value = '';
  modalSearchInput.value = '';
}

function escapeRegex(string) {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}

function performSearch(query) {
  query = query.trim();
  
  if (query.length < 2) {
    searchResultsContainer.innerHTML = `<div class="search-empty-state">
      <p>Type keywords to search the entire Java roadmap</p>
      <div class="search-tips">
        <strong>Tips:</strong>
        <ul>
          <li>Press <kbd>Enter</kbd> to search</li>
          <li>Search for specific concepts (e.g. <code>Streams</code>, <code>Multithreading</code>, <code>Polymorphism</code>)</li>
          <li>Search for coding problems by difficulty (e.g. <code>Hard</code>, <code>Easy</code>) or topic name</li>
        </ul>
      </div>
    </div>`;
    return;
  }

  const results = [];
  const searchRegex = new RegExp(escapeRegex(query), 'gi');

  searchIndex.forEach(section => {
    let score = 0;
    const headingMatchCount = (section.heading.match(searchRegex) || []).length;
    const textMatchCount = (section.text.match(searchRegex) || []).length;

    if (headingMatchCount > 0) score += headingMatchCount * 10;
    if (textMatchCount > 0) score += textMatchCount * 2;

    if (score > 0) {
      results.push({
        section,
        score,
        matchIndex: section.text.toLowerCase().indexOf(query.toLowerCase())
      });
    }
  });

  results.sort((a, b) => b.score - a.score);

  if (results.length === 0) {
    searchResultsContainer.innerHTML = `<div class="search-empty-state">
      <p>No results found for "${escapeHtml(query)}"</p>
      <span style="font-size: 0.875rem;">Try refining your query terms or searching for Java API names.</span>
    </div>`;
    return;
  }

  const listEl = document.createElement('div');
  listEl.className = 'search-results-list';
  
  results.slice(0, 25).forEach(res => {
    const s = res.section;
    const item = document.createElement('div');
    item.className = 'search-result-item';
    
    let snippet = '';
    const matchPos = res.matchIndex;
    
    if (matchPos !== -1) {
      const start = Math.max(0, matchPos - 60);
      const end = Math.min(s.text.length, matchPos + query.length + 80);
      snippet = s.text.slice(start, end);
      if (start > 0) snippet = '...' + snippet;
      if (end < s.text.length) snippet = snippet + '...';
    } else {
      snippet = s.text.slice(0, 140) + '...';
    }
    
    const highlightedHeading = s.heading.replace(searchRegex, (m) => `<mark>${escapeHtml(m)}</mark>`);
    const highlightedSnippet = escapeHtml(snippet).replace(searchRegex, (m) => `<mark>${m}</mark>`);
    
    item.innerHTML = `
      <div class="result-location">${escapeHtml(s.partTitle)}</div>
      <div class="result-heading">${highlightedHeading}</div>
      <div class="result-text">${highlightedSnippet}</div>
    `;
    
    item.addEventListener('click', () => {
      closeSearchModal();
      window.location.hash = `#${s.file}${s.slug ? '#' + s.slug : ''}`;
    });
    listEl.appendChild(item);
  });
  
  searchResultsContainer.innerHTML = '';
  searchResultsContainer.appendChild(listEl);
}

// 11. PDF PRINT COMPILING ENGINE (Multi-file sequence downloader)
function initPrint() {
  const printBtn = document.getElementById('print-full-guide');
  const overlay = document.getElementById('print-loading-overlay');
  const progressBar = document.getElementById('print-compilation-progress-bar');
  const progressText = document.getElementById('print-compilation-progress-text');
  const printContainer = document.getElementById('print-container');
  
  printBtn.addEventListener('click', async () => {
    overlay.classList.add('active');
    progressBar.style.width = '0%';
    progressText.textContent = 'Pre-fetching files...';
    printContainer.innerHTML = '';
    
    try {
      const solvedProblems = getSolvedProblems();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        progressText.textContent = `Downloading ${fileTitles[file] || file}...`;
        const percentage = Math.round(((i + 0.2) / files.length) * 100);
        progressBar.style.width = `${percentage}%`;
        
        let md = '';
        if (fileCache[file]) {
          md = fileCache[file];
        } else {
          const res = await fetch(file);
          if (res.ok) {
            md = await res.text();
            fileCache[file] = md;
          } else {
            throw new Error(`Failed to download ${file}`);
          }
        }
        
        progressText.textContent = `Compiling and formatting ${fileTitles[file]}...`;
        
        let htmlContent = parseMarkdown(md);
        htmlContent = processAlerts(htmlContent);
        htmlContent = wrapTables(htmlContent);
        htmlContent = renderProblemCards(htmlContent, true);
        
        const pageWrapper = document.createElement('div');
        pageWrapper.className = 'print-page';
        pageWrapper.innerHTML = `
          <div class="markdown-body">
            ${htmlContent}
          </div>
        `;
        
        // Sync checkboxes in print pages to reflect solved states
        pageWrapper.querySelectorAll('.problem-checkbox').forEach(chk => {
          const pId = chk.getAttribute('data-id');
          if (solvedProblems.includes(pId)) {
            chk.checked = true;
          }
        });
        
        printContainer.appendChild(pageWrapper);
        progressBar.style.width = `${Math.round(((i + 1) / files.length) * 100)}%`;
      }
      
      progressText.textContent = 'Done! Launching print view...';
      setTimeout(() => {
        overlay.classList.remove('active');
        window.print();
      }, 500);
      
    } catch (err) {
      console.error(err);
      alert('PDF compilation failed. See developer console for errors.');
      overlay.classList.remove('active');
    }
  });
}
