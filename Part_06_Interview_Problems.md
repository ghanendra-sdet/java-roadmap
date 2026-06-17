# Milestone 6: Technical Interview Preparation

This section covers high-frequency coding interview problems across fundamental computer science data structures and algorithms.

---

## 1. Two Pointers & Binary Search

📌 **Core Concept**: Binary Search divides sorted arrays in halves to run searches in logarithmic time. The Two Pointers technique traverses collections from opposite directions to solve sum or boundary checks in linear time.

### [ ] Problem 6.1: Container With Most Water [Medium] [Topic: Two Pointers]
* **Learning Objective**: Optimize structural loops from quadratic to linear time using two pointers.
* **Problem Statement**: Given an array representing coordinates of vertical lines, find the maximum area of water a container can hold.
* **Input**: `height = {1, 8, 6, 2, 5, 4, 8, 3, 7}`
* **Output**:
  ```text
  Max Area: 49
  ```
* **Hint**: Start with pointers at the left and right ends. In each step, calculate the area and shift the pointer pointing to the shorter line inward.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        System.out.println("Max Area: " + maxArea(height));
    }
    
    public static int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int max = 0;
        
        while (left < right) {
            int h = Math.min(height[left], height[right]);
            int area = h * (right - left);
            max = Math.max(max, area);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.2: Three Sum [Medium] [Topic: Two Pointers]
* **Learning Objective**: Combine sorting with two-pointer traversals to check triples.
* **Problem Statement**: Find all unique triplets in an array that add up to zero.
* **Input**: `nums = {-1, 0, 1, 2, -1, -4}`
* **Output**:
  ```text
  [[-1, -1, 2], [-1, 0, 1]]
  ```
* **Hint**: Sort the array. Loop through elements, using a two-pointer search on the remaining elements to find pairs that sum to the negative of the current element. Skip duplicate values to prevent duplicate triplets.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicates
            
            int left = i + 1;
            int right = nums.length - 1;
            int target = -nums[i];
            
            while (left < right) {
                int sum = nums[left] + nums[right];
                if (sum == target) {
                    res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++; // Skip duplicates
                    while (left < right && nums[right] == nums[right - 1]) right--; // Skip duplicates
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
```
* **Complexity**: Time: $O(N^2)$ | Space: $O(\log N)$ (sorting overhead)
</details>

### [ ] Problem 6.3: Rotated Sorted Array Search [Hard] [Topic: Binary Search]
* **Learning Objective**: Search sorted collections that have been rotated by an offset.
* **Problem Statement**: Find target $T$ in a sorted array that has been rotated at an unknown pivot.
* **Input**: `nums = {4, 5, 6, 7, 0, 1, 2}`, `target = 0`
* **Output**:
  ```text
  Index: 4
  ```
* **Hint**: In every binary search step, one half of the array (left or right of mid) is guaranteed to be sorted. Check which half is sorted and verify if the target falls within its range.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[low] <= nums[mid]) { // Left half is sorted
                if (target >= nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else { // Right half is sorted
                if (target > nums[mid] && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
}
```
* **Complexity**: Time: $O(\log N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.4: Remove Duplicates [Easy] [Topic: Two Pointers]
* **Learning Objective**: Edit array contents in-place using read and write pointers.
* **Problem Statement**: Remove duplicates from a sorted array in-place, returning the new length.
* **Input**: `nums = {1, 1, 2, 2, 3}`
* **Output**:
  ```text
  Length: 3, Array: {1, 2, 3}
  ```
* **Hint**: Keep a writer pointer at index 1. Loop through the array, writing the current element to the writer pointer position only if it differs from the previous element.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int writer = 1;
        for (int reader = 1; reader < nums.length; reader++) {
            if (nums[reader] != nums[reader - 1]) {
                nums[writer] = nums[reader];
                writer++;
            }
        }
        return writer;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.5: Subarray Sum Equals K [Medium] [Topic: Two Pointers]
* **Learning Objective**: Search collections using accumulative counts and prefix sums.
* **Problem Statement**: Find the total number of continuous subarrays whose sum equals $K$.
* **Input**: `nums = {1, 1, 1}`, `K = 2`
* **Output**:
  ```text
  Count: 2
  ```
* **Hint**: Track running prefix sums. Use a HashMap to store the frequency of each prefix sum value encountered, and lookup `currentSum - K`.
<details>
<summary>View Solution</summary>

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1); // Base case: prefix sum of 0 has frequency 1
        
        for (int num : nums) {
            sum += num;
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

### [ ] Problem 6.6: First and Last Position [Medium] [Topic: Binary Search]
* **Learning Objective**: Adapt binary search to locate range boundaries.
* **Problem Statement**: Find the starting and ending index of a target value in a sorted array.
* **Input**: `nums = {5, 7, 7, 8, 8, 10}`, `target = 8`
* **Output**:
  ```text
  Range: [3, 4]
  ```
* **Hint**: Run binary search twice: once to find the leftmost index, and once to find the rightmost index.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};
        result[0] = findBoundary(nums, target, true);
        result[1] = findBoundary(nums, target, false);
        return result;
    }
    
    private static int findBoundary(int[] nums, int target, boolean isFirst) {
        int low = 0, high = nums.length - 1;
        int idx = -1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                idx = mid;
                if (isFirst) {
                    high = mid - 1; // Narrow search to the left
                } else {
                    low = mid + 1; // Narrow search to the right
                }
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return idx;
    }
}
```
* **Complexity**: Time: $O(\log N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.7: Median of Two Sorted Arrays [Hard] [Topic: Binary Search]
* **Learning Objective**: Search two sorted dimensions using partition splits.
* **Problem Statement**: Find the median of two sorted arrays of sizes $M$ and $N$.
* **Input**: `nums1 = {1, 3}`, `nums2 = {2}`
* **Output**:
  ```text
  Median: 2.0
  ```
* **Hint**: Perform binary search on the partition cut point of the shorter array, ensuring the left and right elements match conditions.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
        
        int x = nums1.length;
        int y = nums2.length;
        int low = 0, high = x;
        
        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = (x + y + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((x + y) % 2 == 0) {
                    return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                } else {
                    return (double)Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }
        throw new IllegalArgumentException();
    }
}
```
* **Complexity**: Time: $O(\log(\min(M, N)))$ | Space: $O(1)$
</details>

### [ ] Problem 6.8: Two Sum Sorted [Easy] [Topic: Two Pointers]
* **Learning Objective**: Use two pointers to search for a pair that sums to a target.
* **Problem Statement**: Find indices of two numbers in a 1-indexed sorted array that add up to target $T$.
* **Input**: `numbers = {2, 7, 11, 15}`, `target = 9`
* **Output**:
  ```text
  [1, 2]
  ```
* **Hint**: Use left and right pointers. If their sum is too small, increment the left pointer. If too large, decrement the right pointer.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1}; // 1-indexed conversion
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[]{-1, -1};
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.9: Valid Palindrome String [Easy] [Topic: Two Pointers]
* **Learning Objective**: Verify palindromes ignoring whitespace and casing.
* **Problem Statement**: Verify if a string is a palindrome, ignoring non-alphanumeric characters and casing.
* **Input**: `"A man, a plan, a canal: Panama"`
* **Output**:
  ```text
  Valid: true
  ```
