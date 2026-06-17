# Milestone 1: Java Programming Fundamentals

This milestone builds the core foundation of Java syntax, variable usage, data types, basic string operations, reading input from the console, and simple mathematical problem-solving.

---

## 1. Print Statements and Java Syntax

📌 **Core Concept**: Every standalone Java application requires a class definition and a `public static void main(String[] args)` method which acts as the application's entry point. Code is compiled into bytecode (`.class`) and executed by the Java Virtual Machine (JVM).

### [ ] Problem 1.1: Hello World [Easy] [Topic: Syntax]
* **Learning Objective**: Create your first Java class, compile, and execute it.
* **Problem Statement**: Write a Java program that displays `"Hello, World!"` followed by a new line.
* **Input**: None
* **Output**:
  ```text
  Hello, World!
  ```
* **Real-World Relevance**: Sanity checking compiler settings and environment variables.
* **Hint**: Use `System.out.println()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
* **Explanation**: The `System.out.println()` prints the string argument to the console along with a trailing new line.
* **Common Mistakes**: Casing `system` instead of `System` (Java is case-sensitive).
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.2: Interactive Pattern [Easy] [Topic: Syntax]
* **Learning Objective**: Understand formatting using console outputs.
* **Problem Statement**: Output a right-angled triangle made of asterisks (`*`) of height 4.
* **Input**: None
* **Output**:
  ```text
  *
  **
  ***
  ****
  ```
* **Hint**: Call `System.out.println()` repeatedly with different numbers of stars.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("*");
        System.out.println("**");
        System.out.println("***");
        System.out.println("****");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.3: Escape Characters [Easy] [Topic: Syntax]
* **Learning Objective**: Work with special escape characters like tab (`\t`) and newline (`\n`).
* **Problem Statement**: Print the text `"Java\tRoadmap\nNext\tStep"` using a single print call.
* **Input**: None
* **Output**:
  ```text
  Java    Roadmap
  Next    Step
  ```
* **Hint**: Put `\t` for tab spaces and `\n` for line breaks inside your double quotes.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.print("Java\tRoadmap\nNext\tStep\n");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.4: Format Output [Medium] [Topic: Syntax]
* **Learning Objective**: Introduce `System.out.printf()` to format tabular data.
* **Problem Statement**: Print a table header containing "ITEM" and "PRICE" aligned left with width 10, then print two items.
* **Input**: None
* **Output**:
  ```text
  ITEM      PRICE     
  Apples    $2.50     
  Oranges   $3.99     
  ```
* **Hint**: Use formatting string `%-10s` for left-justified strings.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.printf("%-10s%-10s\n", "ITEM", "PRICE");
        System.out.printf("%-10s%-10s\n", "Apples", "$2.50");
        System.out.printf("%-10s%-10s\n", "Oranges", "$3.99");
    }
}
```
* **Common Mistakes**: Forgetting to add `\n` at the end of a format string; `printf` does not insert line breaks automatically.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.5: Print Unicode [Medium] [Topic: Syntax]
* **Learning Objective**: Display Unicode and non-ASCII character glyphs in standard terminal streams.
* **Problem Statement**: Output the text `"☕ Java Developer ☕"` using unicode escapes.
* **Input**: None
* **Output**:
  ```text
  ☕ Java Developer ☕
  ```
* **Hint**: Unicode value for coffee cup is `\u2615`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("\u2615 Java Developer \u2615");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.6: Dynamic ASCIIMart [Hard] [Topic: Syntax]
* **Learning Objective**: Create multi-line layouts using text graphics and escape quotes.
* **Problem Statement**: Draw a console ASCII-art storefront box that dynamically embeds quotes (`"`) around the store name.
* **Input**: None
* **Output**:
  ```text
  +------------------+
  |  Welcome to      |
  |  "ASCIIMart"     |
  +------------------+
  ```
* **Hint**: Backslash-escape inner quotes: `\"`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("+------------------+");
        System.out.println("|  Welcome to      |");
        System.out.println("|  \"ASCIIMart\"     |");
        System.out.println("+------------------+");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 2. Variables and Data Types

