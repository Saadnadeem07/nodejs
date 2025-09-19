# 🌟 Node.js Learning Repository

A hands‑on collection of notes and code samples created while **learning and mastering Node.js fundamentals**.  
Each folder demonstrates a specific concept, with concise examples written in VS Code and executed to understand Node.js from the ground up.

## 🎯 Purpose
This repository serves as a personal learning journal and a quick‑reference guide for anyone exploring core Node.js features before moving on to frameworks like **Express.js** or **NestJS**.

## 📚 Source of Learning
I followed the free video course:  
**The Complete Node.js Bootcamp: From Beginner to Expert — Unlocking the Power of Server-Side JS**  
🔗 [Watch on YouTube](https://www.youtube.com/watch?v=EsUL2bfKKLc&list=PLSDeUiTMfxW5vCie_cwsV6UPcZijHce8j&index=1&t=3226s)

## 🗂️ Repository Structure & Key Topics

- **0 – What and Why Node**  
  Introduction to Node.js, the V8 engine, and how Node ties JavaScript with C++.

- **1 – Modules Wrapper**  
  Understanding how Node.js wraps code inside functions to provide scope.

- **2 – Modules**  
  CommonJS module system: `require`, `module.exports`, and sharing functionality.

- **3 – ES6 Modules**  
  Using modern `import` / `export` syntax for modular code.

- **4 – Path Modules**  
  Working with file and directory paths in Node.js.

- **5 – FS Module**  
  File system operations in three styles:  
  - **5.1 – Promise API**: Async file operations using Promises and `async/await`.  
  - **5.2 – Callback API**: Classic callback‑based file operations.  
  - **5.3 – Sync API**: Synchronous (blocking) file operations.

- **6 – OS Module**  
  Accessing system details like CPU info, memory usage, and hostnames.

- **7 – URL Module**  
  Parsing and formatting URLs, handling query parameters.

- **8‑10 – HTTP Routing & Page Management**  
  Building basic servers, creating routes, and serving static pages.

- **11 – Events**  
  Understanding the EventEmitter pattern and creating custom events.

- **12 – Streams**  
  Efficiently reading and writing large files with Node.js streams.

## 📂 Project Layout
```
saadnadeem07-nodejs/
├── README.md
├── 0- What and Why Node/
│   ├── README.md
│   └── index.js
├── 1- Modules Wrapper/
│   └── index.js
├── 2- Modules/
│   ├── greet.js
│   ├── index.js
│   └── persons.js
├── 3- ES6 Modules/
│   ├── greet.js
│   ├── index.js
│   └── persons.js
├── 4- Path Modules/
│   └── index.js
├── 5- FS Module/
│   ├── README.md
│   ├── 5.1- Promise API/
│   │   ├── directories.js
│   │   └── files.js
│   ├── 5.2- Callback API/
│   │   ├── directories.js
│   │   └── files.js
│   └── 5.3- Sync API/
│       ├── directories.js
│       └── files.js
├── 6- OS Module/
│   └── index.js
├── 7- URL Module/
│   └── index.js
├── 8-10 HTTP Routing Page Management/
│   ├── README.md
│   ├── index.js
│   └── public/
│       ├── about.html
│       └── index.html
├── 11- Events/
│   └── index.js
└── 12- Streams/
    └── index.js
```

## 🚀 How to Use
1. **Clone this repository**  
   ```bash
   git clone https://github.com/saadnadeem07/saadnadeem07-nodejs.git
   cd saadnadeem07-nodejs
   ```

2. **Run any example**  
   Open the desired folder and execute:
   ```bash
   node index.js
   ```

3. **Experiment & Modify**  
   Change the code, add new examples, and deepen your understanding of Node.js internals.

## ✨ Takeaways
By systematically working through these modules you will:
- Gain a solid grasp of Node.js core modules and architecture.  
- Understand asynchronous patterns (callbacks, promises, streams).  
- Build a strong foundation for advanced backend development.

---
*This repository is both a personal study log and a ready reference for anyone starting their Node.js journey.*
