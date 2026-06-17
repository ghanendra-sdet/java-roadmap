# Practice Java Center

A dedicated workspace populated with **80 practice questions** organized by topic categories to test your understanding of key language features.

---

## 1. Basics (Beginner Level)

📌 **Topics**: Main method structure, standard output streams, basic mathematical operators, and printing shapes.

### [ ] Problem 9.1: Printed Square [Easy] [Topic: Basics]
* **Learning Objective**: Align console outputs to print structured blocks.
* **Problem Statement**: Print a $4\times4$ square made of hash characters (`#`).
* **Input**: None
* **Output**:
  ```text
  ####
  ####
  ####
  ####
  ```
* **Hint**: Print four hash characters on four separate lines using `System.out.println()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("####");
        System.out.println("####");
        System.out.println("####");
        System.out.println("####");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 9.2: Greeting Message [Easy] [Topic: Basics]
* **Learning Objective**: Concatenate static text with variable parameters.
* **Problem Statement**: Write a program that displays the message `"Namaste, [Name]!"` replacing `[Name]` with a predefined string.
* **Input**: `name = "Rohan"`
* **Output**:
  ```text
  Namaste, Rohan!
  ```
* **Hint**: Use string concatenation: `"Namaste, " + name + "!"`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String name = "Rohan";
        System.out.println("Namaste, " + name + "!");
    }
}
```
</details>

### [ ] Problem 9.3: Chai Samosa Arithmetic [Easy] [Topic: Basics]
* **Learning Objective**: Write basic arithmetic expressions.
* **Problem Statement**: Print the total cost of purchasing `x` plates of Samosas and `y` cups of Chai, and find the difference between their individual totals.
* **Input**: `samosas = 5` (₹15 each), `chais = 3` (₹10 each)
* **Output**:
  ```text
  Total Cost: 105, Cost Difference: 45
  ```
* **Hint**: Total is `(samosas * 15) + (chais * 10)`. Difference is `(samosas * 15) - (chais * 10)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int samosas = 5;
        int chais = 3;
        int total = (samosas * 15) + (chais * 10);
        int diff = (samosas * 15) - (chais * 10);
        System.out.println("Total Cost: " + total + ", Cost Difference: " + diff);
    }
}
```
</details>

### [ ] Problem 9.4: Rupees Paisa Modulo [Easy] [Topic: Basics]
* **Learning Objective**: Calculate remains using modulo math.
* **Problem Statement**: Given a total amount of money in Paisa, convert it to Rupees and remaining Paisa.
* **Input**: `totalPaisa = 435`
* **Output**:
  ```text
  4 Rupees and 35 Paisa
  ```
* **Hint**: Rupees is `totalPaisa / 100`, remaining Paisa is `totalPaisa % 100`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int totalPaisa = 435;
        int rupees = totalPaisa / 100;
        int paisa = totalPaisa % 100;
        System.out.println(rupees + " Rupees and " + paisa + " Paisa");
    }
}
```
</details>

### [ ] Problem 9.5: Operator Precedence [Medium] [Topic: Basics]
* **Learning Objective**: Enforce order of evaluations using parenthesis.
* **Problem Statement**: Calculate the average of three scores, ensuring floating-point division is used.
* **Input**: `s1 = 80`, `s2 = 90`, `s3 = 85`
* **Output**:
  ```text
  Average: 85.0
  ```
* **Hint**: Wrap addition in parenthesis: `(s1 + s2 + s3) / 3.0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int s1 = 80, s2 = 90, s3 = 85;
        double avg = (s1 + s2 + s3) / 3.0;
        System.out.println("Average: " + avg);
    }
}
```
</details>

### [ ] Problem 9.6: Auto-rickshaw Fare [Easy] [Topic: Basics]
* **Learning Objective**: Express multi-stage arithmetic logic.
* **Problem Statement**: An auto-rickshaw charges a base fare of ₹30 for the first 2 kilometers, and ₹15 per kilometer for any distance after that. Calculate the total fare for an 8 km journey.
* **Input**: `distance = 8`
* **Output**:
  ```text
  Total Fare: ₹120.0
  ```
* **Hint**: Calculate the remaining distance as `distance - 2` and multiply by 15. Then add the base fare of 30.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double distance = 8.0;
        double totalFare = 30.0 + (distance - 2.0) * 15.0;
        System.out.println("Total Fare: ₹" + totalFare);
    }
}
```
</details>

### [ ] Problem 9.7: Simple Interest [Easy] [Topic: Basics]
* **Learning Objective**: Apply algebraic formulas directly in Java code.
* **Problem Statement**: Compute the simple interest for a Fixed Deposit of ₹10,000 at a rate of 7.5% per annum for a duration of 3 years. Formula: $SI = (P \times R \times T) / 100$.
* **Input**: `principal = 10000`, `rate = 7.5`, `time = 3`
* **Output**:
  ```text
  Simple Interest: ₹2250.0
  ```
* **Hint**: Make sure to declare rate as a double and evaluate `(principal * rate * time) / 100.0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double principal = 10000.0;
        double rate = 7.5;
        int time = 3;
        double si = (principal * rate * time) / 100.0;
        System.out.println("Simple Interest: ₹" + si);
    }
}
```
</details>

### [ ] Problem 9.8: Celsius to Fahrenheit [Easy] [Topic: Basics]
* **Learning Objective**: Perform floating point conversions.
* **Problem Statement**: Temperature in Delhi is recorded as 40°C. Convert it to Fahrenheit. Formula: $F = (C \times 9/5) + 32$.
* **Input**: `celsius = 40.0`
* **Output**:
  ```text
  Fahrenheit: 104.0°F
  ```
* **Hint**: Use `9.0 / 5.0` to avoid integer division truncation to `1`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double celsius = 40.0;
        double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
        System.out.println("Fahrenheit: " + fahrenheit + "°F");
    }
}
```
</details>

### [ ] Problem 9.9: Cylinder Volume [Medium] [Topic: Basics]
* **Learning Objective**: Use mathematical constants and formulas.
* **Problem Statement**: Calculate the volume of a circular water tank in a household with a radius of 5 meters and a height of 10 meters. Formula: $V = \pi \times r^2 \times h$. Use $\pi = 3.14159$.
* **Input**: `radius = 5.0`, `height = 10.0`
* **Output**:
  ```text
  Volume: 785.3975 cubic meters
  ```
* **Hint**: Declare $\pi$ as `3.14159` and calculate `pi * radius * radius * height`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double radius = 5.0;
        double height = 10.0;
        double pi = 3.14159;
        double volume = pi * radius * radius * height;
        System.out.println("Volume: " + volume + " cubic meters");
    }
}
```
</details>

### [ ] Problem 9.10: BMI Calculator [Hard] [Topic: Basics]
* **Learning Objective**: Handle complex nested arithmetic variables.
* **Problem Statement**: Calculate the Body Mass Index (BMI) for a person who weighs 70 kg and is 1.75 meters tall. Formula: $BMI = weight / (height \times height)$.
* **Input**: `weight = 70.0`, `height = 1.75`
* **Output**:
  ```text
  BMI: 22.857142857142858
  ```
