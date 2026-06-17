# Recent Company Interviews

A curated database of **35 solved Java coding questions** asked in recent recruitment drives, technical assessments, and coding interviews at prominent Indian tech companies, service organizations, and startups.

---

## 1. Tata Consultancy Services (TCS)

📌 **Focus Areas**: Basic math logic, arrays, loops, and conditional controls.

### [ ] Problem 10.1: Prime Number Check [Easy] [Topic: Loops] [Company: TCS]
* **Learning Objective**: Optimize prime checking using trial division up to $\sqrt{N}$.
* **Problem Statement**: Given a positive integer $N$, check if it is a prime number. Output `"Prime"` or `"Not Prime"`.
* **Input**: `num = 29`
* **Output**:
  ```text
  Prime
  ```
* **Hint**: A number is prime if it has no divisors other than 1 and itself. Check divisors up to `Math.sqrt(num)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int num = 29;
        System.out.println(isPrime(num) ? "Prime" : "Not Prime");
    }
    
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```
* **Complexity**: Time: $O(\sqrt{N})$ | Space: $O(1)$
</details>

### [ ] Problem 10.2: Fibonacci Series [Easy] [Topic: Loops] [Company: TCS]
* **Learning Objective**: Iterate and print sequence numbers dynamically.
* **Problem Statement**: Print the first $N$ terms of the Fibonacci series on a single line, separated by spaces.
* **Input**: `N = 6`
* **Output**:
  ```text
  0 1 1 2 3 5 
  ```
* **Hint**: Track two variables `first` and `second`, initialized to `0` and `1`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int n = 6;
        int first = 0, second = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.3: Second Largest Element [Medium] [Topic: Loops] [Company: TCS]
* **Learning Objective**: Scan arrays for tracking maximum limits.
* **Problem Statement**: Find the second largest integer inside a single-dimensional integer array without sorting the array.
* **Input**: `arr = {12, 35, 1, 10, 34, 1}`
* **Output**:
  ```text
  Second Largest: 34
  ```
* **Hint**: Maintain two variables `largest` and `secondLargest`. Update both as you iterate through the array.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        
        for (int val : arr) {
            if (val > largest) {
                secondLargest = largest;
                largest = val;
            } else if (val > secondLargest && val != largest) {
                secondLargest = val;
            }
        }
        System.out.println("Second Largest: " + secondLargest);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.4: Leap Years in Range [Medium] [Topic: If-Else] [Company: TCS]
* **Learning Objective**: Implement nested checks within specified iteration limits.
* **Problem Statement**: Count the number of leap years in a given range between `startYear` and `endYear` inclusive.
* **Input**: `startYear = 2000`, `endYear = 2024`
* **Output**:
  ```text
  Leap Years: 7
  ```
* **Hint**: Filter using `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int startYear = 2000;
        int endYear = 2024;
        int count = 0;
        for (int year = startYear; year <= endYear; year++) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                count++;
            }
        }
        System.out.println("Leap Years: " + count);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

---

## 2. Infosys

📌 **Focus Areas**: Palindromes, arrays, rotations, and conditional checking.

### [ ] Problem 10.5: Palindrome Checker [Easy] [Topic: Strings] [Company: Infosys]
* **Learning Objective**: Traverse characters from both ends of a string.
* **Problem Statement**: Check if a string is a palindrome (ignores case and non-alphanumeric characters).
* **Input**: `"A man, a plan, a canal: Panama"`
* **Output**:
  ```text
  Palindrome
  ```
* **Hint**: Clean the string to keep only letters and numbers, then use two pointers.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "A man, a plan, a canal: Panama";
        System.out.println(isPalindrome(str) ? "Palindrome" : "Not Palindrome");
    }
    
    public static boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$ due to cleaning.
</details>

### [ ] Problem 10.6: Matrix Transpose [Easy] [Topic: Loops] [Company: Infosys]
* **Learning Objective**: Manipulate indices in 2D arrays.
* **Problem Statement**: Given a 2D matrix, obtain and print its transpose.
* **Input**:
  ```text
  1 2 3
  4 5 6
  ```
* **Output**:
  ```text
  1 4
  2 5
  3 6
  ```
* **Hint**: Create a new matrix where `transpose[j][i] = matrix[i][j]`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        
        for (int[] row : transpose) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```
