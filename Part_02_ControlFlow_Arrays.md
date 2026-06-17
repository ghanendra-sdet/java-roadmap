# Milestone 2: Control Flow & Basic Data Structures

This milestone introduces branching logic, iterations using loops, single and multi-dimensional arrays, and intermediate algorithmic problems.

---

## 1. Conditional Statements

📌 **Core Concept**: Branching statements control code execution paths. In Java, this is achieved using `if-else` cascades, nested expressions, ternary operators (`condition ? trueVal : falseVal`), and the `switch` statement/expression.

### [ ] Problem 2.1: Simple Calculator [Easy] [Topic: Conditionals]
* **Learning Objective**: Route execution paths using a simple character switch.
* **Problem Statement**: Create a simple calculator that performs addition, subtraction, multiplication, or division based on an operator character.
* **Input**: `a = 10`, `b = 5`, `operator = '*'`
* **Output**:
  ```text
  Result: 50.0
  ```
* **Hint**: Use a `switch` statement matching on the operator character.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double a = 10;
        double b = 5;
        char op = '*';
        double result = 0;
        
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
            default:
                System.out.println("Invalid operator!");
                return;
        }
        System.out.println("Result: " + result);
    }
}
```
* **Common Mistakes**: Forgetting the `break` statement inside a case block, which causes code execution to bleed/fall through to subsequent blocks.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.2: Age Classifier [Easy] [Topic: Conditionals]
* **Learning Objective**: Create logic checks with `if-else` ladders.
* **Problem Statement**: Classify a person's age into categories: Child (0-12), Teenager (13-19), Adult (20-64), Senior (65+).
* **Input**: `age = 15`
* **Output**:
  ```text
  Teenager
  ```
* **Hint**: Order your `if` and `else if` conditions progressively.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int age = 15;
        if (age < 0) {
            System.out.println("Invalid age");
        } else if (age <= 12) {
            System.out.println("Child");
        } else if (age <= 19) {
            System.out.println("Teenager");
        } else if (age <= 64) {
            System.out.println("Adult");
        } else {
            System.out.println("Senior");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.3: Ternary Operator Match [Easy] [Topic: Conditionals]
* **Learning Objective**: Simplify single-condition assignments using ternaries.
* **Problem Statement**: Assign a string status `"Pass"` if score is 60 or above, otherwise `"Fail"`.
* **Input**: `score = 75`
* **Output**:
  ```text
  Pass
  ```
* **Hint**: Syntax: `String status = (score >= 60) ? "Pass" : "Fail";`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int score = 75;
        String status = (score >= 60) ? "Pass" : "Fail";
        System.out.println(status);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.4: Quadrant Finder [Medium] [Topic: Conditionals]
* **Learning Objective**: Evaluate multiple combined coordinates in a coordinate plane.
* **Problem Statement**: Given coordinates $(X, Y)$, determine the quadrant they fall in.
* **Input**: `x = -5`, `y = 3`
* **Output**:
  ```text
  Quadrant 2
  ```
* **Hint**: Quadrant 1: $X>0, Y>0$. Quadrant 2: $X<0, Y>0$. Quadrant 3: $X<0, Y<0$. Quadrant 4: $X>0, Y<0$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int x = -5;
        int y = 3;
        
        if (x > 0 && y > 0) {
            System.out.println("Quadrant 1");
        } else if (x < 0 && y > 0) {
            System.out.println("Quadrant 2");
        } else if (x < 0 && y < 0) {
            System.out.println("Quadrant 3");
        } else if (x > 0 && y < 0) {
            System.out.println("Quadrant 4");
        } else if (x == 0 && y == 0) {
            System.out.println("Origin");
        } else {
            System.out.println("On an axis");
        }
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.5: Switch Expression Conversion [Medium] [Topic: Conditionals]
* **Learning Objective**: Adopt modern Java 14+ switch expressions.
* **Problem Statement**: Map integer day indices (1-7) to weekday names using the modern `yield` / arrow notation.
* **Input**: `day = 3`
* **Output**:
  ```text
  Wednesday
  ```
* **Hint**: Switch expression uses `->` to directly return value expressions.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int day = 3;
        String dayName = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6 -> "Saturday";
            case 7 -> "Sunday";
            default -> "Invalid Day";
        };
        System.out.println(dayName);
    }
}
```
* **Explanation**: Modern switch expressions don't require `break` statements. Arrow syntax prevents bleed-through bugs automatically.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.6: Tax Bracket Evaluator [Medium] [Topic: Conditionals]
* **Learning Objective**: Calculate percentages on progressive intervals.
* **Problem Statement**: Calculate tax due: $10\%$ on income up to $\$10,000$, and $20\%$ on any income above that.
* **Input**: `income = 15000`
* **Output**:
  ```text
  Tax: 2000.0
  ```
