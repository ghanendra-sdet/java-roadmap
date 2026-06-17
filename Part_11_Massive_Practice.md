# Milestone 7: Massive Java Practice Roadmap

This milestone is a comprehensive, solution-free repository of Java programming exercises, coding challenges, and project ideas. It covers all key areas of Java development, structured from basic syntax to advanced algorithms and enterprise-level concepts.

---

## 1. Java Basics

### Concepts to Learn First:
* Java execution model (Compilation: `.java` to `.class` bytecode; Execution: JVM execution).
* Structure of a Java class and the signature of the `main` method.
* Standard console output using `System.out.print()`, `System.out.println()`, and `System.out.printf()`.
* Commenting code (Single-line `//`, Multi-line `/* */`, Javadoc `/** */`).

### Easy Programs:
### [ ] Problem 11.1: Write a Java Program to Print a Custom Welcome Message inside a Console Border. [Easy] [Topic: Java Basics]
   * **Problem Statement**: Create a class named `WelcomeBanner` and write a program to output a welcome message surrounded by asterisks (`*`) in a rectangular box format.
   * **Input**: None.
   * **Output**:
     ```text
     *********************************
     *   Welcome to Java Bootcamp    *
     *********************************
     ```
### [ ] Problem 11.2: Write a Java Program to Print a Simple Text-Art Christmas Tree on the Console. [Easy] [Topic: Java Basics]
   * **Problem Statement**: Write a program that uses print statements to draw a simple triangular shape using asterisks representing a Christmas tree.
   * **Input**: None.
   * **Output**:
     ```text
        *
       ***
      *****
        |
     ```
### [ ] Problem 11.3: Write a Java Program to Display System Information Details on the Console. [Easy] [Topic: Java Basics]
   * **Problem Statement**: Write a program that displays hardcoded strings for operating system type, version, and RAM capacity.
   * **Input**: None.
   * **Output**: Console lines showing system specifications.

### Medium Programs:
### [ ] Problem 11.4: Write a Java Program to Print a Formatted Table of Weekly Temperature Readings. [Medium] [Topic: Java Basics]
   * **Problem Statement**: Use formatted output (`System.out.printf()`) to display a tabular chart of days of the week alongside their corresponding high and low temperatures.
   * **Input**: None.
   * **Output**: Tabular output with columns aligned.
### [ ] Problem 11.5: Write a Java Program to Print a Simulated Multi-Line Startup Diagnostic Log. [Medium] [Topic: Java Basics]
   * **Problem Statement**: Write a program that outputs 5 lines of system logs, each starting with a bracketed timestamp and severity tag (e.g., `[INFO]`, `[WARN]`).
   * **Input**: None.
   * **Output**: Log rows on separate lines.

### Hard Programs:
### [ ] Problem 11.6: Write a Java Program to Print a Multi-Stage ASCII Art Bar Chart for Financial Progress. [Hard] [Topic: Java Basics]
   * **Problem Statement**: Write a program that outputs three vertical bars of different heights using character structures (`#`, `|`) to simulate a progress chart on a grid.
   * **Input**: None.
   * **Output**: A coordinate-like grid showing vertical bars.

### Frequently Asked Interview Problems:
### [ ] Problem 11.7: Write a Java Program to Explain the Purpose of JVM, JRE, and JDK in Console Output. [Easy] [Topic: Java Basics] [Company: TCS]
   * **Problem Statement**: Write a console program that prints a brief, structured text summary comparing the roles of Java Virtual Machine (JVM), Java Runtime Environment (JRE), and Java Development Kit (JDK).
   * **Input**: None.
   * **Output**: Structured bullet points.
### [ ] Problem 11.8: Write a Java Program to Demonstrate the Exact Execution Sequence of Static Block vs. Main Method. [Medium] [Topic: Java Basics] [Company: Infosys]
   * **Problem Statement**: Write a Java class containing both a `static` initialization block and a `main` method. The program should print identifiers from each block to prove which executes first.
   * **Input**: None.
   * **Output**: Sequence markers.

### Real-World Coding Challenges:
### [ ] Problem 11.9: Write a Java Program to Print a Mock System Receipt for a Retail Store Sale. [Medium] [Topic: Java Basics]
   * **Problem Statement**: Write a program using `printf` alignment to format a store checkout receipt, showing item name columns, prices, quantities, taxes, and final totals.
   * **Input**: None.
   * **Output**: A mock receipt block.

### Mini-Project Ideas:
* **Interactive CLI Personal Portfolio**: Write a Java program that displays a multi-page interactive CV/portfolio when the user navigates using console inputs.

### Major Project Ideas:
* **Terminal Dashboard System**: Write a Java program to render a dynamic console dashboard showing system health alerts, disk status, and log messages using formatted ASCII borders.

---

## 2. Variables and Data Types

### Concepts to Learn First:
* Primitive data types: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`.
* Reference types: Strings, Arrays, and Object references.
* Explicit and implicit type casting (widening vs. narrowing conversions).
* Variable scope: Local, Instance, and Static variables.
* The `final` keyword for defining constants.

### Easy Programs:
### [ ] Problem 11.10: Write a Java Program to Calculate the Simple Interest Using Float Variables. [Easy] [Topic: Variables and Data Types]
    * **Problem Statement**: Define double variables for principal amount, annual rate of interest, and time duration in years. Calculate and print the simple interest.
    * **Input**: Principal = 5000.0, Rate = 5.5, Time = 3.
    * **Output**: Simple Interest calculated.
### [ ] Problem 11.11: Write a Java Program to Convert Celsius Temperature to Fahrenheit and Kelvin. [Easy] [Topic: Variables and Data Types]
    * **Problem Statement**: Declare a double variable for Celsius temperature and convert it to Fahrenheit and Kelvin using arithmetic assignments.
    * **Input**: Celsius = 25.0.
    * **Output**: Value in Fahrenheit and Kelvin.
### [ ] Problem 11.12: Write a Java Program to Display the Minimum and Maximum Limits of All Primitive Types. [Easy] [Topic: Variables and Data Types]
    * **Problem Statement**: Write a program that outputs the MIN_VALUE and MAX_VALUE constants of wrapper classes (Byte, Short, Integer, Long, Float, Double).
    * **Input**: None.
    * **Output**: List of limit ranges.

### Medium Programs:
### [ ] Problem 11.13: Write a Java Program to Swap Two Floating-Point Variables Without Using a Temporary Helper. [Medium] [Topic: Variables and Data Types]
    * **Problem Statement**: Swap two double variables `a` and `b` using addition and subtraction operations, without declaring any third variable.
    * **Input**: `a = 15.75`, `b = 22.50`.
    * **Output**: Swapped states.
### [ ] Problem 11.14: Write a Java Program to Demonstrate Explicit Casting and Precision Loss in Float-to-Byte Conversion. [Medium] [Topic: Variables and Data Types]
    * **Problem Statement**: Store a fractional float value like `382.99` in a double, then explicitly cast it to a float, long, int, and byte, showing the precision loss at each step.
    * **Input**: `value = 382.99`.
    * **Output**: Casted values.

### Hard Programs:
### [ ] Problem 11.15: Write a Java Program to Determine If a Long Integer Addition Will Result in Overflow. [Hard] [Topic: Variables and Data Types]
    * **Problem Statement**: Given two `long` values, write a program to check if their sum will overflow the capacity of a 64-bit signed long before executing the addition.
    * **Input**: Two long values.
    * **Output**: Boolean or descriptive message indicating if overflow is imminent.

### Frequently Asked Interview Problems:
### [ ] Problem 11.16: Write a Java Program to Print the Binary Representation of Floating-Point Bits. [Medium] [Topic: Variables and Data Types] [Company: Wipro]
    * **Problem Statement**: Convert a float value to its raw IEEE 754 bit layout integer representation and print it as a binary string.
    * **Input**: `float = 1.0f`.
    * **Output**: Binary bit representation.
### [ ] Problem 11.17: Write a Java Program to Demonstrate the Difference Between local variables and class instance variables. [Easy] [Topic: Variables and Data Types] [Company: Cognizant]
    * **Problem Statement**: Write a program that attempts to print an uninitialized local variable vs. an uninitialized instance variable to show default values and compilation errors.
    * **Input**: None.
    * **Output**: Compilation details and default output.

### Real-World Coding Challenges:
### [ ] Problem 11.18: Write a Java Program to Model and Display a Bank Customer Ledger Entry Using Proper Decimal Scale. [Medium] [Topic: Variables and Data Types]
    * **Problem Statement**: Declare appropriate data types for a ledger transaction containing transaction ID (string), transaction type (char), account balance (double), and active status (boolean).
    * **Input**: Individual parameters.
    * **Output**: Formatted transaction row.

### Mini-Project Ideas:
* **Metric Conversion Engine**: Write a Java program that converts distance, mass, and volume measurements between metric and imperial units using constant conversion factors.

### Major Project Ideas:
* **Precision Math Accounting ledger Simulator**: Build a program that calculates compounds, dividends, and interest scales, tracking accuracy using strict numeric ranges.

---

## 3. Input and Output

### Concepts to Learn First:
* The `Scanner` class (`java.util.Scanner`) for console input.
* Buffer reading issues (clearing the trailing newline when reading string lines after numbers).
* Output formatting using `System.out.printf()`.
* Reading primitive types vs. tokenized strings.

### Easy Programs:
### [ ] Problem 11.19: Write a Java Program to Read User Profile details and Print a Formatted Card. [Easy] [Topic: Input and Output]
    * **Problem Statement**: Prompt the user to input their name, age, city, and hobby. Store these variables and print them formatted inside a border.
    * **Input**: Keyboard console input.
    * **Output**: Console greeting box.
### [ ] Problem 11.20: Write a Java Program to Calculate the Simple Area of a Circle from a Console Inputted Radius. [Easy] [Topic: Input and Output]
    * **Problem Statement**: Prompt the user to input a double value for radius, compute the circle's area, and display the result rounded to three decimal places.
    * **Input**: Radius value.
    * **Output**: Formatted decimal string.
### [ ] Problem 11.21: Write a Java Program to Read and Add Two Float Numbers from the Console. [Easy] [Topic: Input and Output]
    * **Problem Statement**: Read two floating-point inputs, sum them, and print their sum.
    * **Input**: Float 1 and Float 2.
    * **Output**: Sum.

### Medium Programs:
### [ ] Problem 11.22: Write a Java Program to Parse a Single-Line CSV String Entered by the User. [Medium] [Topic: Input and Output]
    * **Problem Statement**: Prompt the user to input a single line containing comma-separated values (e.g., name, age, salary). Split the string and display each value on a new line.
    * **Input**: String: `"Karan,24,55000"`.
    * **Output**: Three formatted lines.
### [ ] Problem 11.23: Write a Java Program to Read an Integer Safely from Console Input by Validating the Buffer. [Medium] [Topic: Input and Output]
    * **Problem Statement**: Prompt the user for an integer. If the user inputs text instead, print an error and ask again until they enter a valid integer (handling `InputMismatchException`).
    * **Input**: Mixed console inputs.
    * **Output**: Valid parsed integer.

### Hard Programs:
### [ ] Problem 11.24: Write a Java Program to Simulate a Multi-Column Ledger Screen with Dynamic Spacing. [Hard] [Topic: Input and Output]
    * **Problem Statement**: Write a program that prompts the user for multiple product titles, prices, and quantities, then renders them dynamically in column-aligned rows.
    * **Input**: Repeated user inputs.
    * **Output**: Formatted grid table.

### Frequently Asked Interview Problems:
### [ ] Problem 11.25: Write a Java Program to Demonstrate the Scanner Buffer Trap When Reading String Lines After Integer Inputs. [Medium] [Topic: Input and Output] [Company: Wipro]
    * **Problem Statement**: Write a program that prompts for an age (int) then a name (String) using `scanner.nextLine()`. Demonstrate the newline skip bug and solve it.
    * **Input**: `25` followed by `Aman`.
    * **Output**: Successfully stored age and name.

### Real-World Coding Challenges:
### [ ] Problem 11.26: Write a Java Program to Parse a User Input Command String into Action Arguments. [Medium] [Topic: Input and Output]
    * **Problem Statement**: Read a full console instruction command (e.g., `create file.txt 500`). Extract the command keyword, file name, and file size parameters.
    * **Input**: Console string.
    * **Output**: Parameter listing.

### Mini-Project Ideas:
* **Interactive CLI Personal Budget Entry**: Write a program to capture weekly expense types and values from the user, outputting summary tables.

### Major Project Ideas:
* **Interactive Command Console Interpreter**: Build a program that simulates a mini Unix terminal prompt, parsing commands like `help`, `show`, `version`, `exit` with parameters.

---

## 4. Operators

### Concepts to Learn First:
* Arithmetic Operators (`+`, `-`, `*`, `/`, `%`).
* Relational Operators (`==`, `!=`, `<`, `>`, `<=`, `>=`).
* Logical Operators (`&&`, `||`, `!`).
* Assignment and Compound Operators (`+=`, `-=`, `*=`, `/=`, `%=`).
* Bitwise Operators (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`).
* Unary Operators (`++`, `--`).
* Ternary Operator (`? :`).

### Easy Programs:
### [ ] Problem 11.27: Write a Java Program to Determine If a Number is a Multiple of Both 3 and 7. [Easy] [Topic: Operators]
    * **Problem Statement**: Write a program that checks if a given integer is divisible by both 3 and 7 using logical operators.
    * **Input**: `42`.
    * **Output**: Boolean or text indicating divisibility status.
### [ ] Problem 11.28: Write a Java Program to Find the Minimum of Two Numbers Using the Ternary Operator. [Easy] [Topic: Operators]
    * **Problem Statement**: Use the conditional ternary operator to identify and print the smaller of two variable values.
    * **Input**: `x = 45`, `y = 12`.
    * **Output**: Smaller number.
### [ ] Problem 11.29: Write a Java Program to Demonstrate Post-increment vs Pre-increment Behavior. [Easy] [Topic: Operators]
    * **Problem Statement**: Print variables using `i++` and `++i` to visually inspect differences in assignment order.
    * **Input**: Variable `i = 5`.
    * **Output**: Sequence values showing timing difference.

### Medium Programs:
### [ ] Problem 11.30: Write a Java Program to Evaluate a Complex Boolean Logic Expression. [Medium] [Topic: Operators]
    * **Problem Statement**: Write a program that evaluates if a credit applicant gets approved based on: `(Score > 700 OR Income > 50000) AND DebtRatio < 0.4`.
    * **Input**: Numeric fields.
    * **Output**: Approval status (boolean).
### [ ] Problem 11.31: Write a Java Program to Perform Basic Bitwise Multiplication and Division by Powers of Two. [Medium] [Topic: Operators]
    * **Problem Statement**: Multiply and divide an integer by 4 using bitwise left-shift (`<<`) and right-shift (`>>`) operators.
    * **Input**: `number = 32`.
    * **Output**: Results of shifts.

### Hard Programs:
### [ ] Problem 11.32: Write a Java Program to Count the Number of Set Bits in an Integer Without Built-in Functions. [Hard] [Topic: Operators]
    * **Problem Statement**: Count how many bits are set to `1` in the binary representation of a given integer using bitwise operators.
    * **Input**: `29` (binary `11101`).
    * **Output**: Set bit count (4).

### Frequently Asked Interview Problems:
### [ ] Problem 11.33: Write a Java Program to Determine If a Number is a Power of Two Using Bitwise Logical Operators. [Medium] [Topic: Operators] [Company: TCS]
    * **Problem Statement**: Write an expression checking if an integer is a power of 2 using only the bitwise AND operator.
    * **Input**: `64`.
    * **Output**: Boolean.
### [ ] Problem 11.34: Write a Java Program to Swap Two Integers Using Bitwise XOR Operators. [Easy] [Topic: Operators] [Company: Zoho]
    * **Problem Statement**: Swap two integer variables without using a temp variable or arithmetic addition/subtraction.
    * **Input**: `a = 9`, `b = 14`.
    * **Output**: Swapped states.

### Real-World Coding Challenges:
### [ ] Problem 11.35: Write a Java Program to Map Permission Flags Using a Single Byte Bitmask. [Hard] [Topic: Operators]
    * **Problem Statement**: Represent Read (4), Write (2), and Execute (1) permissions in a single integer flag and verify individual flags using bitwise masking.
    * **Input**: Binary permissions.
    * **Output**: Verification outputs.

### Mini-Project Ideas:
* **Interactive CLI Boolean Logic Evaluator**: Write a program that takes boolean variables and expression strings from the user, outputting truth outcomes.

### Major Project Ideas:
* **Bitmask Permission Manager Console**: Build a system that manages multiple users and flags permissions (Read/Write/Edit/Delete) using binary masks, checking accesses.

---

## 5. Conditional Statements

### Concepts to Learn First:
* Conditional branching: `if`, `if-else`, and nested `if-else` structures.
* The `switch` statement (classic syntax and enhanced switch expressions).
* Handling fall-through in switch blocks.
* Multiple condition checking using logical operators.

