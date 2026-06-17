# The Java Mastery Challenge

A final diagnostic exam consisting of **60 mixed-concept problems** divided into four progressive tiers to validate your Java software development capabilities.

---

## Tier 1: Programming Fundamentals (15 Problems)

📌 **Topics**: Syntax, primitives, basic math equations, strings, and console input/output.

### [ ] Problem 7.1: Speed Calculator [Easy] [Topic: Fundamentals]
* **Learning Objective**: Perform floating-point calculations.
* **Problem Statement**: Given distance in kilometers and time in hours, calculate speed in meters per second.
* **Input**: `distance = 100.0`, `time = 2.0`
* **Output**: `13.88888888888889`
* **Hint**: $Speed = (distance \times 1000) / (time \times 3600)$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double distKm = 100.0;
        double timeHr = 2.0;
        double speedMps = (distKm * 1000.0) / (timeHr * 3600.0);
        System.out.println(speedMps);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 7.2: Simple Interest [Easy] [Topic: Fundamentals]
* **Learning Objective**: Calculate interest using simple algebraic formulas.
* **Problem Statement**: Calculate simple interest given Principal, Rate, and Time. Formula: $SI = (P \times R \times T) / 100$.
* **Input**: `P = 1000`, `R = 5`, `T = 2`
* **Output**: `100.0`
* **Hint**: Store parameters as double variables to prevent precision loss.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double p = 1000;
        double r = 5;
        double t = 2;
        System.out.println((p * r * t) / 100.0);
    }
}
```
</details>

### [ ] Problem 7.3: Celsius to Fahrenheit [Easy] [Topic: Fundamentals]
* **Learning Objective**: Convert temperatures using basic arithmetic formulas.
* **Problem Statement**: Convert Celsius temperature of 37 to Fahrenheit. Formula: $F = (C \times 9/5) + 32$.
* **Input**: `C = 37.0`
* **Output**: `98.6`
* **Hint**: Use `9.0 / 5.0` to ensure decimal division.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double c = 37.0;
        double f = (c * 9.0 / 5.0) + 32;
        System.out.println(f);
    }
}
```
</details>

### [ ] Problem 7.4: Char Shift [Easy] [Topic: Fundamentals]
* **Learning Objective**: Shift character values using integer arithmetic.
* **Problem Statement**: Shift char variable `'a'` forward by 3 places and print it.
* **Input**: `char = 'a'`
* **Output**: `'d'`
* **Hint**: Add 3 to character reference: `(char)('a' + 3)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        char ch = 'a';
        char shifted = (char) (ch + 3);
        System.out.println(shifted);
    }
}
```
</details>

### [ ] Problem 7.5: String Truncator [Easy] [Topic: Fundamentals]
* **Learning Objective**: Slice strings safely using length checks.
* **Problem Statement**: Truncate a string to a maximum length of 5. If shorter, return it unchanged.
* **Input**: `"JavaRoadmap"`
* **Output**: `"JavaR"`
* **Hint**: Use `Math.min(5, str.length())` to determine the substring bound.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "JavaRoadmap";
        String truncated = str.substring(0, Math.min(5, str.length()));
        System.out.println(truncated);
    }
}
```
</details>

### [ ] Problem 7.6: Double Int Multiply [Easy] [Topic: Fundamentals]
* **Learning Objective**: Multiply mixed types and perform explicit casting.
* **Problem Statement**: Multiply double `2.5` by int `4`, cast the result to an int, and print it.
* **Input**: `double = 2.5`, `int = 4`
* **Output**: `10`
* **Hint**: Use explicit casting: `(int) (doubleVar * intVar)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double d = 2.5;
        int i = 4;
        System.out.println((int) (d * i));
    }
}
```
</details>

### [ ] Problem 7.7: String Word Counter [Easy] [Topic: Fundamentals]
* **Learning Objective**: Count occurrences of string tokens using splits.
* **Problem Statement**: Count the number of space-separated words in a string.
* **Input**: `"Java is easy"`
* **Output**: `3`
* **Hint**: Split the string using `split("\\s+")` and count the array length.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "Java is easy";
        System.out.println(str.split("\\s+").length);
    }
}
```
</details>

### [ ] Problem 7.8: Modulo Tally [Easy] [Topic: Fundamentals]
* **Learning Objective**: Extract remainders using modulo.
* **Problem Statement**: Calculate the remainder of 123 divided by 10.
* **Input**: `123`
* **Output**: `3`
* **Hint**: Use the `%` operator.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(123 % 10);
    }
}
```
</details>

### [ ] Problem 7.9: Perimeter of Rectangle [Easy] [Topic: Fundamentals]
* **Learning Objective**: Calculate perimeter bounds.
* **Problem Statement**: Calculate the perimeter of a rectangle. Formula: $P = 2 \times (width + height)$.
* **Input**: `w = 4.0`, `h = 7.0`
* **Output**: `22.0`
* **Hint**: Use float variables.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double w = 4.0;
        double h = 7.0;
        System.out.println(2.0 * (w + h));
    }
}
```
</details>

