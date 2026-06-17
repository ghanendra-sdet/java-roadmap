# Milestone 3: Object-Oriented Programming (OOP)

This milestone covers Java methods, parameter behaviors, encapsulation, inheritance, method overloading/overriding, abstract classes, and interfaces.

---

## 1. Methods in Java

📌 **Core Concept**: Methods are code blocks that perform operations when invoked. Methods can take parameters and return values. Java uses *Pass-by-Value* (for primitives, values are copied; for objects, reference pointer values are copied). `static` methods belong to the class, while instance methods belong to objects.

### [ ] Problem 3.1: Prime Checker Method [Easy] [Topic: Methods]
* **Learning Objective**: Write a helper method that returns a boolean value.
* **Problem Statement**: Write a static method `isPrime(int num)` that returns `true` if a number is prime.
* **Input**: `isPrime(17)`
* **Output**:
  ```text
  true
  ```
* **Hint**: Define method signature: `public static boolean isPrime(int num)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(isPrime(17));
    }
    
    public static boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}
```
* **Complexity**: Time: $O(\sqrt{N})$ | Space: $O(1)$
</details>

### [ ] Problem 3.2: Max Finder Method [Easy] [Topic: Methods]
* **Learning Objective**: Create a method with multiple input parameters.
* **Problem Statement**: Create a method `maxOfThree(int a, int b, int c)` that returns the largest of three numbers.
* **Input**: `maxOfThree(12, 45, 9)`
* **Output**:
  ```text
  45
  ```
* **Hint**: Use `Math.max(a, Math.max(b, c))` to simplify the code.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(maxOfThree(12, 45, 9));
    }
    
    public static int maxOfThree(int a, int b, int c) {
        return Math.max(a, Math.max(b, c));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.3: Pass By Value Check [Easy] [Topic: Methods]
* **Learning Objective**: Understand parameter mutability constraints in Java.
* **Problem Statement**: Test if changing an integer parameter value inside a method affects the original variable in the caller.
* **Input**: `x = 10`
* **Output**:
  ```text
  Original x: 10
  ```
* **Hint**: Pass `x` to `modify(int val)` and assign `val = 50`. Print `x` after the call.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        modify(x);
        System.out.println("Original x: " + x);
    }
    
    public static void modify(int val) {
        val = 50;
    }
}
```
* **Explanation**: Primitives are passed by value. The method receives a copy of the value, so changes to the parameter do not affect the original variable.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.4: Array Multiplier [Medium] [Topic: Methods]
* **Learning Objective**: Work with object reference parameters.
* **Problem Statement**: Write a method `multiplyAll(int[] arr, int factor)` that multiplies every element of an array in-place.
* **Input**: `arr = {1, 2, 3}`, `factor = 3`
* **Output**:
  ```text
  {3, 6, 9}
  ```
* **Hint**: Changes to array contents inside the method will affect the original array because array objects are passed by reference pointer value.
<details>
<summary>View Solution</summary>

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        multiplyAll(arr, 3);
        System.out.println(Arrays.toString(arr));
    }
    
    public static void multiplyAll(int[] data, int factor) {
        for (int i = 0; i < data.length; i++) {
            data[i] *= factor;
        }
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>

### [ ] Problem 3.5: Varargs Adder [Medium] [Topic: Methods]
* **Learning Objective**: Accept variable-length argument lists in methods.
* **Problem Statement**: Write a method `sumAll(int... numbers)` that calculates the sum of zero or more integers.
* **Input**: `sumAll(1, 2, 3, 4, 5)`
* **Output**:
  ```text
  15
  ```
* **Hint**: Inside the method, `numbers` behaves exactly like a standard 1D array.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(sumAll(1, 2, 3, 4, 5));
        System.out.println(sumAll()); // empty input
    }
    
    public static int sumAll(int... numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is input count) | Space: $O(1)$
</details>

### [ ] Problem 3.6: String Formatter [Medium] [Topic: Methods]
* **Learning Objective**: Work with string method parameters and return values.
* **Problem Statement**: Create a method `formatTitle(String title)` that converts a string to title case (e.g., `"java roadmap"` becomes `"Java Roadmap"`).
* **Input**: `"java programming roadmap"`
* **Output**:
  ```text
  Java Programming Roadmap
  ```
* **Hint**: Split the string by spaces, capitalize the first letter of each word, and rejoin.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(formatTitle("java programming roadmap"));
    }
    
    public static String formatTitle(String input) {
        if (input == null || input.isEmpty()) return input;
        String[] words = input.split("\\s+");
        StringBuilder sb = new StringBuilder();
        
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            if (word.length() > 0) {
                sb.append(Character.toUpperCase(word.charAt(0)))
                  .append(word.substring(1).toLowerCase());
                if (i < words.length - 1) {
                    sb.append(" ");
                }
            }
        }
        return sb.toString();
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(N)$
</details>

### [ ] Problem 3.7: Recursive Factorial [Hard] [Topic: Methods]
* **Learning Objective**: Structure recursive calls with base and step conditions.
* **Problem Statement**: Calculate the factorial of a positive integer $N$ using recursion.
* **Input**: `N = 5`
* **Output**:
  ```text
  120
  ```
* **Hint**: Base case: `n <= 1` returns `1`. Recursive step: returns `n * factorial(n - 1)`.
<details>
<summary>View Solution</summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
    
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}
```
* **Common Mistakes**: Forgetting the base case, which results in infinite recursion and causes a `StackOverflowError`.
* **Complexity**: Time: $O(N)$ | Space: $O(N)$ (due to method call stack depth)
</details>