* **Hint**: Calculate tax step-by-step. Tax = $10,000 \times 0.10 + (income - 10,000) \times 0.20$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double income = 15000;
        double tax = 0;
        
        if (income <= 10000) {
            tax = income * 0.10;
        } else {
            tax = (10000 * 0.10) + ((income - 10000) * 0.20);
        }
        System.out.println("Tax: " + tax);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.7: BMI Classification System [Hard] [Topic: Conditionals]
* **Learning Objective**: Chain comparisons with calculations and range categories.
* **Problem Statement**: Given weight in kg and height in meters, compute BMI $= weight / height^2$, and print category. (BMI < 18.5: Underweight, 18.5-24.9: Normal, 25-29.9: Overweight, 30+: Obese).
* **Input**: `weight = 70.0`, `height = 1.75`
* **Output**:
  ```text
  BMI: 22.86 (Normal)
  ```
* **Hint**: First calculate BMI using floating-point math, then use an if-else ladder to print.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double weight = 70.0;
        double height = 1.75;
        double bmi = weight / (height * height);
        
        String category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25.0) {
            category = "Normal";
        } else if (bmi < 30.0) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        System.out.printf("BMI: %.2f (%s)\n", bmi, category);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 2. Loops

📌 **Core Concept**: Loops iterate actions. Java supports `for` loops (best for fixed count sequences), `while` loops (best for condition-based stops), `do-while` loops (runs at least once), and loop flow adjusters `break` and `continue`.

### [ ] Problem 2.8: Sum of Numbers [Easy] [Topic: Loops]
* **Learning Objective**: Keep cumulative tallies inside a standard for loop.
* **Problem Statement**: Calculate the sum of integers from 1 to $N$.
* **Input**: `N = 100`
* **Output**:
  ```text
  Sum: 5050
  ```
* **Hint**: Use a loop from 1 to $N$, adding each index to a `sum` variable.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 100;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }
}
```
* **Alternative Approach**: Arithmetic formula $S = N \times (N + 1) / 2$, which executes in $O(1)$ instead of $O(N)$ loop iterations.
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.9: Print Even Numbers [Easy] [Topic: Loops]
* **Learning Objective**: Skip numbers using custom iteration intervals.
* **Problem Statement**: Output all positive even integers up to $N$.
* **Input**: `N = 10`
* **Output**:
  ```text
  2 4 6 8 10 
  ```
* **Hint**: Increment loop counter by 2 inside your update clause: `i += 2`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 10;
        for (int i = 2; i <= n; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.10: Factorial Calculation [Easy] [Topic: Loops]
* **Learning Objective**: Tally multiplications using a loop.
* **Problem Statement**: Calculate the factorial of integer $N$ ($N! = 1 \times 2 \times \dots \times N$).
* **Input**: `N = 5`
* **Output**:
  ```text
  120
  ```
* **Hint**: Start a product variable at 1, loop up to $N$, multiplying the product by loop counter.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 5;
        long factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println(factorial);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.11: Multiples Skipping [Medium] [Topic: Loops]
* **Learning Objective**: Control loop flow using the `continue` statement.
* **Problem Statement**: Print numbers 1 to 10, skipping multiples of 3.
* **Input**: None
* **Output**:
  ```text
  1 2 4 5 7 8 10 
  ```
* **Hint**: Use `if (i % 3 == 0) continue;` inside the loop.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0) {
                continue;
            }
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.12: Collatz Conjecture [Medium] [Topic: Loops]
* **Learning Objective**: Loop with dynamic conditional iterations (while).
* **Problem Statement**: If $N$ is even, divide by 2. If odd, multiply by 3 and add 1. Repeat until $N = 1$, printing sequence.
* **Input**: `N = 6`
* **Output**:
  ```text
  6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
  ```
* **Hint**: Loop `while (n != 1)` and update $N$ using modular conditions.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 6;
        System.out.print(n);
        while (n != 1) {
            if (n % 2 == 0) {
                n = n / 2;
            } else {
                n = (n * 3) + 1;
            }
            System.out.print(" -> " + n);
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(\text{sequence length})$ | Space: $O(1)$
</details>

### [ ] Problem 2.13: Multiplication Table Grid [Medium] [Topic: Loops]
* **Learning Objective**: Nest loops to generate 2D structural arrays.
* **Problem Statement**: Create a 2D multiplication table grid of size $5 \times 5$.
* **Input**: None
* **Output**:
  ```text
  1   2   3   4   5   
  2   4   6   8   10  
  3   6   9   12  15  
  4   8   12  16  20  
  5   10  15  20  25  
  ```
* **Hint**: Put a loop for columns inside a loop for rows. Format spacing using `System.out.printf("%-4d", value)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 5; row++) {
            for (int col = 1; col <= 5; col++) {
                System.out.printf("%-4d", row * col);
            }
            System.out.println();
        }
    }
}
```
* **Complexity**: Time: $O(1)$ (constant nested size) | Space: $O(1)$
</details>

### [ ] Problem 2.14: Pyramidal Pattern [Hard] [Topic: Loops]
* **Learning Objective**: Master complex nested spacing loops.
* **Problem Statement**: Print a centered pyramid of height $H$ made of asterisks.
* **Input**: `H = 4`
* **Output**:
  ```text
     *
    ***
   *****
  *******
  ```
* **Hint**: For row $i$ (0-indexed), print $H - 1 - i$ spaces, then $2 \times i + 1$ stars.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int h = 4;
        for (int i = 0; i < h; i++) {
            // Print spaces
            for (int j = 0; j < h - 1 - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 0; j < (2 * i + 1); j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```
