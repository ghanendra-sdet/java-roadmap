# Milestone 4: Core Libraries & Files

This milestone covers exception handling workflows, the Java Collections Framework (Lists, Sets, Maps, Queues), and standard File input/output operations.

---

## 1. Exception Handling

📌 **Core Concept**: Exceptions are events that disrupt the normal flow of instructions. Java has checked exceptions (inheriting from `Exception`, checked at compile-time) and unchecked/runtime exceptions (inheriting from `RuntimeException`, checked at runtime). A `finally` block always executes whether an exception occurs or not.

### [ ] Problem 4.1: Arithmetic Divide [Easy] [Topic: Exceptions]
* **Learning Objective**: Wrap arithmetic execution steps inside standard try-catch blocks.
* **Problem Statement**: Write a program that divides two numbers, catching division by zero arithmetic exceptions.
* **Input**: `a = 10`, `b = 0`
* **Output**:
  ```text
  Exception caught: / by zero
  ```
* **Hint**: Use `try { ... } catch (ArithmeticException e) { ... }`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int result = a / b;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.2: Number Format Check [Easy] [Topic: Exceptions]
* **Learning Objective**: Handle parsing failures when converting strings to numbers.
* **Problem Statement**: Try to parse a non-numeric string as an integer and handle the parsing exception.
* **Input**: `str = "abc"`
* **Output**:
  ```text
  Error: Invalid number format.
  ```