---

## 2. OOP Basics: Classes, Objects, Constructors & Encapsulation

📌 **Core Concept**: A *Class* is a blueprint, while an *Object* is an instance of a class. *Encapsulation* keeps object states private by exposing them only through public getters and setters, protecting class data from arbitrary outside changes.

### [ ] Problem 3.8: Book Class [Easy] [Topic: OOP]
* **Learning Objective**: Create a simple class with properties and a constructor.
* **Problem Statement**: Define a `Book` class containing title, author, and price fields. Add a constructor and a method `displayDetails()`.
* **Input**: `Title="Java 101", Author="John", Price=29.99`
* **Output**:
  ```text
  Title: Java 101, Author: John, Price: $29.99
  ```
* **Hint**: Declare variables, write a constructor matching the fields, and implement the print method.
<details>
<summary>View Solution</summary>

```java
class Book {
    String title;
    String author;
    double price;
    
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    
    public void displayDetails() {
        System.out.println("Title: " + title + ", Author: " + author + ", Price: $" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Book b = new Book("Java 101", "John", 29.99);
        b.displayDetails();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.9: Constructor Chaining [Easy] [Topic: OOP]
* **Learning Objective**: Chain constructors using `this()`.
* **Problem Statement**: Create an `Employee` class. Write a constructor that accepts name and role, and another constructor that defaults the role to `"Developer"` if it is omitted.
* **Input**: `Employee("Alice")`
* **Output**:
  ```text
  Name: Alice, Role: Developer
  ```
* **Hint**: Call `this(name, "Developer");` as the first statement in the single-parameter constructor.
<details>
<summary>View Solution</summary>

```java
class Employee {
    String name;
    String role;
    
    public Employee(String name) {
        this(name, "Developer"); // Constructor chaining
    }
    
    public Employee(String name, String role) {
        this.name = name;
        this.role = role;
    }
    