### [ ] Problem 7.10: String Starts With [Easy] [Topic: Fundamentals]
* **Learning Objective**: Verify prefix matches in strings.
* **Problem Statement**: Check if the string `"Automation"` starts with the letters `"Auto"`.
* **Input**: `"Automation"`
* **Output**: `true`
* **Hint**: Look at `.startsWith()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "Automation";
        System.out.println(str.startsWith("Auto"));
    }
}
```
</details>

### [ ] Problem 7.11: Constant Radius Area [Easy] [Topic: Fundamentals]
* **Learning Objective**: Use local final constants in formulas.
* **Problem Statement**: Compute the area of a circle using a `final double PI = 3.14159;` constant declaration.
* **Input**: `radius = 2.0`
* **Output**: `12.56636`
* **Hint**: Final variable declarations prevent reassignment.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        final double PI = 3.14159;
        double r = 2.0;
        System.out.println(PI * r * r);
    }
}
```
</details>

### [ ] Problem 7.12: Find String Char Index [Easy] [Topic: Fundamentals]
* **Learning Objective**: Search character indices inside string instances.
* **Problem Statement**: Find the first occurrence index of character `'o'` in `"Roadmap"`.
* **Input**: `"Roadmap"`, `'o'`
* **Output**: `1`
* **Hint**: Use `.indexOf()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String s = "Roadmap";
        System.out.println(s.indexOf('o'));
    }
}
```
</details>

### [ ] Problem 7.13: Primitive Byte Range [Easy] [Topic: Fundamentals]
* **Learning Objective**: Print minimum and maximum limits of byte variables.
* **Problem Statement**: Print the minimum and maximum possible values of a Java byte.
* **Input**: None
* **Output**: `Min: -128, Max: 127`
* **Hint**: Use wrapper constants `Byte.MIN_VALUE` and `Byte.MAX_VALUE`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Min: " + Byte.MIN_VALUE + ", Max: " + Byte.MAX_VALUE);
    }
}
```
</details>

### [ ] Problem 7.14: Parse Double String [Easy] [Topic: Fundamentals]
* **Learning Objective**: Parse decimal float values from string inputs.
* **Problem Statement**: Parse the string `"45.67"` as a double primitive value.
* **Input**: `"45.67"`
* **Output**: `45.67`
* **Hint**: Use `Double.parseDouble(str)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "45.67";
        double val = Double.parseDouble(str);
        System.out.println(val);
    }
}
```
</details>

### [ ] Problem 7.15: Simple XOR [Easy] [Topic: Fundamentals]
* **Learning Objective**: Execute binary bitwise XOR operations.
* **Problem Statement**: Calculate the bitwise XOR of 5 and 3.
* **Input**: `5` (binary 101), `3` (binary 011)
* **Output**: `6` (binary 110)
* **Hint**: Use the `^` operator.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(5 ^ 3);
    }
}
```
</details>

---

## Tier 2: Control Flow, Loops, & Arrays (15 Problems)

📌 **Topics**: Conditions, iterations, array traversal, and 2D arrays.

### [ ] Problem 7.16: Number Range Check [Easy] [Topic: Control Flow]
* **Learning Objective**: Chain comparisons with logical operators.
* **Problem Statement**: Check if a number is between 10 and 50 (inclusive).
* **Input**: `num = 25`
* **Output**: `true`
* **Hint**: Use `num >= 10 && num <= 50`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int num = 25;
        System.out.println(num >= 10 && num <= 50);
    }
}
```
</details>

### [ ] Problem 7.17: Loop Sum Odd [Easy] [Topic: Control Flow]
* **Learning Objective**: Tally specific numbers in a loop using modular filters.
* **Problem Statement**: Sum all odd numbers from 1 to $N$.
* **Input**: `N = 10`
* **Output**: `25` (1+3+5+7+9)
* **Hint**: Iterate through numbers. If `i % 2 != 0`, add to sum.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 10;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) sum += i;
        }
        System.out.println(sum);
    }
}
```
</details>

### [ ] Problem 7.18: Array Contains Target [Easy] [Topic: Control Flow]
* **Learning Objective**: Search array values (linear scan).
* **Problem Statement**: Check if an array contains target value $T$.
* **Input**: `arr = {1, 3, 5, 7}`, `T = 5`
* **Output**: `true`
* **Hint**: Loop through the array, checking `if (num == T)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7};
        int target = 5;
        boolean found = false;
        for (int num : arr) {
            if (num == target) {
                found = true;
                break;
            }
        }
        System.out.println(found);
    }
}
```
</details>

### [ ] Problem 7.19: Factorial Loop [Easy] [Topic: Control Flow]
* **Learning Objective**: Write factorial loops.
* **Problem Statement**: Calculate $N!$ iteratively.
* **Input**: `N = 6`
* **Output**: `720`
* **Hint**: Loop up to $N$, keeping a running product.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 6;
        long prod = 1;
        for (int i = 1; i <= n; i++) prod *= i;
        System.out.println(prod);
    }
}
```
</details>