* **Complexity**: Time: $O(H^2)$ | Space: $O(1)$
</details>

---

## 3. Arrays

📌 **Core Concept**: Arrays store a fixed-size sequence of elements of the same type in contiguous memory. Array indices are 0-based. Accessing indices out of bounds (e.g. `arr.length` or negative numbers) triggers an `ArrayIndexOutOfBoundsException`.

### [ ] Problem 2.15: Array Max [Easy] [Topic: Arrays]
* **Learning Objective**: Search and scan values sequentially.
* **Problem Statement**: Find the largest value in an integer array.
* **Input**: `arr = {12, 34, 5, 78, 23}`
* **Output**:
  ```text
  Max: 78
  ```
* **Hint**: Keep a variable `max` initialized to `arr[0]`. Loop through index 1 to length-1, updating `max` when a larger element is found.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {12, 34, 5, 78, 23};
        int max = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println("Max: " + max);
    }
}
```
* **Common Mistakes**: Initializing `max = 0`. If the array contains only negative numbers, 0 is incorrectly returned as the maximum.
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.16: Sum and Average [Easy] [Topic: Arrays]
* **Learning Objective**: Sum array contents and perform decimal conversion.
* **Problem Statement**: Calculate the sum and average of elements in a double array.
* **Input**: `arr = {1.5, 2.5, 3.5, 4.5}`
* **Output**:
  ```text
  Sum: 12.0, Average: 3.0
  ```
* **Hint**: Use an enhanced for-each loop: `for (double num : arr)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double[] arr = {1.5, 2.5, 3.5, 4.5};
        double sum = 0;
        
        for (double val : arr) {
            sum += val;
        }
        double avg = sum / arr.length;
        System.out.println("Sum: " + sum + ", Average: " + avg);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.17: Reverse Array [Easy] [Topic: Arrays]
* **Learning Objective**: Swap array values using double pointers.
* **Problem Statement**: Reverse the elements of an array in-place.
* **Input**: `arr = {1, 2, 3, 4, 5}`
* **Output**:
  ```text
  {5, 4, 3, 2, 1}
  ```
* **Hint**: Swap elements using two pointers: one at the start (`0`) and one at the end (`length-1`), moving towards the middle.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int start = 0;
        int end = arr.length - 1;
        
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        System.out.println(Arrays.toString(arr));
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.18: Element Search [Medium] [Topic: Arrays]
* **Learning Objective**: Find element index locations (linear search).
* **Problem Statement**: Find the index of target value $K$ in an array. Output `-1` if not found.
* **Input**: `arr = {10, 20, 30, 40}`, `K = 30`
* **Output**:
  ```text
  Index: 2
  ```
* **Hint**: Loop through indices, checking `if (arr[i] == K)`. Return `i` immediately.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40};
        int target = 30;
        int index = -1;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                index = i;
                break;
            }
        }
        System.out.println("Index: " + index);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.19: Check Sorted [Medium] [Topic: Arrays]
