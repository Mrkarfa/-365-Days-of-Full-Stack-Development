<![CDATA[<div align="center">

# 🚀 JavaScript Complete Cheat Sheet

### From Beginner to Advanced

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ES6+](https://img.shields.io/badge/ES6+-00599C?style=for-the-badge&logo=javascript&logoColor=white)](https://www.ecma-international.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*A comprehensive guide to mastering JavaScript* ✨

---

</div>

## 📑 Table of Contents

- [🎯 JavaScript Basics](#-javascript-basics)
- [🔀 Control Flow](#-control-flow)
- [⚡ Functions](#-functions)
- [📦 Arrays](#-arrays)
- [🏗️ Objects](#️-objects)
- [🌐 DOM Manipulation](#-dom-manipulation)
- [✨ ES6+ Features](#-es6-features)
- [⏳ Asynchronous JavaScript](#-asynchronous-javascript)
- [🛡️ Error Handling](#️-error-handling)
- [🎨 Object-Oriented Programming](#-object-oriented-programming)
- [🚀 Advanced Concepts](#-advanced-concepts)
- [📚 Quick Reference](#-quick-reference)

---

## 🎯 JavaScript Basics

### 📝 Variables

Variables are containers for storing data values. JavaScript has three ways to declare variables:

```javascript
// var - Function scoped, can be redeclared (older way)
var name = "John";

// let - Block scoped, can be reassigned (modern way)
let age = 25;

// const - Block scoped, cannot be reassigned (for constants)
const PI = 3.14159;
```

#### Variable Comparison

| Keyword | Scope | Redeclare | Reassign | Hoisted |
|---------|-------|-----------|----------|---------|
| `var` | Function | ✅ Yes | ✅ Yes | ✅ Yes (undefined) |
| `let` | Block | ❌ No | ✅ Yes | ❌ No (TDZ) |
| `const` | Block | ❌ No | ❌ No | ❌ No (TDZ) |

> 💡 **Best Practice**: Use `const` by default, `let` when reassignment is needed, avoid `var`.

---

### 📊 Data Types

JavaScript has **8 data types** divided into Primitive and Non-Primitive:

#### Primitive Types (Immutable)

```javascript
// 1. String - Text data
let greeting = "Hello World";
let name = 'JavaScript';
let template = `Hello ${name}`;  // Template literal

// 2. Number - Integers and decimals
let integer = 42;
let decimal = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

// 3. BigInt - Large integers
let bigNumber = 9007199254740991n;

// 4. Boolean - true or false
let isActive = true;
let isLoggedIn = false;

// 5. Undefined - Variable declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// 6. Null - Intentional absence of value
let emptyValue = null;

// 7. Symbol - Unique identifier
let id = Symbol('id');
let anotherId = Symbol('id');
console.log(id === anotherId); // false (always unique)
```

#### Non-Primitive Types (Reference)

```javascript
// Object - Collection of key-value pairs
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Array - Ordered list of values
let colors = ["red", "green", "blue"];

// Function - Reusable code block
function greet(name) {
    return `Hello, ${name}!`;
}
```

#### Type Checking

```javascript
typeof "Hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object" (known bug)
typeof {}             // "object"
typeof []             // "object"
typeof function(){}   // "function"
typeof Symbol('x')    // "symbol"
typeof 10n            // "bigint"

// Better array check
Array.isArray([1,2,3])  // true
Array.isArray({})       // false
```

---

### ➕ Operators

#### Arithmetic Operators

```javascript
let a = 10, b = 3;

a + b    // 13  (Addition)
a - b    // 7   (Subtraction)
a * b    // 30  (Multiplication)
a / b    // 3.33 (Division)
a % b    // 1   (Modulus/Remainder)
a ** b   // 1000 (Exponentiation)

// Increment/Decrement
let x = 5;
x++      // 5, then x = 6 (Post-increment)
++x      // 7 (Pre-increment)
x--      // 7, then x = 6 (Post-decrement)
--x      // 5 (Pre-decrement)
```

#### Assignment Operators

```javascript
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
```

#### Comparison Operators

```javascript
// Equality (with type coercion)
5 == "5"      // true
5 != "6"      // true

// Strict Equality (no type coercion) ⭐ Recommended
5 === "5"     // false
5 !== "6"     // true

// Relational
5 > 3         // true
5 < 3         // false
5 >= 5        // true
5 <= 4        // false
```

> ⚠️ **Always use `===` and `!==`** to avoid unexpected type coercion!

#### Logical Operators

```javascript
// AND - Both must be true
true && true    // true
true && false   // false

// OR - At least one must be true
true || false   // true
false || false  // false

// NOT - Inverts boolean
!true           // false
!false          // true

// Practical Examples
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
}

// Short-circuit evaluation
let name = null;
let displayName = name || "Guest";  // "Guest"

// Nullish coalescing (ES2020)
let value = null ?? "default";      // "default"
let zero = 0 ?? "default";          // 0 (only null/undefined trigger default)
```

#### Ternary Operator

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" 
          : score >= 80 ? "B" 
          : score >= 70 ? "C" 
          : "F";
```

---

## 🔀 Control Flow

### Conditional Statements

#### if...else Statement

```javascript
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot! 🔥");
} else if (temperature > 20) {
    console.log("It's warm! ☀️");
} else if (temperature > 10) {
    console.log("It's cool! 🌤️");
} else {
    console.log("It's cold! ❄️");
}
```

#### switch Statement

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week 💼");
        break;
    case "Friday":
        console.log("TGIF! 🎉");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend! 🎮");
        break;
    default:
        console.log("Regular day 📅");
}
```

> 💡 **Remember**: Always include `break` to prevent fall-through!

---

### 🔄 Loops

#### for Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}
// Output: 0, 1, 2, 3, 4

// Looping through array
let fruits = ["🍎", "🍌", "🍊"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

#### while Loop

```javascript
// Executes while condition is true
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}
```

#### do...while Loop

```javascript
// Executes at least once, then checks condition
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);
```

#### for...of Loop (ES6)

```javascript
// Iterates over iterable values (arrays, strings, etc.)
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}

// With strings
for (let char of "Hello") {
    console.log(char); // H, e, l, l, o
}
```

#### for...in Loop

```javascript
// Iterates over object keys
let person = { name: "John", age: 30, city: "NYC" };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: John, age: 30, city: NYC
```

#### Loop Control

```javascript
// break - Exit loop immediately
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// continue - Skip current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
// Output: 0, 1, 3, 4
```

---

## ⚡ Functions

### Function Declaration

```javascript
// Named function - Hoisted
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World")); // "Hello, World!"

// With default parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

greetUser();      // "Hello, Guest!"
greetUser("Bob"); // "Hello, Bob!"
```

### Function Expression

```javascript
// Anonymous function assigned to variable - Not hoisted
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // 8
```

### Arrow Functions (ES6)

```javascript
// Basic syntax
const multiply = (a, b) => {
    return a * b;
};

// Single expression - Implicit return
const multiplyShort = (a, b) => a * b;

// Single parameter - Parentheses optional
const square = x => x * x;

// No parameters
const sayHello = () => "Hello!";

// Returning objects (wrap in parentheses)
const createUser = (name, age) => ({ name, age });
```

#### Regular vs Arrow Functions

| Feature | Regular Function | Arrow Function |
|---------|-----------------|----------------|
| `this` binding | Dynamic | Lexical (inherits) |
| `arguments` object | ✅ Available | ❌ Not available |
| Constructor | ✅ Can use `new` | ❌ Cannot use `new` |
| Hoisting | ✅ Yes | ❌ No |

### IIFE (Immediately Invoked Function Expression)

```javascript
// Executes immediately after creation
(function() {
    console.log("Runs immediately!");
})();

// With arrow function
(() => {
    console.log("Arrow IIFE!");
})();

// Useful for creating private scope
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

counter.increment(); // 1
counter.increment(); // 2
counter.getCount();  // 2
```

### Rest Parameters & Spread Operator

```javascript
// Rest Parameters - Collect multiple arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4); // 10

// Spread Operator - Expand arrays/objects
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

---

## 📦 Arrays

### Creating Arrays

```javascript
// Array literal (recommended)
let fruits = ["apple", "banana", "orange"];

// Array constructor
let numbers = new Array(1, 2, 3);

// Array.from()
Array.from("Hello");     // ["H", "e", "l", "l", "o"]
Array.from({length: 5}); // [undefined x 5]

// Array.of()
Array.of(1, 2, 3);       // [1, 2, 3]
```

### Accessing Elements

```javascript
let arr = ["a", "b", "c", "d", "e"];

arr[0]      // "a" (first)
arr[4]      // "e" (last by index)
arr.at(-1)  // "e" (last - ES2022)
arr.at(-2)  // "d" (second last)
arr.length  // 5
```

### Mutating Methods (Modify Original Array)

```javascript
let arr = [1, 2, 3];

// Add/Remove from end
arr.push(4);           // [1, 2, 3, 4] - Returns new length
arr.pop();             // [1, 2, 3] - Returns removed element

// Add/Remove from beginning
arr.unshift(0);        // [0, 1, 2, 3] - Returns new length
arr.shift();           // [1, 2, 3] - Returns removed element

// Splice - Add/Remove anywhere
arr.splice(1, 1);      // Removes 1 element at index 1 → [1, 3]
arr.splice(1, 0, 2);   // Inserts 2 at index 1 → [1, 2, 3]
arr.splice(1, 1, 5);   // Replace → [1, 5, 3]

// Others
arr.reverse();         // Reverses in place
arr.sort();            // Sorts in place
arr.fill(0);           // Fills all with 0
```

### Non-Mutating Methods (Return New Array)

```javascript
let arr = [1, 2, 3, 4, 5];

// Slice - Extract portion
arr.slice(1, 3);       // [2, 3] (start inclusive, end exclusive)
arr.slice(-2);         // [4, 5] (last 2 elements)

// Concat - Merge arrays
arr.concat([6, 7]);    // [1, 2, 3, 4, 5, 6, 7]

// Join - Convert to string
arr.join("-");         // "1-2-3-4-5"

// Includes - Check existence
arr.includes(3);       // true

// Find index
arr.indexOf(3);        // 2
arr.lastIndexOf(3);    // 2
```

### Iteration Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - Execute for each element
numbers.forEach((num, index) => {
    console.log(`${index}: ${num}`);
});

// map - Transform elements
let doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter - Filter elements
let evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce - Reduce to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
// 15

// find - Find first match
let found = numbers.find(num => num > 3);
// 4

// findIndex - Find index of first match
let index = numbers.findIndex(num => num > 3);
// 3

// some - Test if any element passes
let hasEven = numbers.some(num => num % 2 === 0);
// true

// every - Test if all elements pass
let allPositive = numbers.every(num => num > 0);
// true

// flat - Flatten nested arrays
[[1, 2], [3, 4]].flat();  // [1, 2, 3, 4]

// flatMap - Map + flatten
[1, 2].flatMap(x => [x, x * 2]);  // [1, 2, 2, 4]
```

### Array Destructuring

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Skip elements
let [first, , third] = [1, 2, 3];

// Rest pattern
let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Default values
let [x = 10, y = 20] = [5];
console.log(x, y); // 5 20

// Swap variables
let m = 1, n = 2;
[m, n] = [n, m]; // m = 2, n = 1
```

---

## 🏗️ Objects

### Creating Objects

```javascript
// Object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    },
    // Method
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing properties
person.firstName;           // "John" (dot notation)
person["lastName"];         // "Doe" (bracket notation)
person.address.city;        // "New York" (nested)
person.fullName();          // "John Doe" (method)
```

### Object Methods

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Keys, Values, Entries
Object.keys(obj);      // ["a", "b", "c"]
Object.values(obj);    // [1, 2, 3]
Object.entries(obj);   // [["a", 1], ["b", 2], ["c", 3]]

// fromEntries - Convert entries back to object
Object.fromEntries([["a", 1], ["b", 2]]); // { a: 1, b: 2 }

// Assign - Copy/merge objects
Object.assign({}, obj, { d: 4 }); // { a: 1, b: 2, c: 3, d: 4 }

// Freeze - Make immutable
Object.freeze(obj);
obj.a = 10; // Silently fails

// Seal - Prevent adding/removing properties
Object.seal(obj);

// Check property existence
"a" in obj;              // true
obj.hasOwnProperty("a"); // true
```

### Object Destructuring

```javascript
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // "Alice" 25

// Rename variables
const { name: userName, age: userAge } = user;

// Default values
const { name: n, country = "Unknown" } = user;

// Nested destructuring
const data = {
    user: { name: "Bob", profile: { avatar: "pic.jpg" } }
};
const { user: { profile: { avatar } } } = data;

// Rest pattern
const { name: userName2, ...rest } = user;
// rest = { age: 25, email: "alice@example.com" }
```

### The `this` Keyword

```javascript
// In object methods - refers to the object
const person = {
    name: "John",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
person.greet(); // "Hello, I'm John"

// Arrow functions don't have their own this
const obj = {
    name: "Object",
    regularFunc() {
        console.log(this.name); // "Object"
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (inherits from parent scope)
    }
};

// Binding this
function greet() {
    console.log(`Hello, ${this.name}`);
}

const userObj = { name: "Alice" };

greet.call(userObj);           // "Hello, Alice"
greet.apply(userObj);          // "Hello, Alice"
const boundGreet = greet.bind(userObj);
boundGreet();                  // "Hello, Alice"
```

---

## 🌐 DOM Manipulation

### Selecting Elements

```javascript
// Single element selectors
document.getElementById("myId");
document.querySelector(".myClass");    // First match
document.querySelector("#id .class");  // CSS selector

// Multiple elements selectors
document.getElementsByClassName("myClass");
document.getElementsByTagName("div");
document.querySelectorAll(".myClass"); // All matches

// Convert NodeList to Array
const elements = [...document.querySelectorAll("div")];
```

### Creating & Modifying Elements

```javascript
// Create element
const div = document.createElement("div");
div.id = "newDiv";
div.className = "container";
div.textContent = "Hello World";
div.innerHTML = "<strong>Bold text</strong>";

// Add attributes
div.setAttribute("data-id", "123");
div.getAttribute("data-id");      // "123"
div.removeAttribute("data-id");
div.hasAttribute("data-id");      // false

// Classes
div.classList.add("active", "visible");
div.classList.remove("visible");
div.classList.toggle("active");
div.classList.contains("active"); // true/false
div.classList.replace("old", "new");

// Styles
div.style.color = "red";
div.style.backgroundColor = "blue";
div.style.cssText = "color: red; background: blue;";
```

### DOM Traversal

```javascript
const element = document.querySelector("#myElement");

// Parent
element.parentElement;
element.parentNode;
element.closest(".ancestor");

// Children
element.children;
element.childNodes;
element.firstElementChild;
element.lastElementChild;

// Siblings
element.previousElementSibling;
element.nextElementSibling;
```

### Adding/Removing Elements

```javascript
const parent = document.querySelector("#parent");
const child = document.createElement("div");

// Append
parent.appendChild(child);
parent.append(child, "text");
parent.prepend(child);

// Insert relative to element
parent.insertBefore(newChild, referenceChild);
element.insertAdjacentHTML("beforebegin", "<div>Before</div>");
element.insertAdjacentHTML("afterend", "<div>After</div>");

// Remove
child.remove();
parent.removeChild(child);

// Replace
parent.replaceChild(newChild, oldChild);
oldChild.replaceWith(newChild);

// Clone
element.cloneNode(false);  // Shallow
element.cloneNode(true);   // Deep
```

### Event Handling

```javascript
const button = document.querySelector("#myButton");

// addEventListener (recommended)
button.addEventListener("click", function(event) {
    console.log("Clicked!", event.target);
});

// Arrow function
button.addEventListener("click", (e) => {
    console.log("Clicked!");
});

// Named function (for removal)
function handleClick(e) {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// Event options
button.addEventListener("click", handler, {
    once: true,      // Remove after first trigger
    capture: true,   // Capture phase
    passive: true    // Won't call preventDefault()
});
```

### Common Events

```javascript
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);

// Keyboard events
document.addEventListener("keydown", (e) => {
    console.log(e.key, e.code, e.ctrlKey);
});

// Form events
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
input.addEventListener("input", handler);
input.addEventListener("change", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
document.addEventListener("DOMContentLoaded", handler);
```

### Event Object Properties

```javascript
element.addEventListener("click", (e) => {
    e.target;           // Element that triggered event
    e.currentTarget;    // Element listener is attached to
    e.type;             // Event type ("click")
    
    e.preventDefault();  // Prevent default behavior
    e.stopPropagation(); // Stop event bubbling
    
    // Mouse position
    e.clientX; e.clientY; // Relative to viewport
    e.pageX; e.pageY;     // Relative to document
    
    // Keyboard
    e.key;               // "Enter", "a", "ArrowUp"
    e.altKey; e.ctrlKey; e.shiftKey; // Modifier keys
});
```

### Event Delegation

```javascript
// Add one listener to parent instead of each child
document.querySelector("#todo-list").addEventListener("click", (e) => {
    if (e.target.matches(".delete-btn")) {
        e.target.closest("li").remove();
    }
    if (e.target.matches(".edit-btn")) {
        // Handle edit
    }
});
```

---

## ✨ ES6+ Features

### Template Literals

```javascript
const name = "World";
const age = 25;

// String interpolation
const greeting = `Hello, ${name}!`;

// Multi-line strings
const html = `
    <div class="card">
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Expressions
console.log(`Sum: ${2 + 2}`);
console.log(`Status: ${age >= 18 ? "Adult" : "Minor"}`);
```

### Optional Chaining (?.)

```javascript
const user = {
    name: "John",
    address: {
        city: "NYC"
    }
};

// Old way (verbose)
const city = user && user.address && user.address.city;

// Optional chaining
const cityNew = user?.address?.city;        // "NYC"
const zip = user?.address?.zip;          // undefined (no error)

// With arrays and functions
const first = arr?.[0];
const result = obj?.method?.();

// Nullish coalescing combo
const cityOrDefault = user?.address?.city ?? "Unknown";
```

### Nullish Coalescing (??)

```javascript
// Only triggers for null/undefined (not 0, "", false)
const value1 = null ?? "default";     // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";        // 0
const value4 = "" ?? "default";       // ""
const value5 = false ?? "default";    // false

// Comparison with ||
const orValue = 0 || "default";  // "default" (0 is falsy)
const nullValue = 0 ?? "default"; // 0 (only null/undefined)
```

### Map & Set

```javascript
// Map - Key-value pairs with any key type
const map = new Map();
map.set("name", "John");
map.set(1, "one");
map.set({}, "object key");

map.get("name");      // "John"
map.has("name");      // true
map.size;             // 3
map.delete("name");
map.clear();

// Iterate Map
for (const [key, value] of map) {
    console.log(key, value);
}

// Set - Unique values only
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Set {1, 2, 3, 4}

set.add(5);
set.has(3);           // true
set.delete(3);
set.size;             // 4

// Convert array to unique values
const unique = [...new Set([1, 1, 2, 2, 3])]; // [1, 2, 3]
```

---

## ⏳ Asynchronous JavaScript

### Callbacks

```javascript
// Basic callback pattern
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // After 1 second: "Data received!"
});
```

### Promises

```javascript
// Creating a Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Success! ✅");
        } else {
            reject("Error! ❌");
        }
    }, 1000);
});

// Consuming a Promise
promise
    .then(result => {
        console.log(result);
        return "Next value";
    })
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Always runs");
    });
```

### Promise Methods

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

// Promise.all - Wait for all to resolve
Promise.all([p1, p2, p3])
    .then(([r1, r2, r3]) => console.log(r1, r2, r3));

// Promise.allSettled - Wait for all, regardless of outcome
Promise.allSettled([p1, Promise.reject("Error")])
    .then(results => console.log(results));

// Promise.race - First to settle wins
Promise.race([p1, p2, p3])
    .then(first => console.log(first));

// Promise.any - First to resolve wins
Promise.any([Promise.reject(1), p2, p3])
    .then(first => console.log(first));
```

### Async/Await

```javascript
// Async function always returns a Promise
async function fetchUserData() {
    const response = await fetch("/api/user");
    const data = await response.json();
    return data;
}

// Error handling with try/catch
async function fetchData() {
    try {
        const response = await fetch("/api/data");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    } finally {
        console.log("Fetch completed");
    }
}
```

### Parallel vs Sequential

```javascript
// Sequential - One after another (slower)
async function sequential() {
    const user = await fetchUser();
    const posts = await fetchPosts();
    return { user, posts };
}

// Parallel - All at once (faster)
async function parallel() {
    const [user, posts] = await Promise.all([
        fetchUser(),
        fetchPosts()
    ]);
    return { user, posts };
}
```

### Fetch API

```javascript
// GET request
async function getData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}

// POST request
async function postData(data) {
    const response = await fetch("https://api.example.com/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token123"
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
```

---

## 🛡️ Error Handling

### Try...Catch...Finally

```javascript
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
    console.error("Stack:", error.stack);
} finally {
    cleanup();
}

// Catch specific error types
try {
    JSON.parse("invalid json");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON syntax");
    } else if (error instanceof TypeError) {
        console.log("Type error occurred");
    } else {
        throw error;
    }
}
```

### Custom Errors

```javascript
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateEmail(email) {
    if (!email.includes("@")) {
        throw new ValidationError("Invalid email", "email");
    }
}

try {
    validateEmail("invalid");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Field "${error.field}": ${error.message}`);
    }
}
```

---

## 🎨 Object-Oriented Programming

### Classes (ES6)

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}!`;
    }
    
    get info() {
        return `${this.name}, ${this.age} years old`;
    }
    
    set setAge(value) {
        if (value > 0) this.age = value;
    }
    
    static isAdult(age) {
        return age >= 18;
    }
}