### [ ] Problem 7.20: Find Array Min [Easy] [Topic: Control Flow]
* **Learning Objective**: Find the minimum value in an array.
* **Problem Statement**: Locate the smallest integer inside an array.
* **Input**: `arr = {5, 2, 8, 1, 9}`
* **Output**: `1`
* **Hint**: Initialize `min` to `arr[0]` and loop through the remaining elements, updating `min` when a smaller value is found.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9};
        int min = arr[0];
        for (int num : arr) {
            if (num < min) min = num;
        }
        System.out.println(min);
    }
}
```
</details>

### [ ] Problem 7.21: Array Copy [Easy] [Topic: Control Flow]
* **Learning Objective**: Copy array contents to a new array.
* **Problem Statement**: Copy all elements from one array to another array of the same size.
* **Input**: `arr = {1, 2, 3}`
* **Output**: `copy = {1, 2, 3}`
* **Hint**: Create a new array and assign elements at matching indices: `copy[i] = arr[i]`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        int[] copy = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            copy[i] = arr[i];
        }
        System.out.println(Arrays.toString(copy));
    }
}
```
</details>

### [ ] Problem 7.22: Reverse Print Array [Easy] [Topic: Control Flow]
* **Learning Objective**: Iterate through an array in reverse order.
* **Problem Statement**: Print array elements in reverse order without modifying the array.
* **Input**: `arr = {10, 20, 30}`
* **Output**: `30 20 10`
* **Hint**: Start your loop counter at `arr.length - 1` and decrement down to 0: `i--`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30};
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}
```
</details>

### [ ] Problem 7.23: Matrix Diagonal Sum [Medium] [Topic: Control Flow]
* **Learning Objective**: Sum diagonal elements of a 2D matrix.
* **Problem Statement**: Calculate the sum of elements along the main diagonal (top-left to bottom-right) of a square matrix.
* **Input**: `matrix = {{1,2}, {3,4}}`
* **Output**: `5` (1+4)
* **Hint**: Sum elements at matching row-column indices: `matrix[i][i]`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2},
            {3, 4}
        };
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
        }
        System.out.println(sum);
    }
}
```
</details>

### [ ] Problem 7.24: Collatz Sequence Length [Medium] [Topic: Control Flow]
* **Learning Objective**: Count sequence lengths in loops.
* **Problem Statement**: Calculate the number of steps in the Collatz sequence for a number to reach 1.
* **Input**: `N = 6`
* **Output**: `8`
* **Hint**: Keep a step counter. Update $N$ and increment the counter inside a `while (n != 1)` loop.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 6;
        int steps = 0;
        while (n != 1) {
            n = (n % 2 == 0) ? n / 2 : (n * 3) + 1;
            steps++;
        }
        System.out.println(steps);
    }
}
```
</details>

### [ ] Problem 7.25: Find Target Count [Medium] [Topic: Control Flow]
* **Learning Objective**: Count element frequencies in an array.
* **Problem Statement**: Count occurrences of target $T$ inside an array.
* **Input**: `arr = {1, 2, 2, 3}`, `T = 2`
* **Output**: `2`
* **Hint**: Increment a counter inside a loop every time `arr[i] == T`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3};
        int target = 2;
        int count = 0;
        for (int num : arr) {
            if (num == target) count++;
        }
        System.out.println(count);
    }
}
```
</details>

### [ ] Problem 7.26: Alternate Elements [Medium] [Topic: Control Flow]
* **Learning Objective**: Step through arrays using custom iteration intervals.
* **Problem Statement**: Print every other element of an array, starting with index 0.
* **Input**: `arr = {1, 2, 3, 4, 5}`
* **Output**: `1 3 5`
* **Hint**: Increment your loop index by 2: `i += 2`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int i = 0; i < arr.length; i += 2) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}
```
</details>

### [ ] Problem 7.27: Check Array Contains Zero [Medium] [Topic: Control Flow]
* **Learning Objective**: Search arrays and terminate early using break statements.
* **Problem Statement**: Check if an array contains any `0` values.
* **Input**: `arr = {1, 2, 0, 4}`
* **Output**: `true`
* **Hint**: Loop through the array, setting a boolean flag to true and breaking out of the loop immediately if `0` is found.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 0, 4};
        boolean hasZero = false;
        for (int num : arr) {
            if (num == 0) {
                hasZero = true;
                break;
            }
        }
        System.out.println(hasZero);
    }
}
```
</details>