* **Hint**: Divide weight by the square of height: `weight / (height * height)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double weight = 70.0;
        double height = 1.75;
        double bmi = weight / (height * height);
        System.out.println("BMI: " + bmi);
    }
}
```
</details>

---

## 2. Variables & Data Types

📌 **Topics**: Variable declarations, primitive types (`int`, `double`, `boolean`, `char`), and casting.

### [ ] Problem 9.11: GST Bill Precision [Easy] [Topic: Variables]
* **Learning Objective**: Print floats with specific decimal width limitations.
* **Problem Statement**: Calculate the total bill including 18% GST on a base billing amount of ₹1000, and output it with exactly two decimal places.
* **Input**: `baseAmount = 1000.0`
* **Output**:
  ```text
  Total Bill: ₹1180.00
  ```
* **Hint**: Use `System.out.printf("Total Bill: ₹%.2f\n", baseAmount * 1.18)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double baseAmount = 1000.0;
        System.out.printf("Total Bill: ₹%.2f\n", baseAmount * 1.18);
    }
}
```
</details>

### [ ] Problem 9.12: Rupees Bill Casting [Easy] [Topic: Variables]
* **Learning Objective**: Cast double references to integer targets.
* **Problem Statement**: Take a bill total in Rupees with paisa (like `154.50` INR) and cast it to a whole number of Rupees (integer) to display the rounded-down amount.
* **Input**: `amount = 154.50`
* **Output**:
  ```text
  Original: 154.5, Round down: 154
  ```
* **Hint**: Use explicit casting: `(int) amount`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double amount = 154.50;
        int wholeRupees = (int) amount;
        System.out.println("Original: " + amount + ", Round down: " + wholeRupees);
    }
}
```
</details>

### [ ] Problem 9.13: Price Swap [Easy] [Topic: Variables]
* **Learning Objective**: Swap two variable values.
* **Problem Statement**: Swap the prices of two food items (e.g., a plate of Biryani at `₹250.0` and a glass of Lassi at `₹80.0`) stored in variables `biryani` and `lassi`.
* **Input**: `biryani = 250.0`, `lassi = 80.0`
* **Output**:
  ```text
  Biryani: 80.0, Lassi: 250.0
  ```
* **Hint**: Store `biryani` inside `temp`, assign `biryani = lassi`, then assign `lassi = temp`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double biryani = 250.0;
        double lassi = 80.0;
        double temp = biryani;
        biryani = lassi;
        lassi = temp;
        System.out.println("Biryani: " + biryani + ", Lassi: " + lassi);
    }
}
```
</details>

### [ ] Problem 9.14: Int Limits [Medium] [Topic: Variables]
* **Learning Objective**: Inspect variables limits with Wrapper constants.
* **Problem Statement**: Print the minimum and maximum boundaries that a 32-bit signed Integer can hold in Java.
* **Input**: None
* **Output**:
  ```text
  Min: -2147483648, Max: 2147483647
  ```
* **Hint**: Retrieve limits from wrapper class properties: `Integer.MIN_VALUE` and `Integer.MAX_VALUE`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Min: " + Integer.MIN_VALUE + ", Max: " + Integer.MAX_VALUE);
    }
}
```
</details>

### [ ] Problem 9.15: Salary Parse Int [Medium] [Topic: Variables]
* **Learning Objective**: Parse String formats into primitives.
* **Problem Statement**: Convert a database text entry `"45000"` into a primitive integer salary to add a bonus of ₹5000, and output the total.
* **Input**: `salaryStr = "45000"`
* **Output**:
  ```text
  Total Salary: 50000
  ```
* **Hint**: Use `Integer.parseInt(salaryStr)` to parse the integer value from String.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String salaryStr = "45000";
        int salary = Integer.parseInt(salaryStr);
        int totalSalary = salary + 5000;
        System.out.println("Total Salary: " + totalSalary);
    }
}
```
</details>

### [ ] Problem 9.16: CGPA to Percentage [Easy] [Topic: Variables]
* **Learning Objective**: Perform double conversion expressions.
* **Problem Statement**: A student scores a CGPA of 8.5 in the CBSE examination. Convert this score to a percentage using the official formula: $Percentage = CGPA \times 9.5$.
* **Input**: `cgpa = 8.5`
* **Output**:
  ```text
  Percentage: 80.75%
  ```
* **Hint**: Store CGPA in a double variable and multiply by `9.5`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double cgpa = 8.5;
        double percentage = cgpa * 9.5;
        System.out.println("Percentage: " + percentage + "%");
    }
}
```
</details>

### [ ] Problem 9.17: Fuel Efficiency [Easy] [Topic: Variables]
* **Learning Objective**: Write basic division ratios.
* **Problem Statement**: A vehicle travels a distance of 450 km on 30 liters of petrol. Calculate and display the fuel mileage (efficiency) in km/liter.
* **Input**: `distance = 450.0`, `fuel = 30.0`
* **Output**:
  ```text
  Mileage: 15.0 km/l
  ```
* **Hint**: Divide total distance by total fuel consumed.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double distance = 450.0;
        double fuel = 30.0;
        double mileage = distance / fuel;
        System.out.println("Mileage: " + mileage + " km/l");
    }
}
```
</details>

### [ ] Problem 9.18: Triangle Area [Easy] [Topic: Variables]
* **Learning Objective**: Declare double variables and apply geometric equations.
* **Problem Statement**: Calculate the area of a triangular plot with base 12 meters and height 8 meters. Formula: $Area = 0.5 \times base \times height$.
* **Input**: `base = 12.0`, `height = 8.0`
* **Output**:
  ```text
  Area: 48.0 sq meters
  ```
* **Hint**: Declare base and height as double variables and multiply by `0.5`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double base = 12.0;
        double height = 8.0;
        double area = 0.5 * base * height;
        System.out.println("Area: " + area + " sq meters");
    }
}
```
</details>

### [ ] Problem 9.19: Byte Overflow Demonstration [Medium] [Topic: Variables]
* **Learning Objective**: Understand byte integer limits and overflow.
* **Problem Statement**: Declare a `byte` variable with value `127` (the maximum positive value of a signed 8-bit byte). Add 1 to it, and print the result to demonstrate arithmetic wrap-around.
* **Input**: None
* **Output**:
  ```text
  Result: -128
  ```
* **Hint**: Perform addition casting the sum back to a byte: `(byte)(b + 1)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        byte b = 127;
        b = (byte) (b + 1);
        System.out.println("Result: " + b);
    }
}
```
</details>

### [ ] Problem 9.20: Metric Distance Converter [Hard] [Topic: Variables]
* **Learning Objective**: Perform cross-type calculations and casting.
* **Problem Statement**: Convert a distance of 1500 meters to kilometers (double) and feet (integer, rounded down). Formula: $1\text{ meter} = 3.28084\text{ feet}$.
* **Input**: `meters = 1500.0`
* **Output**:
  ```text
  1.5 km, 4921 feet
  ```
* **Hint**: Divide meters by 1000 for km, and explicitly cast `(int)(meters * 3.28084)` for feet.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double meters = 1500.0;
        double km = meters / 1000.0;
        int feet = (int) (meters * 3.28084);
        System.out.println(km + " km, " + feet + " feet");
    }
}
```
</details>

---

## 3. If-Else

📌 **Topics**: Boolean expressions, logical operators (`&&`, `||`, `!`), and conditional branches.