### Easy Programs:
### [ ] Problem 11.36: Write a Java Program to Classify a Given Character as Vowel, Consonant, Digit, or Special Symbol. [Easy] [Topic: Conditional Statements]
    * **Problem Statement**: Accept a character and use if-else checks to categorize it.
    * **Input**: `ch = 'k'`.
    * **Output**: Category description.
### [ ] Problem 11.37: Write a Java Program to Determine If a Inputted Number is Divisible by 5 and 11. [Easy] [Topic: Conditional Statements]
    * **Problem Statement**: Write a program that checks whether a user-inputted number is divisible by 5 and 11 using if conditions.
    * **Input**: `55`.
    * **Output**: Boolean or status string.
### [ ] Problem 11.38: Write a Java Program to Convert Number Grades (0-100) to Letter Grade Marks. [Easy] [Topic: Conditional Statements]
    * **Problem Statement**: Classify an input grade into standard categories: A (>=90), B (80-89), C (70-79), D (60-69), F (<60).
    * **Input**: `84`.
    * **Output**: Letter grade.

### Medium Programs:
### [ ] Problem 11.39: Write a Java Program to Display the Day Name of the Week Using the New Enhanced Switch Expression. [Medium] [Topic: Conditional Statements]
    * **Problem Statement**: Accept an integer from 1 to 7 and return the day of the week using the enhanced arrow syntax `switch` expression introduced in Java 12.
    * **Input**: `3`.
    * **Output**: `"Wednesday"`.
### [ ] Problem 11.40: Write a Java Program to Find the Roots of a Quadratic Equation Using if-else Branches. [Medium] [Topic: Conditional Statements]
    * **Problem Statement**: Calculate discriminant $D = b^2 - 4ac$ and use conditional logic to output real, imaginary, or equal roots.
    * **Input**: `a = 1, b = -5, c = 6`.
    * **Output**: Value of roots.

### Hard Programs:
### [ ] Problem 11.41: Write a Java Program to Calculate Income Tax Slabs with Multiple Progressive Brackets. [Hard] [Topic: Conditional Statements]
    * **Problem Statement**: Write a tax calculator implementing slab brackets (0% up to 2.5L, 5% up to 5L, 20% up to 10L, 30% above 10L).
    * **Input**: Income = 12,50,000.
    * **Output**: Total Tax.

### Frequently Asked Interview Problems:
### [ ] Problem 11.42: Write a Java Program to Check If a Given Year is a Leap Year Using Nested Divisibility Checks. [Medium] [Topic: Conditional Statements] [Company: TCS]
    * **Problem Statement**: Test if a year is leap using standard conditions (divisible by 4, not by 100 unless also by 400).
    * **Input**: `1900`.
    * **Output**: `"Not a Leap Year"`.
### [ ] Problem 11.43: Write a Java Program to Design a Simple Calculator Menu Using a Switch Statement. [Easy] [Topic: Conditional Statements] [Company: Wipro]
    * **Problem Statement**: Accept two operands and a operator character (`+`, `-`, `*`, `/`) and run the math using switch cases.
    * **Input**: Operand1 = 10, Operand2 = 5, Operator = `/`.
    * **Output**: 2.

### Real-World Coding Challenges:
### [ ] Problem 11.44: Write a Java Program to Calculate Shipping Costs Based on Distance and Weight Brackets. [Medium] [Topic: Conditional Statements]
    * **Problem Statement**: Evaluate shipping fees using progressive weight categories and regional tier multiplier codes.
    * **Input**: Package details.
    * **Output**: Shipping price.

### Mini-Project Ideas:
* **Interactive CLI Tax Calculator**: Write a CLI program that guides a taxpayer through deductions and returns a computed tax.

### Major Project Ideas:
* **ATM Simulation Terminal Engine**: Build an interactive CLI ATM menu supporting validation, withdrawals, balance lookups, and card pins.

---

## 6. Loops

### Concepts to Learn First:
* The `while` loop (pre-test iteration).
* The `do-while` loop (post-test iteration, executes at least once).
* The standard `for` loop (counter-controlled iteration).
* The enhanced `for-each` loop (for arrays and collections).
* Control statements: `break`, `continue`, and labeled break/continue statements.
* Avoiding infinite loop traps.

### Easy Programs:
### [ ] Problem 11.45: Write a Java Program to Print the Multiplication Table of a User-Inputted Number. [Easy] [Topic: Loops]
    * **Problem Statement**: Print the table of a number from 1 to 10 using a loop.
    * **Input**: `8`.
    * **Output**: Table rows.
### [ ] Problem 11.46: Write a Java Program to Calculate the Sum of First N Natural Numbers using a While Loop. [Easy] [Topic: Loops]
    * **Problem Statement**: Sum numbers from 1 to N.
    * **Input**: `N = 100`.
    * **Output**: `5050`.
### [ ] Problem 11.47: Write a Java Program to Count the Number of Digits in an Integer. [Easy] [Topic: Loops]
    * **Problem Statement**: Extract digits of a number successively by dividing by 10 in a loop.
    * **Input**: `456382`.
    * **Output**: `6`.

### Medium Programs:
### [ ] Problem 11.48: Write a Java Program to Print the Fibonacci Sequence up to N Terms. [Medium] [Topic: Loops]
    * **Problem Statement**: Generate the series $0, 1, 1, 2, 3, 5, 8, ...$ using iterative variables.
    * **Input**: `N = 10`.
    * **Output**: First 10 terms.
### [ ] Problem 11.49: Write a Java Program to Check If a Given Number is Prime. [Medium] [Topic: Loops]
    * **Problem Statement**: Check for factors of a number from 2 up to $\sqrt{N}$.
    * **Input**: `97`.
    * **Output**: True.

### Hard Programs:
### [ ] Problem 11.50: Write a Java Program to Find All Prime Numbers inside a Specified Range. [Hard] [Topic: Loops]
    * **Problem Statement**: List primes between start and end bounds using nested loops.
    * **Input**: Range `[10, 50]`.
    * **Output**: Primes list.

### Frequently Asked Interview Problems:
### [ ] Problem 11.51: Write a Java Program to Check If a Given Number is an Armstrong Number. [Medium] [Topic: Loops] [Company: TCS]
    * **Problem Statement**: An Armstrong number is a number where the sum of its digits raised to the power of the number of digits equals the number itself.
    * **Input**: `153` (digits cubed sum to 153).
    * **Output**: True.
### [ ] Problem 11.52: Write a Java Program to Find the Greatest Common Divisor of Two Numbers. [Medium] [Topic: Loops] [Company: Infosys]
    * **Problem Statement**: Calculate the GCD (HCF) of two values using Euclid's loop method.
    * **Input**: `54, 24`.
    * **Output**: `6`.

### Real-World Coding Challenges:
### [ ] Problem 11.53: Write a Java Program to Simulate a Simple Number Guessing Game with Loop Repetitions. [Medium] [Topic: Loops]
    * **Problem Statement**: Prompt the user to guess a secret number, giving high/low feedback until they hit the number or exceed attempts.
    * **Input**: Guess sequence.
    * **Output**: Attempt feedback.

### Mini-Project Ideas:
* **Interactive Multiplication Quiz Application**: Write a CLI quiz that generates math problems, keeping track of scores.

### Major Project Ideas:
* **Interactive Console Text Adventure Engine**: Build a CLI adventure where players move between rooms, processing actions using game loops.

---

## 7. Methods and Functions

### Concepts to Learn First:
* Method declaration: return types, parameters, signature, and naming conventions.
* Method invocation: Call by value in Java (understanding how references are passed).
* Method overloading (compile-time polymorphism).
* Variable argument lists (Varargs).
* Static vs. instance methods.

### Easy Programs:
### [ ] Problem 11.54: Write a Java Program to Calculate Area of Rectangle Using a Dedicated Method. [Easy] [Topic: Methods and Functions]
    * **Problem Statement**: Write a method `double getArea(double length, double width)` and call it.
    * **Input**: Dimensions.
    * **Output**: Computed Area.
### [ ] Problem 11.55: Write a Java Program to Determine If a Number is Even Using a Boolean Helper Method. [Easy] [Topic: Methods and Functions]
    * **Problem Statement**: Implement `boolean isEven(int n)` returning true if even.
    * **Input**: `24`.
    * **Output**: True.
### [ ] Problem 11.56: Write a Java Program to Print a Customized Array Using a Helper Method. [Easy] [Topic: Methods and Functions]
    * **Problem Statement**: Create a method that accepts an array of strings and prints it as a comma-separated list inside brackets.
    * **Input**: Array elements.
    * **Output**: Bracketed string.

### Medium Programs:
### [ ] Problem 11.57: Write a Java Program to Implement Method Overloading for Calculating Areas of Different Shapes. [Medium] [Topic: Methods and Functions]
    * **Problem Statement**: Define overloaded versions of `calculateArea()` for circle (radius), rectangle (width, height), and triangle (base, height).
    * **Input**: Varied inputs.
    * **Output**: Computed areas.
### [ ] Problem 11.58: Write a Java Program to Calculate the Average of an Arbitrary Number of Inputs Using Varargs. [Medium] [Topic: Methods and Functions]
    * **Problem Statement**: Write a method `double calculateAverage(double... values)` and test it.
    * **Input**: Different count arrays.
    * **Output**: Computed average.

### Hard Programs:
### [ ] Problem 11.59: Write a Java Program to Implement a Custom Matrix Multiplication Utility Method. [Hard] [Topic: Methods and Functions]
    * **Problem Statement**: Write a method that takes two 2D double arrays and returns their matrix product, verifying valid dimensions.
    * **Input**: Two 2D matrices.
    * **Output**: Resulting matrix.

### Frequently Asked Interview Problems:
### [ ] Problem 11.60: Write a Java Program to Demonstrate Java Pass-by-Value Behavior with Primitives vs Object References. [Medium] [Topic: Methods and Functions] [Company: Cognizant]
    * **Problem Statement**: Write methods modifying an integer parameter vs. mutating an array inside parameters to prove Java is pass-by-value.
    * **Input**: Numeric and reference arguments.
    * **Output**: Values before and after modification checks.

### Real-World Coding Challenges:
### [ ] Problem 11.61: Write a Java Program to Validate a User Registration Form using Helper Utility Methods. [Medium] [Topic: Methods and Functions]
    * **Problem Statement**: Write static validation helpers for email strings, age ranges, and password length checks.
    * **Input**: User fields.
    * **Output**: Verification outcomes.

### Mini-Project Ideas:
* **Console Mathematical Formula Toolbox**: Write a CLI tool providing standard geometry and algebra methods.

### Major Project Ideas:
* **Custom CLI Command Router Framework**: Build a console routing system that maps inputs to corresponding java methods.

---

## 8. Pattern Programming

### Concepts to Learn First:
* Nested loop operations.
* Inner loop bounds controlled by the outer loop variable.
* Manipulating rows, columns, and whitespace spacing.

### Easy Programs:
### [ ] Problem 11.62: Write a Java Program to Print a Right-Angled Triangle Pattern of Asterisks. [Easy] [Topic: Pattern Programming]
    * **Problem Statement**: Print height N right triangle.
    * **Input**: `N = 4`.
    * **Output**:
      ```text
      *
      **
      ***
      ****
      ```
### [ ] Problem 11.63: Write a Java Program to Print a Square Grid Pattern of Given Dimension. [Easy] [Topic: Pattern Programming]
    * **Problem Statement**: Print N x N hashes.
    * **Input**: `N = 3`.
    * **Output**:
      ```text
      ###
      ###
      ###
      ```
### [ ] Problem 11.64: Write a Java Program to Print a Right-Angled Number Triangle. [Easy] [Topic: Pattern Programming]
    * **Problem Statement**: Print numbers corresponding to loop indexes.
    * **Input**: `N = 4`.
    * **Output**:
      ```text
      1
      12
      123
      1234
      ```

### Medium Programs:
### [ ] Problem 11.65: Write a Java Program to Print an Inverted Pyramid Pattern of Asterisks. [Medium] [Topic: Pattern Programming]
    * **Problem Statement**: Print an inverted triangle pattern centered with spaces.
    * **Input**: `N = 3`.
    * **Output**:
      ```text
      *****
       ***
        *
      ```
### [ ] Problem 11.66: Write a Java Program to Print a Pascal Triangle Pattern. [Medium] [Topic: Pattern Programming]
    * **Problem Statement**: Print Pascal coefficients computed using combinatorics in a nested loop.
    * **Input**: `N = 4`.
    * **Output**: Pascal pyramid values.

### Hard Programs:
### [ ] Problem 11.67: Write a Java Program to Print a Hollow Diamond Pattern of Asterisks. [Hard] [Topic: Pattern Programming]
    * **Problem Statement**: Output hollow borders of diamond contours.
    * **Input**: `N = 5`.
    * **Output**: Hollow star diamond outline.

### Frequently Asked Interview Problems:
### [ ] Problem 11.68: Write a Java Program to Print Floyd's Triangle Pattern of Numbers. [Easy] [Topic: Pattern Programming] [Company: Wipro]
    * **Problem Statement**: Floyd's triangle prints consecutive integers starting at 1.
    * **Input**: `N = 4`.
    * **Output**:
      ```text
      1
      2 3
      4 5 6
      7 8 9 10
      ```

### Real-World Coding Challenges:
### [ ] Problem 11.69: Write a Java Program to Draw a Scalable Arrow Pattern on the Console. [Medium] [Topic: Pattern Programming]
    * **Problem Statement**: Generate an arrow shape pointing right using loops.
    * **Input**: Size parameter.
    * **Output**: Arrow shape.

### Mini-Project Ideas:
* **Scalable ASCII Icon Drawer**: Create a program that prints common icons (square, circle, triangle, arrow) in dynamic scales.

### Major Project Ideas:
* **Scalable Plot Graph Generator**: Build a console utility that graphs simple equations (like $y=mx+c$) on an ASCII grid.

---

## 9. Arrays

### Concepts to Learn First:
* Defining, instantiating, and initializing single-dimensional arrays.
* Memory model of arrays (stored as objects in the heap).
* Basic index traversals: `for` loops vs. `for-each` loops.
* Array manipulation operations: copying, cloning, and resizing (simulated).

### Easy Programs:
### [ ] Problem 11.70: Write a Java Program to Find the Sum and Average of Elements in an Integer Array. [Easy] [Topic: Arrays]
    * **Problem Statement**: Declare an array, calculate the total sum of its elements, and print the average.
    * **Input**: `[1, 2, 3, 4, 5]`.
    * **Output**: Sum = 15, Average = 3.0.
### [ ] Problem 11.71: Write a Java Program to Count the Occurrences of a Target Number in an Array. [Easy] [Topic: Arrays]
    * **Problem Statement**: Traverse the array and tally occurrences of value X.
    * **Input**: Array = `[1, 4, 4, 2, 4, 3]`, Target = 4.
    * **Output**: 3.
### [ ] Problem 11.72: Write a Java Program to Copy All Elements of One Array into Another. [Easy] [Topic: Arrays]
    * **Problem Statement**: Duplicate elements manually to a target array.
    * **Input**: `[10, 20, 30]`.
    * **Output**: Secondary duplicate array.

### Medium Programs:
### [ ] Problem 11.73: Write a Java Program to Remove All Duplicate Elements from a Sorted Array In-Place. [Medium] [Topic: Arrays]
    * **Problem Statement**: Modify the array to keep unique elements, returning the new length boundary.
    * **Input**: `[1, 1, 2, 2, 3, 4, 4]`.
    * **Output**: `[1, 2, 3, 4]`.
### [ ] Problem 11.74: Write a Java Program to Rotate an Array to the Right by K Steps. [Medium] [Topic: Arrays]
    * **Problem Statement**: Shift array positions circular-wise to the right by K positions.
    * **Input**: Array = `[1, 2, 3, 4, 5]`, K = 2.
    * **Output**: `[4, 5, 1, 2, 3]`.

### Hard Programs:
### [ ] Problem 11.75: Write a Java Program to Find the Largest Subarray with Zero Sum in an Unsorted Array. [Hard] [Topic: Arrays]
    * **Problem Statement**: Identify index ranges of the longest contiguous segment sum equaling 0.
    * **Input**: `[15, -2, 2, -8, 1, 7, 10, 23]`.
    * **Output**: Subarray details.

### Frequently Asked Interview Problems:
### [ ] Problem 11.76: Write a Java Program to Find the Second Largest Element in an Integer Array. [Medium] [Topic: Arrays] [Company: TCS]
    * **Problem Statement**: Find the second maximum element without sorting.
    * **Input**: `[12, 35, 1, 10, 34, 1]`.
    * **Output**: `34`.
### [ ] Problem 11.77: Write a Java Program to Reverse an Array In-Place Using the Two-Pointer Technique. [Easy] [Topic: Arrays] [Company: Wipro]
    * **Problem Statement**: Swap values from left and right boundaries migrating inward.
    * **Input**: `[1, 2, 3, 4, 5]`.
    * **Output**: `[5, 4, 3, 2, 1]`.

### Real-World Coding Challenges:
### [ ] Problem 11.78: Write a Java Program to Simulate a Simple Circular Ring Buffer for Logging Messages. [Medium] [Topic: Arrays]
    * **Problem Statement**: Implement a buffer array where new values overwrite the oldest when capacity is reached.
    * **Input**: Input sequence.
    * **Output**: Stored buffer state.

