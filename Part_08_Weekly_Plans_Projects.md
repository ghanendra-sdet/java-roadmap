# Weekly Practice Plans, Projects & Checkpoints

This section outlines the 14-week study plan, 6 major milestone projects, and interview checkpoints to take a learner from absolute beginner to production-ready developer.

---

## 📅 The 14-Week Curriculum & Weekly Practice Plans

### Week 1-2: Java Programming Foundations (Milestone 1)
* **Goal**: Master basic compiler settings, printing variables, data types, and reading input.
* **Practice Plan**:
  * **Day 1-3**: Study syntax, create main methods, and work through problems 1.1 to 1.6.
  * **Day 4-6**: Study primitive variable ranges, overflow behaviors, casting, and work through problems 1.7 to 1.12.
  * **Day 7-9**: Study string pool mechanics, immutability, manipulation methods, and work through problems 1.13 to 1.18.
  * **Day 10-12**: Read inputs using the Scanner class, handle input mismatches, and work through problems 1.19 to 1.24.
  * **Day 13-14**: Work through Level 1 algorithmic challenges (problems 1.25 to 1.30) and complete **Milestone Project 1**.

### Week 3-4: Control Flow, Iterations & Arrays (Milestone 2)
* **Goal**: Learn branching logic, loops, and index-based array collections.
* **Practice Plan**:
  * **Day 1-3**: Write conditions, switch blocks, ternary operators, and solve problems 2.1 to 2.7.
  * **Day 4-6**: Implement loops (for, while, do-while), nested loops, and solve problems 2.8 to 2.14.
  * **Day 7-9**: Declare and traverse 1D and 2D arrays, transpose matrices, and solve problems 2.15 to 2.21.
  * **Day 10-12**: Work through Level 2 & 3 algorithms (Fibonacci, primes, sorting, binary search, two-pointer arrays) and solve problems 2.22 to 2.35.
  * **Day 13-14**: Review array boundary safety and complete **Milestone Project 2**.

### Week 5-7: Object-Oriented Programming (Milestone 3)
* **Goal**: Master encapsulation, inheritance, polymorphism, abstract classes, and interfaces.
* **Practice Plan**:
  * **Week 5 (Day 1-7)**: Write Java methods (returns, parameters, static vs. instance, recursion) and solve problems 3.1 to 3.7.
  * **Week 6 (Day 8-14)**: Create classes, objects, custom constructors, encapsulate fields, and solve problems 3.8 to 3.14.
  * **Week 7 (Day 15-21)**: Override methods, extend classes, implement interfaces, apply design patterns, and solve problems 3.15 to 3.35. Complete **Milestone Project 3**.

### Week 8-9: Exception Handling, Collections & File IO (Milestone 4)
* **Goal**: Build fault-tolerant programs, work with core collections (Lists, Sets, Maps, Stacks, Queues), and read/write disk files.
* **Practice Plan**:
  * **Day 1-4**: Handle exception flows (try-catch-finally, throws, custom classes) and solve problems 4.1 to 4.10.
  * **Day 5-9**: Use Java collections (ArrayLists, HashSets, HashMaps, Stacks, Queues, Comparators) and solve problems 4.11 to 4.20.
  * **Day 10-12**: Read/write text and binary files, serialize objects, and solve problems 4.21 to 4.30.
  * **Day 13-14**: Complete **Milestone Project 4**.

### Week 10-12: Modern Java 8+, Concurrency & JDBC (Milestone 5)
* **Goal**: Learn lambdas, Streams API, thread concurrency, locks, database connections, and design patterns.
* **Practice Plan**:
  * **Week 10 (Day 1-7)**: Apply Java 8+ features (lambdas, functional predicates, Streams API, Optionals) and solve problems 5.1 to 5.10.
  * **Week 11 (Day 8-14)**: Implement multithreading (Runnable, Thread pools, synchronization locks, wait/notify) and solve problems 5.11 to 5.20.
  * **Week 12 (Day 15-21)**: Connect to databases using JDBC and apply software design patterns (Singleton, Factory, Builder, Observer). Solve problems 5.21 to 5.35 and complete **Milestone Project 5**.

### Week 13-14: Technical Interview Preparation & Mastery (Milestone 6)
* **Goal**: Solve algorithmic interview questions and complete the final 60-problem Java Mastery Challenge.
* **Practice Plan**:
  * **Day 1-5**: Solve high-frequency interview data structure questions (Linked Lists, Binary Trees, DFS/BFS Graphs) in problems 6.1 to 6.32.
  * **Day 6-9**: Solve Dynamic Programming optimization challenges (problems 6.33 to 6.40).
  * **Day 10-13**: Work through the 60 mixed problems in the **Java Mastery Challenge** (Part 7).
  * **Day 14**: Run final project integrations and prepare your developer portfolio!

---

## 🛠️ The 6 Milestone Mini-Projects