* **Learning Objective**: Compare adjacent indices in a sequence.
* **Problem Statement**: Verify if an array is sorted in ascending order.
* **Input**: `arr = {2, 5, 8, 12, 11}`
* **Output**:
  ```text
  Sorted: false
  ```
* **Hint**: Loop from index `0` to `length - 2` and check `if (arr[i] > arr[i + 1])`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 11};
        boolean isSorted = true;
        
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                break;
            }
        }
        System.out.println("Sorted: " + isSorted);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.20: 2D Matrix Sum [Medium] [Topic: Arrays]
* **Learning Objective**: Access elements in a multi-dimensional array.
* **Problem Statement**: Compute the sum of all elements inside a $2\times3$ integer matrix.
* **Input**: `matrix = {{1, 2, 3}, {4, 5, 6}}`
* **Output**:
  ```text
  Sum: 21
  ```
* **Hint**: Use nested loops: the outer loop runs `matrix.length`, and the inner loop runs `matrix[i].length`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };
        int sum = 0;
        
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                sum += matrix[i][j];
            }
        }
        System.out.println("Sum: " + sum);
    }
}
```
* **Complexity**: Time: $O(R \times C)$ (Rows $\times$ Cols) | Space: $O(1)$
</details>

### [ ] Problem 2.21: Transpose Matrix [Hard] [Topic: Arrays]
* **Learning Objective**: Swap row and column dimensions of a grid array.
* **Problem Statement**: Transpose a $2\times3$ matrix into a $3\times2$ matrix.
* **Input**: `matrix = {{1, 2, 3}, {4, 5, 6}}`
* **Output**:
  ```text
  {{1, 4}, {2, 5}, {3, 6}}
  ```
* **Hint**: Create a new matrix of dimensions $3\times2$ and assign `transposed[col][row] = original[row][col]`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[][] orig = {
            {1, 2, 3},
            {4, 5, 6}
        };
        
        int rows = orig.length;
        int cols = orig[0].length;
        int[][] transp = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transp[j][i] = orig[i][j];
            }
        }
        
        // Print matrix
        for (int i = 0; i < transp.length; i++) {
            for (int j = 0; j < transp[i].length; j++) {
                System.out.print(transp[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```
* **Complexity**: Time: $O(R \times C)$ | Space: $O(R \times C)$ (to allocate the new transposed matrix)
</details>

---

## 4. Algorithmic Problems – Level 2

📌 **Core Concept**: Intermediate mathematical algorithms, counting, and digit decomposition using basic loop structures.

### [ ] Problem 2.22: Fibonacci Series [Easy] [Topic: Algorithm 2]
* **Learning Objective**: Calculate sequence progressions recursively/iteratively.
* **Problem Statement**: Generate and print the first $N$ numbers of the Fibonacci sequence ($F_0=0, F_1=1, F_i = F_{i-1} + F_{i-2}$).
* **Input**: `N = 6`
* **Output**:
  ```text
  0 1 1 2 3 5
  ```
* **Hint**: Keep track of the two previous values: `a = 0` and `b = 1`. In each iteration, update them: `next = a + b`, then shift references.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 6;
        int a = 0;
        int b = 1;
        
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.23: Prime Number Check [Easy] [Topic: Algorithm 2]
* **Learning Objective**: Optimize loop bounds using square roots.
* **Problem Statement**: Determine if a number is prime (only divisible by 1 and itself).
* **Input**: `number = 29`
* **Output**:
  ```text
  Prime: true
  ```
* **Hint**: Loop from `2` up to $\sqrt{N}$ (`i * i <= N`). If any division leaves a 0 remainder, it's not prime.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 29;
        boolean isPrime = n > 1;
        
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        System.out.println("Prime: " + isPrime);
    }
}
```
* **Complexity**: Time: $O(\sqrt{N})$ | Space: $O(1)$
</details>

### [ ] Problem 2.24: GCD Calculator [Easy] [Topic: Algorithm 2]
* **Learning Objective**: Implement standard Euclid mathematical division.
* **Problem Statement**: Find the Greatest Common Divisor (GCD) of two integers.
* **Input**: `a = 24`, `b = 36`
* **Output**:
  ```text
  GCD: 12
  ```
* **Hint**: Use the Euclidean algorithm: `while (b != 0)`, let `temp = b; b = a % b; a = temp;`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int a = 24;
        int b = 36;
        
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.println("GCD: " + a);
    }
}
```
* **Complexity**: Time: $O(\log(\min(A, B)))$ | Space: $O(1)$
</details>