### [ ] Problem 9.21: Check Signs [Easy] [Topic: If-Else]
* **Learning Objective**: Check positive / negative bounds with conditionals.
* **Problem Statement**: Check if a given temperature value (integer) is positive, negative, or zero.
* **Input**: `temp = -5`
* **Output**:
  ```text
  Negative
  ```
* **Hint**: Use `if (temp > 0)`, `else if (temp < 0)`, and `else`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int temp = -5;
        if (temp > 0) {
            System.out.println("Positive");
        } else if (temp < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
    }
}
```
</details>

### [ ] Problem 9.22: CBSE Pass Check [Easy] [Topic: If-Else]
* **Learning Objective**: Build logical validation conditionals.
* **Problem Statement**: Check if a student passes a CBSE Board Exam. The student passes if they score 33 or more in both theory and practical exams.
* **Input**: `theory = 40`, `practical = 30`
* **Output**:
  ```text
  Passed
  ```
* **Hint**: Use logical AND: `theory >= 33 && practical >= 33`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int theory = 40;
        int practical = 30;
        if (theory >= 33 && practical >= 33) {
            System.out.println("Passed");
        } else {
            System.out.println("Failed");
        }
    }
}
```
</details>

### [ ] Problem 9.23: Leap Year Print [Medium] [Topic: If-Else]
* **Learning Objective**: Formulate nested boolean divisibility conditions.
* **Problem Statement**: Determine if a year is a Leap Year. A year is leap if it is divisible by 4, but not by 100 unless it is also divisible by 400.
* **Input**: `year = 2024`
* **Output**:
  ```text
  Leap Year
  ```
* **Hint**: Condition: `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int year = 2024;
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println("Leap Year");
        } else {
            System.out.println("Not Leap Year");
        }
    }
}
```
</details>

### [ ] Problem 9.24: Voter ID Range Checker [Medium] [Topic: If-Else]
* **Learning Objective**: Compare range boundaries.
* **Problem Statement**: Print whether a citizen is "Minor" (age < 18), "Adult Voter" (18 <= age < 60), or "Senior Citizen" (age >= 60).
* **Input**: `age = 45`
* **Output**:
  ```text
  Adult Voter
  ```
* **Hint**: Use relational checking operators `age >= 18` and `age >= 60`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int age = 45;
        if (age < 18) {
            System.out.println("Minor");
        } else if (age >= 18 && age < 60) {
            System.out.println("Adult Voter");
        } else {
            System.out.println("Senior Citizen");
        }
    }
}
```
</details>

### [ ] Problem 9.25: Largest of Three [Hard] [Topic: If-Else]
* **Learning Objective**: Optimize comparison paths among multiple values.
* **Problem Statement**: Find the largest of three numbers using conditionals.
* **Input**: `a = 25`, `b = 40`, `c = 35`
* **Output**:
  ```text
  Largest: 40
  ```
* **Hint**: Check if `a >= b && a >= c`, if not check `b >= c`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int a = 25, b = 40, c = 35;
        if (a >= b && a >= c) {
            System.out.println("Largest: " + a);
        } else if (b >= a && b >= c) {
            System.out.println("Largest: " + b);
        } else {
            System.out.println("Largest: " + c);
        }
    }
}
```
</details>

### [ ] Problem 9.26: Shopping Discount [Easy] [Topic: If-Else]
* **Learning Objective**: Branch calculations using numeric values.
* **Problem Statement**: A store offers a 10% discount if the shopping bill exceeds ₹2000, otherwise no discount. Calculate the final bill for a ₹2500 purchase.
* **Input**: `bill = 2500.0`
* **Output**:
  ```text
  Final Bill: ₹2250.0
  ```
* **Hint**: Use `if (bill > 2000)` and multiply the bill by `0.9` for a 10% discount.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double bill = 2500.0;
        if (bill > 2000.0) {
            bill = bill * 0.9;
        }
        System.out.println("Final Bill: ₹" + bill);
    }
}
```
</details>

### [ ] Problem 9.27: Odd Even Checker [Easy] [Topic: If-Else]
* **Learning Objective**: Perform parity division checking.
* **Problem Statement**: Check if the number of passengers registered in a bus ticket (e.g. 43) is even or odd.
* **Input**: `passengers = 43`
* **Output**:
  ```text
  Odd
  ```
* **Hint**: Use the modulo operator: `passengers % 2 == 0` for even, else odd.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int passengers = 43;
        if (passengers % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}
```
</details>

### [ ] Problem 9.28: Indian Income Tax Slab [Medium] [Topic: If-Else]
* **Learning Objective**: Express sequential bracket slab calculations.
* **Problem Statement**: Calculate the income tax for an annual income of ₹6,00,000 based on simplified tax slabs:
  - Up to ₹3,00,000: Nil (0%)
  - ₹3,00,001 to ₹6,00,000: 5% on the amount exceeding ₹3,00,000.
* **Input**: `income = 600000.0`
* **Output**:
  ```text
  Tax: ₹15000.0
  ```
* **Hint**: Deduct 300,000 from income and multiply the remainder by `0.05`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double income = 600000.0;
        double tax = 0.0;
        if (income > 300000.0) {
            tax = (income - 300000.0) * 0.05;
        }
        System.out.println("Tax: ₹" + tax);
    }
}
```
</details>

### [ ] Problem 9.29: Triangle Side Type [Medium] [Topic: If-Else]
* **Learning Objective**: Apply multi-variable logical checks.
* **Problem Statement**: Given three sides of a triangle (a=5, b=5, c=8), determine if the triangle is "Equilateral" (all sides equal), "Isosceles" (two sides equal), or "Scalene" (all sides different).
* **Input**: `a = 5`, `b = 5`, `c = 8`
* **Output**:
  ```text
  Isosceles
  ```
* **Hint**: Use equality operators: `a == b && b == c` for equilateral, `a == b || b == c || a == c` for isosceles, else scalene.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int a = 5, b = 5, c = 8;
        if (a == b && b == c) {
            System.out.println("Equilateral");
        } else if (a == b || b == c || a == c) {
            System.out.println("Isosceles");
        } else {
            System.out.println("Scalene");
        }
    }
}
```
</details>

### [ ] Problem 9.30: Progressive Electricity Bill [Hard] [Topic: If-Else]
* **Learning Objective**: Code progressive conditional pricing tiers.
* **Problem Statement**: Calculate the electricity bill for a household consuming 250 units based on progressive tariffs:
  - First 100 units: ₹4 per unit
  - Next 100 units (101-200): ₹6 per unit
  - Remaining units (above 200): ₹8 per unit
* **Input**: `units = 250`
* **Output**:
  ```text
  Total Bill: ₹1400.0
  ```