* **Complexity**: Time: $O(R \times C)$ | Space: $O(R \times C)$
</details>

### [ ] Problem 10.7: Rotate Array [Medium] [Topic: Loops] [Company: Infosys]
* **Learning Objective**: Swap parts of arrays efficiently using index reversal.
* **Problem Statement**: Rotate a single-dimensional array of size $N$ to the right by $K$ steps.
* **Input**: `arr = {1, 2, 3, 4, 5}`, `K = 2`
* **Output**:
  ```text
  {4, 5, 1, 2, 3}
  ```
* **Hint**: Reverse the entire array, then reverse the first $K$ elements, and finally reverse the remaining $N-K$ elements.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int k = 2;
        rotate(arr, k);
        System.out.println(Arrays.toString(arr));
    }
    
    public static void rotate(int[] nums, int k) {
        k = k % nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }
    
    private static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.8: Missing Number [Medium] [Topic: Loops] [Company: Infosys]
* **Learning Objective**: Apply summation formulas to solve problems in $O(N)$ time.
* **Problem Statement**: Given an array containing $N$ distinct numbers in the range `[0, N]`, return the only number in the range that is missing.
* **Input**: `arr = {3, 0, 1}` (N = 3)
* **Output**:
  ```text
  Missing: 2
  ```
* **Hint**: Sum numbers in range `0` to `N` using formula $\frac{N(N+1)}{2}$. Subtract the actual array elements sum.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 0, 1};
        int n = arr.length;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int val : arr) {
            actualSum += val;
        }
        System.out.println("Missing: " + (expectedSum - actualSum));
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

---

## 3. Wipro

📌 **Focus Areas**: Prime factors, loops, comparisons, and basic sort algorithms.

### [ ] Problem 10.9: GCD Calculation [Easy] [Topic: Methods] [Company: Wipro]
* **Learning Objective**: Execute Euclidean recursive algorithms.
* **Problem Statement**: Write a static method to calculate the Greatest Common Divisor (GCD) of two numbers.
* **Input**: `a = 56`, `b = 98`
* **Output**:
  ```text
  GCD: 14
  ```
* **Hint**: Euclidean formula: `gcd(a, b) = gcd(b, a % b)` until `b` becomes `0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("GCD: " + gcd(56, 98));
    }
    
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
}
```
* **Complexity**: Time: $O(\log(\min(A, B)))$ | Space: $O(\log(\min(A, B)))$ due to recursion stack.
</details>

### [ ] Problem 10.10: Armstrong Number [Easy] [Topic: Loops] [Company: Wipro]
* **Learning Objective**: Count digits and compute sum of powers.
* **Problem Statement**: Check if a number is an Armstrong number (the sum of its digits raised to the power of the number of digits equals the number itself).
* **Input**: `num = 153`
* **Output**:
  ```text
  Armstrong Number
  ```
