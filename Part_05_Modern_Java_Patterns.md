# Milestone 5: Enterprise Features & Patterns

This milestone covers modern Java 8+ features (Lambda Expressions, Streams, Optionals), multithreading and concurrency, JDBC database integration, and software design patterns.

---

## 1. Java 8 Features

📌 **Core Concept**: Java 8 introduced functional programming paradigms. Key additions include Lambda Expressions (anonymous implementations of Functional Interfaces), the Streams API (for declaration-based collection processing like `map`, `filter`, `reduce`), and the `Optional` wrapper class to help prevent `NullPointerException` errors.

### [ ] Problem 5.1: Simple Lambda [Easy] [Topic: Java 8]
* **Learning Objective**: Implement a single-method functional interface using lambda syntax.
* **Problem Statement**: Use a lambda expression to implement a `Runnable` interface that prints `"Running in lambda"`.
* **Input**: None
* **Output**:
  ```text
  Running in lambda
  ```
* **Hint**: Instead of creating an anonymous class, write: `Runnable r = () -> { ... };`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        Runnable r = () -> System.out.println("Running in lambda");
        r.run();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.2: Stream Filter [Easy] [Topic: Java 8]
* **Learning Objective**: Filter collection items using Stream declarations.
* **Problem Statement**: Filter out all odd numbers from a list of integers, printing only the even values.
* **Input**: `list = {1, 2, 3, 4, 5, 6}`
* **Output**:
  ```text
  [2, 4, 6]
  ```
* **Hint**: Use `list.stream().filter(n -> n % 2 == 0).collect(Collectors.toList())`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
        List<Integer> even = list.stream()
                                  .filter(n -> n % 2 == 0)
                                  .collect(Collectors.toList());
        System.out.println(even);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$ (to allocate the filtered collection)
</details>

### [ ] Problem 5.3: Stream Map [Easy] [Topic: Java 8]
* **Learning Objective**: Transform values using the `.map()` stream operator.
* **Problem Statement**: Convert a list of strings to uppercase using a Stream map operation.
* **Input**: `{"java", "roadmap"}`
* **Output**:
  ```text
  [JAVA, ROADMAP]
  ```
* **Hint**: Use `.map(String::toUpperCase)` or `.map(s -> s.toUpperCase())`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("java", "roadmap");
        List<String> upper = list.stream()
                                 .map(String::toUpperCase)
                                 .collect(Collectors.toList());
        System.out.println(upper);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 5.4: Functional Interface Match [Medium] [Topic: Java 8]
* **Learning Objective**: Work with standard functional interfaces.
* **Problem Statement**: Declare a `Predicate<String>` that checks if a string is empty, and a `Function<String, Integer>` that returns string lengths.
* **Input**: Test with empty and populated strings.
* **Output**: Correct boolean evaluations and length counts.
* **Hint**: Import `java.util.function.Predicate` and `java.util.function.Function`.
<details>
<summary>View Solution</summary>

```java
import java.util.function.Function;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        Predicate<String> isEmpty = s -> s.isEmpty();
        Function<String, Integer> length = s -> s.length();
        
        System.out.println("Is empty: " + isEmpty.test(""));
        System.out.println("Length: " + length.apply("Java"));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.5: Optional Basics [Medium] [Topic: Java 8]
* **Learning Objective**: Prevent null reference exceptions using the Optional class.
* **Problem Statement**: Wrap a potentially null string in an `Optional` wrapper. If null, return the default value `"Default"`.
* **Input**: `str = null`
* **Output**:
  ```text
  Default
  ```
* **Hint**: Use `Optional.ofNullable(str).orElse("Default")`.
<details>
<summary>View Solution</summary>

```java
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        String str = null;
        String result = Optional.ofNullable(str).orElse("Default");
        System.out.println(result);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.6: Stream Reduce [Medium] [Topic: Java 8]