* **Hint**: Calculate tier by tier. First 100 units contribute `100 * 4`, next 100 units contribute `100 * 6`, and the remaining `50` units contribute `50 * 8`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int units = 250;
        double bill = 0;
        if (units <= 100) {
            bill = units * 4.0;
        } else if (units <= 200) {
            bill = (100 * 4.0) + ((units - 100) * 6.0);
        } else {
            bill = (100 * 4.0) + (100 * 6.0) + ((units - 200) * 8.0);
        }
        System.out.println("Total Bill: ₹" + bill);
    }
}
```
</details>

---

## 4. Switch Statement

📌 **Topics**: Multi-way branching, `switch-case` syntax, drop-through behavior, and default handlers.

### [ ] Problem 9.31: CBSE Grade Point Map [Easy] [Topic: Switch]
* **Learning Objective**: Map single char values to outputs.
* **Problem Statement**: Map CBSE grade letters ('A', 'B', 'C', 'F') to grade points (10, 8, 6, 0 respectively) using a switch statement.
* **Input**: `grade = 'B'`
* **Output**:
  ```text
  Grade Point: 8
  ```
* **Hint**: Implement a switch statement on the grade character, defining cases for 'A', 'B', 'C', and 'F'.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        char grade = 'B';
        int points = 0;
        switch (grade) {
            case 'A': points = 10; break;
            case 'B': points = 8; break;
            case 'C': points = 6; break;
            case 'F': points = 0; break;
            default: points = -1;
        }
        System.out.println("Grade Point: " + points);
    }
}
```
</details>

### [ ] Problem 9.32: Traffic Colors [Easy] [Topic: Switch]
* **Learning Objective**: Map strings to simple signals.
* **Problem Statement**: Given a traffic signal color string ("RED", "YELLOW", "GREEN"), print the corresponding action ("STOP", "SLOW", "GO").
* **Input**: `color = "YELLOW"`
* **Output**:
  ```text
  Action: SLOW
  ```
* **Hint**: Switch on the string variable `color.toUpperCase()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String color = "YELLOW";
        String action = "";
        switch (color.toUpperCase()) {
            case "RED": action = "STOP"; break;
            case "YELLOW": action = "SLOW"; break;
            case "GREEN": action = "GO"; break;
            default: action = "UNKNOWN";
        }
        System.out.println("Action: " + action);
    }
}
```
</details>

### [ ] Problem 9.33: Month Mapping [Medium] [Topic: Switch]
* **Learning Objective**: Handle multi-case matching paths.
* **Problem Statement**: Given a month number (1 to 12), print the number of days in that month (assume non-leap year).
* **Input**: `month = 2`
* **Output**:
  ```text
  Days: 28
  ```
* **Hint**: Group cases for 31-day months (1, 3, 5, 7, 8, 10, 12) and 30-day months (4, 6, 9, 11).
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int month = 2;
        int days = 0;
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                days = 31;
                break;
            case 4: case 6: case 9: case 11:
                days = 30;
                break;
            case 2:
                days = 28;
                break;
            default:
                days = -1;
        }
        System.out.println("Days: " + days);
    }
}
```
</details>

### [ ] Problem 9.34: Vowel or Consonant [Medium] [Topic: Switch]
* **Learning Objective**: Group characters with fall-through logic.
* **Problem Statement**: Write a program that checks if a lowercase character is a vowel ('a', 'e', 'i', 'o', 'u') or a consonant.
* **Input**: `ch = 'e'`
* **Output**:
  ```text
  Vowel
  ```
* **Hint**: List vowel cases sequentially to fall through to a single assignment, and use `default` for consonants.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        char ch = 'e';
        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                System.out.println("Vowel");
                break;
            default:
                System.out.println("Consonant");
        }
    }
}
```
</details>

### [ ] Problem 9.35: Simple Calculator Switch [Hard] [Topic: Switch]
* **Learning Objective**: Route mathematical operations dynamically.
* **Problem Statement**: Implement a basic arithmetic calculator that performs addition, subtraction, multiplication, or division based on an operator character ('+', '-', '*', '/').
* **Input**: `a = 12`, `b = 4`, `op = '/'`
* **Output**:
  ```text
  Result: 3.0
  ```
* **Hint**: Switch on `op` and return `a / (double)b` to preserve fractional values.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int a = 12;
        int b = 4;
        char op = '/';
        double result = 0.0;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = (double) a / b; break;
            default: System.out.println("Error: Invalid Operator"); return;
        }
        System.out.println("Result: " + result);
    }
}
```
</details>

### [ ] Problem 9.36: Weekday Name [Easy] [Topic: Switch]
* **Learning Objective**: Map integers to strings.
* **Problem Statement**: Map a day number (1 to 7) to its corresponding weekday name (1 = Monday, 2 = Tuesday, ..., 7 = Sunday).
* **Input**: `day = 3`
* **Output**:
  ```text
  Day: Wednesday
  ```
* **Hint**: Define case 1 to 7 and print the string value.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int day = 3;
        switch (day) {
            case 1: System.out.println("Day: Monday"); break;
            case 2: System.out.println("Day: Tuesday"); break;
            case 3: System.out.println("Day: Wednesday"); break;
            case 4: System.out.println("Day: Thursday"); break;
            case 5: System.out.println("Day: Friday"); break;
            case 6: System.out.println("Day: Saturday"); break;
            case 7: System.out.println("Day: Sunday"); break;
            default: System.out.println("Day: Invalid");
        }
    }
}
```
</details>

### [ ] Problem 9.37: Pizza Size Price [Easy] [Topic: Switch]
* **Learning Objective**: Map characters to integer prices.
* **Problem Statement**: A pizzeria charges differently based on size: 'S' = ₹150, 'M' = ₹250, 'L' = ₹350. Write a program using a switch statement to output the price.
* **Input**: `size = 'M'`
* **Output**:
  ```text
  Price: ₹250
  ```
* **Hint**: Define cases for characters 'S', 'M', and 'L'.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        char size = 'M';
        int price = 0;
        switch (size) {
            case 'S': price = 150; break;
            case 'M': price = 250; break;
            case 'L': price = 350; break;
            default: price = 0;
        }
        System.out.println("Price: ₹" + price);
    }
}
```
</details>

### [ ] Problem 9.38: ISP Plan Benefits [Medium] [Topic: Switch]
* **Learning Objective**: Print multiple attributes based on string key matching.
* **Problem Statement**: An internet service provider offers three plans: "Basic" (100 Mbps, ₹499), "Pro" (200 Mbps, ₹799), and "Premium" (500 Mbps, ₹1499). Print the details of the "Pro" plan.
* **Input**: `plan = "Pro"`
* **Output**:
  ```text
  Speed: 200 Mbps, Cost: ₹799
  ```
* **Hint**: Switch on the string plan name, using `.toLowerCase()` for safety.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String plan = "Pro";
        switch (plan.toLowerCase()) {
            case "basic":
                System.out.println("Speed: 100 Mbps, Cost: ₹499");
                break;
            case "pro":
                System.out.println("Speed: 200 Mbps, Cost: ₹799");
                break;
            case "premium":
                System.out.println("Speed: 500 Mbps, Cost: ₹1499");
                break;
            default:
                System.out.println("Plan not found");
        }
    }
}
```
</details>

### [ ] Problem 9.39: Indian Currency Notes Count [Medium] [Topic: Switch]
* **Learning Objective**: Express math calculations with switch branches.
* **Problem Statement**: For a total amount of ₹800, calculate the minimum number of ₹500 and ₹100 notes needed.
* **Input**: `amount = 800`
* **Output**:
  ```text
  500 Notes: 1, 100 Notes: 3
  ```