### [ ] Problem 2.25: Palindrome Check [Medium] [Topic: Algorithm 2]
* **Learning Objective**: Extract and reconstruct numbers mathematically.
* **Problem Statement**: Verify if integer $N$ reads the same forward and backward.
* **Input**: `N = 121`
* **Output**:
  ```text
  Palindrome: true
  ```
* **Hint**: Reverse the integer mathematically using division/modulo: `reversed = reversed * 10 + (n % 10)`. Compare with the original.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int original = 121;
        int n = original;
        int reversed = 0;
        
        while (n > 0) {
            int digit = n % 10;
            reversed = (reversed * 10) + digit;
            n = n / 10;
        }
        System.out.println("Palindrome: " + (original == reversed));
    }
}
```
* **Complexity**: Time: $O(\log_{10}(N))$ | Space: $O(1)$
</details>

### [ ] Problem 2.26: Armstrong Number [Medium] [Topic: Algorithm 2]
* **Learning Objective**: Decompose digits and raise them to custom power parameters.
* **Problem Statement**: Verify if $N$ is an Armstrong number (the sum of its digits raised to the power of the number of digits equals $N$).
* **Input**: `N = 153`
* **Output**:
  ```text
  Armstrong: true
  ```
* **Hint**: First find the number of digits $K$. Then extract each digit, raise to power $K$, and check sum.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int number = 153;
        int temp = number;
        int count = 0;
        
        // Find digit count
        while (temp > 0) {
            count++;
            temp /= 10;
        }
        
        temp = number;
        int sum = 0;
        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, count);
            temp /= 10;
        }
        System.out.println("Armstrong: " + (sum == number));
    }
}
```
* **Complexity**: Time: $O(\log_{10}(N))$ | Space: $O(1)$
</details>

### [ ] Problem 2.27: FizzBuzz [Medium] [Topic: Algorithm 2]
* **Learning Objective**: Chain modular operators inside loops.
* **Problem Statement**: Print numbers 1 to 15, replacing multiples of 3 with `"Fizz"`, multiples of 5 with `"Buzz"`, and multiples of both with `"FizzBuzz"`.
* **Input**: None
* **Output**:
  ```text
  1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
  ```
* **Hint**: Check division by 15 (`i % 15 == 0`) first before checking 3 and 5 individually.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 15; i++) {
            if (i % 15 == 0) {
                System.out.print("FizzBuzz ");
            } else if (i % 3 == 0) {
                System.out.print("Fizz ");
            } else if (i % 5 == 0) {
                System.out.print("Buzz ");
            } else {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 2.28: Perfect Number Check [Hard] [Topic: Algorithm 2]
* **Learning Objective**: Extract proper divisors of a number.
* **Problem Statement**: Check if $N$ is a perfect number (the sum of its positive proper divisors excluding $N$ equals $N$).
* **Input**: `N = 28`
* **Output**:
  ```text
  Perfect: true
  ```
* **Hint**: Loop from `1` up to `N/2`, summing values of `i` that satisfy `N % i == 0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 28;
        int sum = 0;
        
        for (int i = 1; i <= n / 2; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        System.out.println("Perfect: " + (sum == n));
    }
}
```
* **Complexity**: Time: $O(N)$ (can be optimized to $O(\sqrt{N})$ by adding pairs of divisors) | Space: $O(1)$
</details>

---

## 5. Algorithmic Problems – Level 3

📌 **Core Concept**: Advanced array operations: searching, sorting, tracking counts, and sliding bounds.

### [ ] Problem 2.29: Duplicate Finder [Easy] [Topic: Algorithm 3]
* **Learning Objective**: Search for duplicate entries (brute-force arrays).
* **Problem Statement**: Find the first duplicate element in an integer array. Print `-1` if all elements are unique.
* **Input**: `arr = {2, 4, 7, 4, 2}`
* **Output**:
  ```text
  Duplicate: 2
  ```
* **Hint**: Use nested loops: look for indices `i` and `j` where `arr[i] == arr[j]`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 4, 7, 4, 2};
        int firstDuplicate = -1;
        
        outerLoop:
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    firstDuplicate = arr[i];
                    break outerLoop;
                }
            }
        }
        System.out.println("Duplicate: " + firstDuplicate);
    }
}
```
* **Complexity**: Time: $O(N^2)$ (can be optimized to $O(N)$ using sets) | Space: $O(1)$
</details>

### [ ] Problem 2.30: Frequency Counter [Easy] [Topic: Algorithm 3]
* **Learning Objective**: Count matching items inside arrays.
* **Problem Statement**: Count occurrences of target element $T$ in an array.
* **Input**: `arr = {1, 2, 3, 2, 4, 2}`, `T = 2`
* **Output**:
  ```text
  Count: 3
  ```
* **Hint**: Loop through the array, incrementing a counter every time `arr[i] == T`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 2};
        int target = 2;
        int count = 0;
        
        for (int num : arr) {
            if (num == target) {
                count++;
            }
        }
        System.out.println("Count: " + count);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.31: Second Largest [Medium] [Topic: Algorithm 3]
* **Learning Objective**: Track multiple running constraints during array traversal.
* **Problem Statement**: Find the second largest element in an array.
* **Input**: `arr = {10, 34, 5, 78, 78, 23}`
* **Output**:
  ```text
  Second Largest: 34
  ```
* **Hint**: Keep track of `largest` and `secondLargest`. If `num > largest`, update both. If `num > secondLargest` and `num != largest`, update `secondLargest`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 34, 5, 78, 78, 23};
        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        
        for (int num : arr) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num != largest) {
                second = num;
            }
        }
        System.out.println("Second Largest: " + second);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.32: Bubble Sort [Medium] [Topic: Algorithm 3]
* **Learning Objective**: Sort arrays using comparison and element swapping.
* **Problem Statement**: Sort an array of integers in ascending order using the Bubble Sort algorithm.
* **Input**: `arr = {5, 2, 9, 1, 5, 6}`
* **Output**:
  ```text
  {1, 2, 5, 5, 6, 9}
  ```
* **Hint**: Iterate through the array. For each element, compare adjacent items and swap if they are in the wrong order. Repeat $N-1$ times.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5, 6};
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Optimization: exit early if sorted
        }
        System.out.println(Arrays.toString(arr));
    }
}
```
* **Complexity**: Time: $O(N^2)$ | Space: $O(1)$
</details>