* **Hint**: For `153`, digits = 3. Calculate $1^3 + 5^3 + 3^3 = 153$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int num = 153;
        System.out.println(isArmstrong(num) ? "Armstrong Number" : "Not Armstrong");
    }
    
    public static boolean isArmstrong(int n) {
        int temp = n;
        int digits = 0;
        while (temp > 0) {
            digits++;
            temp /= 10;
        }
        temp = n;
        int sum = 0;
        while (temp > 0) {
            int r = temp % 10;
            sum += Math.pow(r, digits);
            temp /= 10;
        }
        return sum == n;
    }
}
```
* **Complexity**: Time: $O(\log_{10}(N))$ | Space: $O(1)$
</details>

### [ ] Problem 10.11: Bubble Sort [Easy] [Topic: Loops] [Company: Wipro]
* **Learning Objective**: Swap items to sort array elements.
* **Problem Statement**: Implement Bubble Sort to sort an array of integers in ascending order.
* **Input**: `arr = {64, 34, 25, 12, 22}`
* **Output**:
  ```text
  Sorted: [12, 22, 25, 34, 64]
  ```
* **Hint**: Repeatedly step through the list, compare adjacent elements, and swap them if they are in the wrong order.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22};
        bubbleSort(arr);
        System.out.println("Sorted: " + Arrays.toString(arr));
    }
    
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Optimized check
        }
    }
}
```
* **Complexity**: Time: $O(N^2)$ (Worst case), $O(N)$ (Best case) | Space: $O(1)$
</details>

### [ ] Problem 10.12: Find Factorial Recursion [Medium] [Topic: Methods] [Company: Wipro]
* **Learning Objective**: Write recursive functions with appropriate base cases.
* **Problem Statement**: Calculate the factorial of integer $N$ using recursion.
* **Input**: `N = 5`
* **Output**:
  ```text
  Factorial: 120
  ```
* **Hint**: Base case: `n <= 1` returns `1`. Recursive call: `n * factorial(n - 1)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Factorial: " + fact(5));
    }
    
    public static long fact(int n) {
        if (n <= 1) return 1;
        return n * fact(n - 1);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$ recursive stack.
</details>

---

## 4. Cognizant

📌 **Focus Areas**: Strings, parsing, counting characters, conversions.

### [ ] Problem 10.13: Anagrams Check [Easy] [Topic: Strings] [Company: Cognizant]
* **Learning Objective**: Compare character distributions of strings.
* **Problem Statement**: Check if two strings are anagrams (contain the same characters in any order).
* **Input**: `s1 = "listen"`, `s2 = "silent"`
* **Output**:
  ```text
  Anagrams
  ```
* **Hint**: Clean strings, convert them to character arrays, sort them, and compare. Alternatively, count character frequencies.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String s1 = "listen", s2 = "silent";
        System.out.println(isAnagram(s1, s2) ? "Anagrams" : "Not Anagrams");
    }
    
    public static boolean isAnagram(String a, String b) {
        if (a.length() != b.length()) return false;
        char[] charA = a.toCharArray();
        char[] charB = b.toCharArray();
        Arrays.sort(charA);
        Arrays.sort(charB);
        return Arrays.equals(charA, charB);
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(N)$
</details>

### [ ] Problem 10.14: Char Frequency [Easy] [Topic: Strings] [Company: Cognizant]
* **Learning Objective**: Maintain character counts using frequency maps.
* **Problem Statement**: Count the occurrences of each character in a given string.
* **Input**: `"hello"`
* **Output**:
  ```text
  h: 1, e: 1, l: 2, o: 1
  ```
* **Hint**: Use a fixed-size integer array of size 256 for ASCII character counting.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "hello";
        int[] freq = new int[256];
        
        for (int i = 0; i < str.length(); i++) {
            freq[str.charAt(i)]++;
        }
        
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (freq[ch] > 0) {
                System.out.print(ch + ": " + freq[ch] + ", ");
                freq[ch] = 0; // Avoid duplicate printing
            }
        }
        System.out.println();
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.15: Binary to Decimal [Easy] [Topic: Loops] [Company: Cognizant]
* **Learning Objective**: Map base-2 representations to base-10.
* **Problem Statement**: Convert a binary string into its equivalent decimal integer.
* **Input**: `"1101"`
* **Output**:
  ```text
  Decimal: 13
  ```
* **Hint**: Parse the string from right to left. Multiply each digit by powers of 2.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String binary = "1101";
        int decimal = 0;
        int base = 1;
        for (int i = binary.length() - 1; i >= 0; i--) {
            if (binary.charAt(i) == '1') {
                decimal += base;
            }
            base *= 2;
        }
        System.out.println("Decimal: " + decimal);
    }
}
```
* **Complexity**: Time: $O(L)$ | Space: $O(1)$
</details>