* **Hint**: Catch the `NumberFormatException` thrown by `Integer.parseInt(str)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "abc";
        try {
            int val = Integer.parseInt(str);
            System.out.println(val);
        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid number format.");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.3: Try Catch Finally Flow [Easy] [Topic: Exceptions]
* **Learning Objective**: Use the `finally` block to guarantee code execution.
* **Problem Statement**: Demonstrate how the `finally` block runs even if an exception occurs.
* **Input**: Array access out of bounds
* **Output**:
  ```text
  Caught: Index out of bounds!
  Cleanup executed.
  ```
* **Hint**: Catch `ArrayIndexOutOfBoundsException` and append a `finally` block.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2};
        try {
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught: Index out of bounds!");
        } finally {
            System.out.println("Cleanup executed.");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.4: Throws Declaration [Medium] [Topic: Exceptions]
* **Learning Objective**: Declare checked exceptions using the `throws` keyword.
* **Problem Statement**: Create a method `checkAge(int age)` that throws a checked exception if age is under 18.
* **Input**: `checkAge(15)`
* **Output**:
  ```text
  Caught checked exception: Underage user!
  ```
* **Hint**: Declare `throws Exception` in the method signature, and use `throw new Exception("Underage user!");`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (Exception e) {
            System.out.println("Caught checked exception: " + e.getMessage());
        }
    }
    
    public static void checkAge(int age) throws Exception {
        if (age < 18) {
            throw new Exception("Underage user!");
        }
        System.out.println("Access granted.");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.5: Multiple Catches [Medium] [Topic: Exceptions]
* **Learning Objective**: Handle multiple types of exceptions thrown from a single block of code.
* **Problem Statement**: Write a block of code that can throw either an `ArithmeticException` or a `NullPointerException`, catching each in a separate block.
* **Input**: Direct null reference call
* **Output**:
  ```text
  Caught: Null pointer referenced!
  ```
* **Hint**: Put catch blocks in order from more specific subtypes to general base types.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = null;
        try {
            int length = str.length();
            int division = 10 / 0;
            System.out.println("Length: " + length + ", Div: " + division);
        } catch (ArithmeticException e) {
            System.out.println("Caught: Arithmetic error!");
        } catch (NullPointerException e) {
            System.out.println("Caught: Null pointer referenced!");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.6: Multi Catch Syntax [Medium] [Topic: Exceptions]
* **Learning Objective**: Catch multiple exceptions in a single catch block using the pipe (`|`) operator.
* **Problem Statement**: Simplify your code by catching both `NumberFormatException` and `NullPointerException` in a single catch statement.
* **Input**: Invalid parse string
* **Output**:
  ```text
  Handled parse or null exception.
  ```
* **Hint**: Use the syntax `catch (NumberFormatException | NullPointerException e)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        try {
            String val = "abc";
            int num = Integer.parseInt(val);
            System.out.println(num);
        } catch (NumberFormatException | NullPointerException e) {
            System.out.println("Handled parse or null exception.");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.7: Custom Checked Exception [Hard] [Topic: Exceptions]
* **Learning Objective**: Create a custom checked exception class.
* **Problem Statement**: Implement a custom checked exception `InsufficientBalanceException` and throw it during a withdraw transaction.
* **Input**: Withdraw $150 from account holding $100
* **Output**:
  ```text
  Caught: InsufficientBalanceException: Balance is short by $50.0
  ```
* **Hint**: Create a class `InsufficientBalanceException extends Exception` with a constructor that passes a custom message to `super()`.
<details>
<summary>View Solution</summary>

```java
class InsufficientBalanceException extends Exception {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

class Account {
    private double balance = 100.0;
    
    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            double shortAmt = amount - balance;
            throw new InsufficientBalanceException("Balance is short by $" + shortAmt);
        }
        balance -= amount;
    }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account();
        try {
            a.withdraw(150.0);
        } catch (InsufficientBalanceException e) {
            System.out.println("Caught: " + e);
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.8: Try With Resources [Hard] [Topic: Exceptions]
* **Learning Objective**: Automatically close resources using `AutoCloseable` declarations.
* **Problem Statement**: Write a program that opens a file stream, showing how Java's `try-with-resources` statement automatically closes it.
* **Input**: Any file name
* **Output**: Connection or resources closed automatically at the end of the block.
* **Hint**: The resource declaration must occur inside parentheses after the `try` keyword. The resource class must implement the `AutoCloseable` interface.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        // try-with-resources: automatically calls close() on readers when exiting the block
        try (BufferedReader br = new BufferedReader(new FileReader("nonexistent.txt"))) {
            System.out.println(br.readLine());
        } catch (IOException e) {
            System.out.println("File IO error handled: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.9: Chained Exceptions [Hard] [Topic: Exceptions]
* **Learning Objective**: Wrap exceptions using inner cause references.
* **Problem Statement**: Catch a low-level `NullPointerException` and wrap it inside a high-level `RuntimeException` using the `initCause()` method or by passing it to the constructor.
* **Input**: Trigger null pointer exception
* **Output**:
  ```text
  High-level exception: Failed to process user
  Caused by: java.lang.NullPointerException
  ```
* **Hint**: Pass the caught exception as the second argument to the new exception's constructor: `new RuntimeException("message", caughtException)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        try {
            processUser();
        } catch (RuntimeException e) {
            System.out.println("High-level exception: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
    }
    
    public static void processUser() {
        try {
            String val = null;
            val.trim();
        } catch (NullPointerException e) {
            // Chaining exception: nesting the original exception
            throw new RuntimeException("Failed to process user", e);
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.10: Uncaught Thread Exceptions [Hard] [Topic: Exceptions]
* **Learning Objective**: Handle uncaught runtime exceptions globally.
* **Problem Statement**: Register a global default thread exception handler that intercepts uncaught exceptions.
* **Input**: Throw an unhandled RuntimeException
* **Output**: Intercepts error stack traces, logging them to custom output.
* **Hint**: Use `Thread.setDefaultUncaughtExceptionHandler()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        // Intercept uncaught thread exception events
        Thread.setDefaultUncaughtExceptionHandler((thread, throwable) -> {
            System.out.println("Global Interceptor: " + throwable.getMessage() + " on " + thread.getName());
        });
        
        throw new RuntimeException("Simulated crash!");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 2. Collections Framework

📌 **Core Concept**: The Collections framework defines interfaces and implementations to store groups of objects. A `List` is an ordered sequence (ArrayList is index-based, LinkedList is node-linked). A `Set` prevents duplicates (HashSet uses hash tables, TreeSet is sorted). A `Map` stores key-value pairs (HashMap is fast, TreeMap is sorted by keys).

### [ ] Problem 4.11: List Operations [Easy] [Topic: Collections]
* **Learning Objective**: Add, read, and remove elements in a dynamic list.
* **Problem Statement**: Create an `ArrayList` of strings. Add three items, remove the second, and print the remaining items.
* **Input**: Add `"Java"`, `"Python"`, `"C++"`. Remove index 1.
* **Output**:
  ```text
  [Java, C++]
  ```
* **Hint**: Use `.add()`, `.remove(index)`, and print the list directly.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");
        
        list.remove(1); // Removes "Python"
        System.out.println(list);
    }
}
```
* **Complexity**: Time: $O(N)$ (ArrayList removals require shifting elements) | Space: $O(N)$
</details>

### [ ] Problem 4.12: Set De-duplicator [Easy] [Topic: Collections]
* **Learning Objective**: Use a set to automatically filter out duplicates.
* **Problem Statement**: Parse a list of integers that contains duplicate values and use a Set to find the unique numbers.
* **Input**: `{1, 2, 2, 3, 1, 4}`
* **Output**:
  ```text
  [1, 2, 3, 4]
  ```
* **Hint**: Instantiating a `HashSet` and adding all elements will automatically remove duplicates.
<details>
<summary>View Solution</summary>

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 1, 4};
        Set<Integer> unique = new HashSet<>();
        
        for (int num : nums) {
            unique.add(num);
        }
        System.out.println(unique);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 4.13: HashMap Basics [Easy] [Topic: Collections]
* **Learning Objective**: Work with basic key-value map associations.
* **Problem Statement**: Store employee name-salary pairs in a Map and look up a specific employee's salary.
* **Input**: Map: `{Alice=5000, Bob=6000}`, lookup: `"Alice"`
* **Output**:
  ```text
  Alice Salary: 5000
  ```
* **Hint**: Use `.put(key, value)` to add entries and `.get(key)` to look them up.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> salaries = new HashMap<>();
        salaries.put("Alice", 5000);
        salaries.put("Bob", 6000);
        
        System.out.println("Alice Salary: " + salaries.get("Alice"));
    }
}
```
* **Complexity**: Time: $O(1)$ (average hash table lookup) | Space: $O(N)$
</details>

### [ ] Problem 4.14: List Iterators [Medium] [Topic: Collections]
* **Learning Objective**: Modify a collection during traversal using an `Iterator`.
* **Problem Statement**: Remove all numbers less than 10 from an ArrayList of integers.
* **Input**: `{5, 12, 8, 15, 3}`
* **Output**:
  ```text
  [12, 15]
  ```
* **Hint**: Using a standard for-each loop to modify a collection will throw a `ConcurrentModificationException`. Use `list.iterator()` instead, calling `iterator.remove()`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(5, 12, 8, 15, 3));
        Iterator<Integer> it = list.iterator();
        
        while (it.hasNext()) {
            if (it.next() < 10) {
                it.remove(); // Safely remove elements during iteration
            }
        }
        System.out.println(list);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 4.15: Sort List Custom [Medium] [Topic: Collections]
* **Learning Objective**: Sort elements using a custom `Comparator`.
* **Problem Statement**: Sort a list of strings in descending order of their lengths.
* **Input**: `{"Apple", "Banana", "Kiwi", "Pear"}`
* **Output**:
  ```text
  [Banana, Apple, Pear, Kiwi]
  ```
* **Hint**: Call `list.sort((s1, s2) -> Integer.compare(s2.length(), s1.length()))`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("Apple", "Banana", "Kiwi", "Pear"));
        
        // Custom comparator comparing lengths in reverse
        list.sort((s1, s2) -> Integer.compare(s2.length(), s1.length()));
        System.out.println(list);
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(1)$ (in-place sort)
</details>

### [ ] Problem 4.16: Map Frequency Counter [Medium] [Topic: Collections]
* **Learning Objective**: Map occurrences of elements.
* **Problem Statement**: Count the frequency of each unique word in a list of strings.
* **Input**: `{"apple", "banana", "apple", "cherry", "banana", "apple"}`
* **Output**:
  ```text
  {cherry=1, banana=2, apple=3}
  ```
* **Hint**: Use `map.put(word, map.getOrDefault(word, 0) + 1)`.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "apple", "cherry", "banana", "apple"};
        Map<String, Integer> counts = new HashMap<>();
        
        for (String f : fruits) {
            counts.put(f, counts.getOrDefault(f, 0) + 1);
        }
        System.out.println(counts);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(K)$ (where $K$ is number of unique keys)
</details>

### [ ] Problem 4.17: Stack Matching Brackets [Hard] [Topic: Collections]
* **Learning Objective**: Use stack data structures to solve parser challenges.
* **Problem Statement**: Given a string containing brackets `(`, `)`, `{`, `}`, `[`, `]`, determine if the brackets are balanced.
* **Input**: `"({[]})"`
* **Output**:
  ```text
  Balanced: true
  ```
* **Hint**: Push opening brackets onto the stack. For each closing bracket, pop the top of the stack and check if they match.
<details>
<summary>View Solution</summary>

```java
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        System.out.println("Balanced: " + isBalanced("({[]})"));
        System.out.println("Balanced: " + isBalanced("({[})"));
    }
    
    public static boolean isBalanced(String expr) {
        Stack<Character> stack = new Stack<>();
        for (char ch : expr.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else if (ch == ')' || ch == '}' || ch == ']') {
                if (stack.isEmpty()) return false;
                char open = stack.pop();
                if (ch == ')' && open != '(') return false;
                if (ch == '}' && open != '{') return false;
                if (ch == ']' && open != '[') return false;
            }
        }
        return stack.isEmpty();
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 4.18: Queue Queueing System [Hard] [Topic: Collections]
* **Learning Objective**: Use the Queue interface to implement FIFO (First-In, First-Out) pipelines.
* **Problem Statement**: Implement a task processor where tasks are executed in the order they are added.
* **Input**: Add task 1, task 2, process, add task 3, process.
* **Output**:
  ```text
  Processed: Task 1
  Processed: Task 2
  Processed: Task 3
  ```
* **Hint**: Use a `LinkedList` as a queue (`Queue<String> queue = new LinkedList<>();`), calling `.offer()` to add and `.poll()` to remove and process tasks.
<details>
<summary>View Solution</summary>

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> tasks = new LinkedList<>();
        tasks.offer("Task 1");
        tasks.offer("Task 2");
        
        System.out.println("Processed: " + tasks.poll());
        System.out.println("Processed: " + tasks.poll());
        
        tasks.offer("Task 3");
        System.out.println("Processed: " + tasks.poll());
    }
}
```
* **Complexity**: Time: $O(1)$ (for enqueue and dequeue operations) | Space: $O(N)$
</details>

### [ ] Problem 4.19: LRU Cache Base [Hard] [Topic: Collections]
* **Learning Objective**: Combine lists and maps using linked hashing structures.
* **Problem Statement**: Create a cache with a fixed capacity that discards the least recently used (LRU) items when full.
* **Input**: Cache capacity = 2, put (1, 1), put (2, 2), get (1), put (3, 3) (should evict 2).
* **Output**:
  ```text
  Key 1: 1, Key 2: null, Key 3: 3
  ```
* **Hint**: Extend `LinkedHashMap` and override the `removeEldestEntry()` method.
<details>
<summary>View Solution</summary>

```java
import java.util.LinkedHashMap;
import java.util.Map;