* **Learning Objective**: Aggregate collection elements using the `.reduce()` operator.
* **Problem Statement**: Calculate the sum of all elements in an integer list using a stream reduce operation.
* **Input**: `list = {1, 2, 3, 4, 5}`
* **Output**:
  ```text
  Sum: 15
  ```
* **Hint**: Use `.reduce(0, (a, b) -> a + b)` or `.reduce(0, Integer::sum)`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        int sum = list.stream()
                      .reduce(0, Integer::sum);
        System.out.println("Sum: " + sum);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 5.7: Stream Sorting [Medium] [Topic: Java 8]
* **Learning Objective**: Sort stream elements using custom comparators.
* **Problem Statement**: Sort a list of strings alphabetically using a Stream pipeline and print the sorted list.
* **Input**: `{"Pear", "Banana", "Apple"}`
* **Output**:
  ```text
  [Apple, Banana, Pear]
  ```
* **Hint**: Use `.sorted()` in your stream call.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Pear", "Banana", "Apple");
        List<String> sorted = list.stream()
                                  .sorted()
                                  .collect(Collectors.toList());
        System.out.println(sorted);
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(N)$
</details>

### [ ] Problem 5.8: FlatMap Operations [Hard] [Topic: Java 8]
* **Learning Objective**: Flatten nested list structures using stream operations.
* **Problem Statement**: Convert a list of lists of strings into a single flat list containing all the individual strings.
* **Input**: `list = {{"a", "b"}, {"c", "d"}}`
* **Output**:
  ```text
  [a, b, c, d]
  ```
* **Hint**: Use `.flatMap(List::stream)` or `.flatMap(l -> l.stream())`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<List<String>> list = Arrays.asList(
            Arrays.asList("a", "b"),
            Arrays.asList("c", "d")
        );
        List<String> flat = list.stream()
                                .flatMap(List::stream)
                                .collect(Collectors.toList());
        System.out.println(flat);
    }
}
```
* **Complexity**: Time: $O(N \times M)$ (where $N$ is nested lists count and $M$ is list length) | Space: $O(N \times M)$
</details>

### [ ] Problem 5.9: Collector Grouping By [Hard] [Topic: Java 8]
* **Learning Objective**: Classify elements using stream collectors.
* **Problem Statement**: Group a list of words by their length, returning a `Map<Integer, List<String>>`.
* **Input**: `{"a", "bb", "cc", "ddd"}`
* **Output**:
  ```text
  {1=[a], 2=[bb, cc], 3=[ddd]}
  ```
* **Hint**: Use `.collect(Collectors.groupingBy(String::length))`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("a", "bb", "cc", "ddd");
        Map<Integer, List<String>> grouped = list.stream()
                                                 .collect(Collectors.groupingBy(String::length));
        System.out.println(grouped);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 5.10: Parallel Stream Performance [Hard] [Topic: Java 8]
* **Learning Objective**: Run parallel computations across multiple CPU cores.
* **Problem Statement**: Sum a range of 1 to 10,000,000 using a parallel stream to distribute the computation.
* **Input**: Range 1 to 10,000,000
* **Output**:
  ```text
  Sum: 50000005000000
  ```
* **Hint**: Use `LongStream.rangeClosed(1, 10_000_000).parallel().sum()`.
<details>
<summary>View Solution</summary>

```java
import java.util.stream.LongStream;