### [ ] Problem 10.16: Remove Duplicates [Medium] [Topic: Strings] [Company: Cognizant]
* **Learning Objective**: Deduplicate characters using lookup flags.
* **Problem Statement**: Remove duplicate characters from a string, keeping only the first occurrence.
* **Input**: `"programming"`
* **Output**:
  ```text
  progaming
  ```
* **Hint**: Loop through characters and use a `StringBuilder` to build a clean string if a character has not already been appended.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "programming";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (sb.indexOf(String.valueOf(ch)) == -1) {
                sb.append(ch);
            }
        }
        System.out.println(sb.toString());
    }
}
```
* **Complexity**: Time: $O(N^2)$ (due to indexOf scan) | Space: $O(N)$
</details>

---

## 5. Zoho

📌 **Focus Areas**: String expansion, array sorting patterns, custom matrix traversals.

### [ ] Problem 10.17: Alternate Sorting [Medium] [Topic: Loops] [Company: Zoho]
* **Learning Objective**: Group extreme values alternatingly from sorted arrays.
* **Problem Statement**: Sort an array such that the first element is the maximum, the second is the minimum, the third is the second maximum, the fourth is the second minimum, and so on.
* **Input**: `arr = {1, 2, 3, 4, 5, 6}`
* **Output**:
  ```text
  {6, 1, 5, 2, 4, 3}
  ```
* **Hint**: Sort the array first, then use two pointers (left and right) to build the result.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        Arrays.sort(arr);
        int[] result = new int[arr.length];
        
        int left = 0, right = arr.length - 1;
        int idx = 0;
        while (left <= right) {
            if (idx % 2 == 0) {
                result[idx++] = arr[right--];
            } else {
                result[idx++] = arr[left++];
            }
        }
        System.out.println(Arrays.toString(result));
    }
}
```
* **Complexity**: Time: $O(N \log N)$ due to sorting | Space: $O(N)$
</details>

### [ ] Problem 10.18: String Expansion [Medium] [Topic: Strings] [Company: Zoho]
* **Learning Objective**: Parse repeated character run limits.
* **Problem Statement**: Expand a string where character counts are encoded (e.g., `a1b10` expands to `a` followed by ten `b`s).
* **Input**: `"a1b10"`
* **Output**:
  ```text
  abbbbbbbbbb
  ```
* **Hint**: Scan for letters, then parse the subsequent digits as integers to repeat the letter in the output.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String input = "a1b10";
        StringBuilder sb = new StringBuilder();
        int i = 0;
        
        while (i < input.length()) {
            char letter = input.charAt(i++);
            StringBuilder numberStr = new StringBuilder();
            while (i < input.length() && Character.isDigit(input.charAt(i))) {
                numberStr.append(input.charAt(i++));
            }
            int count = Integer.parseInt(numberStr.toString());
            for (int k = 0; k < count; k++) {
                sb.append(letter);
            }
        }
        System.out.println(sb.toString());
    }
}
```
* **Complexity**: Time: $O(N + L)$ where $L$ is the final output string size | Space: $O(L)$
</details>

### [ ] Problem 10.19: Print Pattern X [Medium] [Topic: Loops] [Company: Zoho]
* **Learning Objective**: Map character coordinates to 2D prints.
* **Problem Statement**: Print string values inside a diagonal cross "X" shape.
* **Input**: `"ZOHO"`
* **Output**:
  ```text
  Z  O
   OO 
   OO 
  Z  O
  ```
* **Hint**: Print when `i == j` or `i + j == length - 1`. Otherwise print spaces.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String str = "ZOHO";
        int len = str.length();
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                if (i == j) {
                    System.out.print(str.charAt(i));
                } else if (i + j == len - 1) {
                    System.out.print(str.charAt(j));
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
```
* **Complexity**: Time: $O(N^2)$ | Space: $O(1)$
</details>