* **Hint**: Divide amount by 500 first to get 500s count, then calculate the remainder and divide by 100.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int amount = 800;
        int notes500 = amount / 500;
        int remainder = amount % 500;
        int notes100 = remainder / 100;
        System.out.println("500 Notes: " + notes500 + ", 100 Notes: " + notes100);
    }
}
```
</details>

### [ ] Problem 9.40: Nested Menu Ordering [Hard] [Topic: Switch]
* **Learning Objective**: Build nested switch logic branches.
* **Problem Statement**: Create a South Indian menu: 1 = Idli (₹50), 2 = Dosa (₹80). If Dosa is chosen, ask for subtype: 1 = Masala Dosa (+₹20), 2 = Plain Dosa (+₹0). Print the total cost.
* **Input**: `menuChoice = 2`, `dosaChoice = 1`
* **Output**:
  ```text
  Total: ₹100
  ```
* **Hint**: Use a nested switch statement for `dosaChoice` inside case 2 of the outer switch.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int menuChoice = 2;
        int dosaChoice = 1;
        int total = 0;
        switch (menuChoice) {
            case 1:
                total = 50;
                break;
            case 2:
                total = 80;
                switch (dosaChoice) {
                    case 1: total += 20; break;
                    case 2: total += 0; break;
                }
                break;
        }
        System.out.println("Total: ₹" + total);
    }
}
```
</details>

---

## 5. All Loops

📌 **Topics**: Loop constructs (`for`, `while`, `do-while`), loop controls (`break`, `continue`), and nested iterations.

### [ ] Problem 9.41: Loop Count [Easy] [Topic: Loops]
* **Learning Objective**: Iterate basic increments in a loop.
* **Problem Statement**: Print numbers from 1 to 5 on a single line separated by spaces using a `for` loop.
* **Input**: None
* **Output**:
  ```text
  1 2 3 4 5
  ```
* **Hint**: Use `for(int i = 1; i <= 5; i++)` and `System.out.print(i + " ")`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```
</details>

### [ ] Problem 9.42: Do While Count [Easy] [Topic: Loops]
* **Learning Objective**: Execute a loop block at least once.
* **Problem Statement**: Print numbers from 5 down to 1 using a `do-while` loop.
* **Input**: None
* **Output**:
  ```text
  5 4 3 2 1
  ```
* **Hint**: Initialize `int count = 5`, decrement it inside the loop, and verify condition `while(count >= 1)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int count = 5;
        do {
            System.out.print(count + " ");
            count--;
        } while (count >= 1);
        System.out.println();
    }
}
```
</details>

### [ ] Problem 9.43: Factorial While [Easy] [Topic: Loops]
* **Learning Objective**: Multiply terms iteratively.
* **Problem Statement**: Calculate the factorial of 5 using a `while` loop.
* **Input**: `n = 5`
* **Output**:
  ```text
  Factorial: 120
  ```
* **Hint**: Initialize `factorial = 1` and loop while `n > 0` multiplying `factorial *= n`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 5;
        int factorial = 1;
        while (n > 0) {
            factorial *= n;
            n--;
        }
        System.out.println("Factorial: " + factorial);
    }
}
```
</details>

### [ ] Problem 9.44: Even Loop Filter [Medium] [Topic: Loops]
* **Learning Objective**: Filter elements selectively during iteration.
* **Problem Statement**: Print all even numbers between 1 and 10, skipping odd numbers using the `continue` keyword.
* **Input**: None
* **Output**:
  ```text
  2 4 6 8 10
  ```
* **Hint**: Loop from 1 to 10. If `i % 2 != 0`, call `continue` to skip.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i % 2 != 0) {
                continue;
            }
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```
</details>

### [ ] Problem 9.45: Digit Adder Loop [Hard] [Topic: Loops]
* **Learning Objective**: Extract and accumulate digits mathematically.
* **Problem Statement**: Find the sum of all digits of a number (e.g., `5432`) using a while loop.
* **Input**: `number = 5432`
* **Output**:
  ```text
  Sum of digits: 14
  ```
* **Hint**: Repeatedly extract the last digit with `number % 10` and strip it with `number / 10`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int number = 5432;
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = number / 10;
        }
        System.out.println("Sum of digits: " + sum);
    }
}
```
</details>

### [ ] Problem 9.46: Multiplication Table [Easy] [Topic: Loops]
* **Learning Objective**: Format tabular results using iterations.
* **Problem Statement**: Print the multiplication table of 7 up to 10 on separate lines.
* **Input**: `num = 7`
* **Output**:
  ```text
  7 x 1 = 7
  7 x 2 = 14
  ...
  7 x 10 = 70
  ```
* **Hint**: Loop from `1` to `10` and print `num + " x " + i + " = " + (num * i)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int num = 7;
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
}
```
</details>

### [ ] Problem 9.47: Natural Numbers Sum [Easy] [Topic: Loops]
* **Learning Objective**: Accumulate sum values sequentially.
* **Problem Statement**: Calculate the sum of the first 15 natural numbers (1 to 15) using a `for` loop.
* **Input**: `limit = 15`
* **Output**:
  ```text
  Sum: 120
  ```
* **Hint**: Initialize `int sum = 0` and iterate `sum += i` from 1 to 15.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 15; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }
}
```
</details>

### [ ] Problem 9.48: Fibonacci Series [Medium] [Topic: Loops]
* **Learning Objective**: Track state updates across iterations.
* **Problem Statement**: Print the first 8 numbers of the Fibonacci series starting from 0, 1.
* **Input**: `count = 8`
* **Output**:
  ```text
  0 1 1 2 3 5 8 13
  ```
* **Hint**: Track variables `t1 = 0` and `t2 = 1`. In each loop, print `t1`, compute `sum = t1 + t2`, assign `t1 = t2`, and `t2 = sum`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int count = 8;
        int t1 = 0, t2 = 1;
        for (int i = 1; i <= count; ++i) {
            System.out.print(t1 + " ");
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
        System.out.println();
    }
}
```
</details>

### [ ] Problem 9.49: Prime Number Checker [Medium] [Topic: Loops]
* **Learning Objective**: Determine primality via loop constraints.
* **Problem Statement**: Check if the number 29 is prime or not.
* **Input**: `num = 29`
* **Output**:
  ```text
  Prime
  ```
* **Hint**: Loop from 2 to $\sqrt{num}$ and check if `num % i == 0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int num = 29;
        boolean isPrime = true;
        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println("Prime");
        } else {
            System.out.println("Not Prime");
        }
    }
}
```
</details>

### [ ] Problem 9.50: Star Pyramid [Hard] [Topic: Loops]
* **Learning Objective**: Create nested loop output formatting.
* **Problem Statement**: Print a centered 4-level star pyramid.
* **Input**: `rows = 4`
* **Output**:
  ```text
     *
    ***
   *****
  *******
  ```