### [ ] Problem 7.28: Matrix Row Sums [Medium] [Topic: Control Flow]
* **Learning Objective**: Sum elements row-by-row in 2D arrays.
* **Problem Statement**: Calculate the sum of elements in each row of a 2D matrix.
* **Input**: `matrix = {{1, 2}, {3, 4}}`
* **Output**: `Row 0: 3, Row 1: 7`
* **Hint**: Use nested loops. Sum elements in the inner loop and print the total at the end of each row iteration.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2},
            {3, 4}
        };
        for (int i = 0; i < matrix.length; i++) {
            int rowSum = 0;
            for (int j = 0; j < matrix[i].length; j++) {
                rowSum += matrix[i][j];
            }
            System.out.println("Row " + i + ": " + rowSum);
        }
    }
}
```
</details>

### [ ] Problem 7.29: Prime Range Print [Hard] [Topic: Control Flow]
* **Learning Objective**: Solve prime number range queries using nested loops.
* **Problem Statement**: Print all prime numbers between 2 and $N$.
* **Input**: `N = 10`
* **Output**: `2 3 5 7`
* **Hint**: Loop through numbers. Use an inner loop to check if the current number is prime.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 10;
        for (int num = 2; num <= n; num++) {
            boolean isPrime = true;
            for (int i = 2; i * i <= num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) System.out.print(num + " ");
        }
        System.out.println();
    }
}
```
</details>

### [ ] Problem 7.30: Pascal Triangle Base [Hard] [Topic: Control Flow]
* **Learning Objective**: Generate arrays dynamically using structural dependencies.
* **Problem Statement**: Generate the first $R$ rows of Pascal's Triangle.
* **Input**: `R = 3`
* **Output**: `[[1], [1, 1], [1, 2, 1]]`
* **Hint**: Row $i$ contains $i+1$ elements. Outer boundary elements are 1. Inner elements are the sum of the two elements directly above it in the previous row: `val = prevRow[j-1] + prevRow[j]`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int numRows = 3;
        List<List<Integer>> triangle = new ArrayList<>();
        
        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    row.add(1);
                } else {
                    List<Integer> prevRow = triangle.get(i - 1);
                    row.add(prevRow.get(j - 1) + prevRow.get(j));
                }
            }
            triangle.add(row);
        }
        System.out.println(triangle);
    }
}
```
* **Complexity**: Time: $O(R^2)$ | Space: $O(R^2)$
</details>

---

## Tier 3: Object-Oriented Design & Libraries (15 Problems)

📌 **Topics**: OOP inheritance, constructors, encapsulation, collections framework (Lists, Sets, Maps), and File IO.

### [ ] Problem 7.31: Simple Inheritance Print [Easy] [Topic: OOP]
* **Learning Objective**: Create a basic class hierarchy.
* **Problem Statement**: Implement a `Person` parent class and a `Student` subclass. Instantiating `Student` should set the person name.
* **Input**: None
* **Output**: Displays the student name.
* **Hint**: Call `super(name)` from the subclass constructor to pass the name parameter to the parent constructor.
<details>
<summary>View Solution</summary>

```java
class Person {
    protected String name;
    public Person(String name) { this.name = name; }
}

class Student extends Person {
    public Student(String name) { super(name); }
    public void printName() { System.out.println("Student: " + name); }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Bob");
        s.printName();
    }
}
```
</details>

### [ ] Problem 7.32: Encapsulated Employee [Easy] [Topic: OOP]
* **Learning Objective**: Protect class variables using getter and setter methods.
* **Problem Statement**: Implement an `Employee` class with private name and salary variables. Expose them using public getters and setters.
* **Input**: None
* **Output**: Exposes variables securely.
* **Hint**: Set fields to `private`. Access and update values only through setter and getter methods.
<details>
<summary>View Solution</summary>

```java
class Employee {
    private String name;
    private double salary;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }
}
```
</details>

### [ ] Problem 7.33: Interface Contract [Easy] [Topic: OOP]
* **Learning Objective**: Enforce common behaviors using interfaces.
* **Problem Statement**: Create an interface `Flyable` with a `fly()` method. Implement it in a `Bird` class.
* **Input**: Invoke `fly()`
* **Output**: `"Flying high!"`
* **Hint**: Implement the interface using the `implements` keyword.
<details>
<summary>View Solution</summary>

```java
interface Flyable { void fly(); }
class Bird implements Flyable {
    public void fly() { System.out.println("Flying high!"); }
}
```
</details>

### [ ] Problem 7.34: Abstract Class Area [Easy] [Topic: OOP]
* **Learning Objective**: Implement abstract methods in child classes.
* **Problem Statement**: Define an abstract `Shape` class with an abstract method `area()`. Implement it in a `Square` subclass.
* **Input**: Square side = 5.0
* **Output**: `25.0`
* **Hint**: Implement the abstract method inside the subclass.
<details>
<summary>View Solution</summary>

```java
abstract class Shape { public abstract double area(); }
class Square extends Shape {
    private double side;
    public Square(double s) { this.side = s; }
    public double area() { return side * side; }
}
```
</details>

### [ ] Problem 7.35: List Add Elements [Easy] [Topic: Libraries]
* **Learning Objective**: Write and retrieve values in a List.
* **Problem Statement**: Store three double values in an ArrayList and print the element at index 1.
* **Input**: `{1.1, 2.2, 3.3}`
* **Output**: `2.2`
* **Hint**: Use `list.add(val)` and retrieve using `list.get(1)`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Double> list = new ArrayList<>();
        list.add(1.1);
        list.add(2.2);
        list.add(3.3);
        System.out.println(list.get(1));
    }
}
```
</details>

