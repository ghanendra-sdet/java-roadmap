# 🧪 Part 12 — Write-Your-Own Practice Tracker

> **How this section is different from the Practice Java Center (Part 9) and Massive Practice
> (Part 11):** same idea — categorized problems with checkboxes, difficulty/topic tags, and a
> full reference solution behind every problem — just a much bigger bank, **350 problems across
> 14 categories**. Try writing the solution yourself first, in your own IDE, then use the built-in
> "Solution" tab to check your work. This section was merged in from a standalone companion repo
> (`Practice-Java-Questions-and-Answers`) so every practice track lives in one place.

---

## 📂 Categories in This Tracker

| # | Category | Problems |
|---|---|---|
| 01 | Basic Java Programs | 25 |
| 02 | Operators & Expressions | 15 |
| 03 | If-Else Programs | 20 |
| 04 | Loops Programs | 30 |
| 05 | Pattern Programs | 40 |
| 06 | Arrays | 30 |
| 07 | Strings | 35 |
| 08 | Methods & Functions | 10 |
| 09 | OOP Programs | 25 |
| 10 | Exception Handling | 15 |
| 11 | Collections Framework | 30 |
| 12 | File Handling | 10 |
| 13 | Java 8 Features | 15 |
| 14 | Advanced DSA & Interview Programs | 50 |

---

# 📁 Category 01: Basic Java Programs

> Fundamental programs to understand syntax, basic input/output, variables, and simple math calculations.

---

## 📋 Table of Contents