    public void display() {
        System.out.println("Name: " + name + ", Role: " + role);
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee("Alice");
        emp.display();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.10: Encapsulated Account [Easy] [Topic: OOP]
* **Learning Objective**: Control property changes using validation.
* **Problem Statement**: Create a `BankAccount` class with a private field `balance`. Expose `getBalance()`, `deposit(amount)`, and `withdraw(amount)`. Prevent negative balance states.
* **Input**: `deposit(100)`, `withdraw(120)`
* **Output**:
  ```text
  Transaction denied: Insufficient funds.
  ```
* **Hint**: Use `private double balance`. Add range checks inside your deposit/withdraw setter methods.
<details>
<summary>View Solution</summary>

```java
class BankAccount {
    private double balance;
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Transaction denied: Insufficient funds.");
        } else if (amount > 0) {
            balance -= amount;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(100);
        account.withdraw(120);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.11: Static Counter [Medium] [Topic: OOP]
* **Learning Objective**: Share properties across class instances using the `static` keyword.
* **Problem Statement**: Create a `Counter` class that tracks the total number of class instances created.
* **Input**: Instantiate 3 `Counter` objects
* **Output**:
  ```text
  Total instances: 3
  ```
* **Hint**: Declare a private static variable: `private static int instanceCount = 0;`. Increment it inside the class constructors.
<details>
<summary>View Solution</summary>

```java
class Counter {
    private static int instanceCount = 0;
    
    public Counter() {
        instanceCount++;
    }
    
    public static int getInstanceCount() {
        return instanceCount;
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.println("Total instances: " + Counter.getInstanceCount());
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.12: Getter-Setter Validation [Medium] [Topic: OOP]
* **Learning Objective**: Apply validation rules inside getter/setter methods.
* **Problem Statement**: Create a `Student` class. The `setGrade(int grade)` method should only assign the value if it falls within the 0 to 100 range. Otherwise, print a warning.
* **Input**: `setGrade(120)`
* **Output**:
  ```text
  Invalid grade! Grade must be between 0 and 100.
  ```
* **Hint**: Use an if-else check inside the setter method.
<details>
<summary>View Solution</summary>

```java
class Student {
    private int grade;
    
    public int getGrade() {
        return grade;
    }
    
    public void setGrade(int grade) {
        if (grade >= 0 && grade <= 100) {
            this.grade = grade;
        } else {
            System.out.println("Invalid grade! Grade must be between 0 and 100.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setGrade(120);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.13: Rectangle Object Comparison [Medium] [Topic: OOP]
* **Learning Objective**: Override the default `equals` behavior for object instances.
* **Problem Statement**: Define a `Rectangle` class with `width` and `height`. Override `.equals()` to return true if two rectangles have the exact same dimensions.
* **Input**: `r1 = (5, 10)`, `r2 = (5, 10)`
* **Output**:
  ```text
  Equal: true
  ```
* **Hint**: Verify object types using `instanceof` before casting and comparing width/height.
<details>
<summary>View Solution</summary>

```java
class Rectangle {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj instanceof Rectangle) {
            Rectangle other = (Rectangle) obj;
            return this.width == other.width && this.height == other.height;
        }
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle(5, 10);
        Rectangle r2 = new Rectangle(5, 10);
        System.out.println("Equal: " + r1.equals(r2));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.14: Immutable Coordinates [Hard] [Topic: OOP]
* **Learning Objective**: Design immutable classes in Java.
* **Problem Statement**: Create an immutable `Point` class that represents coordinates $(X, Y)$.
* **Input**: `Point(3, 4)`
* **Output**: No setters available; coordinate properties cannot be modified after instantiation.
* **Hint**: Declare the class as `final`, make all fields `private final`, and only provide getters (no setters).
<details>
<summary>View Solution</summary>

```java
public final class Point {
    private final int x;
    private final int y;
    
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    public int getX() {
        return x;
    }
    
    public int getY() {
        return y;
    }
}
```
* **Explanation**: Making a class final prevents inheritance. Private final fields guarantee coordinates cannot be changed after constructor initialization.
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 3. Inheritance & Polymorphism

📌 **Core Concept**: *Inheritance* allows a subclass to inherit fields and methods from a superclass using the `extends` keyword. *Polymorphism* lets a single reference type call different subclass behaviors. Overloading occurs at compile-time (same method name, different signatures), while overriding happens at runtime (subclass redefines a superclass method).

### [ ] Problem 3.15: Simple Inheritance [Easy] [Topic: OOP]
* **Learning Objective**: Inherit properties from a base class using `extends`.
* **Problem Statement**: Create an `Animal` parent class with a `makeSound()` method, and a `Dog` subclass that overrides it.
* **Input**: Invoke `makeSound()` on a `Dog` instance
* **Output**:
  ```text
  Bark!
  ```
* **Hint**: Subclass inherits methods from parent. Use `@Override` annotation when redefining `makeSound()` in `Dog`.
<details>
<summary>View Solution</summary>

```java
class Animal {
    public void makeSound() {
        System.out.println("Generic sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal pet = new Dog();
        pet.makeSound(); // Polymorphism: calls Dog's method
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.16: Super Constructor Call [Easy] [Topic: OOP]
* **Learning Objective**: Invoke parent constructors using the `super` keyword.
* **Problem Statement**: Create a parent class `Vehicle` with field `brand`. Create a subclass `Car` that initializes `brand` by passing it to the parent constructor.
* **Input**: `Car("Toyota")`
* **Output**:
  ```text
  Brand: Toyota
  ```
* **Hint**: Call `super(brand);` as the first statement in the subclass constructor.
<details>
<summary>View Solution</summary>

```java
class Vehicle {
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    private String model;
    
    public Car(String brand, String model) {
        super(brand); // Invoke parent constructor
        this.model = model;
    }
    
    public void display() {
        System.out.println("Brand: " + brand + ", Model: " + model);
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car("Toyota", "Corolla");
        c.display();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.17: Method Overloading [Easy] [Topic: OOP]
* **Learning Objective**: Write overloaded methods with varying parameter signatures.
* **Problem Statement**: Implement a `Printer` class with overloaded `print()` methods that can print a String or double value.
* **Input**: `print("Hello")`, `print(12.34)`
* **Output**:
  ```text
  String: Hello
  Double: 12.34
  ```
* **Hint**: Overloaded methods must have the same name but different input parameter types.
<details>
<summary>View Solution</summary>

```java
class Printer {
    public void print(String val) {
        System.out.println("String: " + val);
    }
    
    public void print(double val) {
        System.out.println("Double: " + val);
    }
}

public class Main {
    public static void main(String[] args) {
        Printer p = new Printer();
        p.print("Hello");
        p.print(12.34);
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.18: Runtime Polymorphism [Medium] [Topic: OOP]
* **Learning Objective**: Access overridden methods dynamically at runtime.
* **Problem Statement**: Create a parent class `Shape` with `draw()`. Subclasses `Circle` and `Square` override `draw()`. Invoke them using a parent reference array.
* **Input**: An array containing a `Circle` and a `Square`
* **Output**:
  ```text
  Drawing Circle
  Drawing Square
  ```
* **Hint**: Declare an array of type `Shape[] shapes = { new Circle(), new Square() };` and iterate.
<details>
<summary>View Solution</summary>

```java
class Shape {
    public void draw() {
        System.out.println("Drawing Shape");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Square extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Square");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(), new Square() };
        for (Shape s : shapes) {
            s.draw(); // Dynamic dispatch determines behavior at runtime
        }
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is array size) | Space: $O(1)$
</details>

### [ ] Problem 3.19: Super Method Call [Medium] [Topic: OOP]
* **Learning Objective**: Extend parent method behaviors inside subclass overrides.
* **Problem Statement**: A parent class `Manager` prints basic details. A subclass `Director` overrides the method but calls the parent implementation first.
* **Input**: Invoke `displayDetails()` on `Director`
* **Output**:
  ```text
  Manager Details.
  Director Details.
  ```
* **Hint**: Call `super.displayDetails();` inside the subclass method before adding director-specific print statements.
<details>
<summary>View Solution</summary>

```java
class Manager {
    public void displayDetails() {
        System.out.println("Manager Details.");
    }
}

class Director extends Manager {
    @Override
    public void displayDetails() {
        super.displayDetails(); // Call parent method
        System.out.println("Director Details.");
    }
}

public class Main {
    public static void main(String[] args) {
        Director d = new Director();
        d.displayDetails();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.20: Prevent Overriding [Medium] [Topic: OOP]
* **Learning Objective**: Apply final keyword modifiers to prevent subclasses from modifying behaviors.
* **Problem Statement**: Design a base class `SecuritySystem` containing a method `authenticate()` that cannot be overridden by any subclasses.
* **Input**: Inherit from `SecuritySystem`
* **Output**: Compilation fails if a subclass attempts to override the final method.
* **Hint**: Declare the method as `final`: `public final void authenticate()`.
<details>
<summary>View Solution</summary>

```java
class SecuritySystem {
    public final void authenticate() {
        System.out.println("System authentication verified.");
    }
}

class SubSecurity extends SecuritySystem {
    // Attempting to override authenticate() here triggers a compilation error
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.21: Covariant Returns [Hard] [Topic: OOP]
* **Learning Objective**: Redefine method returns using covariant subclass types.
* **Problem Statement**: A parent class method returns a `Food` object. A subclass overrides the method to return a more specific `Apple` object.
* **Input**: Invoke `get()` on child instances
* **Output**: Subclass method returns `Apple` object directly without compilation warnings.
* **Hint**: Java allows a subclass override method to return a subtype of the type declared in the parent method.
<details>
<summary>View Solution</summary>

```java
class Food {}
class Apple extends Food {}

class Parent {
    public Food getFood() {
        return new Food();
    }
}

class Child extends Parent {
    @Override
    public Apple getFood() { // Covariant return type
        return new Apple();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 4. Abstraction & Interfaces

📌 **Core Concept**: *Abstraction* hides complexity. *Abstract Classes* can have abstract methods (no body) and concrete methods, and cannot be directly instantiated. *Interfaces* define a contract of behaviors (all methods are implicitly public and abstract, and all variables are public static final, until Java 8 default/static and Java 9 private methods).

### [ ] Problem 3.22: Abstract Printer [Easy] [Topic: OOP]
* **Learning Objective**: Implement abstract methods in a subclass.
* **Problem Statement**: Define an abstract class `Device` with an abstract method `turnOn()`. Create a subclass `Printer` that implements it.
* **Input**: Instantiate `Printer` and call `turnOn()`
* **Output**:
  ```text
  Printer warming up...
  ```
* **Hint**: Syntax: `abstract class Device { public abstract void turnOn(); }`.
<details>
<summary>View Solution</summary>

```java
abstract class Device {
    public abstract void turnOn();
}

class Printer extends Device {
    @Override
    public void turnOn() {
        System.out.println("Printer warming up...");
    }
}

public class Main {
    public static void main(String[] args) {
        Device dev = new Printer();
        dev.turnOn();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.23: Simple Interface [Easy] [Topic: OOP]
* **Learning Objective**: Implement a basic Java interface.
* **Problem Statement**: Define an interface `Playable` with method `play()`. Implement it in a `Guitar` class.
* **Input**: Invoke `play()`
* **Output**:
  ```text
  Strumming guitar strings!
  ```
* **Hint**: Syntax: `interface Playable { void play(); }`. Use the `implements` keyword on the subclass.
<details>
<summary>View Solution</summary>

```java
interface Playable {
    void play();
}

class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("Strumming guitar strings!");
    }
}

public class Main {
    public static void main(String[] args) {
        Playable instrument = new Guitar();
        instrument.play();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.24: Multiple Interfaces [Easy] [Topic: OOP]
* **Learning Objective**: Support multiple inheritance of interface designs.
* **Problem Statement**: Implement class `SmartDevice` that implements both `WiFiEnabled` and `BluetoothEnabled` interfaces.
* **Input**: Invoke methods from both interfaces
* **Output**:
  ```text
  Connected to WiFi.
  Connected to Bluetooth.
  ```
* **Hint**: Separate implemented interfaces using a comma: `class SmartDevice implements WiFiEnabled, BluetoothEnabled`.
<details>
<summary>View Solution</summary>

```java
interface WiFiEnabled {
    void connectWiFi();
}

interface BluetoothEnabled {
    void connectBluetooth();
}

class SmartDevice implements WiFiEnabled, BluetoothEnabled {
    @Override
    public void connectWiFi() {
        System.out.println("Connected to WiFi.");
    }
    
    @Override
    public void connectBluetooth() {
        System.out.println("Connected to Bluetooth.");
    }
}

public class Main {
    public static void main(String[] args) {
        SmartDevice dev = new SmartDevice();
        dev.connectWiFi();
        dev.connectBluetooth();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.25: Interface Variables [Medium] [Topic: OOP]
* **Learning Objective**: Work with public static final variables defined in interfaces.
* **Problem Statement**: Define an interface `PhysicsConstants` with variable `SPEED_OF_LIGHT = 299792458` and print it without instantiating the interface.
* **Input**: Print constant value
* **Output**:
  ```text
  Speed of light: 299792458 m/s
  ```
* **Hint**: Access the constant variable directly using interface namespace: `PhysicsConstants.SPEED_OF_LIGHT`.
<details>
<summary>View Solution</summary>

```java
interface PhysicsConstants {
    // Interface variables are implicitly: public static final
    int SPEED_OF_LIGHT = 299792458;
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Speed of light: " + PhysicsConstants.SPEED_OF_LIGHT + " m/s");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.26: Default Interface Method [Medium] [Topic: OOP]
* **Learning Objective**: Write concrete default implementations inside interfaces.
* **Problem Statement**: Create interface `Logger` with abstract `log(String msg)` and a default method `logError(String err)` that automatically formats and logs error messages.
* **Input**: `logError("Timeout")`
* **Output**:
  ```text
  ERROR: Timeout
  ```
* **Hint**: Use the `default` keyword: `default void logError(String msg) { log("ERROR: " + msg); }`.
<details>
<summary>View Solution</summary>

```java
interface Logger {
    void log(String msg);
    
    default void logError(String msg) {
        log("ERROR: " + msg);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String msg) {
        System.out.println(msg);
    }
}

public class Main {
    public static void main(String[] args) {
        Logger logger = new ConsoleLogger();
        logger.logError("Timeout");
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.27: Static Interface Method [Medium] [Topic: OOP]
* **Learning Objective**: Create static helper functions inside interfaces.
* **Problem Statement**: Add a static utility method `cleanText(String text)` in interface `Parser` that trims and returns input string.
* **Input**: `Parser.cleanText(" text ")`
* **Output**:
  ```text
  "text"
  ```
* **Hint**: Declare method signature using: `public static String cleanText(String t)`.
<details>
<summary>View Solution</summary>

```java
interface Parser {
    static String cleanText(String input) {
        return (input == null) ? "" : input.trim();
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Parser.cleanText("   text   "));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.28: Interface vs Abstract [Hard] [Topic: OOP]
* **Learning Objective**: Combine abstract class structures with interface blueprints.
* **Problem Statement**: Create an abstract class `Vehicle` that implements interface `Drivable` but leaves implementation of `.drive()` to a concrete subclass `Truck`.
* **Input**: Instantiate `Truck` and drive it
* **Output**:
  ```text
  Driving Truck.
  ```
* **Hint**: Abstract class does not need to implement interface methods; it can pass them down to subclasses.
<details>
<summary>View Solution</summary>

```java
interface Drivable {
    void drive();
}

abstract class Vehicle implements Drivable {
    // Abstract class doesn't have to define drive() implementation
    protected String type;
    
    public Vehicle(String type) {
        this.type = type;
    }
}

class Truck extends Vehicle {
    public Truck() {
        super("Truck");
    }
    
    @Override
    public void drive() {
        System.out.println("Driving " + type + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        Drivable t = new Truck();
        t.drive();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

---

## 5. Practical OOP Scenarios & Design Exercises

📌 **Core Concept**: Applying OOP principles to model real-world business processes and logic flows.

### [ ] Problem 3.29: Library System [Easy] [Topic: OOP]
* **Learning Objective**: Model relationships (Composition/Aggregations) between classes.
* **Problem Statement**: Implement `Library` class that holds an array of `Book` objects and prints all titles.
* **Input**: Library holding 2 books
* **Output**:
  ```text
  Book: Java 101
  Book: Clean Code
  ```
* **Hint**: Declare field `private Book[] books;` inside your `Library` definition.
<details>
<summary>View Solution</summary>

```java
class Book {
    String title;
    public Book(String title) { this.title = title; }
}

class Library {
    private Book[] books;
    
    public Library(Book[] books) {
        this.books = books;
    }
    
    public void printBooks() {
        for (Book b : books) {
            System.out.println("Book: " + b.title);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Book[] inventory = { new Book("Java 101"), new Book("Clean Code") };
        Library lib = new Library(inventory);
        lib.printBooks();
    }
}
```
* **Complexity**: Time: $O(N)$ (where $N$ is book count) | Space: $O(1)$
</details>

### [ ] Problem 3.30: Polymorphic Payroll [Easy] [Topic: OOP]
* **Learning Objective**: Call polymorphic subclass properties dynamically.
* **Problem Statement**: Create parent class `Worker` with abstract method `calculateSalary()`. Subclasses `Salaried` and `Hourly` compute salary differently.
* **Input**: Calculate payroll for salaried and hourly worker
* **Output**: Salaried and Hourly worker payments computed.
* **Hint**: Inherit from `Worker`, implement `calculateSalary()` using custom payment formulas.
<details>
<summary>View Solution</summary>

```java
abstract class Worker {
    public abstract double calculateSalary();
}

class Salaried extends Worker {
    private double monthlySalary;
    public Salaried(double monthlySalary) { this.monthlySalary = monthlySalary; }
    
    @Override
    public double calculateSalary() {
        return monthlySalary;
    }
}

class Hourly extends Worker {
    private double hourlyRate;
    private int hoursWorked;
    
    public Hourly(double rate, int hours) {
        this.hourlyRate = rate;
        this.hoursWorked = hours;
    }
    
    @Override
    public double calculateSalary() {
        return hourlyRate * hoursWorked;
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.31: Nested Inner Class [Medium] [Topic: OOP]
* **Learning Objective**: Create nested helper inner classes.
* **Problem Statement**: Implement class `CPU` containing an inner class `Processor` that prints cache details.
* **Input**: Instantiate outer and inner class
* **Output**:
  ```text
  Processor Cache: 8MB
  ```
* **Hint**: Inner class has access to all fields of the outer enclosing class.
<details>
<summary>View Solution</summary>

```java
class CPU {
    private String model = "Intel i7";
    
    class Processor {
        public void printModel() {
            // Inner class has access to outer private fields
            System.out.println("CPU model: " + model);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        CPU cpu = new CPU();
        CPU.Processor proc = cpu.new Processor();
        proc.printModel();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.32: Dynamic Polymorphic Discount [Medium] [Topic: OOP]
* **Learning Objective**: Model payment discount strategies polymorphically.
* **Problem Statement**: Implement custom shopping carts that calculate total price after applying polymorphic strategies (`FlatDiscount`, `PercentageDiscount`).
* **Input**: `Base price = 100`, applying `FlatDiscount($10)` and `PercentageDiscount(15%)`
* **Output**:
  ```text
  Price after flat: 90.0, Price after percentage: 85.0
  ```
* **Hint**: Create a `DiscountStrategy` interface with method `apply(double price)`.
<details>
<summary>View Solution</summary>

```java
interface DiscountStrategy {
    double applyDiscount(double originalPrice);
}

class FlatDiscount implements DiscountStrategy {
    private double discountAmount;
    public FlatDiscount(double amount) { this.discountAmount = amount; }
    
    @Override
    public double applyDiscount(double price) {
        return Math.max(0, price - discountAmount);
    }
}

class PercentageDiscount implements DiscountStrategy {
    private double percentage;
    public PercentageDiscount(double percent) { this.percentage = percent; }
    
    @Override
    public double applyDiscount(double price) {
        return price * (1 - (percentage / 100.0));
    }
}

public class Main {
    public static void main(String[] args) {
        double price = 100.0;
        DiscountStrategy s1 = new FlatDiscount(10);
        DiscountStrategy s2 = new PercentageDiscount(15);
        
        System.out.println("Price after flat: " + s1.applyDiscount(price));
        System.out.println("Price after percentage: " + s2.applyDiscount(price));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.33: Singleton Pattern Instance [Medium] [Topic: OOP]
* **Learning Objective**: Restrict class instantiation to a single object instance.
* **Problem Statement**: Define a thread-safe lazy-loaded `DatabaseConnection` singleton class.
* **Input**: Access instance multiple times
* **Output**: Both references point to the exact same memory instance.
* **Hint**: Make the constructor `private`. Provide a public static method `getInstance()` that returns the instance.
<details>
<summary>View Solution</summary>

```java
class DatabaseConnection {
    private static DatabaseConnection instance;
    
    private DatabaseConnection() {
        // Private constructor prevents direct instantiation
    }
    
    public static synchronized DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}

public class Main {
    public static void main(String[] args) {
        DatabaseConnection conn1 = DatabaseConnection.getInstance();
        DatabaseConnection conn2 = DatabaseConnection.getInstance();
        System.out.println("Same Instance: " + (conn1 == conn2));
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.34: Dynamic Object Factory [Hard] [Topic: OOP]
* **Learning Objective**: Decouple object creation logic using the Factory Pattern.
* **Problem Statement**: Create a `NotificationFactory` that instantiates concrete subclasses `EmailNotification` or `SMSNotification` based on an input string.
* **Input**: `Factory.create("SMS")`
* **Output**: Returns an instance of `SMSNotification`.
* **Hint**: Implement a common `Notification` interface that the concrete subclasses implement.
<details>
<summary>View Solution</summary>

```java
interface Notification {
    void notifyUser();
}

class EmailNotification implements Notification {
    @Override
    public void notifyUser() { System.out.println("Email Notification Sent."); }
}

class SMSNotification implements Notification {
    @Override
    public void notifyUser() { System.out.println("SMS Notification Sent."); }
}

class NotificationFactory {
    public Notification createNotification(String channel) {
        if (channel == null || channel.isEmpty()) return null;
        return switch (channel.toUpperCase()) {
            case "EMAIL" -> new EmailNotification();
            case "SMS" -> new SMSNotification();
            default -> throw new IllegalArgumentException("Unknown channel: " + channel);
        };
    }
}

public class Main {
    public static void main(String[] args) {
        NotificationFactory factory = new NotificationFactory();
        Notification n = factory.createNotification("SMS");
        n.notifyUser();
    }
}
```
* **Complexity**: Time: $O(1)$ | Space: $O(1)$
</details>

### [ ] Problem 3.35: Polymorphic E-Commerce Engine [Hard] [Topic: OOP]
* **Learning Objective**: Design a modular object relationship model.
* **Problem Statement**: Model a shopping checkout engine with subclasses `Product` (physical goods applying shipping taxes) and `DigitalProduct` (downloadable goods applying zero shipping tax).
* **Input**: Checkout checkout list containing both product types
* **Output**: Correct polymorphic totals calculated.
* **Hint**: Define abstract base class `BaseProduct` containing abstract method `calculateFinalPrice()`.
<details>
<summary>View Solution</summary>

```java
abstract class BaseProduct {
    protected String name;
    protected double basePrice;
    
    public BaseProduct(String name, double price) {
        this.name = name;
        this.basePrice = price;
    }
    
    public abstract double calculateFinalPrice();
}

class PhysicalProduct extends BaseProduct {
    private double shippingCost;
    
    public PhysicalProduct(String name, double price, double shipping) {
        super(name, price);
        this.shippingCost = shipping;
    }
    
    @Override
    public double calculateFinalPrice() {
        return basePrice + shippingCost;
    }
}

class DigitalProduct extends BaseProduct {
    public DigitalProduct(String name, double price) {
        super(name, price);
    }
    
    @Override
    public double calculateFinalPrice() {
        return basePrice; // No shipping cost for digital downloads
    }
}

public class Main {
    public static void main(String[] args) {
        BaseProduct[] cart = {
            new PhysicalProduct("Laptop", 1000.0, 50.0),
            new DigitalProduct("Java E-Book", 29.99)
        };
        
        double total = 0;
        for (BaseProduct p : cart) {
            total += p.calculateFinalPrice();
        }
        System.out.println("Total checkout price: $" + total);
    }
}
```
* **Complexity**: Time: $O(N)$ | Space: $O(1)$
</details>