### [ ] Problem 7.36: Set Contains [Easy] [Topic: Libraries]
* **Learning Objective**: Search sets for specific elements.
* **Problem Statement**: Check if a HashSet of strings contains the word `"Java"`.
* **Input**: Set containing `"Java"`, `"C++"`
* **Output**: `true`
* **Hint**: Use the `.contains()` method.
<details>
<summary>View Solution</summary>

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Java");
        set.add("C++");
        System.out.println(set.contains("Java"));
    }
}
```
</details>

### [ ] Problem 7.37: Map Key Value Check [Easy] [Topic: Libraries]
* **Learning Objective**: Inspect keys in Map collections.
* **Problem Statement**: Verify if a Map contains a specific key.
* **Input**: Map: `{A=1, B=2}`, target key: `"B"`
* **Output**: `true`
* **Hint**: Use the `.containsKey()` method.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        System.out.println(map.containsKey("B"));
    }
}
```
</details>

### [ ] Problem 7.38: File Line Writer [Easy] [Topic: File IO]
* **Learning Objective**: Write strings to files.
* **Problem Statement**: Write a single line of text `"Test output"` to a file named `log.txt`.
* **Input**: None
* **Output**: Generates `log.txt` on disk.
* **Hint**: Use `FileWriter` wrapped inside a `BufferedWriter`.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("log.txt"))) {
            bw.write("Test output");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
</details>

### [ ] Problem 7.39: Custom Runtime Exception [Medium] [Topic: OOP]
* **Learning Objective**: Create a custom unchecked exception class.
* **Problem Statement**: Define a custom runtime exception `InvalidPasswordException`. Throw it if a password's length is less than 6 characters.
* **Input**: `"123"`
* **Output**: Throws `InvalidPasswordException` at runtime.
* **Hint**: Extend the `RuntimeException` class.
<details>
<summary>View Solution</summary>

```java
class InvalidPasswordException extends RuntimeException {
    public InvalidPasswordException(String msg) { super(msg); }
}

public class Main {
    public static void verifyPassword(String pass) {
        if (pass.length() < 6) throw new InvalidPasswordException("Password too short!");
    }
}
```
</details>

### [ ] Problem 7.40: Override ToString [Medium] [Topic: OOP]
* **Learning Objective**: Customize default object text representations.
* **Problem Statement**: Override `.toString()` in a `Car` class to print `"Car: BrandModel"`.
* **Input**: `Car("Tesla", "Model S")`
* **Output**: `"Car: Tesla Model S"`
* **Hint**: Override the `public String toString()` method.
<details>
<summary>View Solution</summary>

```java
class Car {
    private String brand, model;
    public Car(String b, String m) { this.brand = b; this.model = m; }
    
    @Override
    public String toString() {
        return "Car: " + brand + " " + model;
    }
}
```
</details>

### [ ] Problem 7.41: List Remove If [Medium] [Topic: Libraries]
* **Learning Objective**: Remove elements from a list using conditional predicate rules.
* **Problem Statement**: Remove all strings starting with character `'A'` from a list of strings.
* **Input**: `{"Apple", "Banana", "Apricot"}`
* **Output**: `[Banana]`
* **Hint**: Use `list.removeIf(s -> s.startsWith("A"))`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("Apple", "Banana", "Apricot"));
        list.removeIf(s -> s.startsWith("A"));
        System.out.println(list);
    }
}
```
</details>

### [ ] Problem 7.42: Map Iteration Keys [Medium] [Topic: Libraries]
* **Learning Objective**: Iterate through key-value mappings.
* **Problem Statement**: Print all keys and values in a Map.
* **Input**: Map: `{A=1, B=2}`
* **Output**: `Key: A, Value: 1`, `Key: B, Value: 2`
* **Hint**: Loop using `map.entrySet()`.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
}
```
</details>