📌 **Core Concept**: Variables are locations in memory that hold data. Java is strongly typed: primitive variables store raw values directly (e.g., `int`, `double`, `boolean`, `char`), whereas object variables (Reference types) store pointers to dynamic memory blocks.

### [ ] Problem 1.7: Temperature Converter [Easy] [Topic: Variables]
* **Learning Objective**: Work with numerical variables and arithmetic equations.
* **Problem Statement**: Convert a temperature value of 98.6 F to Celsius. Formula: $C = (F - 32) \times 5 / 9$.
* **Input**: Double F = `98.6`
* **Output**:
  ```text
  37.0
  ```
* **Hint**: Store the result in a `double` variable. Use decimal literals like `5.0 / 9.0` to avoid integer division.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double fahrenheit = 98.6;
        double celsius = (fahrenheit - 32) * 5.0 / 9.0;
        System.out.println(celsius);
    }
}
```
* **Common Mistakes**: Writing `5 / 9`. In Java, integer division cuts off fractional parts, returning `0`.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.8: Swapping Variables [Easy] [Topic: Variables]
* **Learning Objective**: Swap two values using a temporary helper container.
* **Problem Statement**: Swap the values of two variables `a` and `b` and print them.
* **Input**: `a = 5`, `b = 10`
* **Output**:
  ```text
  a = 10, b = 5
  ```
* **Hint**: Store `a` in a temporary variable `temp` before overwriting it.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        
        int temp = a;
        a = b;
        b = temp;
        
        System.out.println("a = " + a + ", b = " + b);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.9: Overflow and Underflow [Easy] [Topic: Variables]
* **Learning Objective**: Learn limits of primitive variable types.
* **Problem Statement**: Add 1 to the maximum possible value of a signed 32-bit integer and print it.
* **Input**: None
* **Output**:
  ```text
  -2147483648
  ```
* **Hint**: Use `Integer.MAX_VALUE`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int maxValue = Integer.MAX_VALUE;
        int overflowValue = maxValue + 1;
        System.out.println(overflowValue);
    }
}
```
* **Explanation**: In signed two's-complement arithmetic, adding 1 to the largest positive number wraps it around to the most negative number.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.10: Type Cast [Medium] [Topic: Variables]
* **Learning Objective**: Explicit casting from higher precision float to lower integer scales.
* **Problem Statement**: Take a double `9.99`, cast it explicitly to an integer, and print both.
* **Input**: Double `9.99`
* **Output**:
  ```text
  Double: 9.99, Integer: 9
  ```
* **Hint**: Use the syntax `(int) variable`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double price = 9.99;
        int roundedPrice = (int) price;
        System.out.println("Double: " + price + ", Integer: " + roundedPrice);
    }
}
```
* **Explanation**: Casting a double to an int truncates the decimal portion instead of rounding.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.11: ASCII Decrypter [Medium] [Topic: Variables]
* **Learning Objective**: Convert char types to integers and vice versa.
* **Problem Statement**: Convert characters `'A'`, `'B'`, and `'C'` to their ASCII values and print them.
* **Input**: None
* **Output**:
  ```text
  A: 65, B: 66, C: 67
  ```
* **Hint**: Store the char in an int variable or use explicit cast `(int) 'A'`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        char val1 = 'A';
        char val2 = 'B';
        char val3 = 'C';
        
        System.out.println("A: " + (int)val1 + ", B: " + (int)val2 + ", C: " + (int)val3);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.12: Swapping Without Temp [Hard] [Topic: Variables]
* **Learning Objective**: Swapping primitives without declaring a third reference.
* **Problem Statement**: Swap two integers `x` and `y` without using a temp variable.
* **Input**: `x = 10`, `y = 20`
* **Output**:
  ```text
  x = 20, y = 10
  ```
* **Hint**: Use addition and subtraction math: first let `x = x + y`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;
        
        x = x + y; // x becomes 30
        y = x - y; // y becomes 10 (30 - 20)
        x = x - y; // x becomes 20 (30 - 10)
        
        System.out.println("x = " + x + ", y = " + y);
    }
}
```
* **Alternative Approach**: Using bitwise XOR operations: `x = x ^ y; y = x ^ y; x = x ^ y;`.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 3. Strings