* **Hint**: Start pointers at both ends. Skip non-alphanumeric characters (`Character.isLetterOrDigit()`) as you move pointers inward.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.10: Search Insert Position [Easy] [Topic: Binary Search]
* **Learning Objective**: Find insert points in sorted collections using binary search.
* **Problem Statement**: Find the index of target $T$ in a sorted array. If not found, return the index where it should be inserted.
* **Input**: `nums = {1, 3, 5, 6}`, `target = 5`
* **Output**:
  ```text
  Index: 2
  ```
* **Hint**: Perform a standard binary search. If the target is not found, the `low` pointer will point to the correct insertion index.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int searchInsert(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return low; // low pointer holds insertion index
    }
}
```
* **Complexity**: Time: $O(\log N)$ | Space: $O(1)$
</details>

---

## 2. Recursion

📌 **Core Concept**: Recursion is a method solving a problem by calling itself on smaller sub-problems. Every recursive method must contain a *base case* to terminate recursion and a *recursive step* to progress towards the base case.

### [ ] Problem 6.11: Fib Recursion [Easy] [Topic: Recursion]
* **Learning Objective**: Calculate sequence numbers using recursive branches.
* **Problem Statement**: Calculate the $N$-th Fibonacci number using recursion.
* **Input**: `N = 6`
* **Output**:
  ```text
  8 (Sequence: 0, 1, 1, 2, 3, 5, 8)
  ```
* **Hint**: Base cases: `n = 0` returns `0`, `n = 1` returns `1`. Recursive step: returns `fib(n-1) + fib(n-2)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(fib(6));
    }
    
    public static int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fib(n - 1) + fib(n - 2);
    }
}
```
* **Warning**: Direct double recursion on Fibonacci runs in exponential time ($O(2^N)$), which is highly inefficient for large values of $N$.
* **Complexity**: Time: $O(2^N)$ | Space: $O(N)$ (call stack depth)
</details>

### [ ] Problem 6.12: Power of Three [Easy] [Topic: Recursion]
* **Learning Objective**: Implement integer state division checks recursively.
* **Problem Statement**: Check if an integer is a power of three.
* **Input**: `n = 27`
* **Output**:
  ```text
  true
  ```
* **Hint**: Base cases: `n <= 0` returns `false`, `n = 1` returns `true`. If `n % 3 != 0`, return `false`. Else, return `isPowerOfThree(n / 3)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean isPowerOfThree(int n) {
        if (n <= 0) return false;
        if (n == 1) return true;
        return (n % 3 == 0) && isPowerOfThree(n / 3);
    }
}
```
* **Complexity**: Time: $O(\log_3 N)$ | Space: $O(\log_3 N)$
</details>

### [ ] Problem 6.13: Permutations [Hard] [Topic: Recursion]
* **Learning Objective**: Backtrack array choices recursively to find permutations.
* **Problem Statement**: Generate all unique permutations of a list of numbers.
* **Input**: `nums = {1, 2, 3}`
* **Output**:
  ```text
  [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  ```
* **Hint**: Use backtracking. Swap the current element with subsequent elements to generate branches, and backtrack by swapping them back.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, new boolean[nums.length]);
        return result;
    }
    
    private void backtrack(List<List<Integer>> res, List<Integer> temp, int[] nums, boolean[] used) {
        if (temp.size() == nums.length) {
            res.add(new ArrayList<>(temp));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            temp.add(nums[i]);
            backtrack(res, temp, nums, used);
            temp.remove(temp.size() - 1); // Backtrack step
            used[i] = false;
        }
    }
}
```
* **Complexity**: Time: $O(N! \times N)$ | Space: $O(N)$
</details>

### [ ] Problem 6.14: Subsets [Medium] [Topic: Recursion]
* **Learning Objective**: Solve power set generation problems using backtracking.
* **Problem Statement**: Given a set of distinct integers, return all possible subsets (the power set).
* **Input**: `nums = {1, 2}`
* **Output**:
  ```text
  [[], [1], [2], [1, 2]]
  ```
* **Hint**: Use backtracking. Decide whether to include or exclude each element as you traverse the array.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        backtrack(list, new ArrayList<>(), nums, 0);
        return list;
    }
    
    private void backtrack(List<List<Integer>> list, List<Integer> temp, int[] nums, int start) {
        list.add(new ArrayList<>(temp));
        for (int i = start; i < nums.length; i++) {
            temp.add(nums[i]);
            backtrack(list, temp, nums, i + 1);
            temp.remove(temp.size() - 1); // Backtrack
        }
    }
}
```
* **Complexity**: Time: $O(2^N)$ | Space: $O(N)$
</details>

### [ ] Problem 6.15: Reverse String Recursion [Easy] [Topic: Recursion]
* **Learning Objective**: Reverse structures using recursive string slices.
* **Problem Statement**: Reverse a string using recursion.
* **Input**: `"Java"`
* **Output**:
  ```text
  avaJ
  ```
* **Hint**: Base case: `s.isEmpty()` returns `""`. Recursive step: returns the last character followed by `reverse(substring)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static String reverse(String s) {
        if (s.isEmpty()) return s;
        return s.charAt(s.length() - 1) + reverse(s.substring(0, s.length() - 1));
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 6.16: Generate Parentheses [Hard] [Topic: Recursion]
* **Learning Objective**: Enforce parenthetical rules inside recursion calls.
* **Problem Statement**: Generate all combinations of $N$ pairs of well-formed parentheses.
* **Input**: `N = 2`
* **Output**:
  ```text
  ["(())", "()()"]
  ```
* **Hint**: Use backtracking. Track the number of open and closed parentheses used. Add an open parenthesis if `open < N`, and a close parenthesis if `close < open`.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<>();
        backtrack(ans, "", 0, 0, n);
        return ans;
    }
    
    private void backtrack(List<String> ans, String cur, int open, int close, int max) {
        if (cur.length() == max * 2) {
            ans.add(cur);
            return;
        }
        if (open < max) {
            backtrack(ans, cur + "(", open + 1, close, max);
        }
        if (close < open) {
            backtrack(ans, cur + ")", open, close + 1, max);
        }
    }
}
```
* **Complexity**: Time: $O(\frac{4^N}{\sqrt{N}})$ (Catalan number bounds) | Space: $O(N)$
</details>

### [ ] Problem 6.17: Word Search [Hard] [Topic: Recursion]
* **Learning Objective**: Implement DFS matrix traversals (backtracking).
* **Problem Statement**: Determine if a word exists in a 2D grid of characters. The word can be constructed from letters of sequentially adjacent cells.
* **Input**: `grid = {{'A','B','C'}, {'S','F','C'}}, word = "BCC"`
* **Output**:
  ```text
  true
  ```
* **Hint**: Loop through the grid to locate the first character. Use DFS to search in four directions, temporarily marking visited grid cells to prevent reuse.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                if (dfs(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
    
    private boolean dfs(char[][] board, String word, int r, int c, int index) {
        if (index == word.length()) return true;
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] != word.charAt(index)) {
            return false;
        }
        
        char temp = board[r][c];
        board[r][c] = '#'; // Mark cell as visited
        
        boolean found = dfs(board, word, r + 1, c, index + 1) ||
                        dfs(board, word, r - 1, c, index + 1) ||
                        dfs(board, word, r, c + 1, index + 1) ||
                        dfs(board, word, r, c - 1, index + 1);
                        
        board[r][c] = temp; // Restore cell state (backtrack)
        return found;
    }
}
```
* **Complexity**: Time: $O(R \times C \times 4^L)$ (where $L$ is word length) | Space: $O(L)$
</details>