### [ ] Problem 7.43: Read File Line Buffer [Medium] [Topic: File IO]
* **Learning Objective**: Read files line-by-line using buffered streams.
* **Problem Statement**: Read a text file named `log.txt` and print each line to the console.
* **Input**: `log.txt`
* **Output**: Prints the file's contents.
* **Hint**: Wrap `FileReader` inside a `BufferedReader` and read in a loop until `readLine()` returns `null`.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("log.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
</details>

### [ ] Problem 7.44: Class Inheritance Polymorphism [Hard] [Topic: OOP]
* **Learning Objective**: Resolve parent references dynamically.
* **Problem Statement**: Create an abstract `Account` parent class with a concrete `getType()` method and abstract `calculateFees()` method. Extend this class in `SavingsAccount` and `CheckingAccount` subclasses.
* **Input**: Array containing both account subclasses
* **Output**: Runs correct polymorphic fee calculations.
* **Hint**: Instantiate subclasses using parent reference variables: `Account acc = new SavingsAccount();`.
<details>
<summary>View Solution</summary>

```java
abstract class Account {
    public String getType() { return "Bank Account"; }
    public abstract double calculateFees();
}

class SavingsAccount extends Account {
    @Override
    public double calculateFees() { return 0.0; } // Savings account has no fees
}

class CheckingAccount extends Account {
    @Override
    public double calculateFees() { return 5.0; } // Checking account has $5 monthly fees
}
```
</details>

### [ ] Problem 7.45: JSON Config Parser [Hard] [Topic: File IO]
* **Learning Objective**: Extract data configurations from formatted text files.
* **Problem Statement**: Parse key-value configuration values from a flat JSON-like file containing simple `"key": "value"` strings.
* **Input**: Config file: `{"host": "localhost", "port": "8080"}`
* **Output**: Host: localhost, Port: 8080
* **Hint**: Read the file line-by-line. Use string manipulations (like `split(":")` and `replace()`) to clean and extract keys and values.
<details>
<summary>View Solution</summary>

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, String> config = new HashMap<>();
        try (BufferedReader br = new BufferedReader(new FileReader("config.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                if (line.contains(":")) {
                    String[] parts = line.split(":");
                    String key = parts[0].replaceAll("[\\{\\}\"\\s]", "");
                    String val = parts[1].replaceAll("[\\{\\}\",\\s]", "");
                    config.put(key, val);
                }
            }
            System.out.println("Host: " + config.get("host") + ", Port: " + config.get("port"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
</details>

---

## Tier 4: Algorithmic & Interview Elite (15 Problems)

📌 **Topics**: Streams API, multithreading, synchronizations, recursion, search algos, and dynamic programming.

### [ ] Problem 7.46: Stream Sum Evens [Easy] [Topic: Algorithmic Elite]
* **Learning Objective**: Map and sum stream values.
* **Problem Statement**: Sum all even integers in a list using the Streams API.
* **Input**: `list = {1, 2, 3, 4}`
* **Output**: `6`
* **Hint**: Use `list.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum()`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4);
        int sum = list.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();
        System.out.println(sum);
    }
}
```
</details>

### [ ] Problem 7.47: Thread Print Hello [Easy] [Topic: Algorithmic Elite]
* **Learning Objective**: Spawn a new thread.
* **Problem Statement**: Start a thread that prints `"Hello Thread"` using a lambda expression.
* **Input**: None
* **Output**: `Hello Thread`
* **Hint**: Pass a lambda expression `() -> System.out.println("Hello Thread")` to the `Thread` constructor and call `.start()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        new Thread(() -> System.out.println("Hello Thread")).start();
    }
}
```
</details>

### [ ] Problem 7.48: Binary Search Iterative [Easy] [Topic: Algorithmic Elite]
* **Learning Objective**: Implement binary search iteratively.
* **Problem Statement**: Find the index of target $T$ in a sorted array. Return `-1` if not found.
* **Input**: `arr = {1, 3, 5}`, `T = 3`
* **Output**: `1`
* **Hint**: Use a while loop with low and high boundary pointers.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
```
</details>

### [ ] Problem 7.49: Recursive String Permutations [Medium] [Topic: Algorithmic Elite]
* **Learning Objective**: Backtrack string choices recursively.
* **Problem Statement**: Generate all unique permutations of a string.
* **Input**: `"ab"`
* **Output**: `["ab", "ba"]`
* **Hint**: Recursively extract character choices. Move characters to prefix positions and permute the remaining substring.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static List<String> getPermutations(String str) {
        List<String> res = new ArrayList<>();
        permute(str, "", res);
        return res;
    }
    
    private static void permute(String str, String prefix, List<String> res) {
        if (str.isEmpty()) {
            res.add(prefix);
            return;
        }
        for (int i = 0; i < str.length(); i++) {
            String rem = str.substring(0, i) + str.substring(i + 1);
            permute(rem, prefix + str.charAt(i), res);
        }
    }
}
```
</details>

### [ ] Problem 7.50: Thread Safe Counter [Medium] [Topic: Algorithmic Elite]
* **Learning Objective**: Prevent race conditions using atomic primitives.
* **Problem Statement**: Implement a thread-safe counter class using the `AtomicInteger` library class.
* **Input**: Concurrent worker threads
* **Output**: Thread-safe count updates.
* **Hint**: Use `.incrementAndGet()` to update the count value.
<details>
<summary>View Solution</summary>

```java
import java.util.concurrent.atomic.AtomicInteger;