* **Hint**: Use outer loop for rows, first inner loop for spaces `rows - i`, and second inner loop for stars `2 * i - 1`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int rows = 4;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```
</details>

---

## 6. Strings

📌 **Topics**: String class methods (`charAt`, `substring`, `indexOf`, `split`), immutability, and `StringBuilder`.

### [ ] Problem 9.51: Vowel Counter [Easy] [Topic: Strings]
* **Learning Objective**: Scan and analyze characters in strings.
* **Problem Statement**: Count how many vowels ('a', 'e', 'i', 'o', 'u') are present in a String "PayWize".
* **Input**: `text = "PayWize"`
* **Output**:
  ```text
  Vowels: 2
  ```
* **Hint**: Loop through characters using `text.toLowerCase().charAt(i)` and compare against vowels.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String text = "PayWize";
        int count = 0;
        String clean = text.toLowerCase();
        for (int i = 0; i < clean.length(); i++) {
            char ch = clean.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        System.out.println("Vowels: " + count);
    }
}
```
</details>

### [ ] Problem 9.52: String Reverse Base [Easy] [Topic: Strings]
* **Learning Objective**: Reconstruct string values backwards.
* **Problem Statement**: Reverse a given String "Java" and print the result.
* **Input**: `str = "Java"`
* **Output**:
  ```text
  Reverse: avaJ
  ```
* **Hint**: Loop backwards from `str.length() - 1` down to 0, appending each character to a new string.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "Java";
        String rev = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }
        System.out.println("Reverse: " + rev);
    }
}
```
</details>

### [ ] Problem 9.53: Index Finder [Easy] [Topic: Strings]
* **Learning Objective**: Search character index positions.
* **Problem Statement**: Find the first index position of character 'S' in String "ChaiSamosa".
* **Input**: `str = "ChaiSamosa"`
* **Output**:
  ```text
  Index of 'S': 4
  ```
* **Hint**: Use `str.indexOf('S')`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "ChaiSamosa";
        int index = str.indexOf('S');
        System.out.println("Index of 'S': " + index);
    }
}
```
</details>

### [ ] Problem 9.54: Char Repacer [Medium] [Topic: Strings]
* **Learning Objective**: Replace character values.
* **Problem Statement**: Replace all occurrences of space characters with underscores in String "Software Testing Guide".
* **Input**: `str = "Software Testing Guide"`
* **Output**:
  ```text
  Result: Software_Testing_Guide
  ```
* **Hint**: Use `str.replace(' ', '_')`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "Software Testing Guide";
        String replaced = str.replace(' ', '_');
        System.out.println("Result: " + replaced);
    }
}
```
</details>

### [ ] Problem 9.55: Vehicle State Code Substring [Medium] [Topic: Strings]
* **Learning Objective**: Extract specific string slices.
* **Problem Statement**: Extract the first 2 characters representing the State Code (e.g. "DL" for Delhi) from a vehicle registration string "DL-3C-DL-1234".
* **Input**: `regNo = "DL-3C-DL-1234"`
* **Output**:
  ```text
  State Code: DL
  ```
* **Hint**: Use `regNo.substring(0, 2)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String regNo = "DL-3C-DL-1234";
        String stateCode = regNo.substring(0, 2);
        System.out.println("State Code: " + stateCode);
    }
}
```
</details>

### [ ] Problem 9.56: String Length Manual [Easy] [Topic: Strings]
* **Learning Objective**: Re-express string methods manually.
* **Problem Statement**: Find the character length of "Bengaluru" without using `str.length()`.
* **Input**: `str = "Bengaluru"`
* **Output**:
  ```text
  Length: 9
  ```
* **Hint**: Convert the string to a char array using `str.toCharArray()` and count elements.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "Bengaluru";
        int len = 0;
        for (char c : str.toCharArray()) {
            len++;
        }
        System.out.println("Length: " + len);
    }
}
```
</details>

### [ ] Problem 9.57: Palindrome Check [Easy] [Topic: Strings]
* **Learning Objective**: Compare characters symmetrically.
* **Problem Statement**: Check if the word "Madam" is a palindrome (reads same forward and backward), ignoring letter casing.
* **Input**: `word = "Madam"`
* **Output**:
  ```text
  Palindrome
  ```
* **Hint**: Convert string to lowercase, compare characters from start and end moving inwards.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String word = "Madam";
        String clean = word.toLowerCase();
        boolean isPalindrome = true;
        int len = clean.length();
        for (int i = 0; i < len / 2; i++) {
            if (clean.charAt(i) != clean.charAt(len - 1 - i)) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not Palindrome");
        }
    }
}
```
</details>

### [ ] Problem 9.58: Lowercase Converter [Easy] [Topic: Strings]
* **Learning Objective**: Transform character casing.
* **Problem Statement**: Convert a uppercase sentence "INDIAN RAILWAYS" to lowercase.
* **Input**: `str = "INDIAN RAILWAYS"`
* **Output**:
  ```text
  Result: indian railways
  ```
* **Hint**: Use `str.toLowerCase()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "INDIAN RAILWAYS";
        System.out.println("Result: " + str.toLowerCase());
    }
}
```
</details>

### [ ] Problem 9.59: Word Counter Sentence [Medium] [Topic: Strings]
* **Learning Objective**: Split strings on patterns.
* **Problem Statement**: Count the total number of words in the sentence: "Java is a popular programming language in India".
* **Input**: `sentence = "Java is a popular programming language in India"`
* **Output**:
  ```text
  Words count: 8
  ```
* **Hint**: Split the string using `sentence.split(" ")` and print the resulting array length.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String sentence = "Java is a popular programming language in India";
        String[] words = sentence.split(" ");
        System.out.println("Words count: " + words.length);
    }
}
```
</details>

### [ ] Problem 9.60: Anagram Check [Hard] [Topic: Strings]
* **Learning Objective**: Sort and compare string characters.
* **Problem Statement**: Determine if two strings "listen" and "silent" are anagrams of each other (contain the exact same characters in different order).
* **Input**: `s1 = "listen"`, `s2 = "silent"`
* **Output**:
  ```text
  Anagrams
  ```
* **Hint**: Convert both strings to char arrays, sort them using `java.util.Arrays.sort()`, and check if they are equal.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";
        char[] c1 = s1.toCharArray();
        char[] c2 = s2.toCharArray();
        Arrays.sort(c1);
        Arrays.sort(c2);
        if (Arrays.equals(c1, c2)) {
            System.out.println("Anagrams");
        } else {
            System.out.println("Not Anagrams");
        }
    }
}
```
</details>

---

## 7. Methods

📌 **Topics**: Method definitions, parameters and return values, overloading, and recursion.

### [ ] Problem 9.61: Add Method [Easy] [Topic: Methods]
* **Learning Objective**: Define basic functions returning integer sums.
* **Problem Statement**: Write a method `add(int a, int b)` that returns the sum of two integers.
* **Input**: `a = 15`, `b = 20`
* **Output**:
  ```text
  Sum: 35
  ```
* **Hint**: Implement method `public static int add(int a, int b) { return a + b; }`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int result = add(15, 20);
        System.out.println("Sum: " + result);
    }
}
```
</details>

### [ ] Problem 9.62: Odd Check Method [Easy] [Topic: Methods]
* **Learning Objective**: Return boolean values from methods.
* **Problem Statement**: Define a boolean method `isOdd(int num)` that returns `true` if a number is odd, and `false` otherwise.
* **Input**: `num = 17`
* **Output**:
  ```text
  Is 17 odd? true
  ```
* **Hint**: The method should check `num % 2 != 0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean isOdd(int num) {
        return num % 2 != 0;
    }
    
    public static void main(String[] args) {
        int val = 17;
        System.out.println("Is " + val + " odd? " + isOdd(val));
    }
}
```
</details>