### [ ] Problem 2.33: Binary Search [Medium] [Topic: Algorithm 3]
* **Learning Objective**: Implement logarithmic binary searches on sorted arrays.
* **Problem Statement**: Find the index of target $T$ in a sorted array using Binary Search.
* **Input**: `arr = {1, 2, 5, 6, 9}`, `T = 6`
* **Output**:
  ```text
  Index: 3
  ```
* **Hint**: Initialize `low = 0` and `high = length-1`. Calculate `mid`. If `arr[mid] == T`, return `mid`. If `arr[mid] < T`, search right (`low = mid + 1`), else search left (`high = mid - 1`).
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 6, 9};
        int target = 6;
        
        int low = 0;
        int high = arr.length - 1;
        int index = -1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2; // Prevent overflow
            if (arr[mid] == target) {
                index = mid;
                break;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        System.out.println("Index: " + index);
    }
}
```
* **Complexity**: Time: $O(\log N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.34: Two Sum [Hard] [Topic: Algorithm 3]
* **Learning Objective**: Search for coordinate pairs that satisfy a sum check.
* **Problem Statement**: Given a sorted array, find indices of two numbers that add up to target $S$.
* **Input**: `arr = {1, 2, 5, 6, 9}`, `S = 8`
* **Output**:
  ```text
  Indices: {1, 3} (numbers 2 and 6)
  ```
* **Hint**: Use two pointers: one at the start (`left`) and one at the end (`right`). If `sum < target`, increment `left`. If `sum > target`, decrement `right`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 6, 9};
        int target = 8;
        
        int left = 0;
        int right = arr.length - 1;
        int idx1 = -1, idx2 = -1;
        
        while (left < right) {
            int currentSum = arr[left] + arr[right];
            if (currentSum == target) {
                idx1 = left;
                idx2 = right;
                break;
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
        System.out.println("Indices: " + idx1 + ", " + idx2);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 2.35: Max Subarray Sum [Hard] [Topic: Algorithm 3]
* **Learning Objective**: Track dynamic cumulative subsets (Kadane's algorithm).
* **Problem Statement**: Find the maximum sum of a contiguous subarray in an integer array.
* **Input**: `arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4}`
* **Output**:
  ```text
  Max Sum: 6 (Subarray: {4, -1, 2, 1})
  ```
* **Hint**: Keep track of `maxSoFar` and `maxEndingHere`. Update `maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i])`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        
        int maxSoFar = arr[0];
        int maxEndingHere = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        System.out.println("Max Sum: " + maxSoFar);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>