### Mini-Project Ideas:
* **Interactive CLI Student Marks Registrar**: Create a system that saves student marks, computing statistics.

### Major Project Ideas:
* **Custom Array Vector Library**: Build a utility supporting element addition, insertion, removal, and sizing allocations.

---

## 10. Multidimensional Arrays

### Concepts to Learn First:
* Defining and indexing multi-dimensional arrays (arrays of arrays).
* Row-major layout and jagged (ragged) array structures.
* Nested loop traversals for 2D grids and matrices.

### Easy Programs:
### [ ] Problem 11.79: Write a Java Program to Sum All Elements in a 2D Integer Grid. [Easy] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Traverse a 2-dimensional grid and aggregate all values.
    * **Input**: `[[1, 2], [3, 4]]`.
    * **Output**: `10`.
### [ ] Problem 11.80: Write a Java Program to Display a 2D Array as a Formatted Grid. [Easy] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Print elements row by row separated by spaces.
    * **Input**: `[[5, 6], [7, 8]]`.
    * **Output**: Format print.
### [ ] Problem 11.81: Write a Java Program to Initialize and Print a Jagged 2D Array with Variable Row Lengths. [Easy] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Define a 2D array where rows have different sizes and output its structure.
    * **Input**: Row 1 size 2, Row 2 size 3.
    * **Output**: Jagged matrix rendering.

### Medium Programs:
### [ ] Problem 11.82: Write a Java Program to Add Two Rectangular Matrices of Equal Size. [Medium] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Compute matrix addition: $C[i][j] = A[i][j] + B[i][j]$.
    * **Input**: Two 2D arrays.
    * **Output**: Sum matrix.
### [ ] Problem 11.83: Write a Java Program to Transpose a Given Square Matrix In-Place. [Medium] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Swap indices over the diagonal ($A[i][j]$ with $A[j][i]$).
    * **Input**: `[[1, 2], [3, 4]]`.
    * **Output**: `[[1, 3], [2, 4]]`.

### Hard Programs:
### [ ] Problem 11.84: Write a Java Program to Rotate a Square Matrix by 90 Degrees Clockwise. [Hard] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Shift cells clockwise by 90 degrees.
    * **Input**: `[[1, 2], [3, 4]]`.
    * **Output**: `[[3, 1], [4, 2]]`.

### Frequently Asked Interview Problems:
### [ ] Problem 11.85: Write a Java Program to Perform Matrix Multiplication and Validate Dimensions. [Medium] [Topic: Multidimensional Arrays] [Company: Infosys]
    * **Problem Statement**: Multiply an $M \times N$ matrix by an $N \times P$ matrix, validating compatibility.
    * **Input**: Two matrices.
    * **Output**: Product matrix.