### [ ] Problem 9.63: Pass Object Reference [Medium] [Topic: Methods]
* **Learning Objective**: Observe mutable object reference parameters.
* **Problem Statement**: Create a method `updatePrice(Biryani b)` that modifies the price of a Biryani object to ₹300, showing references are passed by value in Java.
* **Input**: `initial price = 250`
* **Output**:
  ```text
  Updated Price: 300
  ```
* **Hint**: Modify the instance property inside the method: `b.price = 300`.
<details>
<summary>View Solution</summary>

```java
class Biryani {
    int price = 250;
}

public class Main {
    public static void updatePrice(Biryani b) {
        b.price = 300;
    }
    
    public static void main(String[] args) {
        Biryani myBiryani = new Biryani();
        updatePrice(myBiryani);
        System.out.println("Updated Price: " + myBiryani.price);
    }
}
```
</details>

### [ ] Problem 9.64: Recursive Range Sum [Medium] [Topic: Methods]
* **Learning Objective**: Formulate recursive base and recursive cases.
* **Problem Statement**: Write a recursive method `sum(int n)` that returns the sum of numbers from 1 to `n`.
* **Input**: `n = 5`
* **Output**:
  ```text
  Recursive Sum: 15
  ```
* **Hint**: Base case `n == 1` returns 1, otherwise return `n + sum(n - 1)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int sum(int n) {
        if (n == 1) {
            return 1;
        }
        return n + sum(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println("Recursive Sum: " + sum(5));
    }
}
```
</details>

### [ ] Problem 9.65: Method Overloading Area [Hard] [Topic: Methods]
* **Learning Objective**: Resolve method calls by parameter signature matching.
* **Problem Statement**: Define overloaded methods `area(double side)` for a square area, and `area(double l, double w)` for a rectangle area.
* **Input**: `side = 5.0`, `l = 6.0`, `w = 4.0`
* **Output**:
  ```text
  Square: 25.0, Rectangle: 24.0
  ```
* **Hint**: Define both methods with same name `area` but differing arguments count.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static double area(double side) {
        return side * side;
    }
    
    public static double area(double l, double w) {
        return l * w;
    }
    
    public static void main(String[] args) {
        System.out.println("Square: " + area(5.0) + ", Rectangle: " + area(6.0, 4.0));
    }
}
```
</details>

### [ ] Problem 9.66: Max of Two Method [Easy] [Topic: Methods]
* **Learning Objective**: Return relative comparison results.
* **Problem Statement**: Define a method `getMax(int a, int b)` that returns the larger value.
* **Input**: `a = 15`, `b = 25`
* **Output**:
  ```text
  Max: 25
  ```
* **Hint**: Return `a > b ? a : b`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int getMax(int a, int b) {
        return a > b ? a : b;
    }
    
    public static void main(String[] args) {
        System.out.println("Max: " + getMax(15, 25));
    }
}
```
</details>

### [ ] Problem 9.67: Celsius to Kelvin Method [Easy] [Topic: Methods]
* **Learning Objective**: Define double conversion methods.
* **Problem Statement**: Write a method `toKelvin(double celsius)` which converts Celsius to Kelvin. Formula: $K = C + 273.15$.
* **Input**: `celsius = 25.0`
* **Output**:
  ```text
  Kelvin: 298.15
  ```
* **Hint**: Add `273.15` to the celsius parameter and return the result.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static double toKelvin(double celsius) {
        return celsius + 273.15;
    }
    
    public static void main(String[] args) {
        System.out.println("Kelvin: " + toKelvin(25.0));
    }
}
```
</details>

### [ ] Problem 9.68: Calculate Simple Interest Method [Medium] [Topic: Methods]
* **Learning Objective**: Design default-argument overloads in Java.
* **Problem Statement**: Write overloaded methods to calculate simple interest. One with parameters `calculateSI(double p, double r, int t)` and one with `calculateSI(double p, int t)` which defaults rate `r` to 6.5%.
* **Input**: `p = 10000.0`, `t = 3`
* **Output**:
  ```text
  Interest: ₹1950.0
  ```
* **Hint**: Define one method with three parameters and call it from the two-parameter method passing `6.5` as the default rate.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static double calculateSI(double p, double r, int t) {
        return (p * r * t) / 100.0;
    }
    
    public static double calculateSI(double p, int t) {
        return calculateSI(p, 6.5, t);
    }
    
    public static void main(String[] args) {
        double interest = calculateSI(10000.0, 3);
        System.out.println("Interest: ₹" + interest);
    }
}
```
</details>

### [ ] Problem 9.69: Array Average Method [Medium] [Topic: Methods]
* **Learning Objective**: Pass array parameters to methods.
* **Problem Statement**: Write a method `getAverage(int[] arr)` that returns the double average of an integer array.
* **Input**: `arr = {10, 20, 30, 40, 50}`
* **Output**:
  ```text
  Average: 30.0
  ```
* **Hint**: Accumulate all values in the array using a loop and divide the sum by `(double) arr.length`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static double getAverage(int[] arr) {
        int sum = 0;
        for (int val : arr) {
            sum += val;
        }
        return (double) sum / arr.length;
    }
    
    public static void main(String[] args) {
        int[] data = {10, 20, 30, 40, 50};
        System.out.println("Average: " + getAverage(data));
    }
}
```
</details>

### [ ] Problem 9.70: Recursive GCD Method [Hard] [Topic: Methods]
* **Learning Objective**: Formulate Euclid's remainder algorithm recursively.
* **Problem Statement**: Write a recursive method `gcd(int a, int b)` to find the Greatest Common Divisor of two integers using Euclid's algorithm.
* **Input**: `a = 48`, `b = 18`
* **Output**:
  ```text
  GCD: 6
  ```
* **Hint**: Base case `b == 0` returns `a`, otherwise recursive step is `gcd(b, a % b)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    
    public static void main(String[] args) {
        System.out.println("GCD: " + gcd(48, 18));
    }
}
```
</details>

---

## 8. All OOP Concepts

📌 **Topics**: Classes and objects, constructors, encapsulation, inheritance, polymorphism, abstract classes, and interfaces.

### [ ] Problem 9.71: Car Class [Easy] [Topic: OOP]
* **Learning Objective**: Declare simple classes with methods.
* **Problem Statement**: Create a class `Car` with fields `brand` and `price`. Implement a method `showDetails()` that prints them.
* **Input**: `brand = "Tata"`, `price = 600000`
* **Output**:
  ```text
  Tata charges ₹600000
  ```
* **Hint**: Declare fields, a parameterized constructor, and print values in `showDetails()`.
<details>
<summary>View Solution</summary>

```java
class Car {
    String brand;
    int price;
    
    Car(String brand, int price) {
        this.brand = brand;
        this.price = price;
    }
    
    void showDetails() {
        System.out.println(brand + " charges ₹" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car("Tata", 600000);
        c.showDetails();
    }
}
```
</details>

### [ ] Problem 9.72: Private Fields [Easy] [Topic: OOP]
* **Learning Objective**: Implement encapsulation with getter/setter fields.
* **Problem Statement**: Encapsulate a `Student` class. Make the `rollNo` field private, and provide public getter and setter methods to access it.
* **Input**: `rollNo = 101`
* **Output**:
  ```text
  Roll No: 101
  ```
* **Hint**: Declare `private int rollNo;` and write `getRollNo()` and `setRollNo(int r)`.
<details>
<summary>View Solution</summary>

```java
class Student {
    private int rollNo;
    