### [ ] Problem 6.18: Letter Combinations [Medium] [Topic: Recursion]
* **Learning Objective**: Map and generate letter choices recursively.
* **Problem Statement**: Given a string containing digits from 2-9, return all possible letter combinations that the number could represent based on a telephone keypad mapping.
* **Input**: `"23"`
* **Output**:
  ```text
  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
  ```
* **Hint**: Define a keypad mapping using an array of strings. Use backtracking to build the combination combinations character-by-character.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    private static final String[] KEYPAD = {
        "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
    };
    
    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if (digits == null || digits.isEmpty()) return res;
        backtrack(res, "", digits, 0);
        return res;
    }
    
    private void backtrack(List<String> res, String current, String digits, int index) {
        if (index == digits.length()) {
            res.add(current);
            return;
        }
        String letters = KEYPAD[digits.charAt(index) - '0'];
        for (char ch : letters.toCharArray()) {
            backtrack(res, current + ch, digits, index + 1);
        }
    }
}
```
* **Complexity**: Time: $O(3^N \times 4^M)$ (where $N$ is 3-letter digits count, $M$ is 4-letter digits count) | Space: $O(N+M)$
</details>

---

## 3. Linked Lists

📌 **Core Concept**: A Linked List is a dynamic linear data structure where elements (Nodes) are linked using pointers instead of being stored in contiguous memory. Loops are avoided by tracking reference swaps.

### [ ] Problem 6.19: Reverse Linked List [Easy] [Topic: Linked List]
* **Learning Objective**: Reverse node link pointers iteratively in-place.
* **Problem Statement**: Reverse a singly linked list in-place and return the new head node.
* **Input**: `1 -> 2 -> 3 -> null`
* **Output**:
  ```text
  3 -> 2 -> 1 -> null
  ```
* **Hint**: Traverse the list. Keep track of three pointers: `prev` (null), `curr` (head), and `next`. In each step, save `curr.next`, set `curr.next = prev`, and shift the pointers forward.
<details>
<summary>View Solution</summary>

```java
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Main {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next; // Save next node
            curr.next = prev;              // Reverse link
            prev = curr;                   // Move prev pointer forward
            curr = nextTemp;               // Move curr pointer forward
        }
        return prev; // prev holds the new head node
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.20: Merge Two Sorted Lists [Easy] [Topic: Linked List]
* **Learning Objective**: Merge node pointers in sorted order.
* **Problem Statement**: Merge two sorted linked lists into a single sorted linked list.
* **Input**: `l1 = 1->3, l2 = 2->4`
* **Output**:
  ```text
  1 -> 2 -> 3 -> 4 -> null
  ```