- [1. Write a Java program to print 'Hello World'](#1-write-a-java-program-to-print-hello-world)
- [2. Write a Java program to print your name](#2-write-a-java-program-to-print-your-name)
- [3. Write a Java program to add two numbers](#3-write-a-java-program-to-add-two-numbers)
- [4. Write a Java program to swap two numbers](#4-write-a-java-program-to-swap-two-numbers)
- [5. Write a Java program to calculate the area of a circle](#5-write-a-java-program-to-calculate-the-area-of-a-circle)
- [6. Write a Java program to calculate the area of a rectangle](#6-write-a-java-program-to-calculate-the-area-of-a-rectangle)
- [7. Write a Java program to calculate the area of a triangle](#7-write-a-java-program-to-calculate-the-area-of-a-triangle)
- [8. Write a Java program to calculate the perimeter of a circle](#8-write-a-java-program-to-calculate-the-perimeter-of-a-circle)
- [9. Write a Java program to convert temperature from Celsius to Fahrenheit](#9-write-a-java-program-to-convert-temperature-from-celsius-to-fahrenheit)
- [10. Write a Java program to convert temperature from Fahrenheit to Celsius](#10-write-a-java-program-to-convert-temperature-from-fahrenheit-to-celsius)
- [11. Write a Java program to calculate Simple Interest (SI)](#11-write-a-java-program-to-calculate-simple-interest-si)
- [12. Write a Java program to calculate Compound Interest (CI)](#12-write-a-java-program-to-calculate-compound-interest-ci)
- [13. Write a Java program to calculate the percentage of marks](#13-write-a-java-program-to-calculate-the-percentage-of-marks)
- [14. Write a Java program to calculate the average of N numbers](#14-write-a-java-program-to-calculate-the-average-of-n-numbers)
- [15. Write a Java program to find the ASCII value of a character](#15-write-a-java-program-to-find-the-ascii-value-of-a-character)
- [16. Write a Java program to display the sizes of different data types in Java](#16-write-a-java-program-to-display-the-sizes-of-different-data-types-in-java)
- [17. Write a Java program to convert a given number of days into years, months, and days](#17-write-a-java-program-to-convert-a-given-number-of-days-into-years-months-and-days)
- [18. Write a Java program to calculate the gross salary of an employee](#18-write-a-java-program-to-calculate-the-gross-salary-of-an-employee)
- [19. Write a Java program to calculate the net salary of an employee](#19-write-a-java-program-to-calculate-the-net-salary-of-an-employee)
- [20. Write a Java program to perform currency conversion](#20-write-a-java-program-to-perform-currency-conversion)
- [21. Write a Java program to calculate Body Mass Index (BMI)](#21-write-a-java-program-to-calculate-body-mass-index-bmi)
- [22. Write a Java program to calculate electricity bill based on units consumed](#22-write-a-java-program-to-calculate-electricity-bill-based-on-units-consumed)
- [23. Write a Java program to calculate student grades based on marks](#23-write-a-java-program-to-calculate-student-grades-based-on-marks)
- [24. Write a Java program to calculate age based on date of birth](#24-write-a-java-program-to-calculate-age-based-on-date-of-birth)
- [25. Write a Java program to implement a simple calculator with basic operations](#25-write-a-java-program-to-implement-a-simple-calculator-with-basic-operations)

---

### [ ] Problem 12.1: Write a Java program to print 'Hello World' [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **print 'Hello World'**.

### 💻 Solution
```java
class Main {
    public static void main(String[] args) {

        System.out.print("Hello World"); // System.out.println("Hello World");
    }
}
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.2: Write a Java program to print your name [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **print your name**.

### 💻 Solution
```java
class Main {
    public static void main(String[] args) {

        System.out.println("Ghanendra Yadav"); //A new line will also be printed after the name.

    }
}
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.3: Write a Java program to add two numbers [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **add two numbers**.

### 💻 Solution 1
```java
class Main {
    public static void main(String[] args) {

        int firstNumber = 10, secondNumber = 20;
        int sum = firstNumber + secondNumber;
        System.out.println(sum);
    }
}
```

### 💻 Solution 2
```java
class Main {
    public static void main(String[] args) {

        int firstNumber = 40, secondNumber = 30;
        System.out.println(firstNumber+secondNumber);
    }
}
```

### 💻 Solution 3
```java
class Main {
    public static void main(String[] args) {
        
        System.out.println(50+60); //Methods to Avoid
    }
}
```
---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.4: Write a Java program to swap two numbers [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **swap two numbers**.

### 💻 Solution 1
```java
class Main {
    public static void main(String[] args) {
        
        int firstNumber = 10;
        int secondNumber = 20;
        
        System.out.println("Before swapping numbers\n");
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);        
        
        firstNumber = firstNumber + secondNumber;
        secondNumber = firstNumber - secondNumber;
        firstNumber = firstNumber - secondNumber;

        System.out.println("\nAfter swapping numbers\n");        
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);
        
    }
}
```
### 💻 Solution 2
```java
class Main {
    public static void main(String[] args) {
        
        int firstNumber = 30;
        int secondNumber = 50;
        int thirdNumber;
        
        System.out.println("Before swapping numbers\n");
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);        
        
        thirdNumber = firstNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;

        System.out.println("\nAfter swapping numbers\n");        
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);
        
    }
}
```
### 💻 Solution 3
```java
class Main {
    public static void main(String[] args) {
        
        int firstNumber = 30;
        int secondNumber = 50;
        int thirdNumber;
        
        System.out.println("Before swapping numbers\n");
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);        
        
        // Swapping using Bitwise XOR Operator
        firstNumber = firstNumber ^ secondNumber;
        secondNumber = firstNumber ^ secondNumber;
        firstNumber = firstNumber ^ secondNumber;

        System.out.println("\nAfter swapping numbers\n");        
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);
        
    }
}
```
### 💻 Solution 4
```java
class Main {
    public static void main(String[] args) {
        
        int firstNumber = 30;
        int secondNumber = 50;
        int thirdNumber;
        
        System.out.println("Before swapping numbers\n");
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);        
        
        firstNumber = firstNumber * secondNumber;
        secondNumber = firstNumber / secondNumber;
        firstNumber = firstNumber / secondNumber;

        System.out.println("\nAfter swapping numbers\n");        
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);
        
    }
}
```
### 💻 Solution 5
```java
class Main {
    public static void main(String[] args) {
        
        int firstNumber = 30;
        int secondNumber = 50;
        int thirdNumber;
        
        System.out.println("Before swapping numbers\n");
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);        
        
        firstNumber = firstNumber + secondNumber - (secondNumber = firstNumber);

        System.out.println("\nAfter swapping numbers\n");        
        System.out.println("First Number is = "+firstNumber);
        System.out.println("Second Number is = "+secondNumber);
        
    }
}
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.5: Write a Java program to calculate the area of a circle [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the area of a circle**.

### 💻 Solution 1
```java
class Main {

    public static final double PI = 3.14159;

    public static void main(String[] args) {

        double area, radius = 10;

        area = PI * radius * radius;

        System.out.println("Area of Circle = " + area);
    }
}
```

### 💻 Solution 2
```java
import java.util.Scanner;

class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Radius: ");
        double radius = sc.nextDouble();

        double area = Math.PI * radius * radius;

        System.out.println("Area of Circle = " + area);

        sc.close();
    }
}
```
### 💻 Solution 3
```java
class Main {

    static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {

        double radius = 10;

        System.out.println("Area of Circle = " + calculateArea(radius));
    }
}
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.6: Write a Java program to calculate the area of a rectangle [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the area of a rectangle**.

### 💻 Solution 1
```java
class Main {

    public static void main(String[] args) {

        double length = 20.15, width = 12.25;
        
        double area = length * width;

        System.out.println("Area of Rectangle = " + area);
    }
}
```
### 💻 Solution 2
```java
class Main {

    public static void main(String[] args) {

        double length = 25.15, width = 15.25;

        System.out.println("Area of Rectangle = " + length * width);
    }
}
```
### 💻 Solution 3
```java
class Main {

    public static void main(String[] args) {

        System.out.println("Area of Rectangle = " + (50 * 30));
    }
}
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.7: Write a Java program to calculate the area of a triangle [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the area of a triangle**.

### 💻 Solution 1
```java
class Main {
    public static void main(String[] args) {

        double base = 10;
        double height = 5;

        double area = 0.5 * base * height;

        System.out.println("Area of Triangle = " + area);
    }
}
```
### 💻 Solution 2
```java
class Main {
    public static void main(String[] args) {

        double area = 0.5 * 20 * 10;

        System.out.println("Area of Triangle = " + area);
    }
}
```
### 💻 Solution 3
```java
class Main {
    public static void main(String[] args) {

        System.out.println("Area of Triangle = " + (0.5 * 30 * 20));

    }
}
---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

```
### [ ] Problem 12.8: Write a Java program to calculate the perimeter of a circle [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the perimeter of a circle**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.9: Write a Java program to convert temperature from Celsius to Fahrenheit [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **convert temperature from Celsius to Fahrenheit**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.10: Write a Java program to convert temperature from Fahrenheit to Celsius [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **convert temperature from Fahrenheit to Celsius**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.11: Write a Java program to calculate Simple Interest (SI) [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate Simple Interest (SI)**.

### 💻 Solution
```java
// Write your Java solution here
Hellow worlds
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.12: Write a Java program to calculate Compound Interest (CI) [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate Compound Interest (CI)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.13: Write a Java program to calculate the percentage of marks [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the percentage of marks**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.14: Write a Java program to calculate the average of N numbers [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the average of N numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.15: Write a Java program to find the ASCII value of a character [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **find the ASCII value of a character**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.16: Write a Java program to display the sizes of different data types in Java [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **display the sizes of different data types in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.17: Write a Java program to convert a given number of days into years, months, and days [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **convert a given number of days into years, months, and days**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.18: Write a Java program to calculate the gross salary of an employee [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the gross salary of an employee**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.19: Write a Java program to calculate the net salary of an employee [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate the net salary of an employee**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.20: Write a Java program to perform currency conversion [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **perform currency conversion**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.21: Write a Java program to calculate Body Mass Index (BMI) [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate Body Mass Index (BMI)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.22: Write a Java program to calculate electricity bill based on units consumed [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate electricity bill based on units consumed**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.23: Write a Java program to calculate student grades based on marks [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate student grades based on marks**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.24: Write a Java program to calculate age based on date of birth [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **calculate age based on date of birth**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.25: Write a Java program to implement a simple calculator with basic operations [Easy] [Topic: Basic Programs]

### 📝 Problem Description
Write a Java program to implement: **implement a simple calculator with basic operations**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 02: Operators & Expressions

> Practice arithmetic, logical, relational, bitwise, and ternary operators in Java expressions.

---

## 📋 Table of Contents

- [1. Write a Java program to find the largest of two numbers using ternary/relational operators](#1-write-a-java-program-to-find-the-largest-of-two-numbers-using-ternaryrelational-operators)
- [2. Write a Java program to find the largest of three numbers](#2-write-a-java-program-to-find-the-largest-of-three-numbers)
- [3. Write a Java program to find the smallest of three numbers](#3-write-a-java-program-to-find-the-smallest-of-three-numbers)
- [4. Write a Java program to check if a number is even or odd](#4-write-a-java-program-to-check-if-a-number-is-even-or-odd)
- [5. Write a Java program to check if a number is positive, negative, or zero](#5-write-a-java-program-to-check-if-a-number-is-positive-negative-or-zero)
- [6. Write a Java program to check if a number is divisible by 5 and 11](#6-write-a-java-program-to-check-if-a-number-is-divisible-by-5-and-11)
- [7. Write a Java program to check if one number is a multiple of another](#7-write-a-java-program-to-check-if-one-number-is-a-multiple-of-another)
- [8. Write a Java program to calculate the power of a number using arithmetic operators](#8-write-a-java-program-to-calculate-the-power-of-a-number-using-arithmetic-operators)
- [9. Write a Java program to calculate the square root of a number](#9-write-a-java-program-to-calculate-the-square-root-of-a-number)
- [10. Write a Java program to calculate the cube root of a number](#10-write-a-java-program-to-calculate-the-cube-root-of-a-number)
- [11. Write a Java program to check if a year is a leap year](#11-write-a-java-program-to-check-if-a-year-is-a-leap-year)
- [12. Write a Java program to check voting eligibility based on age](#12-write-a-java-program-to-check-voting-eligibility-based-on-age)
- [13. Write a Java program to calculate profit or loss](#13-write-a-java-program-to-calculate-profit-or-loss)
- [14. Write a Java program to calculate discount on a purchase](#14-write-a-java-program-to-calculate-discount-on-a-purchase)
- [15. Write a Java program to calculate tax based on income slabs](#15-write-a-java-program-to-calculate-tax-based-on-income-slabs)

---

### [ ] Problem 12.26: Write a Java program to find the largest of two numbers using ternary/relational operators [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **find the largest of two numbers using ternary/relational operators**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.27: Write a Java program to find the largest of three numbers [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **find the largest of three numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.28: Write a Java program to find the smallest of three numbers [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **find the smallest of three numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.29: Write a Java program to check if a number is even or odd [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **check if a number is even or odd**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.30: Write a Java program to check if a number is positive, negative, or zero [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **check if a number is positive, negative, or zero**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.31: Write a Java program to check if a number is divisible by 5 and 11 [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **check if a number is divisible by 5 and 11**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.32: Write a Java program to check if one number is a multiple of another [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **check if one number is a multiple of another**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.33: Write a Java program to calculate the power of a number using arithmetic operators [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **calculate the power of a number using arithmetic operators**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.34: Write a Java program to calculate the square root of a number [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **calculate the square root of a number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.35: Write a Java program to calculate the cube root of a number [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **calculate the cube root of a number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.36: Write a Java program to check if a year is a leap year [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **check if a year is a leap year**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.37: Write a Java program to check voting eligibility based on age [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **check voting eligibility based on age**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.38: Write a Java program to calculate profit or loss [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **calculate profit or loss**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.39: Write a Java program to calculate discount on a purchase [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **calculate discount on a purchase**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.40: Write a Java program to calculate tax based on income slabs [Easy] [Topic: Operators]

### 📝 Problem Description
Write a Java program to implement: **calculate tax based on income slabs**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 03: If-Else Programs

> Conditional branching scenarios, nested conditions, logic gates, and slab-wise calculations.

---

## 📋 Table of Contents

- [1. Write a Java program to check if a character is a vowel or a consonant](#1-write-a-java-program-to-check-if-a-character-is-a-vowel-or-a-consonant)
- [2. Write a Java program to check if a character is an uppercase letter, lowercase letter, digit, or special character](#2-write-a-java-program-to-check-if-a-character-is-an-uppercase-letter-lowercase-letter-digit-or-special-character)
- [3. Write a Java program to classify a given character](#3-write-a-java-program-to-classify-a-given-character)
- [4. Write a Java program to calculate student grade using if-else-if ladder](#4-write-a-java-program-to-calculate-student-grade-using-if-else-if-ladder)
- [5. Write a Java program to check blood donation eligibility based on age and weight](#5-write-a-java-program-to-check-blood-donation-eligibility-based-on-age-and-weight)
- [6. Write a Java program to check marriage eligibility for male and female based on age](#6-write-a-java-program-to-check-marriage-eligibility-for-male-and-female-based-on-age)
- [7. Write a Java program to check if a triangle is valid based on its angles](#7-write-a-java-program-to-check-if-a-triangle-is-valid-based-on-its-angles)
- [8. Write a Java program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides](#8-write-a-java-program-to-determine-the-type-of-triangle-equilateral-isosceles-or-scalene-based-on-its-sides)
- [9. Write a Java program to find the roots of a quadratic equation](#9-write-a-java-program-to-find-the-roots-of-a-quadratic-equation)
- [10. Write a Java program to validate an ATM withdrawal request](#10-write-a-java-program-to-validate-an-atm-withdrawal-request)
- [11. Write a Java program to authenticate a user login with username and password](#11-write-a-java-program-to-authenticate-a-user-login-with-username-and-password)
- [12. Write a Java program to calculate electricity bill using slab-wise rates](#12-write-a-java-program-to-calculate-electricity-bill-using-slab-wise-rates)
- [13. Write a Java program to check insurance eligibility based on health, age, and location](#13-write-a-java-program-to-check-insurance-eligibility-based-on-health-age-and-location)
- [14. Write a Java program to check if a student passed or failed based on marks of multiple subjects](#14-write-a-java-program-to-check-if-a-student-passed-or-failed-based-on-marks-of-multiple-subjects)
- [15. Write a Java program to check if a person is a senior citizen](#15-write-a-java-program-to-check-if-a-person-is-a-senior-citizen)
- [16. Write a Java program to classify a person into age groups (child, teen, adult, senior)](#16-write-a-java-program-to-classify-a-person-into-age-groups-child-teen-adult-senior)
- [17. Write a Java program to classify BMI into underweight, normal weight, overweight, and obese](#17-write-a-java-program-to-classify-bmi-into-underweight-normal-weight-overweight-and-obese)
- [18. Write a Java program to categorize temperature (freezing, cold, warm, hot)](#18-write-a-java-program-to-categorize-temperature-freezing-cold-warm-hot)
- [19. Write a Java program to check the sign of a number (positive, negative, or zero)](#19-write-a-java-program-to-check-the-sign-of-a-number-positive-negative-or-zero)
- [20. Write a Java program to calculate salary bonus based on years of service and performance rating](#20-write-a-java-program-to-calculate-salary-bonus-based-on-years-of-service-and-performance-rating)

---

### [ ] Problem 12.41: Write a Java program to check if a character is a vowel or a consonant [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check if a character is a vowel or a consonant**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.42: Write a Java program to check if a character is an uppercase letter, lowercase letter, digit, or special character [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check if a character is an uppercase letter, lowercase letter, digit, or special character**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.43: Write a Java program to classify a given character [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **classify a given character**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.44: Write a Java program to calculate student grade using if-else-if ladder [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **calculate student grade using if-else-if ladder**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.45: Write a Java program to check blood donation eligibility based on age and weight [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check blood donation eligibility based on age and weight**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.46: Write a Java program to check marriage eligibility for male and female based on age [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check marriage eligibility for male and female based on age**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.47: Write a Java program to check if a triangle is valid based on its angles [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check if a triangle is valid based on its angles**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.48: Write a Java program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **determine the type of triangle (equilateral, isosceles, or scalene) based on its sides**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.49: Write a Java program to find the roots of a quadratic equation [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **find the roots of a quadratic equation**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.50: Write a Java program to validate an ATM withdrawal request [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **validate an ATM withdrawal request**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.51: Write a Java program to authenticate a user login with username and password [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **authenticate a user login with username and password**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.52: Write a Java program to calculate electricity bill using slab-wise rates [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **calculate electricity bill using slab-wise rates**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.53: Write a Java program to check insurance eligibility based on health, age, and location [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check insurance eligibility based on health, age, and location**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.54: Write a Java program to check if a student passed or failed based on marks of multiple subjects [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check if a student passed or failed based on marks of multiple subjects**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.55: Write a Java program to check if a person is a senior citizen [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check if a person is a senior citizen**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.56: Write a Java program to classify a person into age groups (child, teen, adult, senior) [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **classify a person into age groups (child, teen, adult, senior)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.57: Write a Java program to classify BMI into underweight, normal weight, overweight, and obese [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **classify BMI into underweight, normal weight, overweight, and obese**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.58: Write a Java program to categorize temperature (freezing, cold, warm, hot) [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **categorize temperature (freezing, cold, warm, hot)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.59: Write a Java program to check the sign of a number (positive, negative, or zero) [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **check the sign of a number (positive, negative, or zero)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.60: Write a Java program to calculate salary bonus based on years of service and performance rating [Easy] [Topic: If-Else]

### 📝 Problem Description
Write a Java program to implement: **calculate salary bonus based on years of service and performance rating**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 04: Loops Programs

> Iteration exercises including series, conversions, mathematical numbers (Armstrong, Neon, Spy, Magic), and digit manipulation.

---

## 📋 Table of Contents

- [1. Write a Java program to print numbers from 1 to N using a loop](#1-write-a-java-program-to-print-numbers-from-1-to-n-using-a-loop)
- [2. Write a Java program to print numbers from N to 1 using a loop](#2-write-a-java-program-to-print-numbers-from-n-to-1-using-a-loop)
- [3. Write a Java program to find the sum of first N natural numbers](#3-write-a-java-program-to-find-the-sum-of-first-n-natural-numbers)
- [4. Write a Java program to find the product of first N numbers](#4-write-a-java-program-to-find-the-product-of-first-n-numbers)
- [5. Write a Java program to print the multiplication table of a given number](#5-write-a-java-program-to-print-the-multiplication-table-of-a-given-number)
- [6. Write a Java program to calculate the factorial of a number](#6-write-a-java-program-to-calculate-the-factorial-of-a-number)
- [7. Write a Java program to print the Fibonacci series up to N terms](#7-write-a-java-program-to-print-the-fibonacci-series-up-to-n-terms)
- [8. Write a Java program to reverse a given number](#8-write-a-java-program-to-reverse-a-given-number)
- [9. Write a Java program to check if a number is a palindrome](#9-write-a-java-program-to-check-if-a-number-is-a-palindrome)
- [10. Write a Java program to check if a number is an Armstrong number](#10-write-a-java-program-to-check-if-a-number-is-an-armstrong-number)
- [11. Write a Java program to check if a number is a Strong number](#11-write-a-java-program-to-check-if-a-number-is-a-strong-number)
- [12. Write a Java program to check if a number is a Perfect number](#12-write-a-java-program-to-check-if-a-number-is-a-perfect-number)
- [13. Write a Java program to check if a number is a Prime number](#13-write-a-java-program-to-check-if-a-number-is-a-prime-number)
- [14. Write a Java program to print all prime numbers in a given range](#14-write-a-java-program-to-print-all-prime-numbers-in-a-given-range)
- [15. Write a Java program to find the Greatest Common Divisor (GCD) of two numbers](#15-write-a-java-program-to-find-the-greatest-common-divisor-gcd-of-two-numbers)
- [16. Write a Java program to find the Least Common Multiple (LCM) of two numbers](#16-write-a-java-program-to-find-the-least-common-multiple-lcm-of-two-numbers)
- [17. Write a Java program to find the sum of digits of a number](#17-write-a-java-program-to-find-the-sum-of-digits-of-a-number)
- [18. Write a Java program to find the product of digits of a number](#18-write-a-java-program-to-find-the-product-of-digits-of-a-number)
- [19. Write a Java program to count the number of digits in an integer](#19-write-a-java-program-to-count-the-number-of-digits-in-an-integer)
- [20. Write a Java program to convert a binary number to decimal](#20-write-a-java-program-to-convert-a-binary-number-to-decimal)
- [21. Write a Java program to convert a decimal number to binary](#21-write-a-java-program-to-convert-a-decimal-number-to-binary)
- [22. Write a Java program to convert a decimal number to octal](#22-write-a-java-program-to-convert-a-decimal-number-to-octal)
- [23. Write a Java program to convert a decimal number to hexadecimal](#23-write-a-java-program-to-convert-a-decimal-number-to-hexadecimal)
- [24. Write a Java program to find the generic root (single digit sum) of a number](#24-write-a-java-program-to-find-the-generic-root-single-digit-sum-of-a-number)
- [25. Write a Java program to check if a number is a Harshad number](#25-write-a-java-program-to-check-if-a-number-is-a-harshad-number)
- [26. Write a Java program to check if a number is a Neon number](#26-write-a-java-program-to-check-if-a-number-is-a-neon-number)
- [27. Write a Java program to check if a number is an Automorphic number](#27-write-a-java-program-to-check-if-a-number-is-an-automorphic-number)
- [28. Write a Java program to check if a number is a Spy number](#28-write-a-java-program-to-check-if-a-number-is-a-spy-number)
- [29. Write a Java program to check if a number is a Peterson number](#29-write-a-java-program-to-check-if-a-number-is-a-peterson-number)
- [30. Write a Java program to check if a number is a Magic number](#30-write-a-java-program-to-check-if-a-number-is-a-magic-number)

---

### [ ] Problem 12.61: Write a Java program to print numbers from 1 to N using a loop [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **print numbers from 1 to N using a loop**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.62: Write a Java program to print numbers from N to 1 using a loop [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **print numbers from N to 1 using a loop**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.63: Write a Java program to find the sum of first N natural numbers [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the sum of first N natural numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.64: Write a Java program to find the product of first N numbers [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the product of first N numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.65: Write a Java program to print the multiplication table of a given number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **print the multiplication table of a given number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.66: Write a Java program to calculate the factorial of a number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **calculate the factorial of a number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.67: Write a Java program to print the Fibonacci series up to N terms [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **print the Fibonacci series up to N terms**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.68: Write a Java program to reverse a given number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **reverse a given number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.69: Write a Java program to check if a number is a palindrome [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a palindrome**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.70: Write a Java program to check if a number is an Armstrong number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is an Armstrong number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.71: Write a Java program to check if a number is a Strong number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Strong number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.72: Write a Java program to check if a number is a Perfect number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Perfect number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.73: Write a Java program to check if a number is a Prime number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Prime number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.74: Write a Java program to print all prime numbers in a given range [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **print all prime numbers in a given range**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.75: Write a Java program to find the Greatest Common Divisor (GCD) of two numbers [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the Greatest Common Divisor (GCD) of two numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.76: Write a Java program to find the Least Common Multiple (LCM) of two numbers [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the Least Common Multiple (LCM) of two numbers**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.77: Write a Java program to find the sum of digits of a number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the sum of digits of a number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.78: Write a Java program to find the product of digits of a number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the product of digits of a number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.79: Write a Java program to count the number of digits in an integer [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **count the number of digits in an integer**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.80: Write a Java program to convert a binary number to decimal [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **convert a binary number to decimal**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.81: Write a Java program to convert a decimal number to binary [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **convert a decimal number to binary**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.82: Write a Java program to convert a decimal number to octal [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **convert a decimal number to octal**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.83: Write a Java program to convert a decimal number to hexadecimal [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **convert a decimal number to hexadecimal**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.84: Write a Java program to find the generic root (single digit sum) of a number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **find the generic root (single digit sum) of a number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.85: Write a Java program to check if a number is a Harshad number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Harshad number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.86: Write a Java program to check if a number is a Neon number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Neon number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.87: Write a Java program to check if a number is an Automorphic number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is an Automorphic number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.88: Write a Java program to check if a number is a Spy number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Spy number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.89: Write a Java program to check if a number is a Peterson number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Peterson number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.90: Write a Java program to check if a number is a Magic number [Easy] [Topic: Loops]

### 📝 Problem Description
Write a Java program to implement: **check if a number is a Magic number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 05: Pattern Programs

> Visual structure exercises utilizing nested loops for stars, numbers, alphabets, and custom geometry.

---

## 📋 Table of Contents

- [1. Write a Java program to print a Square Star pattern](#1-write-a-java-program-to-print-a-square-star-pattern)
- [2. Write a Java program to print a Hollow Square pattern](#2-write-a-java-program-to-print-a-hollow-square-pattern)
- [3. Write a Java program to print a Rectangle pattern](#3-write-a-java-program-to-print-a-rectangle-pattern)
- [4. Write a Java program to print a Hollow Rectangle pattern](#4-write-a-java-program-to-print-a-hollow-rectangle-pattern)
- [5. Write a Java program to print a Left Triangle pattern](#5-write-a-java-program-to-print-a-left-triangle-pattern)
- [6. Write a Java program to print a Right Triangle pattern](#6-write-a-java-program-to-print-a-right-triangle-pattern)
- [7. Write a Java program to print a Pyramid pattern](#7-write-a-java-program-to-print-a-pyramid-pattern)
- [8. Write a Java program to print an Inverted Pyramid pattern](#8-write-a-java-program-to-print-an-inverted-pyramid-pattern)
- [9. Write a Java program to print a Diamond pattern](#9-write-a-java-program-to-print-a-diamond-pattern)
- [10. Write a Java program to print a Hollow Diamond pattern](#10-write-a-java-program-to-print-a-hollow-diamond-pattern)
- [11. Write a Java program to print a Butterfly pattern](#11-write-a-java-program-to-print-a-butterfly-pattern)
- [12. Write a Java program to print a Sandglass pattern](#12-write-a-java-program-to-print-a-sandglass-pattern)
- [13. Write a Java program to print an Hourglass pattern](#13-write-a-java-program-to-print-an-hourglass-pattern)
- [14. Write a Java program to print Pascal's Triangle](#14-write-a-java-program-to-print-pascals-triangle)
- [15. Write a Java program to print Floyd's Triangle](#15-write-a-java-program-to-print-floyds-triangle)
- [16. Write a Java program to print a Number Pyramid pattern](#16-write-a-java-program-to-print-a-number-pyramid-pattern)
- [17. Write a Java program to print an Alphabet Pyramid pattern](#17-write-a-java-program-to-print-an-alphabet-pyramid-pattern)
- [18. Write a Java program to print a Hollow Pyramid pattern](#18-write-a-java-program-to-print-a-hollow-pyramid-pattern)
- [19. Write a Java program to print a Cross pattern](#19-write-a-java-program-to-print-a-cross-pattern)
- [20. Write a Java program to print an X pattern](#20-write-a-java-program-to-print-an-x-pattern)
- [21. Write a Java program to print a Heart pattern](#21-write-a-java-program-to-print-a-heart-pattern)
- [22. Write a Java program to print a Christmas Tree pattern](#22-write-a-java-program-to-print-a-christmas-tree-pattern)
- [23. Write a Java program to print an Arrow pattern](#23-write-a-java-program-to-print-an-arrow-pattern)
- [24. Write a Java program to print a Zig-Zag pattern](#24-write-a-java-program-to-print-a-zig-zag-pattern)
- [25. Write a Java program to print a Number Diamond pattern](#25-write-a-java-program-to-print-a-number-diamond-pattern)
- [26. Write a Java program to print a Binary Triangle pattern](#26-write-a-java-program-to-print-a-binary-triangle-pattern)
- [27. Write a Java program to print a Character Triangle pattern](#27-write-a-java-program-to-print-a-character-triangle-pattern)
- [28. Write a Java program to print a Hollow Butterfly pattern](#28-write-a-java-program-to-print-a-hollow-butterfly-pattern)
- [29. Write a Java program to print a Rhombus pattern](#29-write-a-java-program-to-print-a-rhombus-pattern)
- [30. Write a Java program to print a Hollow Rhombus pattern](#30-write-a-java-program-to-print-a-hollow-rhombus-pattern)
- [31. Write a Java program to print a Spiral Square pattern](#31-write-a-java-program-to-print-a-spiral-square-pattern)
- [32. Write a Java program to print a Numeric Square pattern](#32-write-a-java-program-to-print-a-numeric-square-pattern)
- [33. Write a Java program to print a Concentric Pattern](#33-write-a-java-program-to-print-a-concentric-pattern)
- [34. Write a Java program to print a Reverse Pyramid pattern](#34-write-a-java-program-to-print-a-reverse-pyramid-pattern)
- [35. Write a Java program to print an Increment Pattern](#35-write-a-java-program-to-print-an-increment-pattern)
- [36. Write a Java program to print a Decrement Pattern](#36-write-a-java-program-to-print-a-decrement-pattern)
- [37. Write a Java program to print a Snake Pattern](#37-write-a-java-program-to-print-a-snake-pattern)
- [38. Write a Java program to print a Wave Pattern](#38-write-a-java-program-to-print-a-wave-pattern)
- [39. Write a Java program to print a Staircase Pattern](#39-write-a-java-program-to-print-a-staircase-pattern)
- [40. Write a Java program to implement a Custom Pattern Generator](#40-write-a-java-program-to-implement-a-custom-pattern-generator)

---

### [ ] Problem 12.91: Write a Java program to print a Square Star pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Square Star pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.92: Write a Java program to print a Hollow Square pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Hollow Square pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.93: Write a Java program to print a Rectangle pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Rectangle pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.94: Write a Java program to print a Hollow Rectangle pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Hollow Rectangle pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.95: Write a Java program to print a Left Triangle pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Left Triangle pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.96: Write a Java program to print a Right Triangle pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Right Triangle pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.97: Write a Java program to print a Pyramid pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Pyramid pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.98: Write a Java program to print an Inverted Pyramid pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print an Inverted Pyramid pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.99: Write a Java program to print a Diamond pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Diamond pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.100: Write a Java program to print a Hollow Diamond pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Hollow Diamond pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.101: Write a Java program to print a Butterfly pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Butterfly pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.102: Write a Java program to print a Sandglass pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Sandglass pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.103: Write a Java program to print an Hourglass pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print an Hourglass pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.104: Write a Java program to print Pascal's Triangle [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print Pascal's Triangle**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.105: Write a Java program to print Floyd's Triangle [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print Floyd's Triangle**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.106: Write a Java program to print a Number Pyramid pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Number Pyramid pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.107: Write a Java program to print an Alphabet Pyramid pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print an Alphabet Pyramid pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.108: Write a Java program to print a Hollow Pyramid pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Hollow Pyramid pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.109: Write a Java program to print a Cross pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Cross pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.110: Write a Java program to print an X pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print an X pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.111: Write a Java program to print a Heart pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Heart pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.112: Write a Java program to print a Christmas Tree pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Christmas Tree pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.113: Write a Java program to print an Arrow pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print an Arrow pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.114: Write a Java program to print a Zig-Zag pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Zig-Zag pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.115: Write a Java program to print a Number Diamond pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Number Diamond pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.116: Write a Java program to print a Binary Triangle pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Binary Triangle pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.117: Write a Java program to print a Character Triangle pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Character Triangle pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.118: Write a Java program to print a Hollow Butterfly pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Hollow Butterfly pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.119: Write a Java program to print a Rhombus pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Rhombus pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.120: Write a Java program to print a Hollow Rhombus pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Hollow Rhombus pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.121: Write a Java program to print a Spiral Square pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Spiral Square pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.122: Write a Java program to print a Numeric Square pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Numeric Square pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.123: Write a Java program to print a Concentric Pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Concentric Pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.124: Write a Java program to print a Reverse Pyramid pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Reverse Pyramid pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.125: Write a Java program to print an Increment Pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print an Increment Pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.126: Write a Java program to print a Decrement Pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Decrement Pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.127: Write a Java program to print a Snake Pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Snake Pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.128: Write a Java program to print a Wave Pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Wave Pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.129: Write a Java program to print a Staircase Pattern [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **print a Staircase Pattern**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.130: Write a Java program to implement a Custom Pattern Generator [Medium] [Topic: Patterns]

### 📝 Problem Description
Write a Java program to implement: **implement a Custom Pattern Generator**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 06: Arrays

> One-dimensional and multi-dimensional array manipulation, searching, sorting, rotating, and optimization algorithms (Kadane's).

---

## 📋 Table of Contents

- [1. Write a Java program to find the largest element in an array](#1-write-a-java-program-to-find-the-largest-element-in-an-array)
- [2. Write a Java program to find the smallest element in an array](#2-write-a-java-program-to-find-the-smallest-element-in-an-array)
- [3. Write a Java program to find the second largest element in an array](#3-write-a-java-program-to-find-the-second-largest-element-in-an-array)
- [4. Write a Java program to find the second smallest element in an array](#4-write-a-java-program-to-find-the-second-smallest-element-in-an-array)
- [5. Write a Java program to find the sum of all elements in an array](#5-write-a-java-program-to-find-the-sum-of-all-elements-in-an-array)
- [6. Write a Java program to find the average of elements in an array](#6-write-a-java-program-to-find-the-average-of-elements-in-an-array)
- [7. Write a Java program to reverse an array](#7-write-a-java-program-to-reverse-an-array)
- [8. Write a Java program to copy all elements of one array to another array](#8-write-a-java-program-to-copy-all-elements-of-one-array-to-another-array)
- [9. Write a Java program to merge two arrays into a third array](#9-write-a-java-program-to-merge-two-arrays-into-a-third-array)
- [10. Write a Java program to insert an element at a specific position in an array](#10-write-a-java-program-to-insert-an-element-at-a-specific-position-in-an-array)
- [11. Write a Java program to delete an element at a specific position in an array](#11-write-a-java-program-to-delete-an-element-at-a-specific-position-in-an-array)
- [12. Write a Java program to remove duplicates from an array](#12-write-a-java-program-to-remove-duplicates-from-an-array)
- [13. Write a Java program to find the frequency of each element in an array](#13-write-a-java-program-to-find-the-frequency-of-each-element-in-an-array)
- [14. Write a Java program to find the missing number in an array containing numbers from 1 to N](#14-write-a-java-program-to-find-the-missing-number-in-an-array-containing-numbers-from-1-to-n)
- [15. Write a Java program to find duplicate numbers in an array](#15-write-a-java-program-to-find-duplicate-numbers-in-an-array)
- [16. Write a Java program to rotate an array to the left](#16-write-a-java-program-to-rotate-an-array-to-the-left)
- [17. Write a Java program to rotate an array to the right](#17-write-a-java-program-to-rotate-an-array-to-the-right)
- [18. Write a Java program to sort an array in ascending order](#18-write-a-java-program-to-sort-an-array-in-ascending-order)
- [19. Write a Java program to sort an array in descending order](#19-write-a-java-program-to-sort-an-array-in-descending-order)
- [20. Write a Java program to separate even and odd numbers in an array](#20-write-a-java-program-to-separate-even-and-odd-numbers-in-an-array)
- [21. Write a Java program to move all zeros to the end of an array](#21-write-a-java-program-to-move-all-zeros-to-the-end-of-an-array)
- [22. Write a Java program to find the union of two arrays](#22-write-a-java-program-to-find-the-union-of-two-arrays)
- [23. Write a Java program to find the intersection of two arrays](#23-write-a-java-program-to-find-the-intersection-of-two-arrays)
- [24. Write a Java program to check if two arrays are equal](#24-write-a-java-program-to-check-if-two-arrays-are-equal)
- [25. Write a Java program to find leaders in an array](#25-write-a-java-program-to-find-leaders-in-an-array)
- [26. Write a Java program to implement Kadane's Algorithm to find the maximum subarray sum](#26-write-a-java-program-to-implement-kadanes-algorithm-to-find-the-maximum-subarray-sum)
- [27. Write a Java program to find all pairs in an array whose sum is equal to a given number](#27-write-a-java-program-to-find-all-pairs-in-an-array-whose-sum-is-equal-to-a-given-number)
- [28. Write a Java program to find all triplets in an array whose sum is equal to a given number](#28-write-a-java-program-to-find-all-triplets-in-an-array-whose-sum-is-equal-to-a-given-number)
- [29. Write a Java program to find the majority element in an array](#29-write-a-java-program-to-find-the-majority-element-in-an-array)
- [30. Write a Java program to solve the Stock Buy and Sell problem (maximum profit)](#30-write-a-java-program-to-solve-the-stock-buy-and-sell-problem-maximum-profit)

---

### [ ] Problem 12.131: Write a Java program to find the largest element in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the largest element in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.132: Write a Java program to find the smallest element in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the smallest element in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.133: Write a Java program to find the second largest element in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the second largest element in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.134: Write a Java program to find the second smallest element in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the second smallest element in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.135: Write a Java program to find the sum of all elements in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the sum of all elements in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.136: Write a Java program to find the average of elements in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the average of elements in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.137: Write a Java program to reverse an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **reverse an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.138: Write a Java program to copy all elements of one array to another array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **copy all elements of one array to another array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.139: Write a Java program to merge two arrays into a third array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **merge two arrays into a third array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.140: Write a Java program to insert an element at a specific position in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **insert an element at a specific position in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.141: Write a Java program to delete an element at a specific position in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **delete an element at a specific position in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.142: Write a Java program to remove duplicates from an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **remove duplicates from an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.143: Write a Java program to find the frequency of each element in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the frequency of each element in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.144: Write a Java program to find the missing number in an array containing numbers from 1 to N [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the missing number in an array containing numbers from 1 to N**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.145: Write a Java program to find duplicate numbers in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find duplicate numbers in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.146: Write a Java program to rotate an array to the left [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **rotate an array to the left**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.147: Write a Java program to rotate an array to the right [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **rotate an array to the right**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.148: Write a Java program to sort an array in ascending order [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **sort an array in ascending order**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.149: Write a Java program to sort an array in descending order [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **sort an array in descending order**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.150: Write a Java program to separate even and odd numbers in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **separate even and odd numbers in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.151: Write a Java program to move all zeros to the end of an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **move all zeros to the end of an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.152: Write a Java program to find the union of two arrays [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the union of two arrays**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.153: Write a Java program to find the intersection of two arrays [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the intersection of two arrays**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.154: Write a Java program to check if two arrays are equal [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **check if two arrays are equal**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.155: Write a Java program to find leaders in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find leaders in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.156: Write a Java program to implement Kadane's Algorithm to find the maximum subarray sum [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **implement Kadane's Algorithm to find the maximum subarray sum**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.157: Write a Java program to find all pairs in an array whose sum is equal to a given number [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find all pairs in an array whose sum is equal to a given number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.158: Write a Java program to find all triplets in an array whose sum is equal to a given number [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find all triplets in an array whose sum is equal to a given number**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.159: Write a Java program to find the majority element in an array [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **find the majority element in an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.160: Write a Java program to solve the Stock Buy and Sell problem (maximum profit) [Medium] [Topic: Arrays]

### 📝 Problem Description
Write a Java program to implement: **solve the Stock Buy and Sell problem (maximum profit)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 07: Strings

> String manipulation, matching, conversion, parsing, and advanced structures (StringBuilder/StringBuffer).

---

## 📋 Table of Contents

- [1. Write a Java program to reverse a string](#1-write-a-java-program-to-reverse-a-string)
- [2. Write a Java program to check if a string is a palindrome](#2-write-a-java-program-to-check-if-a-string-is-a-palindrome)
- [3. Write a Java program to count the number of vowels in a string](#3-write-a-java-program-to-count-the-number-of-vowels-in-a-string)
- [4. Write a Java program to count the number of consonants in a string](#4-write-a-java-program-to-count-the-number-of-consonants-in-a-string)
- [5. Write a Java program to count the number of digits in a string](#5-write-a-java-program-to-count-the-number-of-digits-in-a-string)
- [6. Write a Java program to count the number of words in a string](#6-write-a-java-program-to-count-the-number-of-words-in-a-string)
- [7. Write a Java program to count the number of spaces in a string](#7-write-a-java-program-to-count-the-number-of-spaces-in-a-string)
- [8. Write a Java program to convert a string to uppercase](#8-write-a-java-program-to-convert-a-string-to-uppercase)
- [9. Write a Java program to convert a string to lowercase](#9-write-a-java-program-to-convert-a-string-to-lowercase)
- [10. Write a Java program to toggle case of characters in a string](#10-write-a-java-program-to-toggle-case-of-characters-in-a-string)
- [11. Write a Java program to remove all vowels from a string](#11-write-a-java-program-to-remove-all-vowels-from-a-string)
- [12. Write a Java program to remove all spaces from a string](#12-write-a-java-program-to-remove-all-spaces-from-a-string)
- [13. Write a Java program to remove duplicate characters from a string](#13-write-a-java-program-to-remove-duplicate-characters-from-a-string)
- [14. Write a Java program to sort characters in a string](#14-write-a-java-program-to-sort-characters-in-a-string)
- [15. Write a Java program to compare two strings](#15-write-a-java-program-to-compare-two-strings)
- [16. Write a Java program to perform string compression](#16-write-a-java-program-to-perform-string-compression)
- [17. Write a Java program to find the frequency of each character in a string](#17-write-a-java-program-to-find-the-frequency-of-each-character-in-a-string)
- [18. Write a Java program to find the first non-repeated character in a string](#18-write-a-java-program-to-find-the-first-non-repeated-character-in-a-string)
- [19. Write a Java program to find the first repeated character in a string](#19-write-a-java-program-to-find-the-first-repeated-character-in-a-string)
- [20. Write a Java program to check if two strings are anagrams of each other](#20-write-a-java-program-to-check-if-two-strings-are-anagrams-of-each-other)
- [21. Write a Java program to check if one string is a rotation of another string](#21-write-a-java-program-to-check-if-one-string-is-a-rotation-of-another-string)
- [22. Write a Java program to find the longest word in a string](#22-write-a-java-program-to-find-the-longest-word-in-a-string)
- [23. Write a Java program to find the shortest word in a string](#23-write-a-java-program-to-find-the-shortest-word-in-a-string)
- [24. Write a Java program to reverse words in a given sentence](#24-write-a-java-program-to-reverse-words-in-a-given-sentence)
- [25. Write a Java program to capitalize the first letter of each word in a string](#25-write-a-java-program-to-capitalize-the-first-letter-of-each-word-in-a-string)
- [26. Write a Java program to perform substring search](#26-write-a-java-program-to-perform-substring-search)
- [27. Write a Java program to replace a substring with another string](#27-write-a-java-program-to-replace-a-substring-with-another-string)
- [28. Write a Java program to demonstrate StringBuilder and StringBuffer practices](#28-write-a-java-program-to-demonstrate-stringbuilder-and-stringbuffer-practices)
- [29. Write a Java program to check if a string is a Pangram](#29-write-a-java-program-to-check-if-a-string-is-a-pangram)
- [30. Write a Java program to check if a string is an Isogram](#30-write-a-java-program-to-check-if-a-string-is-an-isogram)
- [31. Write a Java program to convert a Roman numeral to an Integer](#31-write-a-java-program-to-convert-a-roman-numeral-to-an-integer)
- [32. Write a Java program to convert an Integer to a Roman numeral](#32-write-a-java-program-to-convert-an-integer-to-a-roman-numeral)
- [33. Write a Java program to check for valid parentheses in an expression](#33-write-a-java-program-to-check-for-valid-parentheses-in-an-expression)
- [34. Write a Java program to find the longest common prefix among an array of strings](#34-write-a-java-program-to-find-the-longest-common-prefix-among-an-array-of-strings)
- [35. Write a Java program to find the longest palindromic substring in a string](#35-write-a-java-program-to-find-the-longest-palindromic-substring-in-a-string)

---

### [ ] Problem 12.161: Write a Java program to reverse a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **reverse a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.162: Write a Java program to check if a string is a palindrome [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **check if a string is a palindrome**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.163: Write a Java program to count the number of vowels in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **count the number of vowels in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.164: Write a Java program to count the number of consonants in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **count the number of consonants in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.165: Write a Java program to count the number of digits in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **count the number of digits in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.166: Write a Java program to count the number of words in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **count the number of words in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.167: Write a Java program to count the number of spaces in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **count the number of spaces in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.168: Write a Java program to convert a string to uppercase [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **convert a string to uppercase**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.169: Write a Java program to convert a string to lowercase [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **convert a string to lowercase**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.170: Write a Java program to toggle case of characters in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **toggle case of characters in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.171: Write a Java program to remove all vowels from a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **remove all vowels from a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.172: Write a Java program to remove all spaces from a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **remove all spaces from a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.173: Write a Java program to remove duplicate characters from a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **remove duplicate characters from a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.174: Write a Java program to sort characters in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **sort characters in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.175: Write a Java program to compare two strings [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **compare two strings**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.176: Write a Java program to perform string compression [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **perform string compression**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.177: Write a Java program to find the frequency of each character in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the frequency of each character in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.178: Write a Java program to find the first non-repeated character in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the first non-repeated character in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.179: Write a Java program to find the first repeated character in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the first repeated character in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.180: Write a Java program to check if two strings are anagrams of each other [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **check if two strings are anagrams of each other**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.181: Write a Java program to check if one string is a rotation of another string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **check if one string is a rotation of another string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.182: Write a Java program to find the longest word in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the longest word in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.183: Write a Java program to find the shortest word in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the shortest word in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.184: Write a Java program to reverse words in a given sentence [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **reverse words in a given sentence**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.185: Write a Java program to capitalize the first letter of each word in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **capitalize the first letter of each word in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.186: Write a Java program to perform substring search [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **perform substring search**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.187: Write a Java program to replace a substring with another string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **replace a substring with another string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.188: Write a Java program to demonstrate StringBuilder and StringBuffer practices [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **demonstrate StringBuilder and StringBuffer practices**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.189: Write a Java program to check if a string is a Pangram [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **check if a string is a Pangram**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.190: Write a Java program to check if a string is an Isogram [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **check if a string is an Isogram**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.191: Write a Java program to convert a Roman numeral to an Integer [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **convert a Roman numeral to an Integer**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.192: Write a Java program to convert an Integer to a Roman numeral [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **convert an Integer to a Roman numeral**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.193: Write a Java program to check for valid parentheses in an expression [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **check for valid parentheses in an expression**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.194: Write a Java program to find the longest common prefix among an array of strings [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the longest common prefix among an array of strings**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.195: Write a Java program to find the longest palindromic substring in a string [Medium] [Topic: Strings]

### 📝 Problem Description
Write a Java program to implement: **find the longest palindromic substring in a string**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 08: Methods / Functions

> Functional decomposition, parameter passing, method overloading, recursion, and stack frames.

---

## 📋 Table of Contents

- [1. Write a Java program to check if a number is prime using a method](#1-write-a-java-program-to-check-if-a-number-is-prime-using-a-method)
- [2. Write a Java program to calculate the factorial of a number using a method](#2-write-a-java-program-to-calculate-the-factorial-of-a-number-using-a-method)
- [3. Write a Java program to print the Fibonacci series using a method](#3-write-a-java-program-to-print-the-fibonacci-series-using-a-method)
- [4. Write a Java program to implement a calculator using different methods for each operation](#4-write-a-java-program-to-implement-a-calculator-using-different-methods-for-each-operation)
- [5. Write a Java program to demonstrate method overloading](#5-write-a-java-program-to-demonstrate-method-overloading)
- [6. Write a Java program to find the factorial of a number using a recursive method](#6-write-a-java-program-to-find-the-factorial-of-a-number-using-a-recursive-method)
- [7. Write a Java program to get the Nth Fibonacci number using a recursive method](#7-write-a-java-program-to-get-the-nth-fibonacci-number-using-a-recursive-method)
- [8. Write a Java program to find the Greatest Common Divisor (GCD) using a recursive method](#8-write-a-java-program-to-find-the-greatest-common-divisor-gcd-using-a-recursive-method)
- [9. Write a Java program to calculate power of a number using recursion](#9-write-a-java-program-to-calculate-power-of-a-number-using-recursion)
- [10. Write a Java program to calculate the sum of first N natural numbers using recursion](#10-write-a-java-program-to-calculate-the-sum-of-first-n-natural-numbers-using-recursion)

---

### [ ] Problem 12.196: Write a Java program to check if a number is prime using a method [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **check if a number is prime using a method**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.197: Write a Java program to calculate the factorial of a number using a method [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **calculate the factorial of a number using a method**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.198: Write a Java program to print the Fibonacci series using a method [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **print the Fibonacci series using a method**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.199: Write a Java program to implement a calculator using different methods for each operation [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **implement a calculator using different methods for each operation**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.200: Write a Java program to demonstrate method overloading [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **demonstrate method overloading**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.201: Write a Java program to find the factorial of a number using a recursive method [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **find the factorial of a number using a recursive method**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.202: Write a Java program to get the Nth Fibonacci number using a recursive method [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **get the Nth Fibonacci number using a recursive method**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.203: Write a Java program to find the Greatest Common Divisor (GCD) using a recursive method [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **find the Greatest Common Divisor (GCD) using a recursive method**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.204: Write a Java program to calculate power of a number using recursion [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **calculate power of a number using recursion**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.205: Write a Java program to calculate the sum of first N natural numbers using recursion [Medium] [Topic: General]

### 📝 Problem Description
Write a Java program to implement: **calculate the sum of first N natural numbers using recursion**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 09: OOP Programs

> Object-Oriented Programming concepts including encapsulation, inheritance types, polymorphism, abstraction, and relationships.

---

## 📋 Table of Contents

- [1. Write a Java program to create a Student class and display student details](#1-write-a-java-program-to-create-a-student-class-and-display-student-details)
- [2. Write a Java program to create an Employee class and display employee details](#2-write-a-java-program-to-create-an-employee-class-and-display-employee-details)
- [3. Write a Java program to implement a Bank Account class with deposit, withdraw, and check balance features](#3-write-a-java-program-to-implement-a-bank-account-class-with-deposit-withdraw-and-check-balance-features)
- [4. Write a Java program to create a Book class with constructors and display book details](#4-write-a-java-program-to-create-a-book-class-with-constructors-and-display-book-details)
- [5. Write a Java program to create a Car class and display car details](#5-write-a-java-program-to-create-a-car-class-and-display-car-details)
- [6. Write a Java program to create a Mobile class and display mobile details](#6-write-a-java-program-to-create-a-mobile-class-and-display-mobile-details)
- [7. Write a Java program to demonstrate constructor example in Java](#7-write-a-java-program-to-demonstrate-constructor-example-in-java)
- [8. Write a Java program to demonstrate constructor overloading](#8-write-a-java-program-to-demonstrate-constructor-overloading)
- [9. Write a Java program to demonstrate copy constructor in Java](#9-write-a-java-program-to-demonstrate-copy-constructor-in-java)
- [10. Write a Java program to demonstrate encapsulation in Java](#10-write-a-java-program-to-demonstrate-encapsulation-in-java)
- [11. Write a Java program to demonstrate single inheritance in Java](#11-write-a-java-program-to-demonstrate-single-inheritance-in-java)
- [12. Write a Java program to demonstrate multilevel inheritance in Java](#12-write-a-java-program-to-demonstrate-multilevel-inheritance-in-java)
- [13. Write a Java program to demonstrate hierarchical inheritance in Java](#13-write-a-java-program-to-demonstrate-hierarchical-inheritance-in-java)
- [14. Write a Java program to demonstrate method overriding in Java](#14-write-a-java-program-to-demonstrate-method-overriding-in-java)
- [15. Write a Java program to demonstrate runtime polymorphism in Java](#15-write-a-java-program-to-demonstrate-runtime-polymorphism-in-java)
- [16. Write a Java program to demonstrate compile-time polymorphism (method overloading) in Java](#16-write-a-java-program-to-demonstrate-compile-time-polymorphism-method-overloading-in-java)
- [17. Write a Java program to demonstrate abstract class and abstract methods in Java](#17-write-a-java-program-to-demonstrate-abstract-class-and-abstract-methods-in-java)
- [18. Write a Java program to demonstrate interface usage in Java](#18-write-a-java-program-to-demonstrate-interface-usage-in-java)
- [19. Write a Java program to demonstrate multiple inheritance using interfaces in Java](#19-write-a-java-program-to-demonstrate-multiple-inheritance-using-interfaces-in-java)
- [20. Write a Java program to demonstrate association between classes in Java](#20-write-a-java-program-to-demonstrate-association-between-classes-in-java)
- [21. Write a Java program to demonstrate aggregation in Java](#21-write-a-java-program-to-demonstrate-aggregation-in-java)
- [22. Write a Java program to demonstrate composition in Java](#22-write-a-java-program-to-demonstrate-composition-in-java)
- [23. Write a Java program to implement a Singleton class in Java](#23-write-a-java-program-to-implement-a-singleton-class-in-java)
- [24. Write a Java program to create an Immutable class in Java](#24-write-a-java-program-to-create-an-immutable-class-in-java)
- [25. Write a Java program to demonstrate object cloning in Java](#25-write-a-java-program-to-demonstrate-object-cloning-in-java)

---

### [ ] Problem 12.206: Write a Java program to create a Student class and display student details [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **create a Student class and display student details**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.207: Write a Java program to create an Employee class and display employee details [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **create an Employee class and display employee details**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.208: Write a Java program to implement a Bank Account class with deposit, withdraw, and check balance features [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **implement a Bank Account class with deposit, withdraw, and check balance features**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.209: Write a Java program to create a Book class with constructors and display book details [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **create a Book class with constructors and display book details**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.210: Write a Java program to create a Car class and display car details [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **create a Car class and display car details**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.211: Write a Java program to create a Mobile class and display mobile details [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **create a Mobile class and display mobile details**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.212: Write a Java program to demonstrate constructor example in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate constructor example in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.213: Write a Java program to demonstrate constructor overloading [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate constructor overloading**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.214: Write a Java program to demonstrate copy constructor in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate copy constructor in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.215: Write a Java program to demonstrate encapsulation in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate encapsulation in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.216: Write a Java program to demonstrate single inheritance in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate single inheritance in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.217: Write a Java program to demonstrate multilevel inheritance in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate multilevel inheritance in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.218: Write a Java program to demonstrate hierarchical inheritance in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate hierarchical inheritance in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.219: Write a Java program to demonstrate method overriding in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate method overriding in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.220: Write a Java program to demonstrate runtime polymorphism in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate runtime polymorphism in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.221: Write a Java program to demonstrate compile-time polymorphism (method overloading) in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate compile-time polymorphism (method overloading) in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.222: Write a Java program to demonstrate abstract class and abstract methods in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate abstract class and abstract methods in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.223: Write a Java program to demonstrate interface usage in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate interface usage in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.224: Write a Java program to demonstrate multiple inheritance using interfaces in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate multiple inheritance using interfaces in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.225: Write a Java program to demonstrate association between classes in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate association between classes in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.226: Write a Java program to demonstrate aggregation in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate aggregation in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.227: Write a Java program to demonstrate composition in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate composition in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.228: Write a Java program to implement a Singleton class in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **implement a Singleton class in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.229: Write a Java program to create an Immutable class in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **create an Immutable class in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.230: Write a Java program to demonstrate object cloning in Java [Medium] [Topic: OOP]

### 📝 Problem Description
Write a Java program to implement: **demonstrate object cloning in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 10: Exception Handling

> Robust code structure using try-catch blocks, multi-catch, throws, propagate exceptions, and custom Exception declarations.

---

## 📋 Table of Contents

- [1. Write a Java program to handle a divide-by-zero ArithmeticException using try-catch](#1-write-a-java-program-to-handle-a-divide-by-zero-arithmeticexception-using-try-catch)
- [2. Write a Java program to demonstrate try-catch exception handling](#2-write-a-java-program-to-demonstrate-try-catch-exception-handling)
- [3. Write a Java program to demonstrate multiple catch blocks](#3-write-a-java-program-to-demonstrate-multiple-catch-blocks)
- [4. Write a Java program to demonstrate nested try-catch blocks](#4-write-a-java-program-to-demonstrate-nested-try-catch-blocks)
- [5. Write a Java program to demonstrate the usage of finally block](#5-write-a-java-program-to-demonstrate-the-usage-of-finally-block)
- [6. Write a Java program to demonstrate the use of 'throw' keyword to throw an exception](#6-write-a-java-program-to-demonstrate-the-use-of-throw-keyword-to-throw-an-exception)
- [7. Write a Java program to demonstrate the use of 'throws' keyword in a method signature](#7-write-a-java-program-to-demonstrate-the-use-of-throws-keyword-in-a-method-signature)
- [8. Write a Java program to create and use a Custom Exception in Java](#8-write-a-java-program-to-create-and-use-a-custom-exception-in-java)
- [9. Write a Java program to implement an InvalidAgeException custom exception for voting validation](#9-write-a-java-program-to-implement-an-invalidageexception-custom-exception-for-voting-validation)
- [10. Write a Java program to implement an InvalidPasswordException custom exception for password validation](#10-write-a-java-program-to-implement-an-invalidpasswordexception-custom-exception-for-password-validation)
- [11. Write a Java program to handle FileNotFoundException in file operations](#11-write-a-java-program-to-handle-filenotfoundexception-in-file-operations)
- [12. Write a Java program to handle NumberFormatException during string parsing](#12-write-a-java-program-to-handle-numberformatexception-during-string-parsing)
- [13. Write a Java program to handle ArithmeticException in mathematical calculations](#13-write-a-java-program-to-handle-arithmeticexception-in-mathematical-calculations)
- [14. Write a Java program to demonstrate exception propagation in Java](#14-write-a-java-program-to-demonstrate-exception-propagation-in-java)
- [15. Write a Java program to implement a BankWithdrawalException custom exception for banking transactions](#15-write-a-java-program-to-implement-a-bankwithdrawalexception-custom-exception-for-banking-transactions)

---

### [ ] Problem 12.231: Write a Java program to handle a divide-by-zero ArithmeticException using try-catch [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **handle a divide-by-zero ArithmeticException using try-catch**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.232: Write a Java program to demonstrate try-catch exception handling [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate try-catch exception handling**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.233: Write a Java program to demonstrate multiple catch blocks [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate multiple catch blocks**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.234: Write a Java program to demonstrate nested try-catch blocks [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate nested try-catch blocks**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.235: Write a Java program to demonstrate the usage of finally block [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of finally block**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.236: Write a Java program to demonstrate the use of 'throw' keyword to throw an exception [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the use of 'throw' keyword to throw an exception**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.237: Write a Java program to demonstrate the use of 'throws' keyword in a method signature [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the use of 'throws' keyword in a method signature**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.238: Write a Java program to create and use a Custom Exception in Java [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **create and use a Custom Exception in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.239: Write a Java program to implement an InvalidAgeException custom exception for voting validation [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **implement an InvalidAgeException custom exception for voting validation**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.240: Write a Java program to implement an InvalidPasswordException custom exception for password validation [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **implement an InvalidPasswordException custom exception for password validation**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.241: Write a Java program to handle FileNotFoundException in file operations [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **handle FileNotFoundException in file operations**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.242: Write a Java program to handle NumberFormatException during string parsing [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **handle NumberFormatException during string parsing**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.243: Write a Java program to handle ArithmeticException in mathematical calculations [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **handle ArithmeticException in mathematical calculations**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.244: Write a Java program to demonstrate exception propagation in Java [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **demonstrate exception propagation in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.245: Write a Java program to implement a BankWithdrawalException custom exception for banking transactions [Medium] [Topic: Exceptions]

### 📝 Problem Description
Write a Java program to implement: **implement a BankWithdrawalException custom exception for banking transactions**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 11: Collections Framework

> Lists, Sets, Maps, Queues, Sorting using Comparable/Comparator, and real-world system modeling (LRU Cache, Library system).

---

## 📋 Table of Contents

- [1. Write a Java program to perform CRUD operations using ArrayList](#1-write-a-java-program-to-perform-crud-operations-using-arraylist)
- [2. Write a Java program to perform CRUD operations using LinkedList](#2-write-a-java-program-to-perform-crud-operations-using-linkedlist)
- [3. Write a Java program to demonstrate the usage of Vector class](#3-write-a-java-program-to-demonstrate-the-usage-of-vector-class)
- [4. Write a Java program to demonstrate the usage of Stack class](#4-write-a-java-program-to-demonstrate-the-usage-of-stack-class)
- [5. Write a Java program to demonstrate the usage of Queue interface](#5-write-a-java-program-to-demonstrate-the-usage-of-queue-interface)
- [6. Write a Java program to demonstrate the usage of PriorityQueue](#6-write-a-java-program-to-demonstrate-the-usage-of-priorityqueue)
- [7. Write a Java program to demonstrate the usage of HashSet](#7-write-a-java-program-to-demonstrate-the-usage-of-hashset)
- [8. Write a Java program to demonstrate the usage of LinkedHashSet](#8-write-a-java-program-to-demonstrate-the-usage-of-linkedhashset)
- [9. Write a Java program to demonstrate the usage of TreeSet](#9-write-a-java-program-to-demonstrate-the-usage-of-treeset)
- [10. Write a Java program to demonstrate the usage of HashMap](#10-write-a-java-program-to-demonstrate-the-usage-of-hashmap)
- [11. Write a Java program to demonstrate the usage of LinkedHashMap](#11-write-a-java-program-to-demonstrate-the-usage-of-linkedhashmap)
- [12. Write a Java program to demonstrate the usage of TreeMap](#12-write-a-java-program-to-demonstrate-the-usage-of-treemap)
- [13. Write a Java program to count frequency of elements using Collections](#13-write-a-java-program-to-count-frequency-of-elements-using-collections)
- [14. Write a Java program to detect duplicates in a list using Collections](#14-write-a-java-program-to-detect-duplicates-in-a-list-using-collections)
- [15. Write a Java program to sort an ArrayList](#15-write-a-java-program-to-sort-an-arraylist)
- [16. Write a Java program to sort custom objects using Collections](#16-write-a-java-program-to-sort-custom-objects-using-collections)
- [17. Write a Java program to demonstrate the Comparable interface for sorting](#17-write-a-java-program-to-demonstrate-the-comparable-interface-for-sorting)
- [18. Write a Java program to demonstrate the Comparator interface for custom sorting](#18-write-a-java-program-to-demonstrate-the-comparator-interface-for-custom-sorting)
- [19. Write a Java program to implement a Student Management system using Collections](#19-write-a-java-program-to-implement-a-student-management-system-using-collections)
- [20. Write a Java program to implement an Employee Management system using Collections](#20-write-a-java-program-to-implement-an-employee-management-system-using-collections)
- [21. Write a Java program to implement a Library Management system using Collections](#21-write-a-java-program-to-implement-a-library-management-system-using-collections)
- [22. Write a Java program to implement an Inventory Management system using Collections](#22-write-a-java-program-to-implement-an-inventory-management-system-using-collections)
- [23. Write a Java program to count word frequencies in a text using HashMap](#23-write-a-java-program-to-count-word-frequencies-in-a-text-using-hashmap)
- [24. Write a Java program to implement a Phone Directory using HashMap](#24-write-a-java-program-to-implement-a-phone-directory-using-hashmap)
- [25. Write a Java program to simulate an LRU Cache using LinkedHashMap](#25-write-a-java-program-to-simulate-an-lru-cache-using-linkedhashmap)
- [26. Write a Java program to find the top K frequent elements using PriorityQueue](#26-write-a-java-program-to-find-the-top-k-frequent-elements-using-priorityqueue)
- [27. Write a Java program to group anagrams together using HashMap and List](#27-write-a-java-program-to-group-anagrams-together-using-hashmap-and-list)
- [28. Write a Java program to sort elements by frequency using Collections](#28-write-a-java-program-to-sort-elements-by-frequency-using-collections)
- [29. Write a Java program to collect Stream elements into a List/Map](#29-write-a-java-program-to-collect-stream-elements-into-a-listmap)
- [30. Write a Java program to sort a Map by keys and by values](#30-write-a-java-program-to-sort-a-map-by-keys-and-by-values)

---

### [ ] Problem 12.246: Write a Java program to perform CRUD operations using ArrayList [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **perform CRUD operations using ArrayList**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.247: Write a Java program to perform CRUD operations using LinkedList [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **perform CRUD operations using LinkedList**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.248: Write a Java program to demonstrate the usage of Vector class [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of Vector class**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.249: Write a Java program to demonstrate the usage of Stack class [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of Stack class**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.250: Write a Java program to demonstrate the usage of Queue interface [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of Queue interface**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.251: Write a Java program to demonstrate the usage of PriorityQueue [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of PriorityQueue**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.252: Write a Java program to demonstrate the usage of HashSet [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of HashSet**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.253: Write a Java program to demonstrate the usage of LinkedHashSet [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of LinkedHashSet**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.254: Write a Java program to demonstrate the usage of TreeSet [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of TreeSet**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.255: Write a Java program to demonstrate the usage of HashMap [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of HashMap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.256: Write a Java program to demonstrate the usage of LinkedHashMap [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of LinkedHashMap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.257: Write a Java program to demonstrate the usage of TreeMap [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of TreeMap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.258: Write a Java program to count frequency of elements using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **count frequency of elements using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.259: Write a Java program to detect duplicates in a list using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **detect duplicates in a list using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.260: Write a Java program to sort an ArrayList [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **sort an ArrayList**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.261: Write a Java program to sort custom objects using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **sort custom objects using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.262: Write a Java program to demonstrate the Comparable interface for sorting [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the Comparable interface for sorting**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.263: Write a Java program to demonstrate the Comparator interface for custom sorting [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the Comparator interface for custom sorting**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.264: Write a Java program to implement a Student Management system using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **implement a Student Management system using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.265: Write a Java program to implement an Employee Management system using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **implement an Employee Management system using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.266: Write a Java program to implement a Library Management system using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **implement a Library Management system using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.267: Write a Java program to implement an Inventory Management system using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **implement an Inventory Management system using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.268: Write a Java program to count word frequencies in a text using HashMap [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **count word frequencies in a text using HashMap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.269: Write a Java program to implement a Phone Directory using HashMap [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **implement a Phone Directory using HashMap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.270: Write a Java program to simulate an LRU Cache using LinkedHashMap [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **simulate an LRU Cache using LinkedHashMap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.271: Write a Java program to find the top K frequent elements using PriorityQueue [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **find the top K frequent elements using PriorityQueue**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.272: Write a Java program to group anagrams together using HashMap and List [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **group anagrams together using HashMap and List**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.273: Write a Java program to sort elements by frequency using Collections [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **sort elements by frequency using Collections**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.274: Write a Java program to collect Stream elements into a List/Map [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **collect Stream elements into a List/Map**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.275: Write a Java program to sort a Map by keys and by values [Medium] [Topic: Collections]

### 📝 Problem Description
Write a Java program to implement: **sort a Map by keys and by values**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 12: File Handling

> Read and write streams, file operations (create, delete, copy, move), CSV parsing, and persistent storage simulations.

---

## 📋 Table of Contents

- [1. Write a Java program to create a new file on disk](#1-write-a-java-program-to-create-a-new-file-on-disk)
- [2. Write a Java program to write text to a file](#2-write-a-java-program-to-write-text-to-a-file)
- [3. Write a Java program to read text from a file](#3-write-a-java-program-to-read-text-from-a-file)
- [4. Write a Java program to append text to an existing file](#4-write-a-java-program-to-append-text-to-an-existing-file)
- [5. Write a Java program to copy content from one file to another](#5-write-a-java-program-to-copy-content-from-one-file-to-another)
- [6. Write a Java program to move a file from one directory to another](#6-write-a-java-program-to-move-a-file-from-one-directory-to-another)
- [7. Write a Java program to delete a file](#7-write-a-java-program-to-delete-a-file)
- [8. Write a Java program to read and parse a CSV file in Java](#8-write-a-java-program-to-read-and-parse-a-csv-file-in-java)
- [9. Write a Java program to implement a Log File Analyzer](#9-write-a-java-program-to-implement-a-log-file-analyzer)
- [10. Write a Java program to implement a Student Record System that saves data to a file](#10-write-a-java-program-to-implement-a-student-record-system-that-saves-data-to-a-file)

---

### [ ] Problem 12.276: Write a Java program to create a new file on disk [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **create a new file on disk**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.277: Write a Java program to write text to a file [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **write text to a file**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.278: Write a Java program to read text from a file [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **read text from a file**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.279: Write a Java program to append text to an existing file [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **append text to an existing file**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.280: Write a Java program to copy content from one file to another [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **copy content from one file to another**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.281: Write a Java program to move a file from one directory to another [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **move a file from one directory to another**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.282: Write a Java program to delete a file [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **delete a file**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.283: Write a Java program to read and parse a CSV file in Java [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **read and parse a CSV file in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.284: Write a Java program to implement a Log File Analyzer [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **implement a Log File Analyzer**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.285: Write a Java program to implement a Student Record System that saves data to a file [Medium] [Topic: File Handling]

### 📝 Problem Description
Write a Java program to implement: **implement a Student Record System that saves data to a file**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 13: Java 8 Features

> Functional programming in Java, including Lambdas, Streams (filter, map, reduce), Optionals, and the Date Time API.

---

## 📋 Table of Contents

- [1. Write a Java program to demonstrate Lambda Expressions](#1-write-a-java-program-to-demonstrate-lambda-expressions)
- [2. Write a Java program to create and use a custom Functional Interface](#2-write-a-java-program-to-create-and-use-a-custom-functional-interface)
- [3. Write a Java program to demonstrate Predicate functional interface](#3-write-a-java-program-to-demonstrate-predicate-functional-interface)
- [4. Write a Java program to demonstrate Function functional interface](#4-write-a-java-program-to-demonstrate-function-functional-interface)
- [5. Write a Java program to demonstrate Consumer functional interface](#5-write-a-java-program-to-demonstrate-consumer-functional-interface)
- [6. Write a Java program to demonstrate Supplier functional interface](#6-write-a-java-program-to-demonstrate-supplier-functional-interface)
- [7. Write a Java program to demonstrate Method References in Java](#7-write-a-java-program-to-demonstrate-method-references-in-java)
- [8. Write a Java program to filter elements from a list using Java 8 Streams](#8-write-a-java-program-to-filter-elements-from-a-list-using-java-8-streams)
- [9. Write a Java program to map elements of a list using Java 8 Streams](#9-write-a-java-program-to-map-elements-of-a-list-using-java-8-streams)
- [10. Write a Java program to perform reduce operations using Java 8 Streams](#10-write-a-java-program-to-perform-reduce-operations-using-java-8-streams)
- [11. Write a Java program to collect stream elements using Java 8 Streams](#11-write-a-java-program-to-collect-stream-elements-using-java-8-streams)
- [12. Write a Java program to demonstrate the usage of Optional class](#12-write-a-java-program-to-demonstrate-the-usage-of-optional-class)
- [13. Write a Java program to demonstrate the Java 8 Date and Time API](#13-write-a-java-program-to-demonstrate-the-java-8-date-and-time-api)
- [14. Write a Java program to demonstrate Parallel Streams for performance optimization](#14-write-a-java-program-to-demonstrate-parallel-streams-for-performance-optimization)
- [15. Write a Java program to demonstrate custom stream operations in Java](#15-write-a-java-program-to-demonstrate-custom-stream-operations-in-java)

---

### [ ] Problem 12.286: Write a Java program to demonstrate Lambda Expressions [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Lambda Expressions**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.287: Write a Java program to create and use a custom Functional Interface [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **create and use a custom Functional Interface**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.288: Write a Java program to demonstrate Predicate functional interface [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Predicate functional interface**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.289: Write a Java program to demonstrate Function functional interface [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Function functional interface**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.290: Write a Java program to demonstrate Consumer functional interface [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Consumer functional interface**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.291: Write a Java program to demonstrate Supplier functional interface [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Supplier functional interface**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.292: Write a Java program to demonstrate Method References in Java [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Method References in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.293: Write a Java program to filter elements from a list using Java 8 Streams [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **filter elements from a list using Java 8 Streams**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.294: Write a Java program to map elements of a list using Java 8 Streams [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **map elements of a list using Java 8 Streams**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.295: Write a Java program to perform reduce operations using Java 8 Streams [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **perform reduce operations using Java 8 Streams**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.296: Write a Java program to collect stream elements using Java 8 Streams [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **collect stream elements using Java 8 Streams**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.297: Write a Java program to demonstrate the usage of Optional class [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the usage of Optional class**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.298: Write a Java program to demonstrate the Java 8 Date and Time API [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate the Java 8 Date and Time API**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.299: Write a Java program to demonstrate Parallel Streams for performance optimization [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Parallel Streams for performance optimization**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.300: Write a Java program to demonstrate custom stream operations in Java [Medium] [Topic: Java 8]

### 📝 Problem Description
Write a Java program to implement: **demonstrate custom stream operations in Java**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---

# 📁 Category 14: Advanced DSA & Interview Programs

> Advanced algorithms, complex data structures (Trees, Graphs, Tries), design problems, and Dynamic Programming.

---

## 📋 Table of Contents

- [1. Write a Java program to implement Linear Search](#1-write-a-java-program-to-implement-linear-search)
- [2. Write a Java program to implement Binary Search](#2-write-a-java-program-to-implement-binary-search)
- [3. Write a Java program to implement Bubble Sort](#3-write-a-java-program-to-implement-bubble-sort)
- [4. Write a Java program to implement Selection Sort](#4-write-a-java-program-to-implement-selection-sort)
- [5. Write a Java program to implement Insertion Sort](#5-write-a-java-program-to-implement-insertion-sort)
- [6. Write a Java program to implement Merge Sort](#6-write-a-java-program-to-implement-merge-sort)
- [7. Write a Java program to implement Quick Sort](#7-write-a-java-program-to-implement-quick-sort)
- [8. Write a Java program to implement Heap Sort](#8-write-a-java-program-to-implement-heap-sort)
- [9. Write a Java program to implement Counting Sort](#9-write-a-java-program-to-implement-counting-sort)
- [10. Write a Java program to implement Radix Sort](#10-write-a-java-program-to-implement-radix-sort)
- [11. Write a Java program to implement Bucket Sort](#11-write-a-java-program-to-implement-bucket-sort)
- [12. Write a Java program to implement Binary Tree Traversals (Inorder, Preorder, Postorder)](#12-write-a-java-program-to-implement-binary-tree-traversals-inorder-preorder-postorder)
- [13. Write a Java program to insert a node in a Binary Search Tree (BST)](#13-write-a-java-program-to-insert-a-node-in-a-binary-search-tree-bst)
- [14. Write a Java program to search for a value in a Binary Search Tree (BST)](#14-write-a-java-program-to-search-for-a-value-in-a-binary-search-tree-bst)
- [15. Write a Java program to delete a node from a Binary Search Tree (BST)](#15-write-a-java-program-to-delete-a-node-from-a-binary-search-tree-bst)
- [16. Write a Java program to perform Depth First Search (DFS) on a graph](#16-write-a-java-program-to-perform-depth-first-search-dfs-on-a-graph)
- [17. Write a Java program to perform Breadth First Search (BFS) on a graph](#17-write-a-java-program-to-perform-breadth-first-search-bfs-on-a-graph)
- [18. Write a Java program to represent a graph using Adjacency List and Adjacency Matrix](#18-write-a-java-program-to-represent-a-graph-using-adjacency-list-and-adjacency-matrix)
- [19. Write a Java program to implement Dijkstra's Algorithm for shortest path](#19-write-a-java-program-to-implement-dijkstras-algorithm-for-shortest-path)
- [20. Write a Java program to implement Floyd Warshall Algorithm for all-pairs shortest paths](#20-write-a-java-program-to-implement-floyd-warshall-algorithm-for-all-pairs-shortest-paths)
- [21. Write a Java program to implement Kruskal's Algorithm for Minimum Spanning Tree](#21-write-a-java-program-to-implement-kruskals-algorithm-for-minimum-spanning-tree)
- [22. Write a Java program to implement Prim's Algorithm for Minimum Spanning Tree](#22-write-a-java-program-to-implement-prims-algorithm-for-minimum-spanning-tree)
- [23. Write a Java program to implement Topological Sort on a Directed Acyclic Graph (DAG)](#23-write-a-java-program-to-implement-topological-sort-on-a-directed-acyclic-graph-dag)
- [24. Write a Java program to detect cycles in directed and undirected graphs](#24-write-a-java-program-to-detect-cycles-in-directed-and-undirected-graphs)
- [25. Write a Java program to implement a Trie data structure (insert, search, startsWith)](#25-write-a-java-program-to-implement-a-trie-data-structure-insert-search-startswith)
- [26. Write a Java program to implement a Segment Tree](#26-write-a-java-program-to-implement-a-segment-tree)
- [27. Write a Java program to implement a Fenwick Tree (Binary Indexed Tree)](#27-write-a-java-program-to-implement-a-fenwick-tree-binary-indexed-tree)
- [28. Write a Java program to implement a Stack using an array](#28-write-a-java-program-to-implement-a-stack-using-an-array)
- [29. Write a Java program to implement a Queue using an array](#29-write-a-java-program-to-implement-a-queue-using-an-array)
- [30. Write a Java program to implement a Circular Queue](#30-write-a-java-program-to-implement-a-circular-queue)
- [31. Write a Java program to implement a Singly Linked List (insert, delete, display)](#31-write-a-java-program-to-implement-a-singly-linked-list-insert-delete-display)
- [32. Write a Java program to implement a Doubly Linked List](#32-write-a-java-program-to-implement-a-doubly-linked-list)
- [33. Write a Java program to implement a Circular Linked List](#33-write-a-java-program-to-implement-a-circular-linked-list)
- [34. Write a Java program to detect a loop in a Linked List (Floyd's Cycle Finding Algorithm)](#34-write-a-java-program-to-detect-a-loop-in-a-linked-list-floyds-cycle-finding-algorithm)
- [35. Write a Java program to reverse a Singly Linked List](#35-write-a-java-program-to-reverse-a-singly-linked-list)
- [36. Write a Java program to simulate an LRU Cache (Design and Implementation)](#36-write-a-java-program-to-simulate-an-lru-cache-design-and-implementation)
- [37. Write a Java program to implement a Min Heap](#37-write-a-java-program-to-implement-a-min-heap)
- [38. Write a Java program to implement a Max Heap](#38-write-a-java-program-to-implement-a-max-heap)
- [39. Write a Java program to solve the Sliding Window Maximum problem](#39-write-a-java-program-to-solve-the-sliding-window-maximum-problem)
- [40. Write a Java program to solve the Two Sum problem](#40-write-a-java-program-to-solve-the-two-sum-problem)
- [41. Write a Java program to solve the Three Sum problem](#41-write-a-java-program-to-solve-the-three-sum-problem)
- [42. Write a Java program to find the Longest Substring Without Repeating Characters](#42-write-a-java-program-to-find-the-longest-substring-without-repeating-characters)
- [43. Write a Java program to find the Longest Increasing Subsequence](#43-write-a-java-program-to-find-the-longest-increasing-subsequence)
- [44. Write a Java program to solve the Coin Change problem](#44-write-a-java-program-to-solve-the-coin-change-problem)
- [45. Write a Java program to solve the 0/1 Knapsack problem](#45-write-a-java-program-to-solve-the-01-knapsack-problem)
- [46. Write a Java program to solve the N-Queens problem](#46-write-a-java-program-to-solve-the-n-queens-problem)
- [47. Write a Java program to solve the Sudoku Solver problem](#47-write-a-java-program-to-solve-the-sudoku-solver-problem)
- [48. Write a Java program to solve the Rat in a Maze problem](#48-write-a-java-program-to-solve-the-rat-in-a-maze-problem)
- [49. Write a Java program to solve the Word Search problem](#49-write-a-java-program-to-solve-the-word-search-problem)
- [50. Write a Java program to demonstrate Dynamic Programming Basics (e.g. Fibonacci, Climbing Stairs)](#50-write-a-java-program-to-demonstrate-dynamic-programming-basics-eg-fibonacci-climbing-stairs)

---

### [ ] Problem 12.301: Write a Java program to implement Linear Search [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Linear Search**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.302: Write a Java program to implement Binary Search [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Binary Search**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.303: Write a Java program to implement Bubble Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Bubble Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.304: Write a Java program to implement Selection Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Selection Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.305: Write a Java program to implement Insertion Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Insertion Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.306: Write a Java program to implement Merge Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Merge Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.307: Write a Java program to implement Quick Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Quick Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.308: Write a Java program to implement Heap Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Heap Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.309: Write a Java program to implement Counting Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Counting Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.310: Write a Java program to implement Radix Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Radix Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.311: Write a Java program to implement Bucket Sort [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Bucket Sort**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.312: Write a Java program to implement Binary Tree Traversals (Inorder, Preorder, Postorder) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Binary Tree Traversals (Inorder, Preorder, Postorder)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.313: Write a Java program to insert a node in a Binary Search Tree (BST) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **insert a node in a Binary Search Tree (BST)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.314: Write a Java program to search for a value in a Binary Search Tree (BST) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **search for a value in a Binary Search Tree (BST)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.315: Write a Java program to delete a node from a Binary Search Tree (BST) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **delete a node from a Binary Search Tree (BST)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.316: Write a Java program to perform Depth First Search (DFS) on a graph [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **perform Depth First Search (DFS) on a graph**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.317: Write a Java program to perform Breadth First Search (BFS) on a graph [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **perform Breadth First Search (BFS) on a graph**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.318: Write a Java program to represent a graph using Adjacency List and Adjacency Matrix [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **represent a graph using Adjacency List and Adjacency Matrix**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.319: Write a Java program to implement Dijkstra's Algorithm for shortest path [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Dijkstra's Algorithm for shortest path**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.320: Write a Java program to implement Floyd Warshall Algorithm for all-pairs shortest paths [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Floyd Warshall Algorithm for all-pairs shortest paths**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.321: Write a Java program to implement Kruskal's Algorithm for Minimum Spanning Tree [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Kruskal's Algorithm for Minimum Spanning Tree**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.322: Write a Java program to implement Prim's Algorithm for Minimum Spanning Tree [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Prim's Algorithm for Minimum Spanning Tree**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.323: Write a Java program to implement Topological Sort on a Directed Acyclic Graph (DAG) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement Topological Sort on a Directed Acyclic Graph (DAG)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.324: Write a Java program to detect cycles in directed and undirected graphs [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **detect cycles in directed and undirected graphs**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.325: Write a Java program to implement a Trie data structure (insert, search, startsWith) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Trie data structure (insert, search, startsWith)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.326: Write a Java program to implement a Segment Tree [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Segment Tree**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.327: Write a Java program to implement a Fenwick Tree (Binary Indexed Tree) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Fenwick Tree (Binary Indexed Tree)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.328: Write a Java program to implement a Stack using an array [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Stack using an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.329: Write a Java program to implement a Queue using an array [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Queue using an array**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.330: Write a Java program to implement a Circular Queue [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Circular Queue**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.331: Write a Java program to implement a Singly Linked List (insert, delete, display) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Singly Linked List (insert, delete, display)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.332: Write a Java program to implement a Doubly Linked List [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Doubly Linked List**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.333: Write a Java program to implement a Circular Linked List [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Circular Linked List**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.334: Write a Java program to detect a loop in a Linked List (Floyd's Cycle Finding Algorithm) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **detect a loop in a Linked List (Floyd's Cycle Finding Algorithm)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.335: Write a Java program to reverse a Singly Linked List [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **reverse a Singly Linked List**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.336: Write a Java program to simulate an LRU Cache (Design and Implementation) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **simulate an LRU Cache (Design and Implementation)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.337: Write a Java program to implement a Min Heap [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Min Heap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.338: Write a Java program to implement a Max Heap [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **implement a Max Heap**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.339: Write a Java program to solve the Sliding Window Maximum problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Sliding Window Maximum problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.340: Write a Java program to solve the Two Sum problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Two Sum problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.341: Write a Java program to solve the Three Sum problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Three Sum problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.342: Write a Java program to find the Longest Substring Without Repeating Characters [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **find the Longest Substring Without Repeating Characters**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.343: Write a Java program to find the Longest Increasing Subsequence [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **find the Longest Increasing Subsequence**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.344: Write a Java program to solve the Coin Change problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Coin Change problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.345: Write a Java program to solve the 0/1 Knapsack problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the 0/1 Knapsack problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.346: Write a Java program to solve the N-Queens problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the N-Queens problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.347: Write a Java program to solve the Sudoku Solver problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Sudoku Solver problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.348: Write a Java program to solve the Rat in a Maze problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Rat in a Maze problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.349: Write a Java program to solve the Word Search problem [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **solve the Word Search problem**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

### [ ] Problem 12.350: Write a Java program to demonstrate Dynamic Programming Basics (e.g. Fibonacci, Climbing Stairs) [Hard] [Topic: Advanced DSA]

### 📝 Problem Description
Write a Java program to implement: **demonstrate Dynamic Programming Basics (e.g. Fibonacci, Climbing Stairs)**.

### 💻 Solution
```java
// Write your Java solution here
```

---
[⬆ Back to Top](#table-of-contents) | [📂 Main README](README.md)

---

---
