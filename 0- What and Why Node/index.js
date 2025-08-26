// Key Point: Node.js is a JavaScript runtime built on Chrome's V8 engine. Node.js = Chrome V8 Engine + C++
// - It allows us to run JavaScript OUTSIDE of the browser (on our computer/server).
// - Node can do many "system-level" things (like work with files, create servers, etc.).
// - But Node CANNOT run browser-specific things (like window, document, alert).

// -----------------------------
// ✅ What Node.js CAN do
// -----------------------------

// 1. Run normal JavaScript logic
console.log("✅ Node can run normal JavaScript code!");
let sum = 10 + 20;
console.log("Sum is:", sum);

//understand these functionalities in next folders's
// 2. Work with built-in modules like 'fs' (file system)
const fs = require("fs");
fs.writeFileSync("example.txt", "Hello from Node.js!");
console.log("✅ Node can write to files (check example.txt created).");

// 3. Create a simple HTTP server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello! This is a response from a Node.js server.\n");
});

server.listen(3000, () => {
  console.log("✅ Node can create servers. Visit http://localhost:3000");
});

// -----------------------------
// ❌ What Node.js CANNOT do
// -----------------------------

// 1. Browser-specific objects
// console.log(window);   // ❌ ERROR: window is not defined in Node
// console.log(document); // ❌ ERROR: document is not defined in Node

// 2. Browser functions
// alert("Hello!");       // ❌ ERROR: alert is not defined in Node

// 3. Directly run Windows/Linux commands inside JS
// Example: The following won't work directly:
// dir       // ❌ ERROR
// ls        // ❌ ERROR
// (We need special modules like 'child_process' if we want to run OS commands)