### [ ] Problem 10.20: Substring Matching Index [Hard] [Topic: Strings] [Company: Zoho]
* **Learning Objective**: Search index offsets manually.
* **Problem Statement**: Check if string `s2` is present inside `s1` without using `.indexOf()`. Return the starting index, or -1.
* **Input**: `s1 = "geeksforgeeks"`, `s2 = "for"`
* **Output**:
  ```text
  Index: 5
  ```
* **Hint**: Use nested loops to check if sub-segments of `s1` starting at index `i` match `s2` character by character.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String s1 = "geeksforgeeks";
        String s2 = "for";
        System.out.println("Index: " + search(s1, s2));
    }
    
    public static int search(String s1, String s2) {
        int n = s1.length();
        int m = s2.length();
        for (int i = 0; i <= n - m; i++) {
            int j;
            for (j = 0; j < m; j++) {
                if (s1.charAt(i + j) != s2.charAt(j)) break;
            }
            if (j == m) return i;
        }
        return -1;
    }
}
```
* **Complexity**: Time: $O(N \times M)$ | Space: $O(1)$
</details>

---

## 6. Flipkart

📌 **Focus Areas**: Algorithms, sliding window, subarrays, stock analysis.

### [ ] Problem 10.21: Subarray Sum [Medium] [Topic: Loops] [Company: Flipkart]
* **Learning Objective**: Use prefix sums and HashMap to find subarrays in linear time.
* **Problem Statement**: Given an array of integers, find the number of subarrays that sum to exactly $K$.
* **Input**: `arr = {1, 1, 1}`, `K = 2`
* **Output**:
  ```text
  Subarrays Count: 2
  ```
* **Hint**: Track prefix sum inside a Map. Map maps prefix sums to their occurrences.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 1, 1};
        int k = 2;
        System.out.println("Subarrays Count: " + subarraySum(arr, k));
    }
    
    public static int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        for (int val : nums) {
            sum += val;
            if (map.containsKey(sum - k)) {
                count += map.get(sum - k);
            }
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 10.22: Stock Buy Sell [Medium] [Topic: Loops] [Company: Flipkart]
* **Learning Objective**: Trace minimum boundaries for maximizing profit margins.
* **Problem Statement**: Find the maximum profit you can achieve by buying and selling a stock on different days.
* **Input**: `prices = {7, 1, 5, 3, 6, 4}`
* **Output**:
  ```text
  Max Profit: 5
  ```
* **Hint**: Buy at `₹1` (index 1), sell at `₹6` (index 4). Profit is $6 - 1 = 5$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        System.out.println("Max Profit: " + maxProfit);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.23: Sliding Window Max [Hard] [Topic: Loops] [Company: Flipkart]
* **Learning Objective**: Implement sliding window using Double-Ended Queues (Deque).
* **Problem Statement**: Given array `nums` and window size `k`, find the maximum element in each sliding window.
* **Input**: `nums = {1, 3, -1, -3, 5, 3}`, `k = 3`
* **Output**:
  ```text
  {3, 3, 5, 5}
  ```
* **Hint**: Maintain indexes of elements in a Deque. Keep elements sorted in descending order inside the queue.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        int[] nums = {1, 3, -1, -3, 5, 3};
        int k = 3;
        int[] res = maxSlidingWindow(nums, k);
        System.out.println(Arrays.toString(res));
    }
    
    public static int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        if (n == 0) return new int[0];
        int[] res = new int[n - k + 1];
        int idx = 0;
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            // Remove out of window indices
            if (!q.isEmpty() && q.peekFirst() < i - k + 1) {
                q.pollFirst();
            }
            // Remove smaller elements
            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) {
                q.pollLast();
            }
            q.offerLast(i);
            if (i >= k - 1) {
                res[idx++] = nums[q.peekFirst()];
            }
        }
        return res;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(K)$
</details>

### [ ] Problem 10.24: Longest Unique Substring [Hard] [Topic: Strings] [Company: Flipkart]
* **Learning Objective**: Apply sliding window checks using a Map.
* **Problem Statement**: Find the length of the longest substring without repeating characters.
* **Input**: `"abcabcbb"`
* **Output**:
  ```text
  Length: 3
  ```
* **Hint**: Use a sliding window with a HashMap to track the last seen index of each character.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        String str = "abcabcbb";
        System.out.println("Length: " + lengthOfLongestSubstring(str));
    }
    
    public static int lengthOfLongestSubstring(String s) {
        int maxLen = 0;
        HashMap<Character, Integer> map = new HashMap<>();
        int left = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (map.containsKey(ch)) {
                left = Math.max(left, map.get(ch) + 1);
            }
            map.put(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(\min(N, M))$ where $M$ is alphabet character set size.
</details>

---

## 7. Swiggy

📌 **Focus Areas**: Coordinates/distance calculations, merge schedules, arrays.

### [ ] Problem 10.25: Coordinates Distance [Easy] [Topic: Methods] [Company: Swiggy]
* **Learning Objective**: Apply basic formulas using mathematical functions.
* **Problem Statement**: Calculate the Euclidean distance between a delivery partner and a customer given their coordinates.
* **Input**: `x1 = 2`, `y1 = 3`, `x2 = 5`, `y2 = 7`
* **Output**:
  ```text
  Distance: 5.0
  ```
* **Hint**: Distance formula: $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. Use `Math.sqrt()` and `Math.pow()`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double x1 = 2, y1 = 3, x2 = 5, y2 = 7;
        double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        System.out.println("Distance: " + distance);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 10.26: Merge Delivery Intervals [Medium] [Topic: Loops] [Company: Swiggy]
* **Learning Objective**: Sort and merge overlapping arrays.
* **Problem Statement**: Merge all overlapping delivery time windows.
* **Input**: `intervals = {{1, 3}, {2, 6}, {8, 10}}`
* **Output**:
  ```text
  {{1, 6}, {8, 10}}
  ```
* **Hint**: Sort intervals by start time. Merge current interval with next if `next.start <= current.end`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int[][] intervals = {{1, 3}, {2, 6}, {8, 10}};
        int[][] merged = merge(intervals);
        for (int[] interval : merged) {
            System.out.print(Arrays.toString(interval) + " ");
        }
        System.out.println();
    }
    
    public static int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> result = new ArrayList<>();
        int[] current = intervals[0];
        result.add(current);
        
        for (int[] interval : intervals) {
            if (interval[0] <= current[1]) {
                current[1] = Math.max(current[1], interval[1]); // Merge
            } else {
                current = interval;
                result.add(current);
            }
        }
        return result.toArray(new int[result.size()][]);
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(N)$
</details>

### [ ] Problem 10.27: Delivery Partner Allocator [Medium] [Topic: OOP] [Company: Swiggy]
* **Learning Objective**: Instantiate classes and assign objects dynamically.
* **Problem Statement**: Design a system that allocates orders to the nearest delivery partner. Model using simple classes `Partner` and `Order`.
* **Input**: `Partners: {P1 at distance 3, P2 at distance 1.5}`
* **Output**:
  ```text
  Assigned P2
  ```
* **Hint**: Implement class methods to find the minimum distance partner.
<details>
<summary>View Solution</summary>

```java
class Partner {
    String name;
    double distance;
    public Partner(String name, double distance) {
        this.name = name;
        this.distance = distance;
    }
}