* **Hint**: Create a dummy node as the starting head. Compare elements of both lists, linking the smaller node to the merged list, and advance its pointer.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2; // Link any remaining elements
        return dummy.next;
    }
}
```
* **Complexity**: Time: $O(N+M)$ | Space: $O(1)$
</details>

### [ ] Problem 6.21: Linked List Cycle [Medium] [Topic: Linked List]
* **Learning Objective**: Detect loops in pointer networks using double-speed runners (Floyd's Cycle-Finding Algorithm).
* **Problem Statement**: Determine if a linked list contains a cycle.
* **Input**: Node links loop back to a previously visited node
* **Output**:
  ```text
  Has Cycle: true
  ```
* **Hint**: Use two pointers: a slow pointer (`slow`) that moves one step at a time, and a fast pointer (`fast`) that moves two steps at a time. If they meet, the list contains a cycle.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                return true; // Cycle detected
            }
        }
        return false;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.22: Remove Nth Node From End [Medium] [Topic: Linked List]
* **Learning Objective**: Coordinate node offsets using offset pointer gaps.
* **Problem Statement**: Remove the $N$-th node from the end of a linked list.
* **Input**: `1 -> 2 -> 3 -> 4`, `N = 2` (removes 3)
* **Output**:
  ```text
  1 -> 2 -> 4 -> null
  ```
* **Hint**: Use two pointers. Advance the first pointer $N$ steps. Then, move both pointers forward together until the first pointer reaches the end. The second pointer will point to the node preceding the one to be removed.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy;
        ListNode second = dummy;
        
        // Advance first pointer n steps
        for (int i = 0; i <= n; i++) {
            first = first.next;
        }
        
        // Move both pointers together until first reaches the end
        while (first != null) {
            first = first.next;
            second = second.next;
        }
        
        second.next = second.next.next; // Remove target node
        return dummy.next;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.23: Middle of Linked List [Easy] [Topic: Linked List]
* **Learning Objective**: Find node midpoints using fast and slow pointers.
* **Problem Statement**: Return the middle node of a singly linked list. If there are two middle nodes, return the second middle node.
* **Input**: `1 -> 2 -> 3 -> 4 -> 5`
* **Output**: Node `3`
* **Hint**: Let slow pointer move 1 step and fast pointer move 2 steps. When fast reaches the end, slow will be at the middle.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.24: Intersection of Two Lists [Medium] [Topic: Linked List]
* **Learning Objective**: Align list traversal offsets.
* **Problem Statement**: Find the node where two singly linked lists intersect. Return null if they do not intersect.
* **Input**: `l1 = a->b->c, l2 = d->b->c` (intersect at b)
* **Output**: Node `b`
* **Hint**: Use two pointers. When a pointer reaches the end of its list, redirect it to the head of the other list. They will align and meet at the intersection point.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode pA = headA;
        ListNode pB = headB;
        
        while (pA != pB) {
            pA = (pA == null) ? headB : pA.next;
            pB = (pB == null) ? headA : pB.next;
        }
        return pA;
    }
}
```
* **Complexity**: Time: $O(N+M)$ | Space: $O(1)$
</details>