### Milestone Project 1: CLI Personal Finance Tracker & Budget Planner
* **Description**: Create a command-line interface application that helps users track income, expenses, and monthly budget limits.
* **Technical Constraints**:
  * Only use primitive variables, strings, basic print statements, and the Scanner class. Do not use arrays or collections.
  * Save inputs to running variables (e.g., `double totalIncome`, `double totalExpenses`).
  * Support user actions using a loop menu (e.g., `1. Add Income`, `2. Add Expense`, `3. View Balance`, `4. Exit`).
* **Milestone Criteria**: Correctly calculates positive and negative balances and displays formatted summaries.

### Milestone Project 2: CLI Student Grade Management & Reporting System
* **Description**: Build a system that records student names and grades, calculates class statistics, and outputs a performance report.
* **Technical Constraints**:
  * Store names and grades in parallel arrays (e.g., `String[] students`, `double[] grades`).
  * Calculate minimum, maximum, and average grades.
  * Sort students by their grades in descending order using Bubble Sort.
* **Milestone Criteria**: Correctly handles arrays and implements sorted student reports.

### Milestone Project 3: CLI Banking & Transaction Console (OOP-based)
* **Description**: Design an object-oriented banking console supporting customer accounts, deposits, withdrawals, and savings accounts with interest rates.
* **Technical Constraints**:
  * Use inheritance: a base class `Account` with subclasses `SavingsAccount` and `CheckingAccount`.
  * Encapsulate account properties. Expose changes only through deposit/withdraw transactions with balance validation.
  * Implement polymorphism: override methods to apply unique transaction fees depending on account types.
* **Milestone Criteria**: Prevents negative account balances and runs correct polymorphic fees.

### Milestone Project 4: Local Inventory Management System with File Storage
* **Description**: Create an application to track warehouse product inventories. It should read and write inventory data to local files on disk.
* **Technical Constraints**:
  * Use the Java Collections Framework: store inventories inside a `HashMap<String, Product>`.
  * Handle invalid transactions safely using try-catch blocks and custom exceptions (e.g., `OutOfStockException`).
  * Read and write inventory states to an `inventory.txt` file on disk. Support object serialization to save and load configuration settings.
* **Milestone Criteria**: Correctly saves and loads inventory files on startup and shutdown.

### Milestone Project 5: Multithreaded Database-backed Library System
* **Description**: Create a library database application where catalog searches and book loans are logged in database tables.
* **Technical Constraints**:
  * Connect to a database (SQLite or H2) using JDBC. Create `books` and `loans` tables.
  * Use multithreading: process book checkouts concurrently, simulating delays using `Thread.sleep()`.
  * Synchronize critical sections to prevent double-booking the same book. Use PreparedStatements to secure SQL operations.
* **Milestone Criteria**: Prevents race conditions during concurrent book checkouts and saves transaction records to the database.

### Milestone Project 6: High-Frequency Interview Cheat Sheet Console
* **Description**: Build a mock interview test runner console that lets users select a topic and run interactive tests.
* **Technical Constraints**:
  * Integrate sorting algorithms (Merge Sort/Quick Sort) and search techniques (Binary Search).
  * Group coding challenges by tags (e.g., Two Pointers, Linked Lists, Recursion, DP).
  * Expose an interactive CLI menu that displays problem descriptions, prompts for inputs, evaluates solutions, and shows performance metrics.
* **Milestone Criteria**: Correctly evaluates algorithmic inputs and runs performance metrics.

---

## 🏁 Coding Interview Preparation Checkpoints

Review these checkpoints to assess your interview readiness.

### Checkpoint 1: Code Correctness & Primitives
- [ ] Do you know when to use float/double vs. integer division?
- [ ] Can you safely clear Scanner input buffers to prevent input skip bugs?
- [ ] Do you always compare String contents using `.equals()` instead of `==`?

### Checkpoint 2: Data Structures & Collections
- [ ] Can you select the correct collection for a task? (ArrayList for index lookups, HashSet for uniqueness, HashMap for key-value lookups).
- [ ] Can you safely remove elements during collection traversal without triggering a `ConcurrentModificationException`?
- [ ] Do you know when and how to implement `Comparable` and `Comparator` interfaces?

### Checkpoint 3: OOP Architecture
- [ ] Can you explain the difference between method overloading (compile-time) and method overriding (runtime)?
- [ ] Do you know the difference between abstract classes (supporting fields and constructors) and interfaces (defining behaviors)?
- [ ] Do you know how to write a thread-safe singleton class using double-checked locking?

### Checkpoint 4: Algorithmic Efficiency
- [ ] Can you evaluate the Big-O time and space complexity of your algorithms?
- [ ] Can you optimize search operations in sorted arrays from $O(N)$ (linear search) to $O(\log N)$ (binary search)?
- [ ] Can you explain how top-down memoization and bottom-up tabulation optimize recursive algorithms?