public class Main {
    public static void main(String[] args) {
        Partner[] partners = {
            new Partner("P1", 3.0),
            new Partner("P2", 1.5),
            new Partner("P3", 4.2)
        };
        
        Partner nearest = partners[0];
        for (Partner p : partners) {
            if (p.distance < nearest.distance) {
                nearest = p;
            }
        }
        System.out.println("Assigned " + nearest.name);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

---

## 8. Zomato

📌 **Focus Areas**: Character indexing, arrays, sorting logic, filters.

### [ ] Problem 10.28: First Unique Character [Easy] [Topic: Strings] [Company: Zomato]
* **Learning Objective**: Map occurrences in single-pass string searches.
* **Problem Statement**: Find the index of the first non-repeating character in a string.
* **Input**: `"zomato"`
* **Output**:
  ```text
  Index: 0 (since 'z' is unique)
  ```
* **Hint**: Store counts in a frequency array of size 256. Perform a second pass to identify the first character with a count of 1.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String s = "zomato";
        System.out.println("Index: " + firstUniqueChar(s));
    }
    
    public static int firstUniqueChar(String s) {
        int[] count = new int[256];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i)]++;
        }
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i)] == 1) return i;
        }
        return -1;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.29: Sort Restaurant Ratings [Medium] [Topic: OOP] [Company: Zomato]