class AtomicCounter {
    private final AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet(); // Thread-safe atomic increment operation
    }
    
    public int getCount() {
        return count.get();
    }
}
```
</details>

### [ ] Problem 7.51: Merge Sort Algorithm [Medium] [Topic: Algorithmic Elite]
* **Learning Objective**: Sort arrays using divide-and-conquer recursion (Merge Sort).
* **Problem Statement**: Sort an integer array using the Merge Sort algorithm.
* **Input**: `arr = {4, 1, 3, 2}`
* **Output**: `{1, 2, 3, 4}`
* **Hint**: Recursively divide the array in halves. Sort each half, and merge the sorted halves back together.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        System.arraycopy(arr, left, L, 0, n1);
        System.arraycopy(arr, mid + 1, R, 0, n2);
        
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(N)$
</details>

### [ ] Problem 7.52: Search Matrix DFS [Medium] [Topic: Algorithmic Elite]
* **Learning Objective**: Traverse 2D grids recursively.
* **Problem Statement**: Determine if a target value exists inside a grid where values are sorted along rows and columns.
* **Input**: `matrix = {{1, 3}, {2, 4}}`, `target = 3`
* **Output**: `true`
* **Hint**: Start searching from the top-right corner. If the current value is larger than the target, move left. If smaller, move down.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0) return false;
        int row = 0;
        int col = matrix[0].length - 1; // Start at top-right
        
        while (row < matrix.length && col >= 0) {
            if (matrix[row][col] == target) return true;
            else if (matrix[row][col] > target) col--; // Move left
            else row++; // Move down
        }
        return false;
    }
}
```
* **Complexity**: Time: $O(R + C)$ | Space: $O(1)$
</details>

### [ ] Problem 7.53: Longest Valid Parentheses [Hard] [Topic: Algorithmic Elite]
* **Learning Objective**: Solve parenthetical pairing checks in linear time using a Stack.
* **Problem Statement**: Find the length of the longest valid (well-formed) parentheses substring.
* **Input**: `")()())"`
* **Output**: `4` (substring `"()()"`)
* **Hint**: Push character indices onto a stack. Initialize the stack with `-1` to handle boundary cases.
<details>
<summary>View Solution</summary>

```java
import java.util.Stack;

public class Main {
    public static int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        stack.push(-1); // Base boundary case
        int maxLen = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.isEmpty()) {
                    stack.push(i); // Push index as new starting boundary base
                } else {
                    maxLen = Math.max(maxLen, i - stack.peek());
                }
            }
        }
        return maxLen;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 7.54: Quick Sort Algorithm [Medium] [Topic: Algorithmic Elite]
* **Learning Objective**: Partition arrays recursively (Quick Sort).
* **Problem Statement**: Sort an integer array using the Quick Sort algorithm.
* **Input**: `arr = {3, 1, 4, 2}`
* **Output**: `{1, 2, 3, 4}`
* **Hint**: Select a pivot element. Partition the array such that elements smaller than the pivot are moved to its left, and larger elements are moved to its right. Recursively sort the left and right partitions.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
}
```
* **Complexity**: Time: $O(N \log N)$ (average case) | Space: $O(\log N)$
</details>

### [ ] Problem 7.55: Kth Largest Element [Medium] [Topic: Algorithmic Elite]
* **Learning Objective**: Search collections using sorted heap queues.
* **Problem Statement**: Find the $K$-th largest element in an unsorted array.
* **Input**: `arr = {3, 2, 1, 5, 6, 4}`, `K = 2`
* **Output**: `5`
* **Hint**: Use a min-heap (`PriorityQueue`). Keep the heap size equal to $K$ during traversal. When the loop ends, the top of the heap will be the $K$-th largest element.
<details>
<summary>View Solution</summary>

```java
import java.util.PriorityQueue;

public class Main {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll(); // Discard the smallest element
            }
        }
        return minHeap.peek(); // Top of heap holds the Kth largest element
    }
}
```
* **Complexity**: Time: $O(N \log K)$ | Space: $O(K)$
</details>