### [ ] Problem 11.86: Write a Java Program to Print a 2D Matrix in a Spiral Order. [Hard] [Topic: Multidimensional Arrays] [Company: Cognizant]
    * **Problem Statement**: Print elements from outer perimeter inwards.
    * **Input**: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`.
    * **Output**: `1, 2, 3, 6, 9, 8, 7, 4, 5`.

### Real-World Coding Challenges:
### [ ] Problem 11.87: Write a Java Program to Map and Simulate a 2D Grid Game of Life State. [Hard] [Topic: Multidimensional Arrays]
    * **Problem Statement**: Compute the next generation state of Conway's Game of Life on a binary grid.
    * **Input**: Binary grid matrix.
    * **Output**: Computed grid.

### Mini-Project Ideas:
* **Terminal Tic-Tac-Toe Game Board**: Write a program storing the board state in a $3\times3$ char array.

### Major Project Ideas:
* **Terminal Spreadsheet Engine Grid**: Build a cell system supporting row sums, average values, and coordinate calculations.

---

## 11. Strings

### Concepts to Learn First:
* Java String pool model and memory storage.
* Immutability concept of strings.
* Core methods: `concat()`, `equals()`, `compareTo()`, `split()`, `substring()`, `trim()`.

### Easy Programs:
### [ ] Problem 11.88: Write a Java Program to Check If a Given String Contains a Target Substring. [Easy] [Topic: Strings]
    * **Problem Statement**: Verify if string A has subsegment B using library checks.
    * **Input**: String = `"Java Programming"`, Sub = `"Java"`.
    * **Output**: True.
### [ ] Problem 11.89: Write a Java Program to Convert a String to an Array of Characters. [Easy] [Topic: Strings]
    * **Problem Statement**: Convert a string value to a char array manually or using `.toCharArray()`.
    * **Input**: `"Code"`.
    * **Output**: `['C', 'o', 'd', 'e']`.
### [ ] Problem 11.90: Write a Java Program to Calculate the Count of Vowels and Consonants in a String. [Easy] [Topic: Strings]
    * **Problem Statement**: Parse string characters, sorting them into vowels vs consonants.
    * **Input**: `"Hello"`.
    * **Output**: Vowels = 2, Consonants = 3.

### Medium Programs:
### [ ] Problem 11.91: Write a Java Program to Reverse a String Without Using Built-in Reverse Methods. [Medium] [Topic: Strings]
    * **Problem Statement**: Swap characters from extremes to reverse strings.
    * **Input**: `"Java"`.
    * **Output**: `"avaJ"`.
### [ ] Problem 11.92: Write a Java Program to Find the First Non-Repeated Character in a String. [Medium] [Topic: Strings]
    * **Problem Statement**: Iterate and find the first character occurring exactly once.
    * **Input**: `"swiss"`.
    * **Output**: `'w'`.

### Hard Programs:
### [ ] Problem 11.93: Write a Java Program to Implement a Basic Run-Length String Compression Algorithm. [Hard] [Topic: Strings]
    * **Problem Statement**: Convert sequential characters to count tokens (e.g. `aabcccccaaa` to `a2b1c5a3`).
    * **Input**: `"aabcccccaaa"`.
    * **Output**: `"a2b1c5a3"`.

### Frequently Asked Interview Problems:
### [ ] Problem 11.94: Write a Java Program to Check If Two Strings are Anagrams of Each Other. [Medium] [Topic: Strings] [Company: TCS]
    * **Problem Statement**: Determine if two strings contain identical characters in different arrangements.
    * **Input**: `"silent"`, `"listen"`.
    * **Output**: True.
### [ ] Problem 11.95: Write a Java Program to Verify If a Given String is a Palindrome. [Easy] [Topic: Strings] [Company: Wipro]
    * **Problem Statement**: Check if the string reads same forward and backward.
    * **Input**: `"radar"`.
    * **Output**: True.

### Real-World Coding Challenges:
### [ ] Problem 11.96: Write a Java Program to Mask Sensitive Credit Card Digits in a Text Block. [Medium] [Topic: Strings]
    * **Problem Statement**: Mask all digits of a credit card string with `*` except the last 4.
    * **Input**: `"1234567890123456"`.
    * **Output**: `"************3456"`.

### Mini-Project Ideas:
* **Interactive CLI Word Counter**: Write a program parsing text lines, reporting word and sentence metrics.

### Major Project Ideas:
* **Command Line Text Parser Formatting Utility**: Build a formatting processor aligning text, stripping tabs, and wrapping columns.

---

## 12. StringBuilder and StringBuffer

### Concepts to Learn First:
* Mutable string manipulation differences.
* Buffer expansion mechanics.
* Thread safety comparisons: `StringBuilder` (non-synchronized) vs. `StringBuffer` (synchronized).

### Easy Programs:
### [ ] Problem 11.97: Write a Java Program to Concatenate Words in a Loop Using StringBuilder. [Easy] [Topic: StringBuilder and StringBuffer]
    * **Problem Statement**: Build sentences iteratively avoiding garbage objects.
    * **Input**: Array `["Java", "is", "fun"]`.
    * **Output**: `"Java is fun"`.
### [ ] Problem 11.98: Write a Java Program to Reverse a String Using StringBuilder. [Easy] [Topic: StringBuilder and StringBuffer]
    * **Problem Statement**: Use built-in mutability options to reverse a text string.
    * **Input**: `"Compiler"`.
    * **Output**: `"relipmoC"`.
### [ ] Problem 11.99: Write a Java Program to Insert and Delete Characters at Specific Indices in a StringBuilder. [Easy] [Topic: StringBuilder and StringBuffer]
    * **Problem Statement**: Modify contents of a StringBuilder using index parameters.
    * **Input**: Initial string.
    * **Output**: Altered text.

### Medium Programs:
### [ ] Problem 11.100: Write a Java Program to Remove All Occurrences of a Specified Character Using StringBuilder. [Medium] [Topic: StringBuilder and StringBuffer]
     * **Problem Statement**: Loop and strip target characters in-place.
     * **Input**: String = `"banana"`, Char = `'a'`.
     * **Output**: `"bnn"`.
### [ ] Problem 11.101: Write a Java Program to Replace Multiple Keywords in a Template String. [Medium] [Topic: StringBuilder and StringBuffer]
     * **Problem Statement**: Find and substitute placeholders (e.g. `{{name}}`) with actual strings.
     * **Input**: Template and replacements.
     * **Output**: Merged string.

### Hard Programs:
### [ ] Problem 11.102: Write a Java Program to Process Large Logs with StringBuilder and StringBuffer. [Hard] [Topic: StringBuilder and StringBuffer]
     * **Problem Statement**: Parse and format logs, comparing execution durations of both builder classes.
     * **Input**: Generated data stream.
     * **Output**: Comparative metrics.

### Frequently Asked Interview Problems:
### [ ] Problem 11.103: Write a Java Program to Explain the Mutability Difference Between String, StringBuilder, and StringBuffer. [Medium] [Topic: StringBuilder and StringBuffer] [Company: Wipro]
     * **Problem Statement**: Write a benchmark outputting timing metrics showing why StringBuilder beats String for loops.
     * **Input**: Iteration counts.
     * **Output**: Performance stats.

### Real-World Coding Challenges:
### [ ] Problem 11.104: Write a Java Program to Sanitize HTML Tags from a Document String. [Medium] [Topic: StringBuilder and StringBuffer]
     * **Problem Statement**: Strip tags enclosed in `<` and `>` using StringBuilder.
     * **Input**: `"<h1>Welcome</h1>"`.
     * **Output**: `"Welcome"`.

### Mini-Project Ideas:
* **Custom Markdown to HTML parser**: Write a program transforming headers and lists using builders.

### Major Project Ideas:
* **Fast Log Parsing Formatting Tool**: Build a processor consolidating large files with builders.

---

## 13. Recursion

### Concepts to Learn First:
* The base case vs. recursive steps.
* Stack frames and the execution model.
* Avoiding `StackOverflowError`.
* Head vs. tail recursion.

### Easy Programs:
### [ ] Problem 11.105: Write a Java Program to Calculate the Factorial of a Number Using Recursion. [Easy] [Topic: Recursion]
     * **Problem Statement**: Implement $F(n) = n \times F(n-1)$ with base case $F(0) = 1$.
     * **Input**: `5`.
     * **Output**: `120`.
### [ ] Problem 11.106: Write a Java Program to Calculate the Sum of Digits of a Number Recursively. [Easy] [Topic: Recursion]
     * **Problem Statement**: Sum digits using modulo division recursion.
     * **Input**: `1234`.
     * **Output**: `10`.
### [ ] Problem 11.107: Write a Java Program to Print Numbers from 1 to N Using Recursion. [Easy] [Topic: Recursion]
     * **Problem Statement**: Write a program that outputs integers 1 to N recursively without using loops.
     * **Input**: `5`.
     * **Output**: `1 2 3 4 5`.

### Medium Programs:
### [ ] Problem 11.108: Write a Java Program to Find the Fibonacci Sequence Term Using Recursion and Memoization. [Medium] [Topic: Recursion]
     * **Problem Statement**: Return the N-th Fibonacci term using top-down recursion optimization.
     * **Input**: `30`.
     * **Output**: `832040`.
### [ ] Problem 11.109: Write a Java Program to Reverse a String Using Recursion. [Medium] [Topic: Recursion]
     * **Problem Statement**: Extract the first character and append it to the reversed rest of the string.
     * **Input**: `"hello"`.
     * **Output**: `"olleh"`.

### Hard Programs:
### [ ] Problem 11.110: Write a Java Program to Solve the Tower of Hanoi Puzzle. [Hard] [Topic: Recursion]
     * **Problem Statement**: Move N disks from source to destination peg using a helper.
     * **Input**: `N = 3`.
     * **Output**: Sequence of peg moves.

### Frequently Asked Interview Problems:
### [ ] Problem 11.111: Write a Java Program to Generate All Permutations of a Given String Recursively. [Hard] [Topic: Recursion] [Company: TCS]
     * **Problem Statement**: Swap characters recursively to output all configurations.
     * **Input**: `"ABC"`.
     * **Output**: All permutations.
### [ ] Problem 11.112: Write a Java Program to Compute the Greatest Common Divisor Using Recursion. [Easy] [Topic: Recursion] [Company: Infosys]
     * **Problem Statement**: Euclid's recursive algorithm: `gcd(a, b) = gcd(b, a % b)`.
     * **Input**: `366, 60`.
     * **Output**: `6`.

### Real-World Coding Challenges:
### [ ] Problem 11.113: Write a Java Program to Traverse a Nested Directory Folder System Recursively. [Medium] [Topic: Recursion]
     * **Problem Statement**: List file names in sub-folders recursively.
     * **Input**: Root directory folder path.
     * **Output**: Path traces.

### Mini-Project Ideas:
* **Interactive CLI Directory Browser**: Write a CLI tool displaying files in tree structures.

### Major Project Ideas:
* **Expression Evaluator Engine**: Build a recursive descent parser solving equations with parentheses.

---

## 14. Searching Algorithms

### Concepts to Learn First:
* Linear Search (unsorted array scanning, $O(N)$).
* Binary Search (halving space on sorted data, $O(\log N)$).
* Interpolation Search vs. Binary Search.

### Easy Programs:
### [ ] Problem 11.114: Write a Java Program to Search for an Element in an Array Using Linear Search. [Easy] [Topic: Searching Algorithms]
     * **Problem Statement**: Search index of target in array, returning -1 if absent.
     * **Input**: Array = `[5, 3, 8, 2]`, Target = 8.
     * **Output**: `2`.
### [ ] Problem 11.115: Write a Java Program to Implement Iterative Binary Search on a Sorted Array. [Easy] [Topic: Searching Algorithms]
     * **Problem Statement**: Half sorted array spaces iteratively using binary search logic.
     * **Input**: Array = `[2, 5, 8, 12, 16]`, Target = 12.
     * **Output**: `3`.
### [ ] Problem 11.116: Write a Java Program to Implement Recursive Binary Search on a Sorted Array. [Easy] [Topic: Searching Algorithms]
     * **Problem Statement**: Half sorted array spaces recursively using binary search logic.
     * **Input**: Array = `[2, 5, 8, 12, 16]`, Target = 16.
     * **Output**: `4`.

### Medium Programs:
### [ ] Problem 11.117: Write a Java Program to Find the First and Last Position of a Target Element in a Sorted Array. [Medium] [Topic: Searching Algorithms]
     * **Problem Statement**: Find start and end indexes of duplicates in sorted data.
     * **Input**: Array = `[5, 7, 7, 8, 8, 10]`, Target = 8.
     * **Output**: `[3, 4]`.
### [ ] Problem 11.118: Write a Java Program to Find the Minimum Element in a Rotated Sorted Array. [Medium] [Topic: Searching Algorithms]
     * **Problem Statement**: Search bounds of binary pivots to locate minimum element.
     * **Input**: `[4, 5, 6, 7, 0, 1, 2]`.
     * **Output**: `0`.

### Hard Programs:
### [ ] Problem 11.119: Write a Java Program to Search in a Rotated Sorted Array of Integers. [Hard] [Topic: Searching Algorithms]
     * **Problem Statement**: Search target index in rotated sorted array in $O(\log N)$ time.
     * **Input**: Array = `[4, 5, 6, 7, 0, 1, 2]`, Target = 0.
     * **Output**: `4`.

### Frequently Asked Interview Problems:
### [ ] Problem 11.120: Write a Java Program to Find the Peak Element in an Unsorted Array. [Medium] [Topic: Searching Algorithms] [Company: TCS]
     * **Problem Statement**: Find element not smaller than neighbours using binary search.
     * **Input**: `[1, 2, 3, 1]`.
     * **Output**: `2` (value 3).
### [ ] Problem 11.121: Write a Java Program to Find the Missing Number in an Arithmetic Progression. [Easy] [Topic: Searching Algorithms] [Company: Wipro]
     * **Problem Statement**: Search the element that breaks progression steps.
     * **Input**: `[2, 4, 8, 10]`.
     * **Output**: `6`.

### Real-World Coding Challenges:
### [ ] Problem 11.122: Write a Java Program to Search for a Phone Contact in a Sorted Contacts Ledger. [Medium] [Topic: Searching Algorithms]
     * **Problem Statement**: Search contacts using binary prefix matches.
     * **Input**: Contact database and prefix.
     * **Output**: Matches.

### Mini-Project Ideas:
* **Interactive CLI Book Lookup**: Write a lookup tool searching library databases.

### Major Project Ideas:
* **Full-text Database Query Parser**: Build an engine mapping keywords to documents.

---

## 15. Sorting Algorithms

### Concepts to Learn First:
* Comparison-based sorting.
* Time-space trade-offs ($O(N^2)$ vs. $O(N \log N)$).
* Stability of sorting algorithms.
* Recursion-based divide and conquer sorting.

### Easy Programs:
### [ ] Problem 11.123: Write a Java Program to Sort an Integer Array Using Bubble Sort. [Easy] [Topic: Sorting Algorithms]
     * **Problem Statement**: Sort arrays by comparing adjacent pairs recursively.
     * **Input**: `[5, 1, 4, 2, 8]`.
     * **Output**: Sorted list.
### [ ] Problem 11.124: Write a Java Program to Sort an Integer Array Using Selection Sort. [Easy] [Topic: Sorting Algorithms]
     * **Problem Statement**: Sort arrays by extracting minimums successively.
     * **Input**: `[29, 10, 14, 37, 13]`.
     * **Output**: Sorted list.
### [ ] Problem 11.125: Write a Java Program to Sort an Integer Array Using Insertion Sort. [Easy] [Topic: Sorting Algorithms]
     * **Problem Statement**: Sort arrays by shifting cards iteratively.
     * **Input**: `[8, 5, 2, 9, 5]`.
     * **Output**: Sorted list.

### Medium Programs:
### [ ] Problem 11.126: Write a Java Program to Sort an Array using Merge Sort. [Medium] [Topic: Sorting Algorithms]
     * **Problem Statement**: Split arrays recursively, sorting and merging subsegments.
     * **Input**: `[38, 27, 43, 3, 9, 82, 10]`.
     * **Output**: Sorted list.
### [ ] Problem 11.127: Write a Java Program to Sort an Array using Quick Sort. [Medium] [Topic: Sorting Algorithms]
     * **Problem Statement**: Pivot partitions to sort subarrays recursively.
     * **Input**: `[10, 7, 8, 9, 1, 5]`.
     * **Output**: Sorted list.

### Hard Programs:
### [ ] Problem 11.128: Write a Java Program to Sort an Array using Heap Sort. [Hard] [Topic: Sorting Algorithms]
     * **Problem Statement**: Sort elements by heapifying arrays dynamically.
     * **Input**: `[12, 11, 13, 5, 6, 7]`.
     * **Output**: Sorted list.

### Frequently Asked Interview Problems:
### [ ] Problem 11.129: Write a Java Program to Merge Two Sorted Arrays Without Extra Space. [Hard] [Topic: Sorting Algorithms] [Company: TCS]
     * **Problem Statement**: Merge arrays in-place maintaining sort order.
     * **Input**: Two sorted arrays.
     * **Output**: Combined sorted arrays.
### [ ] Problem 11.130: Write a Java Program to Sort an Array Containing Only 0s, 1s, and 2s. [Medium] [Topic: Sorting Algorithms] [Company: Zoho]
     * **Problem Statement**: Dutch National Flag partition sort.
     * **Input**: `[2, 0, 2, 1, 1, 0]`.
     * **Output**: `[0, 0, 1, 1, 2, 2]`.

### Real-World Coding Challenges:
### [ ] Problem 11.131: Write a Java Program to Sort Custom Product Objects by Multiple Attribute Rules. [Medium] [Topic: Sorting Algorithms]
     * **Problem Statement**: Sort product lists by price, then name.
     * **Input**: Custom product collections.
     * **Output**: Ordered arrays.

### Mini-Project Ideas:
* **Interactive CLI Student Roster Sorter**: Write a tool ordering student sheets by marks.

### Major Project Ideas:
* **Multi-Algorithm Performance Benchmark Sandbox**: Build a suite timing and graphing complexity behaviors of sorting algorithms.

---

## 16. Bit Manipulation

### Concepts to Learn First:
* Bitwise operators (`&`, `|`, `^`, `~`).
* Shift operations (`<<`, `>>`, `>>>`).
* Modifying bits at index positions.

### Easy Programs:
### [ ] Problem 11.132: Write a Java Program to Get the Bit Value at a Given Position in an Integer. [Easy] [Topic: Bit Manipulation]
     * **Problem Statement**: Test bit at position K.
     * **Input**: Num = 8, Position = 3.
     * **Output**: 1.
### [ ] Problem 11.133: Write a Java Program to Set the Bit Value at a Given Position in an Integer. [Easy] [Topic: Bit Manipulation]
     * **Problem Statement**: Force bit K to 1.
     * **Input**: Num = 8, Position = 1.
     * **Output**: 10.
### [ ] Problem 11.134: Write a Java Program to Clear the Bit Value at a Given Position in an Integer. [Easy] [Topic: Bit Manipulation]
     * **Problem Statement**: Force bit K to 0.
     * **Input**: Num = 10, Position = 1.
     * **Output**: 8.

### Medium Programs:
### [ ] Problem 11.135: Write a Java Program to Toggle the Bit Value at a Given Position in an Integer. [Medium] [Topic: Bit Manipulation]
     * **Problem Statement**: Invert bit K value.
     * **Input**: Num = 10, Position = 1.
     * **Output**: 8.
### [ ] Problem 11.136: Write a Java Program to Check If a Given Number is Odd or Even Using Bitwise Operators. [Easy] [Topic: Bit Manipulation]
     * **Problem Statement**: Check lowest bit for odd parity.
     * **Input**: `43`.
     * **Output**: Odd.

### Hard Programs:
### [ ] Problem 11.137: Write a Java Program to Find the Only Non-Repeated Element in an Array Where Every Other Element Appears Twice. [Hard] [Topic: Bit Manipulation]
     * **Problem Statement**: XOR all values to extract unique element.
     * **Input**: `[4, 1, 2, 1, 2]`.
     * **Output**: `4`.

### Frequently Asked Interview Problems:
### [ ] Problem 11.138: Write a Java Program to Count the Number of Set Bits in an Integer using Brain Kernighan's Algorithm. [Medium] [Topic: Bit Manipulation] [Company: TCS]
     * **Problem Statement**: Count bits by clearing lowest set bit.
     * **Input**: `15`.
     * **Output**: `4`.

### Real-World Coding Challenges:
### [ ] Problem 11.139: Write a Java Program to Encode and Decode RGB Colors to a Single 32-bit Integer. [Medium] [Topic: Bit Manipulation]
     * **Problem Statement**: Shift color values into ARGB slots.
     * **Input**: R=255, G=100, B=50.
     * **Output**: Packed integer.

### Mini-Project Ideas:
* **CLI Color Packer Utility**: Write a packed RGB color code tool.

### Major Project Ideas:
* **Custom Bitmap Encryption Protocol**: Build an encryption framework encrypting files using bit transformations.

---

## 17. Mathematical Programs

### Concepts to Learn First:
* Arithmetic and logical formulas.
* Standard Math APIs (`Math.sqrt()`, `Math.pow()`, `Math.abs()`).
* Primality tests.

### Easy Programs:
### [ ] Problem 11.140: Write a Java Program to Find the Square Root of a Number Without Using Math.sqrt(). [Easy] [Topic: Mathematical Programs]
     * **Problem Statement**: Use binary search approximation.
     * **Input**: `25`.
     * **Output**: `5`.
### [ ] Problem 11.141: Write a Java Program to Calculate the Factorial of a Number Iteratively. [Easy] [Topic: Mathematical Programs]
     * **Problem Statement**: Loop and aggregate product.
     * **Input**: `5`.
     * **Output**: `120`.
### [ ] Problem 11.142: Write a Java Program to Find the Cube of a Number. [Easy] [Topic: Mathematical Programs]
     * **Problem Statement**: Multiply value by itself twice.
     * **Input**: `6`.
     * **Output**: `216`.

### Medium Programs:
### [ ] Problem 11.143: Write a Java Program to Generate Prime Factors of a Number. [Medium] [Topic: Mathematical Programs]
     * **Problem Statement**: Divide number by prime factors iteratively.
     * **Input**: `315`.
     * **Output**: `3, 3, 5, 7`.
### [ ] Problem 11.144: Write a Java Program to Find the Greatest Common Divisor of N Numbers in an Array. [Medium] [Topic: Mathematical Programs]
     * **Problem Statement**: Recursively apply GCD to array values.
     * **Input**: `[12, 18, 24]`.
     * **Output**: `6`.

### Hard Programs:
### [ ] Problem 11.145: Write a Java Program to Calculate the Power of a Number Using Binary Exponentiation. [Hard] [Topic: Mathematical Programs]
     * **Problem Statement**: Compute $X^Y$ in $O(\log Y)$ time.
     * **Input**: Base=2, Exp=10.
     * **Output**: `1024`.

### Frequently Asked Interview Problems:
### [ ] Problem 11.146: Write a Java Program to Find the Least Common Multiple of Two Numbers. [Easy] [Topic: Mathematical Programs] [Company: Infosys]
     * **Problem Statement**: Find LCM using GCD: `LCM = (a * b) / GCD(a, b)`.
     * **Input**: `12, 18`.
     * **Output**: `36`.

### Real-World Coding Challenges:
### [ ] Problem 11.147: Write a Java Program to Calculate Distance Between Two Geographical Coordinates. [Medium] [Topic: Mathematical Programs]
     * **Problem Statement**: Haversine formula computation.
     * **Input**: Latitude/Longitude bounds.
     * **Output**: Distance.

### Mini-Project Ideas:
* **Interactive Scientific Console Calculator**: Build a calculator with trigonometric helpers.

### Major Project Ideas:
* **Custom High Precision BigInteger Library**: Build basic arithmetic operations for massive number strings.

---

## 18. Number Programs

### Concepts to Learn First:
* Digits extraction using `% 10` and `/ 10`.
* Number classification definitions.

### Easy Programs:
### [ ] Problem 11.148: Write a Java Program to Check If a Number is a Palindrome Number. [Easy] [Topic: Number Programs]
     * **Problem Statement**: Check if reversed digit sequences equal originals.
     * **Input**: `121`.
     * **Output**: True.
### [ ] Problem 11.149: Write a Java Program to Check If a Number is a Perfect Number. [Easy] [Topic: Number Programs]
     * **Problem Statement**: Check if sum of divisors equals value.
     * **Input**: `28` ($1+2+4+7+14 = 28$).
     * **Output**: True.
### [ ] Problem 11.150: Write a Java Program to Check If a Number is a Neon Number. [Easy] [Topic: Number Programs]
     * **Problem Statement**: neon if digit sum of square equals value.
     * **Input**: `9` ($9^2 = 81 \to 8+1 = 9$).
     * **Output**: True.

### Medium Programs:
### [ ] Problem 11.151: Write a Java Program to Check If a Number is a Happy Number. [Medium] [Topic: Number Programs]
     * **Problem Statement**: Happy if digit squares sum collapses to 1.
     * **Input**: `19`.
     * **Output**: True.
### [ ] Problem 11.152: Write a Java Program to Check If a Number is a Spy Number. [Medium] [Topic: Number Programs]
     * **Problem Statement**: Spy if digit sum equals digit product.
     * **Input**: `1124`.
     * **Output**: True ($1+1+2+4 = 8$ and $1\times1\times2\times4 = 8$).

### Hard Programs:
### [ ] Problem 11.153: Write a Java Program to Check If a Number is an Automorphic Number. [Hard] [Topic: Number Programs]
     * **Problem Statement**: Automorphic if square ends in number.
     * **Input**: `25` ($25^2 = 625$, ends in 25).
     * **Output**: True.

### Frequently Asked Interview Problems:
### [ ] Problem 11.154: Write a Java Program to Check If a Number is a Harshad Number. [Easy] [Topic: Number Programs] [Company: Wipro]
     * **Problem Statement**: Harshad if divisible by digit sum.
     * **Input**: `18` (divisible by $1+8=9$).
     * **Output**: True.

### Real-World Coding Challenges:
### [ ] Problem 11.155: Write a Java Program to Validate a Numeric Barcode Using a Check Digit Algorithm. [Medium] [Topic: Number Programs]
     * **Problem Statement**: Luhn checksum validation.
     * **Input**: Number code.
     * **Output**: Validity boolean.

### Mini-Project Ideas:
* **Interactive Number Property Analyzer**: Write a program classifying numbers.

### Major Project Ideas:
* **Interactive CLI Bank Card Validator**: Build a validator checking card networks and Luhn sums.

---

## 19. Character Programs

### Concepts to Learn First:
* Character comparisons and conversions.
* ASCII value indexes.

### Easy Programs:
### [ ] Problem 11.156: Write a Java Program to Determine If a Character is an Alphabet Letter. [Easy] [Topic: Character Programs]
     * **Problem Statement**: Check character bounds.
     * **Input**: `'e'`.
     * **Output**: True.
### [ ] Problem 11.157: Write a Java Program to Convert a Lowercase Character to Uppercase. [Easy] [Topic: Character Programs]
     * **Problem Statement**: Shift ASCII code values.
     * **Input**: `'g'`.
     * **Output**: `'G'`.
### [ ] Problem 11.158: Write a Java Program to Print the ASCII Value of All Keyboard Characters. [Easy] [Topic: Character Programs]
     * **Problem Statement**: Output character codes.
     * **Input**: None.
     * **Output**: Symbol listings.

### Medium Programs:
### [ ] Problem 11.159: Write a Java Program to Convert All Characters in a String to Alternate Case. [Medium] [Topic: Character Programs]
     * **Problem Statement**: Swap lowercase/uppercase cases.
     * **Input**: `"Code"`.
     * **Output**: `"cODE"`.
### [ ] Problem 11.160: Write a Java Program to Remove All Whitespace Characters from a String. [Medium] [Topic: Character Programs]
     * **Problem Statement**: Extract non-space letters.
     * **Input**: `"J a v a"`.
     * **Output**: `"Java"`.

### Hard Programs:
### [ ] Problem 11.161: Write a Java Program to Extract All Numeric Digits from an Alphanumeric String and Sum Them. [Hard] [Topic: Character Programs]
     * **Problem Statement**: Scan letters, extracting and summing digits.
     * **Input**: `"1a2b3c"`.
     * **Output**: `6`.

### Frequently Asked Interview Problems:
### [ ] Problem 11.162: Write a Java Program to Check If a Given String Contains All Letters of the Alphabet (Pangram). [Medium] [Topic: Character Programs] [Company: TCS]
     * **Problem Statement**: Verify occurrence of 26 letters.
     * **Input**: `"The quick brown fox jumps over the lazy dog"`.
     * **Output**: True.

### Real-World Coding Challenges:
### [ ] Problem 11.163: Write a Java Program to Encrypt and Decrypt a Password String Using Caesar Cipher. [Medium] [Topic: Character Programs]
     * **Problem Statement**: Shift character letters by offset key.
     * **Input**: `"abc"`, shift 3.
     * **Output**: `"def"`.

### Mini-Project Ideas:
* **Interactive CLI Word Utility**: Write a character statistics analyzer.

### Major Project Ideas:
* **Custom Character Encryption Vault Engine**: Build a system encoding strings with custom cipher keys.

---

## 20. Pattern Problems

### Concepts to Learn First:
* Nested loops for character alignments.
* Math mapping indices to shapes.

### Easy Programs:
### [ ] Problem 11.164: Write a Java Program to Print a Right-Angled Alphabet Triangle. [Easy] [Topic: Pattern Problems]
     * **Problem Statement**: Print N height letter rows.
     * **Input**: `N = 3`.
     * **Output**:
       ```text
       A
       AB
       ABC
       ```
### [ ] Problem 11.165: Write a Java Program to Print a Square Boundary Grid of Hashes. [Easy] [Topic: Pattern Problems]
     * **Problem Statement**: Print outline bounds of hashes.
     * **Input**: `N = 4`.
     * **Output**: Hollow square outline.
### [ ] Problem 11.166: Write a Java Program to Print a Half Diamond Shape using Stars. [Easy] [Topic: Pattern Problems]
     * **Problem Statement**: Triangle expanding and shrinking.
     * **Input**: Size parameter.
     * **Output**: Half diamond.

### Medium Programs:
### [ ] Problem 11.167: Write a Java Program to Print a Number Pyramid Pattern where Each Row Contains Identical Digits. [Medium] [Topic: Pattern Problems]
     * **Problem Statement**: Print row height number values.
     * **Input**: `N = 3`.
     * **Output**:
       ```text
         1
        222
       33333
       ```
### [ ] Problem 11.168: Write a Java Program to Print an Hourglass Pattern using Stars. [Medium] [Topic: Pattern Problems]
     * **Problem Statement**: Top-inverted and bottom-regular triangles.
     * **Input**: Size parameter.
     * **Output**: Hourglass structure.

### Hard Programs:
### [ ] Problem 11.169: Write a Java Program to Print a Hollow Pyramid Pattern. [Hard] [Topic: Pattern Problems]
     * **Problem Statement**: Print outline bounds of a pyramid shape.
     * **Input**: Size parameter.
     * **Output**: Hollow pyramid star lines.

### Frequently Asked Interview Problems:
### [ ] Problem 11.170: Write a Java Program to Print a Zigzag Pattern on the Console using Asterisks. [Medium] [Topic: Pattern Problems] [Company: TCS]
     * **Problem Statement**: Align stars dynamically in a sinusoidal shape.
     * **Input**: Length parameter.
     * **Output**: Wave contours.

### Real-World Coding Challenges:
### [ ] Problem 11.171: Write a Java Program to Print a Chessboard Grid Pattern on the Console. [Medium] [Topic: Pattern Problems]
     * **Problem Statement**: Output alternating white/black cell chars.
     * **Input**: Grid dimensions.
     * **Output**: Grid printout.

### Mini-Project Ideas:
* **Interactive CLI Matrix Display**: Write a matrix console layout renderer.

### Major Project Ideas:
* **Custom Math Geometry Renderer**: Build a console program drafting shapes using ASCII pixels.

---

## 21. Object-Oriented Programming

### Concepts to Learn First:
* Classes, objects, instantiation, and garbage collection references.
* Constructors: default, parameterized, copy constructors, and constructor chaining (`this()`, `super()`).
* Encapsulation: private properties, accessor getters, mutator setters, and immutable objects.
* Inheritance: extension (`extends`), method overrides, and inheritance types.
* Polymorphism: dynamic method dispatch vs overloading.
* Abstraction: abstract classes vs interfaces.
* Relationships: Association (uses), Aggregation (has-a loosely), Composition (has-a strictly).

### Subtopics: Classes and Objects

#### Easy Programs:
### [ ] Problem 11.172: Write a Java Program to Implement a Simple Book Class and Instantiate Objects. [Easy] [Topic: OOP Classes and Objects]
     * **Problem Statement**: Write a class `Book` with variables title and author, and instantiate objects to print values.
     * **Input**: Values.
     * **Output**: Text strings.

#### Medium Programs:
### [ ] Problem 11.173: Write a Java Program to Define a Student Class to Compute Grade Averages. [Medium] [Topic: OOP Classes and Objects]
     * **Problem Statement**: Store marks in double arrays inside student classes, calling evaluation methods.
     * **Input**: Marks fields.
     * **Output**: Computed average.

#### Hard Programs:
### [ ] Problem 11.174: Write a Java Program to Model a Library Catalog Ledger of Borrowers. [Hard] [Topic: OOP Classes and Objects]
     * **Problem Statement**: Model systems with classes: `Book`, `Member`, `Loan`. Keep reference hooks.
     * **Input**: Multiple object allocations.
     * **Output**: Consolidated ledger summaries.

### Subtopics: Constructors

#### Easy Programs:
### [ ] Problem 11.175: Write a Java Program to Create a Rectangle Class with Parameterized Constructors. [Easy] [Topic: OOP Constructors]
     * **Problem Statement**: Initialize rectangle bounds inside constructors.
     * **Input**: Length=5, Width=10.
     * **Output**: Area.

#### Medium Programs:
### [ ] Problem 11.176: Write a Java Program to Demonstrate Constructor Chaining Using this() and super() Keywords. [Medium] [Topic: OOP Constructors]
     * **Problem Statement**: Call multiple constructors in sequence.
     * **Input**: None.
     * **Output**: Print statements confirming execution trace.

#### Hard Programs:
### [ ] Problem 11.177: Write a Java Program to Implement a Deep Copy Constructor for a Custom Class. [Hard] [Topic: OOP Constructors]
     * **Problem Statement**: Write a class containing reference variables, implementing copy constructors that clone references.
     * **Input**: Original class containing reference parameters.
     * **Output**: Independence tests of cloned targets.

### Subtopics: Encapsulation

#### Easy Programs:
### [ ] Problem 11.178: Write a Java Program to Encapsulate Employee Salary Fields and Use Safe Setters. [Easy] [Topic: OOP Encapsulation]
     * **Problem Statement**: Hide employee salary fields, throwing exceptions if setters get negative numbers.
     * **Input**: Value constraints.
     * **Output**: Safe variable updates.

#### Medium Programs:
### [ ] Problem 11.179: Write a Java Program to Implement a Class Representing an Immutable Bank Account Configuration. [Medium] [Topic: OOP Encapsulation]
     * **Problem Statement**: Build a read-only class with final fields initialized in constructors.
     * **Input**: Setup values.
     * **Output**: Immutable outputs.

#### Hard Programs:
### [ ] Problem 11.180: Write a Java Program to Design a Complex Bank Account Manager with Audit Logs. [Hard] [Topic: OOP Encapsulation]
     * **Problem Statement**: Encapsulate account ledger lists, updating them only using strict deposit/withdrawal interfaces.
     * **Input**: Command calls.
     * **Output**: Ledger trace logs.

### Subtopics: Inheritance

#### Easy Programs:
### [ ] Problem 11.181: Write a Java Program to Define a Base Vehicle Class and Extends it to a Car Subclass. [Easy] [Topic: OOP Inheritance]
     * **Problem Statement**: Create subclass fields and call base attributes.
     * **Input**: Properties.
     * **Output**: Combined field strings.

#### Medium Programs:
### [ ] Problem 11.182: Write a Java Program to Implement Multi-level Inheritance and Override Base Actions. [Medium] [Topic: OOP Inheritance]
     * **Problem Statement**: Inherit sequentially: `Device` $\to$ `Computer` $\to$ `Laptop`. Override state printing methods.
     * **Input**: Custom laptop class.
     * **Output**: Overridden diagnostic statements.

#### Hard Programs:
### [ ] Problem 11.183: Write a Java Program to Model an Employee Salary Hierarchy using Polymorphic Inheritances. [Hard] [Topic: OOP Inheritance]
     * **Problem Statement**: Inherit: `Employee` $\to$ `Manager`, `Developer`. Overriding calculation routines.
     * **Input**: Payroll arrays.
     * **Output**: Payroll slips.

### Subtopics: Polymorphism

#### Easy Programs:
### [ ] Problem 11.184: Write a Java Program to Overload a Draw Method for Displaying Shapes. [Easy] [Topic: OOP Polymorphism]
     * **Problem Statement**: Overload draw method with varying arguments.
     * **Input**: None.
     * **Output**: Shape trace descriptions.

#### Medium Programs:
### [ ] Problem 11.185: Write a Java Program to Implement Dynamic Method Dispatch with a Base Shape Class. [Medium] [Topic: OOP Polymorphism]
     * **Problem Statement**: Resolve area method calls at runtime using base references pointing to subclasses.
     * **Input**: Circles, Rectangles.
     * **Output**: Area outputs.

#### Hard Programs:
### [ ] Problem 11.186: Write a Java Program to Simulate a Polymorphic Notification Dispatch System. [Hard] [Topic: OOP Polymorphism]
     * **Problem Statement**: Dispatch custom alerts dynamically through SMS, Email, Push classes.
     * **Input**: Message object arrays.
     * **Output**: Channel transmission logs.

### Subtopics: Abstraction

#### Easy Programs:
### [ ] Problem 11.187: Write a Java Program to Create an Abstract Animal Class and Implement Subclass Sound Methods. [Easy] [Topic: OOP Abstraction]
     * **Problem Statement**: Abstract class `Animal` with abstract method `makeSound()`.
     * **Input**: Subclasses.
     * **Output**: Sounds.

#### Medium Programs:
### [ ] Problem 11.188: Write a Java Program to Model a Payment Processor Abstract Hierarchy. [Medium] [Topic: OOP Abstraction]
     * **Problem Statement**: Abstract class `PaymentProcessor` with subclass gateways (Card, UPI).
     * **Input**: Amount transactions.
     * **Output**: Verification traces.

#### Hard Programs:
### [ ] Problem 11.189: Write a Java Program to Design an Abstract Base Operating System Job Scheduler. [Hard] [Topic: OOP Abstraction]
     * **Problem Statement**: Abstract job schedules with subclass algorithms (Priority, FIFO).
     * **Input**: Queue profiles.
     * **Output**: Scheduling metrics.

### Subtopics: Interfaces

#### Easy Programs:
### [ ] Problem 11.190: Write a Java Program to Declare a Flyable Interface and Implement it in Plane Class. [Easy] [Topic: OOP Interfaces]
     * **Problem Statement**: Define interface fly with methods fly.
     * **Input**: Classes.
     * **Output**: Fly logs.

#### Medium Programs:
### [ ] Problem 11.191: Write a Java Program to Implement Multiple Interfaces inside a Hybrid Device Class. [Medium] [Topic: OOP Interfaces]
     * **Problem Statement**: Implement interfaces Printer and Scanner inside MultiFunctionDevice class.
     * **Input**: Scan/Print inputs.
     * **Output**: Task traces.

#### Hard Programs:
### [ ] Problem 11.192: Write a Java Program to Design a Fully Decoupled Event Listener System Using Interfaces. [Hard] [Topic: OOP Interfaces]
     * **Problem Statement**: Implement publisher notifier systems sending event updates to registered listener classes.
     * **Input**: Multi-subscriber setup.
     * **Output**: Event triggers.

### Subtopics: Association, Aggregation, Composition

#### Easy Programs:
### [ ] Problem 11.193: Write a Java Program to Model an Association Relation Between Doctor and Patient. [Easy] [Topic: OOP Association]
     * **Problem Statement**: Connect Doctor classes to Patient class records.
     * **Input**: Individual entities.
     * **Output**: Doctor-patient roster.

#### Medium Programs:
### [ ] Problem 11.194: Write a Java Program to Model an Aggregation Relationship Between Department and Professor. [Medium] [Topic: OOP Aggregation]
     * **Problem Statement**: Model Aggregation where Department holds Professor lists, showing professors exist independently.
     * **Input**: Department teardowns.
     * **Output**: Retained professor objects.

#### Hard Programs:
### [ ] Problem 11.195: Write a Java Program to Model a Composition Relationship Between House and Room. [Hard] [Topic: OOP Composition]
     * **Problem Statement**: Define Composition where Rooms are created/deleted strictly with the House lifecycle.
     * **Input**: House destructions.
     * **Output**: Room allocation teardown audits.

### Frequently Asked Interview Problems:
### [ ] Problem 11.196: Write a Java Program to Compare Abstract Classes and Interfaces by Coding a Hybrid System. [Medium] [Topic: OOP Object Oriented Design] [Company: TCS]
     * **Problem Statement**: Define a system utilizing both an abstract base class (fields, constructors) and functional interfaces.
     * **Input**: Configuration inputs.
     * **Output**: Execution summaries.
### [ ] Problem 11.197: Write a Java Program to Implement a Singleton Class Design Pattern. [Medium] [Topic: OOP Object Oriented Design] [Company: Infosys]
     * **Problem Statement**: Implement thread-safe Singleton using double-checked locking validation.
     * **Input**: Multi-thread grabs.
     * **Output**: Identical instance hashcode outputs.

### Real-World Coding Challenges:
### [ ] Problem 11.198: Write a Java Program to Design a Command Line E-Commerce Product Catalog System. [Hard] [Topic: OOP Object Oriented Design]
     * **Problem Statement**: Object model catalogs using classes: `Product`, `Discount`, `Cart`, `User`.
     * **Input**: Interactive purchase commands.
     * **Output**: Invoice summary blocks.

### Mini-Project Ideas:
* **Interactive CLI School Registrar**: Write a system managing courses and students.

### Major Project Ideas:
* **Terminal Vehicle Parking Allocation Simulator**: Build a system managing multi-level parking spots with check-in/out and billers.

---

## 22. Exception Handling

### Concepts to Learn First:
* Exceptions classification: checked exceptions vs. unchecked exceptions (Runtime).
* Catching errors: `try`, `catch`, `finally` block execution.
* Custom exceptions extension (`Exception`, `RuntimeException`).
* The `throw` statement vs. the `throws` signature.
* Try-with-resources auto-closable variables.

### Easy Programs:
### [ ] Problem 11.199: Write a Java Program to Catch a Division by Zero ArithmeticException. [Easy] [Topic: Exception Handling]
     * **Problem Statement**: Handle mathematical divisions errors safely using try-catch blocks.
     * **Input**: Division inputs.
     * **Output**: Error descriptions.
### [ ] Problem 11.200: Write a Java Program to Demonstrate Array Index Out of Bounds Exception Handling. [Easy] [Topic: Exception Handling]
     * **Problem Statement**: Try parsing index 10 of size 5 array, catching errors.
     * **Input**: Index calls.
     * **Output**: Safely handled error outputs.
### [ ] Problem 11.201: Write a Java Program to Throw an IllegalArgumentException for Negative Inputs. [Easy] [Topic: Exception Handling]
     * **Problem Statement**: Throw arguments errors if age parameter setter gets negative values.
     * **Input**: Invalid setters values.
     * **Output**: Raised error message.

### Medium Programs:
### [ ] Problem 11.202: Write a Java Program to Create and Use a Custom Exception Class. [Medium] [Topic: Exception Handling]
     * **Problem Statement**: Implement a custom exception (e.g. `InsufficientFundsException`) and raise it during invalid balance mutations.
     * **Input**: Withdrawal commands.
     * **Output**: Custom error stack trace.
### [ ] Problem 11.203: Write a Java Program to Implement Exception Handling with a Multi-Catch Block. [Medium] [Topic: Exception Handling]
     * **Problem Statement**: Catch multiple exceptions (e.g. `NumberFormatException` and `ArithmeticException`) inside a single catch statement.
     * **Input**: User string input combinations.
     * **Output**: Categorized errors.

### Hard Programs:
### [ ] Problem 11.204: Write a Java Program to Demonstrate Exception Propagation in Nested Method Calls. [Hard] [Topic: Exception Handling]
     * **Problem Statement**: Propagate errors through 3 stacked method invocations, catching them at the entry-level main.
     * **Input**: Stack runs.
     * **Output**: Consolidated trace track outputs.

### Frequently Asked Interview Problems:
### [ ] Problem 11.205: Write a Java Program to Demonstrate the try-with-resources Auto-Closing Block. [Medium] [Topic: Exception Handling] [Company: TCS]
     * **Problem Statement**: Automatically close custom instances implementing the `AutoCloseable` interface.
     * **Input**: Initialization calls.
     * **Output**: Printed logs verifying closing execution.
### [ ] Problem 11.206: Write a Java Program to Prove Finally Block Executes Even After return Statements in Try. [Medium] [Topic: Exception Handling] [Company: Wipro]
     * **Problem Statement**: Return values inside try, tracking if finally code runs beforehand.
     * **Input**: None.
     * **Output**: sequence markers confirming block executes.

### Real-World Coding Challenges:
### [ ] Problem 11.207: Write a Java Program to Parse User Profile Input Records Safely. [Medium] [Topic: Exception Handling]
     * **Problem Statement**: Parse data fields, resolving invalid numbers, formats, and blank elements.
     * **Input**: Invalid input entries.
     * **Output**: Corrected logs.

### Mini-Project Ideas:
* **Interactive CLI Safe Calculator**: Write a calculator recovering from overflow and syntax errors.

### Major Project Ideas:
* **Interactive Transactional Processor**: Build a ledger system roll-backing entries when transaction failures occur.

---

## 23. Collections Framework

### Concepts to Learn First:
* The hierarchy of the collections interface framework.
* `List` implementations: array resize lookups (`ArrayList`), nodes link trackers (`LinkedList`), legacy vector synchronizers (`Vector`), and LIFO stack structures (`Stack`).
* `Queue` structures: FIFO interfaces (`Queue`), prioritized elements sorting (`PriorityQueue`).
* `Set` structures: unique sets (`HashSet`), insertion ordered lists (`LinkedHashSet`), sorted tree containers (`TreeSet`).
* `Map` structures: key-value matches (`HashMap`), insertion ordered keys (`LinkedHashMap`), sorted key ranges (`TreeMap`).
* Iterator operations and the fast-fail behavior trap.

### Subtopics: ArrayList

#### Easy Programs:
### [ ] Problem 11.208: Write a Java Program to Store and Print a List of Names using ArrayList. [Easy] [Topic: Collections ArrayList]
     * **Problem Statement**: Initialize string arraylists, adding and displaying items.
     * **Input**: Values.
     * **Output**: Names list.

#### Medium Programs:
### [ ] Problem 11.209: Write a Java Program to Search and Remove Specific Elements from an ArrayList. [Medium] [Topic: Collections ArrayList]
     * **Problem Statement**: Search and strip element matching target properties.
     * **Input**: Item criteria.
     * **Output**: Shrink lists.

#### Hard Programs:
### [ ] Problem 11.210: Write a Java Program to Sort Custom Objects in an ArrayList using Comparator. [Hard] [Topic: Collections ArrayList]
     * **Problem Statement**: Sort student arraylist by age, then marks.
     * **Input**: Student collections.
     * **Output**: Sorted list.

### Subtopics: LinkedList

#### Easy Programs:
### [ ] Problem 11.211: Write a Java Program to Add Elements to Both Ends of a LinkedList. [Easy] [Topic: Collections LinkedList]
     * **Problem Statement**: Use Deque methods `addFirst()` and `addLast()`.
     * **Input**: String inputs.
     * **Output**: LinkedList states.

#### Medium Programs:
### [ ] Problem 11.212: Write a Java Program to Reverse a LinkedList Using an Iterator. [Medium] [Topic: Collections LinkedList]
     * **Problem Statement**: Print linkedlist contents backwards.
     * **Input**: LinkedList.
     * **Output**: Reversed list.

#### Hard Programs:
### [ ] Problem 11.213: Write a Java Program to Implement a Custom LRU Cache Queue using LinkedList. [Hard] [Topic: Collections LinkedList]
     * **Problem Statement**: Build LRU caches using LinkedList double nodes.
     * **Input**: Retrieval lists.
     * **Output**: Cache hits/misses logs.

### Subtopics: Vector and Stack

#### Easy Programs:
### [ ] Problem 11.214: Write a Java Program to Perform Basic Push and Pop Operations on a Stack. [Easy] [Topic: Collections Stack]
     * **Problem Statement**: Push and pop values using stack methods.
     * **Input**: Integers list.
     * **Output**: Stack outputs.

#### Medium Programs:
### [ ] Problem 11.215: Write a Java Program to Check If a Given String Has Balanced Parentheses using a Stack. [Medium] [Topic: Collections Stack]
     * **Problem Statement**: Push open braces, popping matches.
     * **Input**: `"{[()]}"`.
     * **Output**: True.

#### Hard Programs:
### [ ] Problem 11.216: Write a Java Program to Evaluate a Postfix Mathematical Expression using a Stack. [Hard] [Topic: Collections Stack]
     * **Problem Statement**: Compute evaluations on postfix string operators.
     * **Input**: `"231*+9-"`.
     * **Output**: Resulting value.

### Subtopics: Queue and PriorityQueue

#### Easy Programs:
### [ ] Problem 11.217: Write a Java Program to Simulate a Simple FIFO Customer Queue. [Easy] [Topic: Collections Queue]
     * **Problem Statement**: Add and poll items from customer queue.
     * **Input**: Queue entries.
     * **Output**: Service sequences.

#### Medium Programs:
### [ ] Problem 11.218: Write a Java Program to Implement a Priority Queue for Sorting Tasks by Urgency. [Medium] [Topic: Collections PriorityQueue]
     * **Problem Statement**: Retrieve items by priority integer values.
     * **Input**: Tasks with priorities.
     * **Output**: Priority order queue output.

#### Hard Programs:
### [ ] Problem 11.219: Write a Java Program to Find the K-th Largest Element in an Unsorted Stream of Integers. [Hard] [Topic: Collections PriorityQueue]
     * **Problem Statement**: Manage min-heaps using priority queue constraints.
     * **Input**: Number streams, K.
     * **Output**: K-th maximum values.

### Subtopics: HashSet, LinkedHashSet, TreeSet

#### Easy Programs:
### [ ] Problem 11.220: Write a Java Program to Eliminate All Duplicates from a List of Integers using HashSet. [Easy] [Topic: Collections Set]
     * **Problem Statement**: Insert lists into HashSets, displaying unique elements.
     * **Input**: Duplicate lists.
     * **Output**: Unique sets.

#### Medium Programs:
### [ ] Problem 11.221: Write a Java Program to Retrieve Sorted Unique Names using TreeSet. [Medium] [Topic: Collections Set]
     * **Problem Statement**: Store string variables in TreeSet, verifying alphabetical orders.
     * **Input**: Unsorted names lists.
     * **Output**: Sorted sets.

#### Hard Programs:
### [ ] Problem 11.222: Write a Java Program to Find the Intersection and Union of Multiple Number Sets. [Hard] [Topic: Collections Set]
     * **Problem Statement**: Apply `retainAll()` and `addAll()` sets operators.
     * **Input**: Set combinations.
     * **Output**: Math outputs.

### Subtopics: HashMap, LinkedHashMap, TreeMap

#### Easy Programs:
### [ ] Problem 11.223: Write a Java Program to Store and Retrieve Phone Numbers using HashMap. [Easy] [Topic: Collections Map]
     * **Problem Statement**: Key name matches phone number values.
     * **Input**: Record entries.
     * **Output**: Lookups results.

#### Medium Programs:
### [ ] Problem 11.224: Write a Java Program to Count the Frequency of Each Word in a Text Block using HashMap. [Medium] [Topic: Collections Map]
     * **Problem Statement**: Map frequencies of word strings.
     * **Input**: `"hello world hello"`.
     * **Output**: `hello: 2, world: 1`.

#### Hard Programs:
### [ ] Problem 11.225: Write a Java Program to Retrieve Sorted Contacts in a Range using TreeMap. [Hard] [Topic: Collections Map]
     * **Problem Statement**: Retrieve contacts starting from letter range bounds using `subMap()`.
     * **Input**: Search limits.
     * **Output**: Range matches.

### Frequently Asked Interview Problems:
### [ ] Problem 11.226: Write a Java Program to Demonstrate the Fail-Fast Behavior of Collections Iterator. [Medium] [Topic: Collections] [Company: TCS]
     * **Problem Statement**: Modify list collections while iterating to trigger `ConcurrentModificationException`.
     * **Input**: Iteration additions.
     * **Output**: Raised error trace.
### [ ] Problem 11.227: Write a Java Program to Demonstrate the Difference Between Comparable and Comparator. [Medium] [Topic: Collections] [Company: Infosys]
     * **Problem Statement**: Code sorting using `Comparable` (natural sort) vs `Comparator` (custom sort configurations).
     * **Input**: Object arrays.
     * **Output**: Sorted arrangements.

### Real-World Coding Challenges:
### [ ] Problem 11.228: Write a Java Program to Simulate a Billing Cart Checkout Inventory Check. [Medium] [Topic: Collections]
     * **Problem Statement**: Crosscheck catalog map balances during items purchase.
     * **Input**: Cart lists.
     * **Output**: Billing outcomes.

### Mini-Project Ideas:
* **Interactive Student Database Console**: Write student registry managers using HashMaps.

### Major Project Ideas:
* **Custom Collections Graph Library**: Build directional graph collections managing links, node values, and paths.

---

## 24. Generics

### Concepts to Learn First:
* Defining generic classes, interfaces, and methods.
* Parameter types and bounding constraints (`extends`, `super`).
* Wildcard generics types (`?`).

### Easy Programs:
### [ ] Problem 11.229: Write a Java Program to Define a Generic Box Class Capable of Holding Any Data Type. [Easy] [Topic: Generics]
     * **Problem Statement**: Build a class `Box<T>` wrapping items.
     * **Input**: Mixed types.
     * **Output**: Extracted object matches.
### [ ] Problem 11.230: Write a Java Program to Create a Generic Method to Print Array Elements. [Easy] [Topic: Generics]
     * **Problem Statement**: Write a single method capable of outputting contents of any array type.
     * **Input**: Integer and Double arrays.
     * **Output**: Console print outputs.

### Medium Programs:
### [ ] Problem 11.231: Write a Java Program to Implement a Generic Stack Class with Push and Pop Methods. [Medium] [Topic: Generics]
     * **Problem Statement**: Build type-safe stack queues.
     * **Input**: String inputs.
     * **Output**: Correct LIFO outputs.
### [ ] Problem 11.232: Write a Java Program to Create a Generic Math Utility Method restricted to Number Types. [Medium] [Topic: Generics]
     * **Problem Statement**: Limit parameters bounds: `T extends Number`. Sum two values.
     * **Input**: Floats, integers.
     * **Output**: Double values.

### Hard Programs:
### [ ] Problem 11.233: Write a Java Program to Implement a Copy List Method Using Generics Wildcards. [Hard] [Topic: Generics]
     * **Problem Statement**: Implement `copy(List<? extends T> src, List<? super T> dest)` methods copy.
     * **Input**: Compatible lists.
     * **Output**: Merged destination arrays.

### Frequently Asked Interview Problems:
### [ ] Problem 11.234: Write a Java Program to Demonstrate Type Erasure in Java Generics. [Medium] [Topic: Generics] [Company: TCS]
     * **Problem Statement**: Show class type signatures collapse at runtime using reflection lookups.
     * **Input**: Generic instances.
     * **Output**: Compilation proofs.

### Real-World Coding Challenges:
### [ ] Problem 11.235: Write a Java Program to Implement a Generic Response Wrapper for API Calls. [Medium] [Topic: Generics]
     * **Problem Statement**: Class `ApiResponse<T>` with status code, message, and generic payload `T`.
     * **Input**: Payload instances.
     * **Output**: Serialized outputs.

### Mini-Project Ideas:
* **Interactive CLI Data Container Manager**: Build key-value stores.

### Major Project Ideas:
* **Custom Object Mapper Framework**: Build mappings parsing values to generic class models.

---

## 25. File Handling

### Concepts to Learn First:
* Working with `File` metadata.
* Stream handlers: `FileInputStream`, `FileOutputStream`, `FileReader`, `FileWriter`.
* Buffer wrapping: `BufferedReader`, `BufferedWriter`.
* Files directory listings.

### Easy Programs:
### [ ] Problem 11.236: Write a Java Program to Create a New Text File and Verify Its Existence. [Easy] [Topic: File Handling]
     * **Problem Statement**: Check path existence, creating files if missing.
     * **Input**: Filename.
     * **Output**: Status confirmation.
### [ ] Problem 11.237: Write a Java Program to Write a Single Line of Text to a Local File. [Easy] [Topic: File Handling]
     * **Problem Statement**: Store text entries using `FileWriter`.
     * **Input**: Text block.
     * **Output**: File written to disk.
### [ ] Problem 11.238: Write a Java Program to Read and Display the Contents of a Text File. [Easy] [Topic: File Handling]
     * **Problem Statement**: Retrieve file content and print to screen.
     * **Input**: Filename path.
     * **Output**: Displayed lines.

### Medium Programs:
### [ ] Problem 11.239: Write a Java Program to Count the Number of Words and Lines in a Text File. [Medium] [Topic: File Handling]
     * **Problem Statement**: Parse lines, tracking counts.
     * **Input**: File.
     * **Output**: Metrics report.
### [ ] Problem 11.240: Write a Java Program to Implement a File Copy Utility. [Medium] [Topic: File Handling]
     * **Problem Statement**: Transfer binary data from source file to destination.
     * **Input**: Paths.
     * **Output**: Created target copy.

### Hard Programs:
### [ ] Problem 11.241: Write a Java Program to Search for a Specific Keyword inside a Large Text File and Print Matching Line Numbers. [Hard] [Topic: File Handling]
     * **Problem Statement**: Stream lines, matching keyword queries.
     * **Input**: Keyword.
     * **Output**: Row numbers.

### Frequently Asked Interview Problems:
### [ ] Problem 11.242: Write a Java Program to Read a File Line-by-Line using BufferedReader. [Easy] [Topic: File Handling] [Company: Infosys]
     * **Problem Statement**: Iterate lines using `readLine()` until null.
     * **Input**: File path.
     * **Output**: Content prints.

### Real-World Coding Challenges:
### [ ] Problem 11.243: Write a Java Program to Parse a CSV Invoice File and Compute Total Sales. [Medium] [Topic: File Handling]
     * **Problem Statement**: Parse data rows, parsing sales double columns.
     * **Input**: CSV data.
     * **Output**: Totals calculations.

### Mini-Project Ideas:
* **Interactive CLI Memo Ledger**: Write program writing memos to disk files.

### Major Project Ideas:
* **Indexed Keyword Document Catalog Manager**: Build catalogers indexing folder files.

---

## 26. Serialization

### Concepts to Learn First:
* The `Serializable` marker interface.
* Stream writers: `ObjectOutputStream`, `ObjectInputStream`.
* The `transient` keyword.
* Managing `serialVersionUID`.

### Easy Programs:
### [ ] Problem 11.244: Write a Java Program to Serialize a Simple Student Object to a File. [Easy] [Topic: Serialization]
     * **Problem Statement**: Write a student class object state to a `.ser` file.
     * **Input**: Student object.
     * **Output**: Binary saved file.
### [ ] Problem 11.245: Write a Java Program to Deserialize a Student Object from a File. [Easy] [Topic: Serialization]
     * **Problem Statement**: Load student class objects from a serialized file on disk.
     * **Input**: Serialized file.
     * **Output**: Class object metadata prints.

### Medium Programs:
### [ ] Problem 11.246: Write a Java Program to Demonstrate the Behavior of Transient Fields During Serialization. [Medium] [Topic: Serialization]
     * **Problem Statement**: Verify transient fields are ignored (become null/default) upon deserialization.
     * **Input**: User credentials object.
     * **Output**: Blank transient parameter checks.

### Hard Programs:
### [ ] Problem 11.247: Write a Java Program to Implement Deep Object Cloning using Serialization. [Hard] [Topic: Serialization]
     * **Problem Statement**: Clone objects by serializing and deserializing them through memory streams.
     * **Input**: Compound complex class instance.
     * **Output**: Cloned instance duplicate.

### Frequently Asked Interview Problems:
### [ ] Problem 11.248: Write a Java Program to Handle custom Serialization using writeObject and readObject Methods. [Medium] [Topic: Serialization] [Company: TCS]
     * **Problem Statement**: Encrypt sensitive fields manually inside serialization routines.
     * **Input**: Password records.
     * **Output**: Safely stored crypt blocks.

### Real-World Coding Challenges:
### [ ] Problem 11.249: Write a Java Program to Save and Restore the State of an Interactive Board Game. [Medium] [Topic: Serialization]
     * **Problem Statement**: Save board configurations (matrix maps, scores) to file.
     * **Input**: Game session status.
     * **Output**: Saved file blocks.

### Mini-Project Ideas:
* **Interactive CLI To-Do Task Session Saver**: Save task arrays to data files.

### Major Project Ideas:
* **Transactional Local File System Database Engine**: Build engines restoring databases states from serial journals.

---

## 27. Multithreading

### Concepts to Learn First:
* Creating threads: extending `Thread` class vs. implementing `Runnable` interface.
* Thread lifecycle states (New, Runnable, Blocked, Waiting, Terminated).
* Core methods: `start()`, `run()`, `sleep()`, `join()`.

### Easy Programs:
### [ ] Problem 11.250: Write a Java Program to Create and Start a Thread by Extending the Thread Class. [Easy] [Topic: Multithreading]
     * **Problem Statement**: Print thread names inside customized thread runs.
     * **Input**: None.
     * **Output**: Thread markers.
### [ ] Problem 11.251: Write a Java Program to Create and Start a Thread by Implementing the Runnable Interface. [Easy] [Topic: Multithreading]
     * **Problem Statement**: Start threads wrapping runnable interfaces.
     * **Input**: None.
     * **Output**: Runnable thread outputs.
### [ ] Problem 11.252: Write a Java Program to Pause Execution of a Thread Using Thread.sleep(). [Easy] [Topic: Multithreading]
     * **Problem Statement**: Loop iterations delay outputs by 1 second.
     * **Input**: Loop parameters.
     * **Output**: Timed outputs.

### Medium Programs:
### [ ] Problem 11.253: Write a Java Program to Implement Thread Coordination Using the join() Method. [Medium] [Topic: Multithreading]
     * **Problem Statement**: Force main threads to wait until task threads complete.
     * **Input**: Task timelines.
     * **Output**: Sequential outputs.
### [ ] Problem 11.254: Write a Java Program to Simulate a Multi-threaded Downloader for Concurrent Tasks. [Medium] [Topic: Multithreading]
     * **Problem Statement**: Run 3 threads downloading segments, displaying status outputs.
     * **Input**: File segments.
     * **Output**: Concurrent logs.

### Hard Programs:
### [ ] Problem 11.255: Write a Java Program to Implement a Custom Thread Pool Using a Work Queue. [Hard] [Topic: Multithreading]
     * **Problem Statement**: Coordinate workers pulling tasks from blocking queues.
     * **Input**: Task lists.
     * **Output**: Execution balances checks.

### Frequently Asked Interview Problems:
### [ ] Problem 11.256: Write a Java Program to Demonstrate the Difference Between calling start() and run() on a Thread. [Easy] [Topic: Multithreading] [Company: Wipro]
     * **Problem Statement**: Output calling thread identifiers verifying active stacks differences.
     * **Input**: Execution tests.
     * **Output**: ID mismatches check.

### Real-World Coding Challenges:
### [ ] Problem 11.257: Write a Java Program to Process Large Datasets Concurrently by Splitting Ranges. [Medium] [Topic: Multithreading]
     * **Problem Statement**: Partition arrays summing elements using thread pools.
     * **Input**: Large array list.
     * **Output**: Integrated total.

### Mini-Project Ideas:
* **Interactive CLI Stopwatch**: Write stopwatches counting times.

### Major Project Ideas:
* **Concurrent Web Scraper Core Engine**: Build crawlers fetching page URLs concurrently.

---

## 28. Synchronization

### Concepts to Learn First:
* The race condition concept.
* Synchronized blocks vs. synchronized methods.
* Thread communication: `wait()`, `notify()`, `notifyAll()`.
* Locks (ReentrantLock).
* Avoiding Deadlocks.

### Easy Programs:
### [ ] Problem 11.258: Write a Java Program to Demonstrate Race Conditions in an Unsynchronized Counter. [Easy] [Topic: Synchronization]
     * **Problem Statement**: Inconsistent sum values when multiple threads write to counters.
     * **Input**: Thread iteration tasks.
     * **Output**: Mismatched final totals.
### [ ] Problem 11.259: Write a Java Program to Resolve Race Conditions using Synchronized Methods. [Easy] [Topic: Synchronization]
     * **Problem Statement**: Synchronize increment methods checking outcomes.
     * **Input**: Multi-threaded mutations.
     * **Output**: Correct total outputs.

### Medium Programs:
### [ ] Problem 11.260: Write a Java Program to Solve the Producer-Consumer Problem using wait() and notify(). [Medium] [Topic: Synchronization]
     * **Problem Statement**: Coordinate writes and reads over shared queues safely.
     * **Input**: Buffer limits.
     * **Output**: Order tracking checks.
### [ ] Problem 11.261: Write a Java Program to Demonstrate a Deadlock Condition. [Medium] [Topic: Synchronization]
     * **Problem Statement**: Lock resources in opposite order in two threads to cause deadlock.
     * **Input**: Locks.
     * **Output**: Frozen threads.

### Hard Programs:
### [ ] Problem 11.262: Write a Java Program to Implement a Thread-Safe Blocking Queue using ReentrantLock and Condition Variables. [Hard] [Topic: Synchronization]
     * **Problem Statement**: Coordinate operations using locks condition variables.
     * **Input**: Concurrent inputs.
     * **Output**: Regulated task orders checks.

### Frequently Asked Interview Problems:
### [ ] Problem 11.263: Write a Java Program to Implement a Thread-Safe Singleton Class using Double-Checked Locking. [Medium] [Topic: Synchronization] [Company: TCS]
     * **Problem Statement**: Prevent thread collisions on instance getters.
     * **Input**: Thread requests.
     * **Output**: Unique instance outputs.

### Real-World Coding Challenges:
### [ ] Problem 11.264: Write a Java Program to Simulate Concurrent Ticket Reservation System. [Medium] [Topic: Synchronization]
     * **Problem Statement**: Prevent booking seats already booked.
     * **Input**: Seat allocations list.
     * **Output**: Clean allocation checks.

### Mini-Project Ideas:
* **Interactive CLI Bank Vault Cashier Simulator**: Build vaults updating cash balances.

### Major Project Ideas:
* **Distributed Concurrent Database System Cache**: Build thread safe systems managing key caches.

---

## 29. Networking

### Concepts to Learn First:
* TCP socket connections.
* Client-server model using `ServerSocket` and `Socket`.
* IP addressing and port channels.

### Easy Programs:
### [ ] Problem 11.265: Write a Java Program to Fetch the IP Address of a Given Website Domain. [Easy] [Topic: Networking]
     * **Problem Statement**: Get IP bounds using `InetAddress`.
     * **Input**: Domain string (e.g. `"google.com"`).
     * **Output**: IP address.
### [ ] Problem 11.266: Write a Java Program to Establish a Simple TCP Client Connection to a Port. [Easy] [Topic: Networking]
     * **Problem Statement**: Try binding socket variables to port links.
     * **Input**: Host/Port bounds.
     * **Output**: Status confirmation.

### Medium Programs:
### [ ] Problem 11.267: Write a Java Program to Implement a Basic One-Way TCP Server and Client. [Medium] [Topic: Networking]
     * **Problem Statement**: Transmit text strings over socket connections.
     * **Input**: Client string.
     * **Output**: Received server output.
### [ ] Problem 11.268: Write a Java Program to Create a Two-Way Console Chat Server and Client. [Medium] [Topic: Networking]
     * **Problem Statement**: Bidirectional text transfer over sockets.
     * **Input**: Chat inputs.
     * **Output**: Text transcripts.

### Hard Programs:
### [ ] Problem 11.269: Write a Java Program to Build a Multi-Threaded TCP Server Capable of Handling Multiple Clients Concurrently. [Hard] [Topic: Networking]
     * **Problem Statement**: Spawn threads handling client sockets.
     * **Input**: Concurrency tests.
     * **Output**: Active responses.

### Frequently Asked Interview Problems:
### [ ] Problem 11.270: Write a Java Program to Perform a HTTP GET Request Using standard URLConnection Class. [Medium] [Topic: Networking] [Company: TCS]
     * **Problem Statement**: Read response streams from HTTP links.
     * **Input**: URL endpoint.
     * **Output**: Response payload logs.

### Real-World Coding Challenges:
### [ ] Problem 11.271: Write a Java Program to Check Port Status on a Server (Port Scanner). [Medium] [Topic: Networking]
     * **Problem Statement**: Check socket bindings over a range of ports.
     * **Input**: Port range limits.
     * **Output**: Open ports list.

### Mini-Project Ideas:
* **Interactive CLI Weather Lookup Client**: Fetch JSON weather reports.

### Major Project Ideas:
* **Fully Decoupled Command Console Chat Room**: Build servers managing multithreaded chat sessions.

---

## 30. JDBC

### Concepts to Learn First:
* SQL driver management.
* Connections interfaces: `DriverManager`, `Connection`.
* Executions variables: `Statement`, `PreparedStatement`, `ResultSet`.

### Easy Programs:
### [ ] Problem 11.272: Write a Java Program to Establish a Connection to an In-Memory H2 Database. [Easy] [Topic: JDBC]
     * **Problem Statement**: Load driver and establish DB connection.
     * **Input**: DB configuration.
     * **Output**: Database connection confirmed.
### [ ] Problem 11.273: Write a Java Program to Execute a SQL Query to Create a Table. [Easy] [Topic: JDBC]
     * **Problem Statement**: Run CREATE TABLE statements using Statement execution.
     * **Input**: SQL command.
     * **Output**: Confirmation messages.
### [ ] Problem 11.274: Write a Java Program to Insert a Record Into a Database Table. [Easy] [Topic: JDBC]
     * **Problem Statement**: Add row details to target databases.
     * **Input**: Values.
     * **Output**: Row insertion confirmation.

### Medium Programs:
### [ ] Problem 11.275: Write a Java Program to Prevent SQL Injection Attacks Using PreparedStatements. [Medium] [Topic: JDBC]
     * **Problem Statement**: Use parameter inputs in PreparedStatements to secure queries.
     * **Input**: Malicious input test cases.
     * **Output**: Safely parsed values.
### [ ] Problem 11.276: Write a Java Program to Retrieve and Iterate Through SQL Records using ResultSet. [Medium] [Topic: JDBC]
     * **Problem Statement**: Loop query sets, extracting row attributes.
     * **Input**: DB select queries.
     * **Output**: Column list reports.

### Hard Programs:
### [ ] Problem 11.277: Write a Java Program to Implement SQL Transaction Management with Rollback Capabilities. [Hard] [Topic: JDBC]
     * **Problem Statement**: Commit groups of operations, calling `rollback()` if statements fail.
     * **Input**: Multi-stage updates.
     * **Output**: Restored DB state.

### Frequently Asked Interview Problems:
### [ ] Problem 11.278: Write a Java Program to Perform Batch Insertion Operations Using JDBC. [Medium] [Topic: JDBC] [Company: Infosys]
     * **Problem Statement**: Add updates to query batches, executing them inside unified network calls.
     * **Input**: Multi-row data.
     * **Output**: Batch execution confirmations.

### Real-World Coding Challenges:
### [ ] Problem 11.279: Write a Java Program to Load Database Configurations Dynamically from Local Properties Files. [Medium] [Topic: JDBC]
     * **Problem Statement**: Read database settings from file and connect.
     * **Input**: Credentials file.
     * **Output**: Connection status outputs.

### Mini-Project Ideas:
* **Interactive CLI Student Ledger Database Manager**: Manage students with DB backends.

### Major Project Ideas:
* **Interactive Banking Transaction Console Database**: Build banking ledger database backends tracking accounts.

---

## 31. Lambda Expressions

### Concepts to Learn First:
* Functional interfaces (exactly one abstract method).
* Lambda syntax: `(parameters) -> { body }`.
* Type inference in lambdas.

### Easy Programs:
### [ ] Problem 11.280: Write a Java Program to Implement a Simple Runnable Task Using a Lambda Expression. [Easy] [Topic: Lambda Expressions]
     * **Problem Statement**: Use lambdas to instantiate `Runnable` interfaces.
     * **Input**: None.
     * **Output**: Thread messages.
### [ ] Problem 11.281: Write a Java Program to Sort a List of Strings alphabetically Using a Lambda Expression. [Easy] [Topic: Lambda Expressions]
     * **Problem Statement**: Implement string sort using lambdas inside `sort()` methods.
     * **Input**: String lists.
     * **Output**: Ordered lists.

### Medium Programs:
### [ ] Problem 11.282: Write a Java Program to Filter Odd Numbers from a List Using a Lambda Predicate. [Medium] [Topic: Lambda Expressions]
     * **Problem Statement**: Filter collections using lambdas.
     * **Input**: Integers list.
     * **Output**: Filtered lists.
### [ ] Problem 11.283: Write a Java Program to Perform String Concatenations Using custom Functional Interfaces and Lambdas. [Medium] [Topic: Lambda Expressions]
     * **Problem Statement**: Define custom interfaces, invoking them with lambdas.
     * **Input**: String inputs.
     * **Output**: Joined strings.

### Hard Programs:
### [ ] Problem 11.284: Write a Java Program to Implement a Custom Event Dispatcher Using Lambda Listeners. [Hard] [Topic: Lambda Expressions]
     * **Problem Statement**: Dispatch event messages to lambda listener functions.
     * **Input**: Event triggers.
     * **Output**: Dispatch outcomes.

### Frequently Asked Interview Problems:
### [ ] Problem 11.285: Write a Java Program to Implement standard comparator rules Using Lambda Expressions. [Easy] [Topic: Lambda Expressions] [Company: TCS]
     * **Problem Statement**: Sort product lists using inline lambda comparators.
     * **Input**: Product class instances.
     * **Output**: Sorted catalogs.

### Real-World Coding Challenges:
### [ ] Problem 11.286: Write a Java Program to Map User Records into System Access Tokens using Lambdas. [Medium] [Topic: Lambda Expressions]
     * **Problem Statement**: Transform profiles using map operations.
     * **Input**: User arrays.
     * **Output**: Token strings.

### Mini-Project Ideas:
* **Interactive CLI Math Calculator using Lambdas**: Implement arithmetic using inline calculators.

### Major Project Ideas:
* **Custom Stream Filtering Processor**: Build processing engines matching datasets using lambda rules.

---

## 32. Functional Interfaces

### Concepts to Learn First:
* The `@FunctionalInterface` annotation.
* Built-in interfaces: `Predicate<T>`, `Function<T, R>`, `Consumer<T>`, `Supplier<T>`.

### Easy Programs:
### [ ] Problem 11.287: Write a Java Program to Check If a Number is Positive Using a Predicate. [Easy] [Topic: Functional Interfaces]
     * **Problem Statement**: Evaluate values using Predicate instances.
     * **Input**: `-10`.
     * **Output**: False.
### [ ] Problem 11.288: Write a Java Program to Convert an Integer to its String Representation Using a Function Interface. [Easy] [Topic: Functional Interfaces]
     * **Problem Statement**: Apply string transformations using Function interfaces.
     * **Input**: `250`.
     * **Output**: `"250"`.
### [ ] Problem 11.289: Write a Java Program to Print Message Lines to the Console Using a Consumer Interface. [Easy] [Topic: Functional Interfaces]
     * **Problem Statement**: Consume text lines using Consumer operations.
     * **Input**: `"Print Log"`.
     * **Output**: Console outputs.

### Medium Programs:
### [ ] Problem 11.290: Write a Java Program to Generate Random Integers Using a Supplier Interface. [Medium] [Topic: Functional Interfaces]
     * **Problem Statement**: Provide values using Supplier loops.
     * **Input**: Loop size.
     * **Output**: Random sequences.
### [ ] Problem 11.291: Write a Java Program to Chain Multiple Predicates to Validate a Input Password. [Medium] [Topic: Functional Interfaces]
     * **Problem Statement**: Chain length checks and digit checks using `and()`.
     * **Input**: Password string.
     * **Output**: Boolean validations.

### Hard Programs:
### [ ] Problem 11.292: Write a Java Program to Chain Multiple Function Interfaces to Perform Complex String Operations. [Hard] [Topic: Functional Interfaces]
     * **Problem Statement**: Apply transformations: Lowercase $\to$ Substring $\to$ Reverse.
     * **Input**: `"JavaLanguage"`.
     * **Output**: Transformed outcomes.

### Frequently Asked Interview Problems:
### [ ] Problem 11.293: Write a Java Program to Implement a Custom Functional Interface with Multiple Default Methods. [Medium] [Topic: Functional Interfaces] [Company: Infosys]
     * **Problem Statement**: Code interface with one abstract method and default helpers.
     * **Input**: Parameters.
     * **Output**: Combined outputs.

### Real-World Coding Challenges:
### [ ] Problem 11.294: Write a Java Program to Format Invoice Totals dynamically Using Custom Consumer Pipelines. [Medium] [Topic: Functional Interfaces]
     * **Problem Statement**: Format bill listings using chained consumer blocks.
     * **Input**: Invoice inputs.
     * **Output**: Printed sheets.

### Mini-Project Ideas:
* **Interactive CLI System Config Analyzer**: Verify system profiles using predicate chains.

### Major Project Ideas:
* **Fully Decoupled Data Processing pipeline**: Build processor classes mapping and filtering objects using functional interfaces.

---

## 33. Stream API

### Concepts to Learn First:
* Streams lifecycle: Creation $\to$ Intermediate operations $\to$ Terminal operations.
* Intermediate operations (lazy evaluation): `filter()`, `map()`, `sorted()`, `distinct()`.
* Terminal operations (triggering run): `collect()`, `forEach()`, `reduce()`, `count()`.
* Parallel streams performance.

### Easy Programs:
### [ ] Problem 11.295: Write a Java Program to Filter and Print All Even Numbers from a List using Streams. [Easy] [Topic: Stream API]
     * **Problem Statement**: Filter list using stream chains.
     * **Input**: `[1, 2, 3, 4, 5]`.
     * **Output**: `[2, 4]`.
### [ ] Problem 11.296: Write a Java Program to Convert all String Elements in a List to Uppercase using Streams. [Easy] [Topic: Stream API]
     * **Problem Statement**: Transform text collections using streams map.
     * **Input**: `["a", "b"]`.
     * **Output**: `["A", "B"]`.
### [ ] Problem 11.297: Write a Java Program to Find the Minimum and Maximum Elements in a List using Streams. [Easy] [Topic: Stream API]
     * **Problem Statement**: Extract limits using comparator lambdas.
     * **Input**: `[15, 2, 48, 7]`.
     * **Output**: Min=2, Max=48.

### Medium Programs:
### [ ] Problem 11.298: Write a Java Program to Count the Number of Strings Starting with a Target Letter using Streams. [Medium] [Topic: Stream API]
     * **Problem Statement**: Filter starts-with matches and calculate count.
     * **Input**: List = `["Apple", "Banana", "Apricot"]`, Prefix = `"A"`.
     * **Output**: `2`.
### [ ] Problem 11.299: Write a Java Program to Remove All Duplicate Elements from a List and Sort It using Streams. [Medium] [Topic: Stream API]
     * **Problem Statement**: Apply `distinct()` and `sorted()` stream operations.
     * **Input**: `[4, 1, 2, 4, 2, 3]`.
     * **Output**: `[1, 2, 3, 4]`.

### Hard Programs:
### [ ] Problem 11.300: Write a Java Program to Group a List of Custom Objects by a Specified Property using Streams. [Hard] [Topic: Stream API]
     * **Problem Statement**: Group employee objects by department using `Collectors.groupingBy`.
     * **Input**: Employee profiles.
     * **Output**: Map department arrays.

### Frequently Asked Interview Problems:
### [ ] Problem 11.301: Write a Java Program to Find the Average of a List of Integers using Streams. [Easy] [Topic: Stream API] [Company: TCS]
     * **Problem Statement**: Compute averages using `mapToInt()` and `average()`.
     * **Input**: `[1, 2, 3, 4]`.
     * **Output**: `2.5`.
### [ ] Problem 11.302: Write a Java Program to Concatenate a List of Strings into a Single Comma-Separated String using Streams. [Medium] [Topic: Stream API] [Company: Wipro]
     * **Problem Statement**: Collect items using `Collectors.joining(",")`.
     * **Input**: `["X", "Y", "Z"]`.
     * **Output**: `"X,Y,Z"`.

### Real-World Coding Challenges:
### [ ] Problem 11.303: Write a Java Program to Parse transactional log records and extract error messages using Streams. [Medium] [Topic: Stream API]
     * **Problem Statement**: Filter logs containing `"ERROR"`, extracting descriptions.
     * **Input**: Log files lines.
     * **Output**: Exception listing.

### Mini-Project Ideas:
* **Interactive CLI Student Grade Analyzer**: Compute stats on student lists using streams.

### Major Project Ideas:
* **Interactive Sales Analytics Engine**: Build analytics boards aggregating invoices by regions and dates using Streams.

---

## 34. Date and Time API

### Concepts to Learn First:
* Immutability of Java 8 date types.
* Core classes: `LocalDate`, `LocalTime`, `LocalDateTime`, `ZonedDateTime`.
* Duration and Period calculations.
* Formatter helpers (`DateTimeFormatter`).

### Easy Programs:
### [ ] Problem 11.304: Write a Java Program to Display the Current System Date, Time, and DateTime. [Easy] [Topic: Date and Time API]
     * **Problem Statement**: Output local configurations.
     * **Input**: None.
     * **Output**: Date/Time stamps.
### [ ] Problem 11.305: Write a Java Program to Format the Current Date using a Custom Pattern. [Easy] [Topic: Date and Time API]
     * **Problem Statement**: Display dates in `"dd-MM-yyyy"` layouts.
     * **Input**: Format strings.
     * **Output**: Formatted dates.
### [ ] Problem 11.306: Write a Java Program to Calculate the Date after N Days from Today. [Easy] [Topic: Date and Time API]
     * **Problem Statement**: Add offset days using `.plusDays()`.
     * **Input**: `N = 10`.
     * **Output**: Shifted dates.

### Medium Programs:
### [ ] Problem 11.307: Write a Java Program to Calculate the Age of a Person in Years, Months, and Days. [Medium] [Topic: Date and Time API]
     * **Problem Statement**: Compare birthdates with current dates using `Period.between()`.
     * **Input**: Birthdate = `1995-05-15`.
     * **Output**: Period description.
### [ ] Problem 11.308: Write a Java Program to Find the Day of the Week of a Specific Date in History. [Medium] [Topic: Date and Time API]
     * **Problem Statement**: Extract week day fields.
     * **Input**: `1947-08-15`.
     * **Output**: `"FRIDAY"`.

### Hard Programs:
### [ ] Problem 11.309: Write a Java Program to Calculate the Total Working Days between Two Dates Excluding Weekends. [Hard] [Topic: Date and Time API]
     * **Problem Statement**: Loop and check weekday bounds.
     * **Input**: Two dates.
     * **Output**: Working day count.

### Frequently Asked Interview Problems:
### [ ] Problem 11.310: Write a Java Program to Convert a Date between Different Time Zones. [Medium] [Topic: Date and Time API] [Company: TCS]
     * **Problem Statement**: Convert dates between GMT, EST, and IST zones.
     * **Input**: Zone IDs.
     * **Output**: Converted timestamps.

### Real-World Coding Challenges:
### [ ] Problem 11.311: Write a Java Program to Calculate Project Deadline Overdue Days and Penalties. [Medium] [Topic: Date and Time API]
     * **Problem Statement**: Evaluate days overdue comparing dates.
     * **Input**: Completion dates.
     * **Output**: Penalties.

### Mini-Project Ideas:
* **Interactive CLI Birthday Countdown**: Display remaining days to next birthday.

### Major Project Ideas:
* **Distributed Calendar Reservation System Engine**: Manage booking schedules checking slots overlap.

---

## 35. Data Structures

### Concepts to Learn First:
* Node structures and links.
* Memory allocations (array blocks vs link nodes).
* Traversal complexities.

### Subtopics: Linked List

#### Easy Programs:
### [ ] Problem 11.312: Write a Java Program to Implement a Singly Linked List Node Class and Append Elements. [Easy] [Topic: Data Structures LinkedList]
     * **Problem Statement**: Build a Node class and append elements sequentially.
     * **Input**: Values.
     * **Output**: Traversed node prints.

#### Medium Programs:
### [ ] Problem 11.313: Write a Java Program to Reverse a Singly Linked List. [Medium] [Topic: Data Structures LinkedList]
     * **Problem Statement**: Reverse list links in-place.
     * **Input**: `1 -> 2 -> 3`.
     * **Output**: `3 -> 2 -> 1`.

#### Hard Programs:
### [ ] Problem 11.314: Write a Java Program to Detect and Remove a Loop in a Singly Linked List. [Hard] [Topic: Data Structures LinkedList]
     * **Problem Statement**: Floyd's cycle finding algorithm.
     * **Input**: Linked list containing cycle links.
     * **Output**: Loop broken list state.

### Subtopics: Stack and Queue

#### Easy Programs:
### [ ] Problem 11.315: Write a Java Program to Implement a LIFO Stack using Arrays. [Easy] [Topic: Data Structures Stack]
     * **Problem Statement**: Code stack push/pop functions.
     * **Input**: Arrays bounds.
     * **Output**: LIFO sequence check.

#### Medium Programs:
### [ ] Problem 11.316: Write a Java Program to Implement a FIFO Queue using Nodes. [Medium] [Topic: Data Structures Queue]
     * **Problem Statement**: Build queue operations using node links.
     * **Input**: Enqueue sequence.
     * **Output**: Dequeued results.

#### Hard Programs:
### [ ] Problem 11.317: Write a Java Program to Implement a Min-Stack Capable of Retrieving Minimum in O(1) Time. [Hard] [Topic: Data Structures Stack]
     * **Problem Statement**: Track minimums using secondary tracker stacks.
     * **Input**: Push/pop calls.
     * **Output**: Current minimum reports.

### Subtopics: Trees and Binary Search Tree

#### Easy Programs:
### [ ] Problem 11.318: Write a Java Program to Define a Binary Tree Node Class and Perform Inorder Traversal. [Easy] [Topic: Data Structures Binary Tree]
     * **Problem Statement**: Write recursive left $\to$ root $\to$ right traversal.
     * **Input**: Node links.
     * **Output**: Visited sequence.

#### Medium Programs:
### [ ] Problem 11.319: Write a Java Program to Insert Elements into a Binary Search Tree (BST). [Medium] [Topic: Data Structures BST]
     * **Problem Statement**: Maintain order property ($L < R < parent$).
     * **Input**: Insert keys.
     * **Output**: Validated BST representation.

#### Hard Programs:
### [ ] Problem 11.320: Write a Java Program to Delete a Target Node from a Binary Search Tree. [Hard] [Topic: Data Structures BST]
     * **Problem Statement**: Handle leaf, single child, and double children deletions.
     * **Input**: Delete key.
     * **Output**: Validated BST structure.

### Subtopics: Heap

#### Easy Programs:
### [ ] Problem 11.321: Write a Java Program to Verify If a Given Binary Tree is a Max-Heap. [Easy] [Topic: Data Structures Heap]
     * **Problem Statement**: Verify parent properties ($parent \ge child$) and completeness.
     * **Input**: Binary trees.
     * **Output**: Validity boolean.

#### Medium Programs:
### [ ] Problem 11.322: Write a Java Program to Implement Heapify Operations on an Array. [Medium] [Topic: Data Structures Heap]
     * **Problem Statement**: Transform arrays into min/max heap layout.
     * **Input**: `[4, 10, 3, 5, 1]`.
     * **Output**: Max-heapified array.

#### Hard Programs:
### [ ] Problem 11.323: Write a Java Program to Implement a Custom Max-Heap Structure from Scratch. [Hard] [Topic: Data Structures Heap]
     * **Problem Statement**: Build structures supporting insertion, deletion, and heap updates.
     * **Input**: Insertion values.
     * **Output**: Heap arrays.

### Subtopics: Graph

#### Easy Programs:
### [ ] Problem 11.324: Write a Java Program to Represent a Graph using an Adjacency Matrix. [Easy] [Topic: Data Structures Graph]
     * **Problem Statement**: Fill matrices tracking edge connections.
     * **Input**: Nodes lists and edge pairs.
     * **Output**: 2D adjacency matrix.

#### Medium Programs:
### [ ] Problem 11.325: Write a Java Program to Implement Breadth-First Search (BFS) Traversal on a Graph. [Medium] [Topic: Data Structures Graph]
     * **Problem Statement**: Traverse graphs level by level using queue trackers.
     * **Input**: Graph connections.
     * **Output**: BFS visit path.

#### Hard Programs:
### [ ] Problem 11.326: Write a Java Program to Implement Depth-First Search (DFS) Traversal on a Graph. [Hard] [Topic: Data Structures Graph]
     * **Problem Statement**: Traverse graph branches recursively.
     * **Input**: Graph connections.
     * **Output**: DFS visit path.

### Subtopics: Trie and Hashing

#### Easy Programs:
### [ ] Problem 11.327: Write a Java Program to Implement a Simple Hash Map using Array Buckets. [Easy] [Topic: Data Structures Hashing]
     * **Problem Statement**: Resolve collisions using simple chaining.
     * **Input**: Key-value entries.
     * **Output**: Stored records.

#### Medium Programs:
### [ ] Problem 11.328: Write a Java Program to Implement Word Insertion and Search in a Trie (Prefix Tree). [Medium] [Topic: Data Structures Trie]
     * **Problem Statement**: Build trie structures supporting insertion and search.
     * **Input**: Words list.
     * **Output**: Presence validations.

#### Hard Programs:
### [ ] Problem 11.329: Write a Java Program to Implement a Trie Auto-Complete Dictionary Query. [Hard] [Topic: Data Structures Trie]
     * **Problem Statement**: Retrieve words matching given prefixes in tries.
     * **Input**: Prefix.
     * **Output**: Matching words list.

### Frequently Asked Interview Problems:
### [ ] Problem 11.330: Write a Java Program to Find the Middle Element of a Singly Linked List in a Single Pass. [Easy] [Topic: Data Structures LinkedList] [Company: TCS]
     * **Problem Statement**: Use fast and slow pointer pointers.
     * **Input**: `1 -> 2 -> 3 -> 4 -> 5`.
     * **Output**: `3`.
### [ ] Problem 11.331: Write a Java Program to Detect Cycle in a Directed Graph. [Hard] [Topic: Data Structures Graph] [Company: Amazon]
     * **Problem Statement**: Check back-edges inside recursive DFS stacks.
     * **Input**: Graph connections.
     * **Output**: Loop detection result.

### Real-World Coding Challenges:
### [ ] Problem 11.332: Write a Java Program to Model a Social Network Connection Tracker. [Medium] [Topic: Data Structures Graph]
     * **Problem Statement**: Model graphs tracking connections.
     * **Input**: Edge inputs.
     * **Output**: Separation degree outputs.

### Mini-Project Ideas:
* **Interactive CLI Dictionary lookup Tree**: Search dictionary words.

### Major Project Ideas:
* **Terminal Directory System Indexes Database**: Build indexes tracking files path structures.

---

## 36. Algorithms

### Concepts to Learn First:
* Complexity classes ($O(1)$, $O(\log N)$, $O(N)$, $O(N^2)$).
* Optimizing space vs time.
* Core algorithmic strategies.

### Subtopics: Greedy Algorithms

#### Easy Programs:
### [ ] Problem 11.333: Write a Java Program to Calculate Minimum Coins for Change using a Greedy Approach. [Easy] [Topic: Algorithms Greedy]
     * **Problem Statement**: Retrieve minimum coin counts for target amounts.
     * **Input**: Denominations, target.
     * **Output**: Coins details.

#### Medium Programs:
### [ ] Problem 11.334: Write a Java Program to Solve the Fractional Knapsack Problem. [Medium] [Topic: Algorithms Greedy]
     * **Problem Statement**: Extract maximum value fractions by sorting weights/values.
     * **Input**: Capacity limits.
     * **Output**: Max profit.

#### Hard Programs:
### [ ] Problem 11.335: Write a Java Program to Implement Huffman Coding. [Hard] [Topic: Algorithms Greedy]
     * **Problem Statement**: Construct tree networks calculating symbol prefix codes.
     * **Input**: Frequencies array.
     * **Output**: Code map mappings.

### Subtopics: Backtracking

#### Easy Programs:
### [ ] Problem 11.336: Write a Java Program to Generate All Subsets of a Set using Backtracking. [Easy] [Topic: Algorithms Backtracking]
     * **Problem Statement**: Build subsets recursively.
     * **Input**: `[1, 2]`.
     * **Output**: `[], [1], [2], [1, 2]`.

#### Medium Programs:
### [ ] Problem 11.337: Write a Java Program to Find All Path Exits in a Maze (Rat in a Maze). [Medium] [Topic: Algorithms Backtracking]
     * **Problem Statement**: Find exit paths in binary grids.
     * **Input**: Matrix grid.
     * **Output**: Path steps.

#### Hard Programs:
### [ ] Problem 11.338: Write a Java Program to Solve the N-Queens Puzzle. [Hard] [Topic: Algorithms Backtracking]
     * **Problem Statement**: Arrange N queens on an $N\times N$ chessboard safely.
     * **Input**: `N = 4`.
     * **Output**: Valid coordinate lists.

### Subtopics: Divide and Conquer

#### Easy Programs:
### [ ] Problem 11.339: Write a Java Program to Calculate Power of X to Y using Divide and Conquer. [Easy] [Topic: Algorithms Divide and Conquer]
     * **Problem Statement**: Compute powers recursively by halving exponents.
     * **Input**: Base=3, Exp=5.
     * **Output**: `243`.

#### Medium Programs:
### [ ] Problem 11.340: Write a Java Program to Find the Peak Element in an Array using Divide and Conquer. [Medium] [Topic: Algorithms Divide and Conquer]
     * **Problem Statement**: Half array spaces using binary peak checking bounds.
     * **Input**: `[1, 3, 20, 4, 1, 0]`.
     * **Output**: `20`.

#### Hard Programs:
### [ ] Problem 11.341: Write a Java Program to Find the Median of Two Sorted Arrays. [Hard] [Topic: Algorithms Divide and Conquer]
     * **Problem Statement**: Binary partitions halves matching array boundaries in $O(\log(M+N))$ time.
     * **Input**: Two sorted arrays.
     * **Output**: Median values.

### Subtopics: Dynamic Programming

#### Easy Programs:
### [ ] Problem 11.342: Write a Java Program to Solve the Coin Change Problem using Dynamic Programming. [Easy] [Topic: Algorithms DP]
     * **Problem Statement**: Tally minimum coins count using bottom-up tabulations.
     * **Input**: Coin values and targets.
     * **Output**: Min coins.

#### Medium Programs:
### [ ] Problem 11.343: Write a Java Program to Find the Longest Common Subsequence of Two Strings. [Medium] [Topic: Algorithms DP]
     * **Problem Statement**: Tally common sequences length using DP matrix maps.
     * **Input**: `"AGGTAB"`, `"GXTXAYb"`.
     * **Output**: `4`.

#### Hard Programs:
### [ ] Problem 11.344: Write a Java Program to Solve the 0/1 Knapsack Problem using Dynamic Programming. [Hard] [Topic: Algorithms DP]
     * **Problem Statement**: Maximize profits under item weights bounds.
     * **Input**: Item listings.
     * **Output**: Max profit.

### Subtopics: Graph Algorithms

#### Easy Programs:
### [ ] Problem 11.345: Write a Java Program to Find the Transitive Closure of a Directed Graph. [Easy] [Topic: Algorithms Graph]
     * **Problem Statement**: Find reachability matrices.
     * **Input**: Adjacency matrices.
     * **Output**: Connectivity maps.

#### Medium Programs:
### [ ] Problem 11.346: Write a Java Program to Implement Dijkstra's Shortest Path Algorithm on a Graph. [Medium] [Topic: Algorithms Graph]
     * **Problem Statement**: Find shortest paths from source using min-heaps.
     * **Input**: Weighted graph lists.
     * **Output**: Distance arrays.

#### Hard Programs:
### [ ] Problem 11.347: Write a Java Program to Implement the Floyd-Warshall All-Pairs Shortest Path Algorithm. [Hard] [Topic: Algorithms Graph]
     * **Problem Statement**: Resolve all pairs distances using DP grid updates.
     * **Input**: Weights matrices.
     * **Output**: Path matrices.

### Frequently Asked Interview Problems:
### [ ] Problem 11.348: Write a Java Program to Find the Maximum Sum Contiguous Subarray (Kadane's Algorithm). [Easy] [Topic: Algorithms Arrays] [Company: TCS]
     * **Problem Statement**: Max sum in single traversals.
     * **Input**: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`.
     * **Output**: `6` (`[4, -1, 2, 1]`).
### [ ] Problem 11.349: Write a Java Program to Find the Longest Palindromic Substring. [Medium] [Topic: Algorithms DP] [Company: Amazon]
     * **Problem Statement**: Find longest palindromic string segments.
     * **Input**: `"babad"`.
     * **Output**: `"bab"` or `"aba"`.

### Real-World Coding Challenges:
### [ ] Problem 11.350: Write a Java Program to Calculate the Minimum Cost to Distribute Products across Depots. [Hard] [Topic: Algorithms Graph]
     * **Problem Statement**: Optimize distributions routes using min-spanning trees.
     * **Input**: Distribution network details.
     * **Output**: Optimum routing configurations.

### Mini-Project Ideas:
* **Interactive CLI Coin Exchange Optimizer**: Build currency changers.

### Major Project Ideas:
* **Interactive Transit System Router**: Build routing maps finding shortest tracks between station nodes.