const person = new Person("John", 30);
person.greet();           // "Hello, I'm John!"
Person.isAdult(20);       // true
```

### Inheritance

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks! 🐕`;
    }
    
    fetch() {
        return `${this.name} fetches the ball!`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();  // "Buddy barks! 🐕"
```

### Private Fields (ES2022)

```javascript
class BankAccount {
    #balance = 0;  // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }
    
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            return amount;
        }
        throw new Error("Insufficient funds");
    }
    
    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance);  // 150
// account.#balance;           // SyntaxError!
```

---

## 🚀 Advanced Concepts

### Closures

```javascript
// A closure remembers its outer variables
function outer() {
    let count = 0;
    
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Practical: Private variables
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
```

### Prototypes

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const john = new Person("John");
john.greet(); // "Hello, I'm John"

// Prototype chain
john.__proto__ === Person.prototype;       // true
Person.prototype.__proto__ === Object.prototype; // true
```

### Modules (ES6)

```javascript
// math.js - Exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator { }

// main.js - Imports
import Calculator, { PI, add } from "./math.js";
import * as MathUtils from "./math.js";

// Dynamic imports
const module = await import("./math.js");
```

### Generators

```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }

for (const num of numberGenerator()) {
    console.log(num); // 1, 2, 3
}
```

---

## 📚 Quick Reference

### String Methods

```javascript
const str = "Hello, World!";

str.length                     // 13
str.toUpperCase()              // "HELLO, WORLD!"
str.toLowerCase()              // "hello, world!"
str.charAt(0)                  // "H"
str.indexOf("o")               // 4
str.includes("World")          // true
str.startsWith("Hello")        // true
str.endsWith("!")              // true
str.slice(0, 5)                // "Hello"
str.split(", ")                // ["Hello", "World!"]
str.replace("World", "JS")     // "Hello, JS!"
str.trim()                     // Remove whitespace
str.padStart(15, "*")          // "**Hello, World!"
str.repeat(2)                  // "Hello, World!Hello, World!"
```

### Number Methods

```javascript
const num = 3.14159;

num.toFixed(2)                 // "3.14"
num.toString()                 // "3.14159"

Number.isInteger(5)            // true
Number.isNaN(NaN)              // true
Number.parseFloat("3.14")      // 3.14
Number.parseInt("42px")        // 42

Math.round(4.5)                // 5
Math.floor(4.9)                // 4
Math.ceil(4.1)                 // 5
Math.abs(-5)                   // 5
Math.max(1, 2, 3)              // 3
Math.min(1, 2, 3)              // 1
Math.pow(2, 3)                 // 8
Math.sqrt(16)                  // 4
Math.random()                  // 0 to 0.999...
```

### Date Methods

```javascript
const now = new Date();

now.getFullYear()              // 2024
now.getMonth()                 // 0-11 (Jan = 0)
now.getDate()                  // 1-31
now.getDay()                   // 0-6 (Sun = 0)
now.getHours()                 // 0-23
now.getMinutes()               // 0-59
now.getTime()                  // Milliseconds since 1970

now.toISOString()              // "2024-01-15T10:30:00.000Z"
now.toLocaleDateString()       // "1/15/2024"
now.toLocaleTimeString()       // "10:30:00 AM"
```

---

<div align="center">

## 🎉 Congratulations!

**You've completed the JavaScript Cheat Sheet!** 

Keep practicing and building amazing things! 🚀

---

### 📖 Resources

| Resource | Link |
|----------|------|
| MDN Web Docs | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| JavaScript.info | [javascript.info](https://javascript.info/) |
| ES6 Features | [es6-features.org](https://es6-features.org/) |
| Can I Use | [caniuse.com](https://caniuse.com/) |

---

Made with ❤️ for the JavaScript Community

</div>
]]>