📌 **Core Concept**: Strings in Java are immutable objects. String literals are stored in the String Pool to optimize memory reuse. Operations like concatenation (`+`) create new String instances, while `StringBuilder` can be used to perform character modifications in-place.

### [ ] Problem 1.13: String Length and Case [Easy] [Topic: Strings]
* **Learning Objective**: Call basic String library methods.
* **Problem Statement**: Print the length, uppercase, and lowercase representations of `"Java Roadmap"`.
* **Input**: `"Java Roadmap"`
* **Output**:
  ```text
  12
  JAVA ROADMAP
  java roadmap
  ```
* **Hint**: Look at `.length()`, `.toUpperCase()`, and `.toLowerCase()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "Java Roadmap";
        System.out.println(str.length());
        System.out.println(str.toUpperCase());
        System.out.println(str.toLowerCase());
    }
}
```
* **Common Mistakes**: Writing `.length` (like arrays) instead of `.length()`.
* **Complexity**: Time: $O(N)$ (where $N$ is string length) | Space: $O(N)$ (to create upper/lower copies)
</details>

### [ ] Problem 1.14: Concatenation [Easy] [Topic: Strings]
* **Learning Objective**: Combine multiple strings with spacing.
* **Problem Statement**: Combine three variables: `"Java"`, `"Programming"`, and `"Roadmap"` into one single sentence separated by spaces.
* **Input**: None
* **Output**:
  ```text
  Java Programming Roadmap
  ```
* **Hint**: Use the `+` operator or String `.join()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String first = "Java";
        String second = "Programming";
        String third = "Roadmap";
        String combined = first + " " + second + " " + third;
        System.out.println(combined);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 1.15: String Compare [Easy] [Topic: Strings]
* **Learning Objective**: Learn the difference between `==` and `.equals()`.
* **Problem Statement**: Test if two string instances, one defined as a literal and one using `new String()`, contain the same text.
* **Input**: `s1 = "test"`, `s2 = new String("test")`
* **Output**:
  ```text
  == : false
  equals : true
  ```
* **Hint**: Direct equality `==` checks reference address compatibility, whereas `.equals()` evaluates value equality.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String s1 = "test";
        String s2 = new String("test");
        
        System.out.println("== : " + (s1 == s2));
        System.out.println("equals : " + s1.equals(s2));
    }
}
```
* **Important**: Always use `.equals()` to compare string contents in Java.
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 1.16: Char Extraction [Medium] [Topic: Strings]
* **Learning Objective**: Extract a specific character and locate indices.
* **Problem Statement**: Find the character at index 5 and check if index 2 contains letter `'a'` in `"JavaRoadmap"`.
* **Input**: `"JavaRoadmap"`
* **Output**:
  ```text
  Char at index 5: o
  Index 2 is 'v': true
  ```