    public int getRollNo() {
        return rollNo;
    }
    
    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setRollNo(101);
        System.out.println("Roll No: " + s.getRollNo());
    }
}
```
</details>

### [ ] Problem 9.73: Inheritance Sound [Easy] [Topic: OOP]
* **Learning Objective**: Share methods through parent-child inheritance.
* **Problem Statement**: Demonstrate inheritance by creating a parent class `Animal` with method `eat()`, and a child class `Dog` that inherits `Animal`.
* **Input**: None
* **Output**:
  ```text
  Eating...
  ```
* **Hint**: Use the `extends` keyword: `class Dog extends Animal`.
<details>
<summary>View Solution</summary>

```java
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
    }
}
```
</details>

### [ ] Problem 9.74: Overload Add Method [Easy] [Topic: OOP]
* **Learning Objective**: Compile-time polymorphism overloading.
* **Problem Statement**: Implement a `MathUtility` class that overloads the `add` method to sum either two integers or three integers.
* **Input**: `add(10, 20)` and `add(5, 10, 15)`
* **Output**:
  ```text
  30
  30
  ```
* **Hint**: Provide two declarations of the `add` method with different counts of integer parameters.
<details>
<summary>View Solution</summary>

```java
class MathUtility {
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtility utils = new MathUtility();
        System.out.println(utils.add(10, 20));
        System.out.println(utils.add(5, 10, 15));
    }
}
```
</details>

### [ ] Problem 9.75: Abstract Shape Draw [Medium] [Topic: OOP]
* **Learning Objective**: Define template methods in abstract parent classes.
* **Problem Statement**: Create an abstract class `Shape` with an abstract method `draw()`. Derive a child class `Circle` that implements `draw()`.
* **Input**: None
* **Output**:
  ```text
  Drawing Circle
  ```
* **Hint**: Mark the class and method as `abstract` and override `draw()` in the concrete child class.
<details>
<summary>View Solution</summary>

```java
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw();
    }
}
```
</details>

### [ ] Problem 9.76: Interface Runnable [Medium] [Topic: OOP]
* **Learning Objective**: Establish behavioral contracts using interfaces.
* **Problem Statement**: Define an interface `Engine` with method `start()`. Implement it in a class `Truck` to print `"Engine started"`.
* **Input**: None
* **Output**:
  ```text
  Engine started
  ```
* **Hint**: Use the `implements` keyword: `class Truck implements Engine`.
<details>
<summary>View Solution</summary>

```java
interface Engine {
    void start();
}

class Truck implements Engine {
    public void start() {
        System.out.println("Engine started");
    }
}

public class Main {
    public static void main(String[] args) {
        Engine e = new Truck();
        e.start();
    }
}
```
</details>

### [ ] Problem 9.77: Polymorphic Vehicles [Hard] [Topic: OOP]
* **Learning Objective**: Execute runtime method override polymorphism.
* **Problem Statement**: Create a parent class `Vehicle` with method `run()`. Create a child class `Bike` that overrides `run()`. Call `run()` using a parent class reference pointing to the child.
* **Input**: None
* **Output**:
  ```text
  Bike is running safely
  ```
* **Hint**: Dynamic method dispatch executes the overridden method of the child class.
<details>
<summary>View Solution</summary>

```java
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Bike extends Vehicle {
    void run() {
        System.out.println("Bike is running safely");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Bike(); // Parent reference pointing to child object
        v.run();
    }
}
```
</details>

### [ ] Problem 9.78: Super Constructor Chain [Hard] [Topic: OOP]
* **Learning Objective**: Invoke parent constructors using the `super` keyword.
* **Problem Statement**: Call the constructor of parent class `Device` passing a `brand` string from the child class `SmartPhone` constructor.
* **Input**: `brand = "Samsung"`
* **Output**:
  ```text
  Device Brand: Samsung
  ```
* **Hint**: The first line of the child constructor must call `super(brand)`.
<details>
<summary>View Solution</summary>

```java
class Device {
    String brand;
    
    Device(String brand) {
        this.brand = brand;
    }
}

class SmartPhone extends Device {
    SmartPhone(String brand) {
        super(brand); // Calling parent constructor
    }
    
    void showBrand() {
        System.out.println("Device Brand: " + brand);
    }
}

public class Main {
    public static void main(String[] args) {
        SmartPhone sp = new SmartPhone("Samsung");
        sp.showBrand();
    }
}
```
</details>

### [ ] Problem 9.79: Encapsulated Employee [Medium] [Topic: OOP]
* **Learning Objective**: Write custom setter validation checks.
* **Problem Statement**: Create an `Employee` class with private variables `name` and `salary`. Provide getter/setter methods. The salary setter must throw an `IllegalArgumentException` with the message `"Salary cannot be negative"` if a negative amount is passed.
* **Input**: `salary = -5000`
* **Output**:
  ```text
  Exception: Salary cannot be negative
  ```
* **Hint**: Write `if (salary < 0) throw new IllegalArgumentException("Salary cannot be negative");` in your setter method.
<details>
<summary>View Solution</summary>

```java
class Employee {
    private String name;
    private double salary;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public double getSalary() { return salary; }
    public void setSalary(double salary) {
        if (salary < 0) {
            throw new IllegalArgumentException("Salary cannot be negative");
        }
        this.salary = salary;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        try {
            emp.setSalary(-5000);
        } catch (IllegalArgumentException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
```
</details>

### [ ] Problem 9.80: Abstract Bank Account [Hard] [Topic: OOP]
* **Learning Objective**: Execute polymorphically dispatched dynamic calculations.
* **Problem Statement**: Create an abstract class `BankAccount` with abstract method `calculateInterest()`. Derive `SavingsAccount` (5% interest) and `CurrentAccount` (0% interest). Write a main method that uses dynamic method dispatch to print interest calculations on a balance of ₹10,000.
* **Input**: `balance = 10000.0`
* **Output**:
  ```text
  Savings Interest: ₹500.0
  Current Interest: ₹0.0
  ```
* **Hint**: Override the `calculateInterest()` method in both child classes to return either `balance * 0.05` or `0.0`.
<details>
<summary>View Solution</summary>

```java
abstract class BankAccount {
    double balance;
    BankAccount(double balance) { this.balance = balance; }
    abstract double calculateInterest();
}

class SavingsAccount extends BankAccount {
    SavingsAccount(double balance) { super(balance); }
    double calculateInterest() { return balance * 0.05; }
}

class CurrentAccount extends BankAccount {
    CurrentAccount(double balance) { super(balance); }
    double calculateInterest() { return 0.0; }
}

public class Main {
    public static void main(String[] args) {
        BankAccount a1 = new SavingsAccount(10000.0);
        BankAccount a2 = new CurrentAccount(10000.0);
        System.out.println("Savings Interest: ₹" + a1.calculateInterest());
        System.out.println("Current Interest: ₹" + a2.calculateInterest());
    }
}
```
</details>