public class Main {
    public static void main(String[] args) {
        long sum = LongStream.rangeClosed(1, 10_000_000)
                             .parallel() // Process chunks concurrently
                             .sum();
        System.out.println("Sum: " + sum);
    }
}
```
* **Complexity**: Time: $O(N)$ (distributed across processor cores) | Space: $O(1)$
</details>

---

## 2. Multithreading & Concurrency

📌 **Core Concept**: Multithreading allows parallel execution. In Java, threads are instantiated by extending `Thread` or implementing the `Runnable` interface. Synchronization locks resources to prevent race conditions (multiple threads accessing the same mutable memory concurrently).

### [ ] Problem 5.11: Thread Class Extend [Easy] [Topic: Concurrency]
* **Learning Objective**: Implement basic concurrent threads.
* **Problem Statement**: Create a subclass of `Thread` that overrides `run()` to print `"Thread is running"`.
* **Input**: None
* **Output**:
  ```text
  Thread is running
  ```
* **Hint**: Call `thread.start()` to spawn a new thread. Calling `.run()` directly does not create a new thread.
<details>
<summary>View Solution</summary>

```java
class CustomThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        CustomThread t = new CustomThread();
        t.start(); // Spawns execution thread
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.12: Runnable Interface [Easy] [Topic: Concurrency]
* **Learning Objective**: Implement threads using the Runnable interface.
* **Problem Statement**: Implement the `Runnable` interface in a class and run it using a `Thread` container.
* **Input**: None
* **Output**:
  ```text
  Runnable is running
  ```
* **Hint**: Create a `Thread` object, passing the `Runnable` instance to its constructor: `new Thread(new MyRunnable())`.
<details>
<summary>View Solution</summary>

```java
class CustomRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable is running");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t = new Thread(new CustomRunnable());
        t.start();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.13: Thread Sleep [Easy] [Topic: Concurrency]
* **Learning Objective**: Pause thread execution using sleep statements.
* **Problem Statement**: Print numbers 1 to 3, pausing for 500 milliseconds between each print.
* **Input**: None
* **Output**:
  ```text
  1 (pause) 2 (pause) 3
  ```
* **Hint**: Use `Thread.sleep(500)`. This method throws a checked `InterruptedException` which must be caught or declared.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println(i);
            try {
                Thread.sleep(500); // Wait 500ms
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.14: Thread Join [Medium] [Topic: Concurrency]
* **Learning Objective**: Synchronize thread termination order using join statements.
* **Problem Statement**: Start a thread and make the main thread wait for it to finish before printing `"Done"`.
* **Input**: None
* **Output**:
  ```text
  Child thread completed
  Done
  ```
* **Hint**: Call `thread.join()`. This blocks the calling thread until the target thread finishes execution.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        Thread t = new Thread(() -> {
            System.out.println("Child thread completed");
        });
        t.start();
        
        try {
            t.join(); // Wait for thread t to complete
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Done");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.15: Synchronized Method [Medium] [Topic: Concurrency]
* **Learning Objective**: Prevent race conditions using synchronized methods.
* **Problem Statement**: Create a shared counter class with an `increment()` method that is accessed concurrently by two threads.
* **Input**: Two threads incrementing the counter 1,000 times each.
* **Output**:
  ```text
  Final Count: 2000
  ```
* **Hint**: Add the `synchronized` modifier to the method: `public synchronized void increment()`.
<details>
<summary>View Solution</summary>

```java
class SharedCounter {
    private int count = 0;
    
    public synchronized void increment() {
        count++; // Thread-safe increment operation
    }
    
    public int getCount() {
        return count;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        SharedCounter sc = new SharedCounter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) sc.increment();
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) sc.increment();
        });
        
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        
        System.out.println("Final Count: " + sc.getCount());
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is loop count) | Space: $O(1)$
</details>

### [ ] Problem 5.16: Synchronized Block [Medium] [Topic: Concurrency]
* **Learning Objective**: Synchronize specific blocks of code to minimize locking overhead.
* **Problem Statement**: Use a synchronized block to synchronize only the critical section of a method.
* **Input**: None
* **Output**: Displays synchronized outputs.
* **Hint**: Use the syntax `synchronized(this) { ... }` inside the method.
<details>
<summary>View Solution</summary>