* **Hint**: Check string indexing methods `.charAt()` and `.indexOf()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "JavaRoadmap";
        char ch = str.charAt(5);
        boolean isV = str.charAt(2) == 'v';
        
        System.out.println("Char at index 5: " + ch);
        System.out.println("Index 2 is 'v': " + isV);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.17: Substring Extraction [Medium] [Topic: Strings]
* **Learning Objective**: Extract parts of a string using slice bounds.
* **Problem Statement**: Extract the word `"Road"` from `"JavaRoadmap"`.
* **Input**: `"JavaRoadmap"`
* **Output**:
  ```text
  Road
  ```
* **Hint**: Use `.substring(startIndex, endIndex)`. Note that `endIndex` is exclusive.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "JavaRoadmap";
        // "Java" is index 0-3. "Road" starts at 4 and ends before 8.
        String sub = str.substring(4, 8);
        System.out.println(sub);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 1.18: String Inverter [Hard] [Topic: Strings]
* **Learning Objective**: Work with mutable buffers for fast string reversals.
* **Problem Statement**: Reverse a string word-by-word (e.g. `"Java is cool"` becomes `"cool is Java"`).
* **Input**: `"Java is cool"`
* **Output**:
  ```text
  cool is Java
  ```
* **Hint**: Split the string by space using `.split(" ")` and build it backwards.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String sentence = "Java is cool";
        String[] words = sentence.split(" ");
        StringBuilder reversed = new StringBuilder();
        
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]);
            if (i > 0) {
                reversed.append(" ");
            }
        }
        System.out.println(reversed.toString());
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

---

## 4. User Input

📌 **Core Concept**: The `Scanner` class parses primitives and strings from console input streams (`System.in`). Input streams must be closed when no longer needed to prevent OS resource leaks.

### [ ] Problem 1.19: Welcome Message [Easy] [Topic: Input]
* **Learning Objective**: Parse simple string input from user streams.
* **Problem Statement**: Ask for a user's name via scanner and print a welcome message.
* **Input**:
  ```text
  Alice
  ```
* **Output**:
  ```text
  Hello Alice, welcome to Java!
  ```
* **Hint**: Import `java.util.Scanner`, instantiate it with `System.in`, and call `scanner.nextLine()`.
<details>
<summary>View Solution</summary>

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter name: ");
        String name = scanner.nextLine();
        System.out.println("Hello " + name + ", welcome to Java!");
        scanner.close();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.20: Simple Addition [Easy] [Topic: Input]
* **Learning Objective**: Parse integer primitives from streams.
* **Problem Statement**: Read two integers and display their sum.
* **Input**:
  ```text
  10
  20
  ```
* **Output**:
  ```text
  Sum: 30
  ```
* **Hint**: Use `scanner.nextInt()`.
<details>
<summary>View Solution</summary>

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        System.out.println("Sum: " + (num1 + num2));
        scanner.close();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.21: Token Counter [Easy] [Topic: Input]
* **Learning Objective**: Extract single words vs. full lines from a text stream.
* **Problem Statement**: Read three individual space-separated words on a line and print them on separate lines.
* **Input**:
  ```text
  Java is awesome
  ```
* **Output**:
  ```text
  Word 1: Java
  Word 2: is
  Word 3: awesome
  ```
* **Hint**: Use `.next()` instead of `.nextLine()` to read token by token.
<details>
<summary>View Solution</summary>

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String w1 = sc.next();
        String w2 = sc.next();
        String w3 = sc.next();
        
        System.out.println("Word 1: " + w1);
        System.out.println("Word 2: " + w2);
        System.out.println("Word 3: " + w3);
        sc.close();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.22: Reading Tokens Safely [Medium] [Topic: Input]
* **Learning Objective**: Prevent Scanner crash errors when parsing mismatched inputs.
* **Problem Statement**: Read an integer safely. If the user types a non-integer, output a warning message.
* **Input**:
  ```text
  abc
  ```
* **Output**:
  ```text
  Invalid integer input!
  ```
* **Hint**: Check type availability with `scanner.hasNextInt()` before calling `.nextInt()`.
<details>
<summary>View Solution</summary>

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int val = sc.nextInt();
            System.out.println("Value: " + val);
        } else {
            System.out.println("Invalid integer input!");
        }
        sc.close();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.23: Double Scanner Offset [Medium] [Topic: Input]
* **Learning Objective**: Resolve the common scanner input buffer skip pitfall.
* **Problem Statement**: Ask a user for age (int) followed by their full address (line containing spaces). Print both.
* **Input**:
  ```text
  25
  123 Java Lane
  ```
* **Output**:
  ```text
  Age: 25, Address: 123 Java Lane
  ```
* **Hint**: Calling `.nextInt()` leaves a newline (`\n`) character in the buffer. Clear it before calling `.nextLine()`.
<details>
<summary>View Solution</summary>

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Age: ");
        int age = sc.nextInt();
        
        sc.nextLine(); // Clear the remaining newline character in buffer
        
        System.out.print("Address: ");
        String address = sc.nextLine();
        
        System.out.println("Age: " + age + ", Address: " + address);
        sc.close();
    }
}
```
* **Warning**: Forgetting `sc.nextLine()` to clear the buffer will cause your program to skip reading the address entirely.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.24: Interactive Average [Hard] [Topic: Input]
* **Learning Objective**: Read variable inputs in a loop until a stop token.
* **Problem Statement**: Calculate the average of a series of numbers entered by the user, stopping when they enter `0`.
* **Input**:
  ```text
  4
  8
  12
  0
  ```