* **Learning Objective**: Implement custom sorting using the `Comparator` interface.
* **Problem Statement**: Sort a list of `Restaurant` objects based on their rating in descending order. If ratings match, sort by name.
* **Input**: `R1: 4.2, R2: 4.5, R3: 4.2` (R1 and R3 have same rating, sort alphabetically)
* **Output**: Sorted list.
* **Hint**: Implement a custom comparator comparing `double rating` first, then `String name`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;
import java.util.Comparator;

class Restaurant {
    String name;
    double rating;
    
    public Restaurant(String name, double rating) {
        this.name = name;
        this.rating = rating;
    }
    
    @Override
    public String toString() {
        return name + " (" + rating + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        Restaurant[] list = {
            new Restaurant("Biryani Zone", 4.2),
            new Restaurant("Burger Club", 4.5),
            new Restaurant("Chai Point", 4.2)
        };
        
        Arrays.sort(list, new Comparator<Restaurant>() {
            @Override
            public int compare(Restaurant r1, Restaurant r2) {
                if (r1.rating != r2.rating) {
                    return Double.compare(r2.rating, r1.rating); // Descending rating
                }
                return r1.name.compareTo(r2.name); // Ascending name
            }
        });
        
        System.out.println(Arrays.toString(list));
    }
}
```
* **Complexity**: Time: $O(N \log N)$ | Space: $O(N)$
</details>

### [ ] Problem 10.30: Valid Coupon Code [Medium] [Topic: Strings] [Company: Zomato]
* **Learning Objective**: Validate structural patterns using character conditions.
* **Problem Statement**: Check if a food coupon code is valid. It must be alphanumeric, capitalized, and have a length of exactly 8 characters.
* **Input**: `"ZOMATO50"`
* **Output**:
  ```text
  Valid
  ```
* **Hint**: Check string length, verify characters using `Character.isLetterOrDigit` and check if `code.equals(code.toUpperCase())`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String coupon = "ZOMATO50";
        System.out.println(isValid(coupon) ? "Valid" : "Invalid");
    }
    
    public static boolean isValid(String code) {
        if (code.length() != 8) return false;
        for (int i = 0; i < code.length(); i++) {
            char ch = code.charAt(i);
            if (!Character.isLetterOrDigit(ch)) return false;
            if (Character.isLetter(ch) && !Character.isUpperCase(ch)) return false;
        }
        return true;
    }
}
```
* **Complexity**: Time: $O(1)$ (fixed length 8) | Space: $O(1)$
</details>

---

## 9. Paytm

📌 **Focus Areas**: OOP design, transactions, ledger safety.