### [ ] Problem 6.25: Palindrome Linked List [Hard] [Topic: Linked List]
* **Learning Objective**: Combine multiple linked list operations to solve a complex problem.
* **Problem Statement**: Determine if a singly linked list is a palindrome.
* **Input**: `1 -> 2 -> 2 -> 1 -> null`
* **Output**:
  ```text
  Palindrome: true
  ```
* **Hint**: Find the middle of the list. Reverse the second half of the list, then compare it to the first half.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) return true;
        
        // Find middle
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Reverse second half
        ListNode prev = null;
        ListNode curr = slow;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        // Compare halves
        ListNode p1 = head;
        ListNode p2 = prev; // Head of reversed second half
        while (p2 != null) {
            if (p1.val != p2.val) return false;
            p1 = p1.next;
            p2 = p2.next;
        }
        return true;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

---

## 4. Trees & Graphs

📌 **Core Concept**: A Tree is an acyclic connected graph. A Binary Search Tree (BST) maintains sorted constraints (left children values $<$ parent value $<$ right children values). A Graph contains nodes (Vertices) connected by pointers (Edges), searched using DFS (depth-first) or BFS (breadth-first).

### [ ] Problem 6.26: Inorder Traversal [Easy] [Topic: Trees]
* **Learning Objective**: Traverse trees recursively.
* **Problem Statement**: Implement the Inorder Traversal of a Binary Tree (Left → Parent → Right).
* **Input**: Root node
* **Output**: Displays nodes in inorder sequence.
* **Hint**: Base case: `node == null` returns. Recursively call `inorder(node.left)`, print `node.val`, then recursively call `inorder(node.right)`.
<details>
<summary>View Solution</summary>