* **Output**:
  ```text
  Average: 8.0
  ```
* **Hint**: Use a loop to keep reading inputs, keeping track of the sum and count of entries.
<details>
<summary>View Solution</summary>

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double sum = 0;
        int count = 0;
        
        while (true) {
            double value = sc.nextDouble();
            if (value == 0) {
                break;
            }
            sum += value;
            count++;
        }
        
        if (count > 0) {
            System.out.println("Average: " + (sum / count));
        } else {
            System.out.println("No values entered.");
        }
        sc.close();
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is input count) | Space: $O(1)$
</details>

---

## 5. Algorithmic Problems – Level 1

📌 **Core Concept**: Basic mathematical computations, operators (`+`, `-`, `*`, `/`, `%`), and manipulating numbers without loops or complex branch structures.

### [ ] Problem 1.25: Odd or Even [Easy] [Topic: Algorithm 1]
* **Learning Objective**: Work with the modulo operator (`%`).
* **Problem Statement**: Check if a given number is odd or even. Output `true` if it's even.
* **Input**: `7`
* **Output**:
  ```text
  Even: false
  ```
* **Hint**: Use `number % 2 == 0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int val = 7;
        boolean isEven = (val % 2) == 0;
        System.out.println("Even: " + isEven);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.26: Power Calculation [Easy] [Topic: Algorithm 1]
* **Learning Objective**: Call Java mathematical static functions.
* **Problem Statement**: Calculate the value of base $X$ raised to the power exponent $Y$.
* **Input**: `base = 2`, `exponent = 5`
* **Output**:
  ```text
  32.0
  ```
* **Hint**: Look at the `Math.pow(a, b)` function.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double base = 2;
        double exp = 5;
        double result = Math.pow(base, exp);
        System.out.println(result);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.27: Area of a Circle [Easy] [Topic: Algorithm 1]
* **Learning Objective**: Work with global constant primitives.
* **Problem Statement**: Calculate the area of a circle given its radius. Formula: $A = \pi r^2$.
* **Input**: `radius = 5.0`
* **Output**:
  ```text
  78.53981633974483
  ```
* **Hint**: Use `Math.PI`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double radius = 5.0;
        double area = Math.PI * radius * radius;
        System.out.println(area);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.28: Hypotenuse [Medium] [Topic: Algorithm 1]
* **Learning Objective**: Nest mathematical function expressions.
* **Problem Statement**: Given sides $a$ and $b$ of a right-angled triangle, calculate the hypotenuse $c = \sqrt{a^2 + b^2}$.
* **Input**: `a = 3`, `b = 4`
* **Output**:
  ```text
  5.0
  ```
* **Hint**: Combine `Math.sqrt()` and arithmetic additions.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double a = 3;
        double b = 4;
        double hypotenuse = Math.sqrt((a * a) + (b * b));
        System.out.println(hypotenuse);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.29: Leap Year Logic [Medium] [Topic: Algorithm 1]
* **Learning Objective**: Chain logical boolean operators (`&&`, `||`, `!`).
* **Problem Statement**: Determine if a year is a leap year. A year is leap if it is divisible by 4, but not by 100 unless also divisible by 400.
* **Input**: `2024`
* **Output**:
  ```text
  Leap Year: true
  ```
* **Hint**: Create a boolean expression using `% 4`, `% 100`, and `% 400`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println("Leap Year: " + isLeap);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 1.30: Digit Extraction [Hard] [Topic: Algorithm 1]
* **Learning Objective**: Extract individual digits of a number using mathematical operators.
* **Problem Statement**: Calculate the sum of all digits of a 3-digit positive integer without using loops or strings.
* **Input**: `384`
* **Output**:
  ```text
  Sum: 15
  ```
* **Hint**: Extract the units digit using `% 10`, remove the last digit using `/ 10`, and repeat.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int number = 384;
        
        int hundreds = number / 100;
        int tens = (number / 10) % 10;
        int units = number % 10;
        
        int sum = hundreds + tens + units;
        System.out.println("Sum: " + sum);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>