```java
class BlockCounter {
    private int count = 0;
    
    public void increment() {
        // Unsynchronized tasks can happen here
        synchronized (this) {
            count++; // Lock only the critical assignment operation
        }
    }
    
    public int getCount() { return count; }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.17: Executor Service Thread Pool [Hard] [Topic: Concurrency]
* **Learning Objective**: Manage a pool of worker threads using `ExecutorService`.
* **Problem Statement**: Run three tasks concurrently using a fixed thread pool of capacity 2.
* **Input**: Submit 3 tasks
* **Output**: Executes tasks concurrently, reusing the 2 available threads.
* **Hint**: Create the thread pool using `Executors.newFixedThreadPool(2)`. Submit tasks using `.submit()`.
<details>
<summary>View Solution</summary>

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        for (int i = 1; i <= 3; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Running Task " + taskId + " on " + Thread.currentThread().getName());
            });
        }
        
        executor.shutdown(); // Gracefully shutdown pool after tasks finish
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.18: Reentrant Lock [Hard] [Topic: Concurrency]
* **Learning Objective**: Lock resources explicitly using `ReentrantLock`.
* **Problem Statement**: Rewrite a synchronized method using an explicit `ReentrantLock` to control access.
* **Input**: Concurrent worker threads
* **Output**: Shared count is updated safely.
* **Hint**: Call `lock.lock()` at the start and `lock.unlock()` inside a `finally` block.
<details>
<summary>View Solution</summary>

```java
import java.util.concurrent.locks.ReentrantLock;

class LockCounter {
    private final ReentrantLock lock = new ReentrantLock();
    private int count = 0;
    
    public void increment() {
        lock.lock(); // Explicitly acquire the lock
        try {
            count++;
        } finally {
            lock.unlock(); // Ensure lock is released even if an exception occurs
        }
    }
    