```java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class Main {
    public static void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(H)$ (where $H$ is tree height)
</details>

### [ ] Problem 6.27: Max Depth of Tree [Easy] [Topic: Trees]
* **Learning Objective**: Calculate tree dimensions recursively.
* **Problem Statement**: Find the maximum depth (height) of a binary tree.
* **Input**: Root node of tree height 3
* **Output**:
  ```text
  Depth: 3
  ```
* **Hint**: The max depth is `1 + Math.max(maxDepth(left), maxDepth(right))`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(H)$
</details>

### [ ] Problem 6.28: Validate Binary Search Tree [Medium] [Topic: Trees]
* **Learning Objective**: Enforce BST value boundary rules across nodes recursively.
* **Problem Statement**: Validate if a given binary tree is a valid Binary Search Tree (BST).
* **Input**: Root node
* **Output**:
  ```text
  Valid BST: true
  ```
* **Hint**: Pass minimum and maximum value bounds down the recursive calls. For each node, check if its value falls within the valid bounds.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
    }
    
    private static boolean validate(TreeNode node, Integer low, Integer high) {
        if (node == null) return true;
        
        if ((low != null && node.val <= low) || (high != null && node.val >= high)) {
            return false;
        }
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
}
```
* **Common Mistakes**: Only comparing a parent node to its immediate left and right children. A valid BST requires *all* nodes in the left subtree to be smaller than the ancestor node.
* **Complexity**: Time: $O(N)$ | Space: $O(H)$
</details>

### [ ] Problem 6.29: Invert Binary Tree [Easy] [Topic: Trees]
* **Learning Objective**: Swap node children recursively to invert tree directions.
* **Problem Statement**: Invert (mirror) a binary tree.
* **Input**: Root node
* **Output**: Subtree branches mirrored.
* **Hint**: Swap `left` and `right` child references recursively for every node in the tree.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        
        // Swap references
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
        
        invertTree(root.left);
        invertTree(root.right);
        
        return root;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(H)$
</details>

### [ ] Problem 6.30: Level Order Traversal [Medium] [Topic: Trees]
* **Learning Objective**: Traverse tree levels using queues (Breadth-First Search).
* **Problem Statement**: Implement the level order (BFS) traversal of a binary tree.
* **Input**: Root node
* **Output**: List of values grouped by tree levels.
* **Hint**: Use a Queue. Enqueue the root. In each step, poll a node, add its value to the result, and enqueue its left and right children.
<details>
<summary>View Solution</summary>

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Main {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        
        while (!q.isEmpty()) {
            int levelSize = q.size();
            List<Integer> levelList = new ArrayList<>();
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode curr = q.poll();
                levelList.add(curr.val);
                if (curr.left != null) q.offer(curr.left);
                if (curr.right != null) q.offer(curr.right);
            }
            result.add(levelList);
        }
        return result;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(W)$ (where $W$ is maximum width of tree)
</details>

### [ ] Problem 6.31: BFS Graph Path [Medium] [Topic: Graphs]
* **Learning Objective**: Implement BFS search to find paths in graphs.
* **Problem Statement**: Find if a path exists between start node $U$ and end node $V$ in an unweighted directed graph.
* **Input**: Adjacency list representation of graph
* **Output**:
  ```text
  Path Exists: true
  ```
* **Hint**: Use BFS starting from node $U$. Keep a visited Set to prevent infinite loops. If you poll node $V$ from the queue, return true.
<details>
<summary>View Solution</summary>

