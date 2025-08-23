# Node.js File System (fs) Module

The **`fs`** module in Node.js allows you to interact with the file system.  
It provides **three different APIs** to perform the same operations:

---

## 1. Callback-based API (`fs`)

- Uses **callbacks** to handle asynchronous operations.
- Non-blocking, but code can get messy with **callback hell**.
- **Pros**: Fast, non-blocking I/O.
- **Cons**: Harder to read/maintain, especially with nested callbacks.

**Example:**

```js
const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) return console.error(err);
  console.log("File content:", data);
});
```

---

## 2. Promise-based API (`fs/promises`) ✅

- Provides the same functionality but returns Promises.
- Works great with async/await → cleaner and modern code.
- **Pros**: Clean, avoids callback hell, easy error handling with try/catch.
- **Cons**: Requires Node.js v10+.

**Example:**

```js
import * as fs from "fs/promises";

try {
  const data = await fs.readFile("file.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.error(err);
}
```

---

## 3. Synchronous API (`fs` with Sync methods)

- Blocks execution until the operation completes.
- Useful for scripts, configuration, or startup tasks, but NOT recommended in production servers.
- **Pros**: Simple, easy to understand.
- **Cons**: Blocking → freezes event loop, reduces performance.

**Example:**

```js
const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.error(err);
}
```

---

## 📊 Summary Table

| API Type                | Non-blocking? | Code Style                  | Best For                       |
| ----------------------- | ------------- | --------------------------- | ------------------------------ |
| Callback (`fs`)         | ✅ Yes        | Messy with nested callbacks | Legacy code, quick async tasks |
| Promise (`fs/promises`) | ✅ Yes        | Clean with async/await      | Modern apps, production        |
| Sync (`fs` with Sync)   | ❌ No         | Very simple                 | Startup scripts, CLI tools     |

---

## ✅ Recommendation

- Use **`fs/promises`** for most real-world applications (clean, modern, async/await support). ✅
- Use **Sync methods** only for quick scripts or startup tasks.
- Avoid **callback style** unless working with old codebases.