### [ ] Problem 7.56: Cyclic Dependency Checker [Hard] [Topic: Algorithmic Elite]
* **Learning Objective**: Detect cycles in directed graphs (Kahn's Topological Sort).
* **Problem Statement**: Given $N$ tasks and dependency pairs (e.g. $[U, V]$ means task $U$ must be completed before task $V$), determine if it is possible to finish all tasks.
* **Input**: `tasks = 2`, `prereqs = {{1, 0}}`
* **Output**: `true`
* **Hint**: Model the dependencies as a directed graph. A task schedule is possible if the dependency graph does not contain any cycles.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Main {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
        int[] inDegree = new int[numCourses];
        
        for (int[] pre : prerequisites) {
            adj.get(pre[1]).add(pre[0]);
            inDegree[pre[0]]++;
        }
        
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) q.offer(i);
        }
        
        int count = 0;
        while (!q.isEmpty()) {
            int curr = q.poll();
            count++;
            for (int neighbor : adj.get(curr)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) q.offer(neighbor);
            }
        }
        return count == numCourses;
    }
}
```
* **Complexity**: Time: $O(V + E)$ | Space: $O(V + E)$
</details>

### [ ] Problem 7.57: Knapsack Problem Tabulation [Hard] [Topic: Algorithmic Elite]
* **Learning Objective**: Solve the 0/1 Knapsack optimization problem using 2D DP matrices.
* **Problem Statement**: Maximize the value of items placed in a knapsack of weight capacity $W$.
* **Input**: `weights = {1, 2, 3}`, `values = {6, 10, 12}`, `W = 5`
* **Output**: `22` (item 1 + item 2)
* **Hint**: Create a 2D DP matrix of size $(N+1) \times (W+1)$. For each item, decide whether to include it or exclude it: `DP[i][j] = Math.max(DP[i-1][j], val[i-1] + DP[i-1][j - wt[i-1]])`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int knapsack(int[] wt, int[] val, int W) {
        int n = wt.length;
        int[][] dp = new int[n + 1][W + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= W; j++) {
                if (wt[i - 1] <= j) {
                    dp[i][j] = Math.max(dp[i - 1][j], val[i - 1] + dp[i - 1][j - wt[i - 1]]);
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        return dp[n][W];
    }
}
```
* **Complexity**: Time: $O(N \times W)$ | Space: $O(N \times W)$
</details>

### [ ] Problem 7.58: Minimum Path Sum Grid [Hard] [Topic: Algorithmic Elite]
* **Learning Objective**: Minimize grid path sums using Dynamic Programming.
* **Problem Statement**: Find a path from the top-left corner to the bottom-right corner of an $M \times N$ grid that minimizes the sum of numbers along the path.
* **Input**: `grid = {{1, 3}, {1, 5}}`
* **Output**: `7` (1 -> 1 -> 5)
* **Hint**: To reach cell $(i, j)$, you can only come from $(i-1, j)$ or $(i, j-1)$. Formula: $DP[i][j] = grid[i][j] + \min(DP[i-1][j], DP[i][j-1])$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int[][] dp = new int[m][n];
        dp[0][0] = grid[0][0];
        
        for (int i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + grid[i][0];
        for (int j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + grid[0][j];
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[m - 1][n - 1];
    }
}
```
* **Complexity**: Time: $O(M \times N)$ | Space: $O(M \times N)$
</details>

### [ ] Problem 7.59: Word Break [Hard] [Topic: Algorithmic Elite]
* **Learning Objective**: Segment word sequences using DP.
* **Problem Statement**: Determine if a string can be segmented into a space-separated sequence of one or more dictionary words.
* **Input**: `s = "leetcode"`, `dict = {"leet", "code"}`
* **Output**: `true`
* **Hint**: Create a boolean DP array of size $L+1$. For each index $i$, check if there is a preceding index $j$ such that `DP[j]` is true and the substring `s.substring(j, i)` is in the dictionary.
<details>
<summary>View Solution</summary>

```java
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Main {
    public static boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true; // Base case: empty string
        
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}
```
* **Complexity**: Time: $O(L^2)$ (where $L$ is string length) | Space: $O(L)$
</details>

### [ ] Problem 7.60: Dynamic Coin Change Combinations [Hard] [Topic: Algorithmic Elite]
* **Learning Objective**: Calculate total ways to sum coins using DP.
* **Problem Statement**: Find the total number of unique combinations of coins that add up to a target amount.
* **Input**: `coins = {1, 2, 5}`, `amount = 5`
* **Output**: `4` (combinations: {5}, {2,2,1}, {2,1,1,1}, {1,1,1,1,1})
* **Hint**: Create a 1D DP array of size `amount + 1` initialized to 0. Set `DP[0] = 1`. For each coin, update the array: `DP[i] += DP[i - coin]`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1; // Base case: 1 way to make amount 0
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }
        return dp[amount];
    }
}
```
* **Complexity**: Time: $O(A \times C)$ (where $A$ is amount, $C$ is coin count) | Space: $O(A)$
</details>