```java
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class Main {
    public static boolean validPath(Map<Integer, List<Integer>> adjList, int start, int end) {
        if (start == end) return true;
        
        Queue<Integer> q = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        
        q.offer(start);
        visited.add(start);
        
        while (!q.isEmpty()) {
            int curr = q.poll();
            if (curr == end) return true;
            
            List<Integer> neighbors = adjList.getOrDefault(curr, new LinkedList<>());
            for (int neighbor : neighbors) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    q.offer(neighbor);
                }
            }
        }
        return false;
    }
}
```
* **Complexity**: Time: $O(V + E)$ (Vertices + Edges) | Space: $O(V)$
</details>

### [ ] Problem 6.32: Number of Islands [Hard] [Topic: Graphs]
* **Learning Objective**: Traverse grids using DFS/BFS.
* **Problem Statement**: Given a 2D grid of `'1'`s (land) and `'0'`s (water), count the number of islands.
* **Input**: Grid: `{{'1','1','0'}, {'0','0','1'}}`
* **Output**:
  ```text
  Islands: 2
  ```
* **Hint**: Loop through the grid. When you find a `'1'`, increment your island counter and use DFS to sink all connected land cells (`'1'` -> `'0'`).
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0;
        
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[r].length; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    sink(grid, r, c);
                }
            }
        }
        return count;
    }
    
    private static void sink(char[][] grid, int r, int c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == '0') {
            return;
        }
        grid[r][c] = '0'; // Sink current land cell
        sink(grid, r + 1, c);
        sink(grid, r - 1, c);
        sink(grid, r, c + 1);
        sink(grid, r, c - 1);
    }
}
```
* **Complexity**: Time: $O(R \times C)$ | Space: $O(R \times C)$ (call stack depth in worst case)
</details>

---

## 5. Dynamic Programming

📌 **Core Concept**: Dynamic Programming (DP) solves complex problems by combining solutions to overlapping sub-problems. It uses *Memoization* (top-down caching of recursive results) or *Tabulation* (bottom-up iterative arrays) to optimize execution times.

### [ ] Problem 6.33: Climbing Stairs [Easy] [Topic: DP]
* **Learning Objective**: Map Fibonacci patterns to real-world scenarios.
* **Problem Statement**: Find the number of unique ways to climb $N$ stairs if you can take 1 or 2 steps at a time.
* **Input**: `N = 4`
* **Output**:
  ```text
  Ways: 5
  ```
* **Hint**: To reach step $i$, you can either take 1 step from step $i-1$ or 2 steps from step $i-2$. Formula: $DP[i] = DP[i-1] + DP[i-2]$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Ways: " + climbStairs(4));
    }
    
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        int first = 1;
        int second = 2;
        
        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }
        return second;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.34: House Robber [Medium] [Topic: DP]
* **Learning Objective**: Find optimal choices across arrays using Dynamic Programming.
* **Problem Statement**: Maximize the amount of money you can rob from a row of houses, without robbing two adjacent houses.
* **Input**: `nums = {2, 7, 9, 3, 1}`
* **Output**:
  ```text
  Max Robbed: 12 (Rob houses 0, 2, and 4)
  ```
* **Hint**: For house $i$, you can either rob it ($nums[i] + DP[i-2]$) or skip it ($DP[i-1]$). Formula: $DP[i] = \max(DP[i-1], nums[i] + DP[i-2])$.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int prev2 = 0;
        int prev1 = 0;
        
        for (int num : nums) {
            int temp = prev1;
            prev1 = Math.max(prev1, prev2 + num);
            prev2 = temp;
        }
        return prev1;
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 6.35: Coin Change [Medium] [Topic: DP]
* **Learning Objective**: Solve combination coin summation problems using tabulation.
* **Problem Statement**: Find the minimum number of coins needed to make up a target amount. Return `-1` if the amount cannot be met.
* **Input**: `coins = {1, 2, 5}`, `amount = 11`
* **Output**:
  ```text
  Min Coins: 3 (5 + 5 + 1)
  ```
* **Hint**: Create a 1D DP array of size `amount + 1` initialized to a large value. For each amount $i$, check if you can use each coin: `DP[i] = Math.min(DP[i], 1 + DP[i - coin])`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static int coinChange(int[] coins, int amount) {
        int max = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, max);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```
* **Complexity**: Time: $O(A \times C)$ (where $A$ is amount, $C$ is coin count) | Space: $O(A)$
</details>