### [ ] Problem 10.31: Transaction Wallet [Medium] [Topic: OOP] [Company: Paytm]
* **Learning Objective**: Implement data validation in class methods.
* **Problem Statement**: Design a secure `Wallet` class containing variables `balance` (private). Expose `addFunds()` and `deductFunds()` methods with boundary checks.
* **Input**: `addFunds(100)`, `deductFunds(150)` (Current balance is 100)
* **Output**: Insufficient balance message.
* **Hint**: Prevent negative additions. Reject deductions that exceed the current balance.
<details>
<summary>View Solution</summary>

```java
class Wallet {
    private double balance;
    
    public void addFunds(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Balance: ₹" + balance);
        }
    }
    
    public void deductFunds(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Deducted: ₹" + amount + ", Remaining: ₹" + balance);
        } else {
            System.out.println("Transaction Rejected: Insufficient balance!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Wallet w = new Wallet();
        w.addFunds(100);
        w.deductFunds(150);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 10.32: Transaction Hash Match [Medium] [Topic: Loops] [Company: Paytm]
* **Learning Objective**: Search index mappings manually.
* **Problem Statement**: Given an array of transaction IDs, check if a target transaction ID is present using Binary Search.
* **Input**: `transactions = {1001, 1004, 1009, 1020}`, `target = 1009`
* **Output**:
  ```text
  Found at index: 2
  ```
* **Hint**: Array must be sorted. Maintain bounds `low` and `high`, calculating `mid = low + (high - low) / 2`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] txs = {1001, 1004, 1009, 1020};
        int target = 1009;
        System.out.println("Found at index: " + binarySearch(txs, target));
    }
    
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
```
* **Complexity**: Time: $O(\log N)$ | Space: $O(1)$
</details>

### [ ] Problem 10.33: UPI Pin Validation [Medium] [Topic: Strings] [Company: Paytm]
* **Learning Objective**: Match string patterns using regular expressions.
* **Problem Statement**: Validate a UPI PIN string. It must contain exactly 4 or 6 numeric digits.
* **Input**: `"12345"`
* **Output**:
  ```text
  Invalid
  ```
* **Hint**: Use regex `^[0-9]{4}$|^[0-9]{6}$`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        String pin = "12345";
        System.out.println(pin.matches("^[0-9]{4}$|^[0-9]{6}$") ? "Valid" : "Invalid");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 10. Razorpay

📌 **Focus Areas**: Fee calculations, currency mapping, methods.

### [ ] Problem 10.34: Currency Converter [Easy] [Topic: Methods] [Company: Razorpay]
* **Learning Objective**: Map and convert values using static multipliers.
* **Problem Statement**: Convert a payment amount from USD to INR (assume fixed conversion rate of 1 USD = 83.0 INR).
* **Input**: `usd = 50.0`
* **Output**:
  ```text
  ₹4150.00
  ```
* **Hint**: Simple multiplication: `usd * 83.0`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double usd = 50.0;
        double inr = convertUsdToInr(usd);
        System.out.printf("₹%.2f\n", inr);
    }
    
    public static double convertUsdToInr(double usd) {
        return usd * 83.0;
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 10.35: Transaction Fee Calculator [Medium] [Topic: If-Else] [Company: Razorpay]
* **Learning Objective**: Apply conditional fee rates.
* **Problem Statement**: Calculate Razorpay transaction fees: 2% for standard domestic transactions, 3% for international, plus 18% GST on the fee itself.
* **Input**: `amount = 5000.0`, `isInternational = false`
* **Output**:
  ```text
  Total Fee: ₹118.00
  ```
* **Hint**: Base fee is $5000 \times 0.02 = 100$. GST is $100 \times 0.18 = 18$. Total fee is $100 + 18 = 118$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        double amount = 5000.0;
        boolean isInternational = false;
        
        double rate = isInternational ? 0.03 : 0.02;
        double baseFee = amount * rate;
        double gst = baseFee * 0.18;
        double totalFee = baseFee + gst;
        
        System.out.printf("Total Fee: ₹%.2f\n", totalFee);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>