class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true); // true sets access-order mapping
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity; // Automatically discards eldest key when capacity exceeded
    }
}

public class Main {
    public static void main(String[] args) {
        LRUCache<Integer, Integer> cache = new LRUCache<>(2);
        cache.put(1, 1);
        cache.put(2, 2);
        cache.get(1); // access key 1, making 2 the eldest
        cache.put(3, 3); // evicts key 2
        
        System.out.println("Key 1: " + cache.get(1));
        System.out.println("Key 2: " + cache.get(2));
        System.out.println("Key 3: " + cache.get(3));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(\text{capacity})$
</details>

### [ ] Problem 4.20: Sorting custom objects [Hard] [Topic: Collections]
* **Learning Objective**: Implement standard object comparison sorting interfaces.
* **Problem Statement**: Create a `Student` class with fields `name` and `grade`. Sort students first by grade in descending order, then by name alphabetically if grades are equal.
* **Input**: `{Alice: 90, Bob: 95, Charlie: 90}`
* **Output**:
  ```text
  Sorted: [Bob: 95, Alice: 90, Charlie: 90]
  ```
* **Hint**: Implement the `Comparable<Student>` interface, or write a custom comparator: `(s1, s2) -> { ... }`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Student implements Comparable<Student> {
    String name;
    int grade;
    
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
    
    @Override
    public int compareTo(Student other) {
        if (this.grade != other.grade) {
            return Integer.compare(other.grade, this.grade); // Descending order of grades
        }
        return this.name.compareTo(other.name); // Ascending order of names
    }
    
    @Override
    public String toString() {
        return name + ": " + grade;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 90));
        students.add(new Student("Bob", 95));
        students.add(new Student("Charlie", 90));
        
        Collections.sort(students);
        System.out.println("Sorted: " + students);
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(1)$
</details>

---

## 3. File Handling

📌 **Core Concept**: File IO (Input/Output) processes stream data. Traditional `java.io` uses blocking streams, while modern `java.nio` (New IO) is non-blocking, channel-based, and optimizes large file operations.

### [ ] Problem 4.21: Write File [Easy] [Topic: File IO]
* **Learning Objective**: Write characters to local files on disk.
* **Problem Statement**: Create a file named `output.txt` and write `"Hello File IO!"` to it.
* **Input**: None
* **Output**: Creates a file containing the string on disk.
* **Hint**: Use `FileWriter` wrapped inside a `BufferedWriter` to write files.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write("Hello File IO!");
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.22: Read File [Easy] [Topic: File IO]
* **Learning Objective**: Read a text file line-by-line from disk.
* **Problem Statement**: Read and print the contents of `output.txt` to the console.
* **Input**: `output.txt` containing `"Hello File IO!"`
* **Output**:
  ```text
  Hello File IO!
  ```
* **Hint**: Use `BufferedReader` wrapped around a `FileReader`. Read lines inside a loop until `readLine()` returns `null`.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is file size) | Space: $O(1)$
</details>

### [ ] Problem 4.23: File Exists [Easy] [Topic: File IO]
* **Learning Objective**: Verify file presence and inspect file attributes.
* **Problem Statement**: Check if `output.txt` exists, is a directory, and print its size.
* **Input**: `output.txt`
* **Output**:
  ```text
  Exists: true, Size: 14 bytes
  ```
* **Hint**: Instantiation of `File file = new File("output.txt")` lets you call `.exists()`, `.length()`, and `.isDirectory()`.
<details>
<summary>View Solution</summary>

```java
import java.io.File;

public class Main {
    public static void main(String[] args) {
        File f = new File("output.txt");
        if (f.exists()) {
            System.out.println("Exists: " + f.exists() + ", Size: " + f.length() + " bytes");
        } else {
            System.out.println("File does not exist.");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.24: Append File [Medium] [Topic: File IO]
* **Learning Objective**: Append data to an existing file without overwriting it.
* **Problem Statement**: Append a second line of text `"Appended Line."` to `output.txt`.
* **Input**: `output.txt`
* **Output**: `output.txt` contains two lines of text.
* **Hint**: Pass `true` as the second argument to the `FileWriter` constructor: `new FileWriter("output.txt", true)`.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt", true))) {
            writer.newLine(); // Add newline spacer
            writer.write("Appended Line.");
        } catch (IOException e) {
            System.out.println("Error appending to file: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.25: Line Counter [Medium] [Topic: File IO]
* **Learning Objective**: Count occurrences of delimiter tokens in streams.
* **Problem Statement**: Count the total number of lines in `output.txt`.
* **Input**: `output.txt` containing 2 lines
* **Output**:
  ```text
  Lines: 2
  ```
* **Hint**: Increment a counter inside your file read loop for every non-null line read.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        int linesCount = 0;
        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            while (reader.readLine() != null) {
                linesCount++;
            }
            System.out.println("Lines: " + linesCount);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 4.26: Word Scanner [Medium] [Topic: File IO]
* **Learning Objective**: Parse file contents using delimiter tokens.
* **Problem Statement**: Read a text file and print each word on a new line.
* **Input**: `"Hello Java World"`
* **Output**:
  ```text
  Hello
  Java
  World
  ```
* **Hint**: Use `Scanner` instantiated with a `File` object: `new Scanner(new File("output.txt"))`.
<details>
<summary>View Solution</summary>

```java
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(new File("output.txt"))) {
            while (sc.hasNext()) {
                System.out.println(sc.next());
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 4.27: NIO File Copy [Hard] [Topic: File IO]
* **Learning Objective**: Copy files using modern `java.nio` channel operations.
* **Problem Statement**: Copy the contents of `output.txt` to a new file named `copy.txt` using the NIO library.
* **Input**: `output.txt`
* **Output**: Creates `copy.txt` with identical contents.
* **Hint**: Use the `java.nio.file.Files.copy()` method and the `java.nio.file.Paths` class.
<details>
<summary>View Solution</summary>

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class Main {
    public static void main(String[] args) {
        Path src = Paths.get("output.txt");
        Path dest = Paths.get("copy.txt");
        
        try {
            Files.copy(src, dest, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File copied successfully.");
        } catch (IOException e) {
            System.out.println("Error copying file: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is file size) | Space: $O(1)$
</details>

### [ ] Problem 4.28: Read All Lines [Hard] [Topic: File IO]
* **Learning Objective**: Read an entire file into memory at once.
* **Problem Statement**: Read all lines of `output.txt` into a `List<String>` using a single line of code.
* **Input**: `output.txt`
* **Output**:
  ```text
  [Hello File IO!, Appended Line.]
  ```
* **Hint**: Look at the `Files.readAllLines(path)` method in the NIO library.
<details>
<summary>View Solution</summary>

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        try {
            List<String> lines = Files.readAllLines(Paths.get("output.txt"));
            System.out.println(lines);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$ (stores the entire file content in memory)
</details>

### [ ] Problem 4.29: Serialize Object [Hard] [Topic: File IO]
* **Learning Objective**: Write object instances directly to disk.
* **Problem Statement**: Serialize a `User` object (with `name` and `age` properties) and save it to a file.
* **Input**: `User("Alice", 25)`
* **Output**: Generates a binary file `user.ser` on disk.
* **Hint**: The `User` class must implement the `java.io.Serializable` interface. Use `ObjectOutputStream` wrapped around a `FileOutputStream`.
<details>
<summary>View Solution</summary>

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class User implements Serializable {
    private static final long serialVersionUID = 1L; // Recommended identifier for serializable classes
    String name;
    int age;
    
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        User u = new User("Alice", 25);
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.ser"))) {
            oos.writeObject(u);
            System.out.println("Object serialized.");
        } catch (IOException e) {
            System.out.println("Serialization error: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 4.30: Deserialize Object [Hard] [Topic: File IO]
* **Learning Objective**: Read object instances back from disk files.
* **Problem Statement**: Deserialize a `User` object from the file `user.ser` and display its fields.
* **Input**: `user.ser`
* **Output**:
  ```text
  Name: Alice, Age: 25
  ```
* **Hint**: Use `ObjectInputStream` wrapped around a `FileInputStream`. Cast the deserialized object back to the `User` class.
<details>
<summary>View Solution</summary>

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Main {
    public static void main(String[] args) {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.ser"))) {
            User u = (User) ois.readObject(); // Cast to target type
            System.out.println("Name: " + u.name + ", Age: " + u.age);
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Deserialization error: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>