### [ ] Problem 6.36: Longest Common Subsequence [Medium] [Topic: DP]
* **Learning Objective**: Compare character sequences using 2D DP matrices.
* **Problem Statement**: Find the length of the longest common subsequence between two strings.
* **Input**: `text1 = "abcde"`, `text2 = "ace"`
* **Output**:
  ```text
  LCS Length: 3 (Subsequence: "ace")
  ```
* **Hint**: Create a 2D DP matrix of size $(M+1) \times (N+1)$. If characters match, `DP[i][j] = 1 + DP[i-1][j-1]`. If they mismatch, `DP[i][j] = Math.max(DP[i-1][j], DP[i][j-1])`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
}
```
* **Complexity**: Time: $O(M \times N)$ | Space: $O(M \times N)$
</details>

### [ ] Problem 6.37: Longest Increasing Subsequence [Medium] [Topic: DP]
* **Learning Objective**: Solve array sequence challenges using DP.
* **Problem Statement**: Find the length of the longest strictly increasing subsequence in an integer array.
* **Input**: `nums = {10, 9, 2, 5, 3, 7, 101, 18}`
* **Output**:
  ```text
  LIS Length: 4 (Subsequence: {2, 3, 7, 101} or {2, 5, 7, 18})
  ```
* **Hint**: Create a 1D DP array of size $N$ initialized to 1. For each index $i$, check all preceding indices $j$: if `nums[i] > nums[j]`, update `DP[i] = Math.max(DP[i], 1 + DP[j])`.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static int lengthOfLIS(int[] nums) {
        if (nums.length == 0) return 0;
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        int max = 1;
        
        for (int i = 1; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            max = Math.max(max, dp[i]);
        }
        return max;
    }
}
```
* **Complexity**: Time: $O(N^2)$ (can be optimized to $O(N \log N)$ using binary search) | Space: $O(N)$
</details>

### [ ] Problem 6.38: Unique Paths [Medium] [Topic: DP]
* **Learning Objective**: Solve grid path counting problems using DP.
* **Problem Statement**: Count the number of unique paths from the top-left corner to the bottom-right corner of an $M \times N$ grid, if you can only move down or right.
* **Input**: `M = 3`, `N = 2`
* **Output**:
  ```text
  Paths: 3
  ```
* **Hint**: To reach cell $(i, j)$, you can only come from $(i-1, j)$ or $(i, j-1)$. Formula: $DP[i][j] = DP[i-1][j] + DP[i][j-1]$.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp, 1); // Row-space optimization
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        return dp[n - 1];
    }
}
```
* **Complexity**: Time: $O(M \times N)$ | Space: $O(N)$
</details>

### [ ] Problem 6.39: Edit Distance [Hard] [Topic: DP]
* **Learning Objective**: Calculate the edit distance between two strings using DP.
* **Problem Statement**: Find the minimum number of operations (insert, delete, replace) required to convert `word1` to `word2`.
* **Input**: `word1 = "horse"`, `word2 = "ros"`
* **Output**:
  ```text
  Distance: 3
  ```
* **Hint**: Create a 2D DP matrix of size $(M+1) \times (N+1)$. If characters match, `DP[i][j] = DP[i-1][j-1]`. If they mismatch, `DP[i][j] = 1 + Min(insert, delete, replace)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], // replace
                                   Math.min(dp[i - 1][j],     // delete
                                            dp[i][j - 1]));    // insert
                }
            }
        }
        return dp[m][n];
    }
}
```
* **Complexity**: Time: $O(M \times N)$ | Space: $O(M \times N)$
</details>

### [ ] Problem 6.40: Partition Equal Subset Sum [Hard] [Topic: DP]
* **Learning Objective**: Solve partition subset challenges using DP (0/1 Knapsack variant).
* **Problem Statement**: Determine if an array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
* **Input**: `nums = {1, 5, 11, 5}`
* **Output**:
  ```text
  Partitionable: true (Subsets: {1, 5, 5} and {11})
  ```
* **Hint**: Calculate the sum of all elements. If odd, it cannot be partitioned. If even, solve a subset sum problem looking for a sum equal to `totalSum / 2`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static boolean canPartition(int[] nums) {
        int sum = 0;
        for (int num : nums) sum += num;
        if (sum % 2 != 0) return false;
        
        int target = sum / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        return dp[target];
    }
}
```
* **Complexity**: Time: $O(N \times S)$ (where $S$ is target sum) | Space: $O(S)$
</details>