    public int getCount() { return count; }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.19: Producer Consumer Problem [Hard] [Topic: Concurrency]
* **Learning Objective**: Coordinate threads using wait/notify locks.
* **Problem Statement**: Implement a simple message queue where a Producer thread adds items and a Consumer thread removes items.
* **Input**: Shared buffer size limit
* **Output**: Thread coordination: consumer waits when buffer is empty, producer waits when full.
* **Hint**: Use `wait()` when the buffer is empty or full, and `notify()` to wake up waiting threads.
<details>
<summary>View Solution</summary>

```java
import java.util.LinkedList;
import java.util.Queue;

class SharedQueue {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int capacity = 2;
    
    public synchronized void produce(int value) throws InterruptedException {
        while (queue.size() == capacity) {
            wait(); // Wait if the queue is full
        }
        queue.add(value);
        System.out.println("Produced: " + value);
        notify(); // Wake up consumer
    }
    
    public synchronized void consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait(); // Wait if the queue is empty
        }
        int val = queue.poll();
        System.out.println("Consumed: " + val);
        notify(); // Wake up producer
    }
}

public class Main {
    public static void main(String[] args) {
        SharedQueue sq = new SharedQueue();
        
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) sq.produce(i);
            } catch (InterruptedException e) { e.printStackTrace(); }
        });
        
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) sq.consume();
            } catch (InterruptedException e) { e.printStackTrace(); }
        });
        
        producer.start();
        consumer.start();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(\text{capacity})$
</details>

### [ ] Problem 5.20: Deadlock Simulation [Hard] [Topic: Concurrency]
* **Learning Objective**: Understand how resource locking order conflicts cause thread deadlocks.
* **Problem Statement**: Write a program where two threads wait indefinitely for locks held by each other.
* **Input**: None
* **Output**: Threads lock up indefinitely.
* **Hint**: Let Thread 1 lock Resource A then Resource B. Let Thread 2 lock Resource B then Resource A.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        final Object res1 = "Resource A";
        final Object res2 = "Resource B";
        
        Thread t1 = new Thread(() -> {
            synchronized (res1) {
                System.out.println("Thread 1: Locked Resource A");
                try { Thread.sleep(50); } catch (Exception e) {}
                
                synchronized (res2) {
                    System.out.println("Thread 1: Locked Resource B");
                }
            }
        });
        
        Thread t2 = new Thread(() -> {
            synchronized (res2) {
                System.out.println("Thread 2: Locked Resource B");
                try { Thread.sleep(50); } catch (Exception e) {}
                
                synchronized (res1) {
                    System.out.println("Thread 2: Locked Resource A");
                }
            }
        });
        
        t1.start();
        t2.start();
    }
}
```
* **Complexity**: Time: $O(1)$ (Deadlock hangs indefinitely) | Space: $O(1)$
</details>

---

## 3. JDBC Database Operations

📌 **Core Concept**: JDBC (Java Database Connectivity) provides standard driver APIs to connect databases, execute SQL queries (`Statement`, `PreparedStatement`), read query outputs (`ResultSet`), and manage transactions.

### [ ] Problem 5.21: JDBC Driver Load [Easy] [Topic: JDBC]
* **Learning Objective**: Load a JDBC driver class into memory.
* **Problem Statement**: Load the SQLite JDBC driver class and print a success message.
* **Input**: None
* **Output**:
  ```text
  Driver loaded.
  ```
* **Hint**: Use `Class.forName("org.sqlite.JDBC")`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        try {
            Class.forName("org.sqlite.JDBC"); // Dynamic class loading
            System.out.println("Driver loaded.");
        } catch (ClassNotFoundException e) {
            System.out.println("Driver class not found: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.22: Open Database Connection [Easy] [Topic: JDBC]
* **Learning Objective**: Connect to a database using JDBC connection URLs.
* **Problem Statement**: Connect to an in-memory SQLite database using the DriverManager API.
* **Input**: SQLite connection string: `jdbc:sqlite::memory:`
* **Output**:
  ```text
  Connection established successfully.
  ```
* **Hint**: Use `DriverManager.getConnection(url)`. Wrap it in a try-with-resources statement to ensure it is closed.
<details>
<summary>View Solution</summary>

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:";
        try (Connection conn = DriverManager.getConnection(url)) {
            if (conn != null) {
                System.out.println("Connection established successfully.");
            }
        } catch (SQLException e) {
            System.out.println("Database connection failed: " + e.getMessage());
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.23: Create DB Table [Easy] [Topic: JDBC]
* **Learning Objective**: Run DDL SQL queries.
* **Problem Statement**: Create a table named `students` with `id` (integer) and `name` (text) columns.
* **Input**: Create table SQL statement.
* **Output**: Table created in the database.
* **Hint**: Call `statement.execute(createTableSql)` on a `Statement` object.
<details>
<summary>View Solution</summary>

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:";
        String sql = "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);";
        
        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {
            stmt.execute(sql);
            System.out.println("Table created.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.24: Insert Data Statement [Medium] [Topic: JDBC]
* **Learning Objective**: Write records to a database using SQL INSERT statements.
* **Problem Statement**: Insert a student record into the database table.
* **Input**: Student name `"Alice"`, ID `1`
* **Output**: Record inserted.
* **Hint**: Call `statement.executeUpdate(insertSql)`.
<details>
<summary>View Solution</summary>

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:";
        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {
            // Setup table
            stmt.execute("CREATE TABLE students (id INT, name TEXT)");
            
            int affected = stmt.executeUpdate("INSERT INTO students VALUES (1, 'Alice')");
            System.out.println("Rows affected: " + affected);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.25: Prepared Statement [Medium] [Topic: JDBC]
* **Learning Objective**: Prevent SQL Injection attacks using parameter placeholders.
* **Problem Statement**: Insert records into a database using a `PreparedStatement` with values containing special characters.
* **Input**: Name: `"O'Connor"`, ID: `2`
* **Output**: Record inserted successfully.
* **Hint**: Use `?` placeholders in your SQL statement: `INSERT INTO students VALUES (?, ?)`. Call `.setInt()` and `.setString()` to bind the values.
<details>
<summary>View Solution</summary>

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:";
        String sql = "INSERT INTO students VALUES (?, ?)";
        
        try (Connection conn = DriverManager.getConnection(url);
             Statement setup = conn.createStatement();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            setup.execute("CREATE TABLE students (id INT, name TEXT)");
            
            pstmt.setInt(1, 2);
            pstmt.setString(2, "O'Connor"); // Automatically handles character escaping
            pstmt.executeUpdate();
            System.out.println("Prepared record inserted.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.26: Retrieve ResultSet [Medium] [Topic: JDBC]
* **Learning Objective**: Read query outputs from a `ResultSet` object.
* **Problem Statement**: Query a table and print all records.
* **Input**: None
* **Output**:
  ```text
  ID: 1, Name: Alice
  ```
* **Hint**: Use `statement.executeQuery(sql)` to get a `ResultSet`, and loop through the rows using `while (resultSet.next())`.
<details>
<summary>View Solution</summary>

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:";
        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {
            
            stmt.execute("CREATE TABLE students (id INT, name TEXT)");
            stmt.execute("INSERT INTO students VALUES (1, 'Alice')");
            
            try (ResultSet rs = stmt.executeQuery("SELECT * FROM students")) {
                while (rs.next()) {
                    System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is query result count) | Space: $O(1)$
</details>

### [ ] Problem 5.27: Database Transactions [Hard] [Topic: JDBC]
* **Learning Objective**: Commit or rollback database transactions manually.
* **Problem Statement**: Perform two database inserts as a single transaction. If one fails, roll back both inserts.
* **Input**: Fail the second SQL insert.
* **Output**: Both operations are rolled back, leaving the database unchanged.
* **Hint**: Disable autocommit: `connection.setAutoCommit(false)`. Call `connection.commit()` at the end, or `connection.rollback()` inside a `catch` block if an error occurs.
<details>
<summary>View Solution</summary>

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url);
            conn.setAutoCommit(false); // Disable auto-commit
            
            try (Statement stmt = conn.createStatement()) {
                stmt.execute("CREATE TABLE accounts (name TEXT, balance INT)");
                stmt.executeUpdate("INSERT INTO accounts VALUES ('Alice', 100)");
                
                // Simulate an error
                if (true) {
                    throw new Exception("Simulated connection failure!");
                }
                
                stmt.executeUpdate("INSERT INTO accounts VALUES ('Bob', 200)");
                conn.commit(); // Commit transaction
                System.out.println("Transaction committed.");
            } catch (Exception e) {
                System.out.println("Error encountered: " + e.getMessage() + ". Rolling back transaction...");
                if (conn != null) {
                    conn.rollback(); // Rollback transaction
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 4. Design Patterns

📌 **Core Concept**: Software design patterns are reusable templates that solve common software design problems. Creational patterns decouple object creation, structural patterns organize class structures, and behavioral patterns handle object communication.

### [ ] Problem 5.28: Thread Safe Singleton [Easy] [Topic: Patterns]
* **Learning Objective**: Implement a double-checked locking Singleton pattern.
* **Problem Statement**: Implement a thread-safe singleton class using double-checked locking to prevent race conditions during instantiation.
* **Input**: Access instance concurrently.
* **Output**: Returns the same single instance.
* **Hint**: Declare the instance variable as `volatile` and synchronize on the class object inside the null check.
<details>
<summary>View Solution</summary>

```java
class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;
    
    private ThreadSafeSingleton() {}
    
    public static ThreadSafeSingleton getInstance() {
        if (instance == null) { // First check
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) { // Second check
                    instance = new ThreadSafeSingleton();
                }
            }
        }
        return instance;
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.29: Shape Factory [Easy] [Topic: Patterns]
* **Learning Objective**: Implement the Factory Pattern to decouple class definitions.
* **Problem Statement**: Implement a `ShapeFactory` that returns different `Shape` subclass objects depending on an input string.
* **Input**: `"Circle"`, `"Square"`
* **Output**: Generates correct object types dynamically.
* **Hint**: Implement a common `Shape` interface that the subclasses implement.
<details>
<summary>View Solution</summary>

```java
interface Shape { void draw(); }
class Circle implements Shape { public void draw() { System.out.println("Circle"); } }
class Square implements Shape { public void draw() { System.out.println("Square"); } }

class ShapeFactory {
    public Shape getShape(String shapeType) {
        if (shapeType == null) return null;
        return switch (shapeType.toUpperCase()) {
            case "CIRCLE" -> new Circle();
            case "SQUARE" -> new Square();
            default -> throw new IllegalArgumentException("Unknown type: " + shapeType);
        };
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.30: Pizza Builder [Medium] [Topic: Patterns]
* **Learning Objective**: Build complex objects step-by-step using the Builder Pattern.
* **Problem Statement**: Implement the Builder pattern for a `Pizza` class with optional fields `cheese`, `pepperoni`, and `mushrooms`.
* **Input**: Build a pizza with cheese and mushrooms but no pepperoni.
* **Output**:
  ```text
  Pizza: Cheese: true, Pepperoni: false, Mushrooms: true
  ```
* **Hint**: Define an inner static class `PizzaBuilder` inside the `Pizza` class. Return `this` from each setter method to enable method chaining.
<details>
<summary>View Solution</summary>

```java
class Pizza {
    private final boolean cheese;
    private final boolean pepperoni;
    private final boolean mushrooms;
    
    private Pizza(PizzaBuilder builder) {
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
    }
    
    @Override
    public String toString() {
        return "Pizza: Cheese: " + cheese + ", Pepperoni: " + pepperoni + ", Mushrooms: " + mushrooms;
    }
    
    public static class PizzaBuilder {
        private boolean cheese;
        private boolean pepperoni;
        private boolean mushrooms;
        
        public PizzaBuilder addCheese() { this.cheese = true; return this; }
        public PizzaBuilder addPepperoni() { this.pepperoni = true; return this; }
        public PizzaBuilder addMushrooms() { this.mushrooms = true; return this; }
        
        public Pizza build() {
            return new Pizza(this);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Pizza p = new Pizza.PizzaBuilder().addCheese().addMushrooms().build();
        System.out.println(p);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.31: Object Observer [Medium] [Topic: Patterns]
* **Learning Objective**: Notify multiple observer objects of state changes (Observer Pattern).
* **Problem Statement**: Implement a news subscription channel where registered subscribers are automatically notified whenever a new headline is published.
* **Input**: Register 2 subscribers, update headline.
* **Output**: Both subscribers receive the updated headline notification.
* **Hint**: Create a `Subject` interface to manage observers, and an `Observer` interface to receive updates.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String headline);
}

interface Subject {
    void register(Observer o);
    void notifyObservers(String headline);
}

class NewsAgency implements Subject {
    private final List<Observer> observers = new ArrayList<>();
    
    @Override
    public void register(Observer o) { observers.add(o); }
    
    @Override
    public void notifyObservers(String headline) {
        for (Observer o : observers) o.update(headline);
    }
}

class Subscriber implements Observer {
    private String name;
    public Subscriber(String name) { this.name = name; }
    
    @Override
    public void update(String headline) {
        System.out.println(name + " received update: " + headline);
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is observer count) | Space: $O(N)$
</details>

### [ ] Problem 5.32: Legacy Adapter [Medium] [Topic: Patterns]
* **Learning Objective**: Connect incompatible interfaces using the Adapter Pattern.
* **Problem Statement**: Create an adapter class that translates calls from a modern `USB-C` interface to a legacy `Micro-USB` socket.
* **Input**: Send data over USB-C interface.
* **Output**:
  ```text
  Data routed to Micro-USB port.
  ```
* **Hint**: Implement the target `UsbC` interface in an adapter class that holds a reference to a `MicroUsb` object.
<details>
<summary>View Solution</summary>

```java
interface UsbC { void chargeUsbC(); }
class MicroUsb { void chargeMicro() { System.out.println("Charging over Micro-USB."); } }

class UsbCAdapter implements UsbC {
    private final MicroUsb legacySocket;
    
    public UsbCAdapter(MicroUsb socket) {
        this.legacySocket = socket;
    }
    
    @Override
    public void chargeUsbC() {
        legacySocket.chargeMicro(); // Delegate calls to the legacy implementation
    }
}

public class Main {
    public static void main(String[] args) {
        UsbC charger = new UsbCAdapter(new MicroUsb());
        charger.chargeUsbC();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.33: Strategy Operation [Medium] [Topic: Patterns]
* **Learning Objective**: Swap algorithms dynamically at runtime using the Strategy Pattern.
* **Problem Statement**: Implement a payment system that supports different payment options (`CreditCard`, `PayPal`) using the Strategy pattern.
* **Input**: Select PayPal as the payment option during checkout.
* **Output**:
  ```text
  Paying $50.0 via PayPal
  ```
* **Hint**: Define a common `PaymentStrategy` interface with a `pay(amount)` method.
<details>
<summary>View Solution</summary>

```java
interface PaymentStrategy { void pay(double amount); }
class CreditCardPay implements PaymentStrategy {
    public void pay(double amt) { System.out.println("Paid $" + amt + " via Credit Card"); }
}
class PayPalPay implements PaymentStrategy {
    public void pay(double amt) { System.out.println("Paid $" + amt + " via PayPal"); }
}

class Cart {
    private PaymentStrategy strategy;
    public void setPaymentStrategy(PaymentStrategy s) { this.strategy = s; }
    
    public void checkout(double amount) {
        strategy.pay(amount);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.34: Remote Command Invoker [Hard] [Topic: Patterns]
* **Learning Objective**: Encapsulate actions inside command objects (Command Pattern).
* **Problem Statement**: Implement a home automation remote control where buttons trigger command objects (like `LightOnCommand`, `LightOffCommand`).
* **Input**: Press ON button
* **Output**:
  ```text
  Light is ON
  ```
* **Hint**: Define a `Command` interface with an `execute()` method. The remote control object holds and executes command references.
<details>
<summary>View Solution</summary>

```java
interface Command { void execute(); }
class Light {
    public void on() { System.out.println("Light is ON"); }
    public void off() { System.out.println("Light is OFF"); }
}

class LightOnCommand implements Command {
    private final Light light;
    public LightOnCommand(Light l) { this.light = l; }
    @Override
    public void execute() { light.on(); }
}

class RemoteControl {
    private Command slot;
    public void setCommand(Command c) { this.slot = c; }
    public void pressButton() { slot.execute(); }
}

public class Main {
    public static void main(String[] args) {
        RemoteControl rc = new RemoteControl();
        Light livingRoomLight = new Light();
        rc.setCommand(new LightOnCommand(livingRoomLight));
        rc.pressButton();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 5.35: Decorator Stream Wrapper [Hard] [Topic: Patterns]
* **Learning Objective**: Dynamically extend object behaviors using the Decorator Pattern.
* **Problem Statement**: Implement a custom text logger where wrappers dynamically add styling decorators (like `UpperDecorator`, `BracketDecorator`) to log outputs.
* **Input**: `log("hello")` decorated with both brackets and uppercase formatting.
* **Output**:
  ```text
  [HELLO]
  ```
* **Hint**: Implement a base `Logger` interface. The decorator class implements `Logger` and wraps a reference to another `Logger` object.
<details>
<summary>View Solution</summary>

```java
interface TextLogger { void log(String msg); }
class BaseLogger implements TextLogger {
    @Override
    public void log(String msg) { System.out.println(msg); }
}

abstract class LoggerDecorator implements TextLogger {
    protected final TextLogger wrapped;
    public LoggerDecorator(TextLogger l) { this.wrapped = l; }
}

class UpperDecorator extends LoggerDecorator {
    public UpperDecorator(TextLogger l) { super(l); }
    @Override
    public void log(String msg) { wrapped.log(msg.toUpperCase()); }
}

class BracketDecorator extends LoggerDecorator {
    public BracketDecorator(TextLogger l) { super(l); }
    @Override
    public void log(String msg) { wrapped.log("[" + msg + "]"); }
}

public class Main {
    public static void main(String[] args) {
        TextLogger logger = new BracketDecorator(new UpperDecorator(new BaseLogger()));
        logger.log("hello");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>
