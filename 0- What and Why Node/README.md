# Understanding Node.js

This project is a simple demonstration to understand **what Node.js
is**,\
**what it can run**, and **what it cannot run**.

---

## 📌 What is Node.js?

Node.js is a **JavaScript runtime** built on Chrome's **V8 engine**.

- It allows us to run JavaScript **outside the browser** (on a
  computer or server).
- It gives access to powerful features such as **file system
  operations**, **server creation**, and **working with external
  libraries (npm)**.
- Unlike browsers, Node.js does **not** have `window`, `document`, or
  other DOM APIs.

---

## ✅ What Node.js CAN Do

1.  Run normal JavaScript logic (loops, functions, variables, etc.).
2.  Work with files using the **File System (fs) module**.
3.  Create servers (HTTP, TCP, etc.).
4.  Use built-in and third-party npm packages.

**Example from `index.js`:**

```js
// Run normal JavaScript
let sum = 10 + 20;
console.log("Sum is:", sum);

// Work with the file system
const fs = require("fs");
fs.writeFileSync("example.txt", "Hello from Node.js!");

// Create a simple server
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js server!");
  })
  .listen(3000, () => console.log("Server running at http://localhost:3000"));
```

---

## ❌ What Node.js CANNOT Do

- **Browser-specific APIs**:

  ```js
  console.log(window); // ❌ Error: window is not defined
  console.log(document); // ❌ Error: document is not defined
  ```

- **Browser functions**:

  ```js
  alert("Hello!"); // ❌ Error: alert is not defined
  ```

- **Run OS commands directly**:

  ```js
  dir; // ❌ Error
  ls; // ❌ Error
  ```

  > ✅ To run system commands, Node.js provides the `child_process`
  > module.

---

## 🚀 How to Run

1.  Install [Node.js](https://nodejs.org/) on your system.

2.  Clone or download this repository.

3.  Open a terminal in the project folder.

4.  Run:

    ```bash
    node index.js
    ```

5.  Check the output in your terminal and visit <http://localhost:3000>.

---

## 📂 Files

- **index.js** → The main script with examples of what Node can and
  cannot do.
- **example.txt** → A file created by Node.js (when you run the
  script).

---

## 📌 Summary

### Node.js **CAN**

- Run JavaScript outside browsers
- Work with files, servers, and npm packages
- Perform backend/server tasks

### Node.js **CANNOT**

- Access `window`, `document`, or other DOM APIs
- Show browser popups (`alert`, `prompt`, etc.)
- Run OS commands directly (without special modules)

---

📅 Created for learning purposes
