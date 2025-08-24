# Node.js HTTP Server with Routing and Page Management

This project demonstrates how to create a simple **HTTP server** using Node.js without any external frameworks. It covers the basics of:

- Setting up a server using the built-in `http` module.
- Handling **routing** for different URLs.
- Managing **pages** by reading and serving HTML files.
- Serving system-related information from Node.js built-in modules.

---

## 📌 Features

1. **HTTP Server**

   - Created using Node.js `http` module.
   - Listens on a defined port (e.g., 3000).

2. **Routing**

   - Handles multiple routes such as:
     - `/` → Home Page
     - `/about` → About Page
     - `/contact` → Contact Page
     - Any undefined route → 404 Page Not Found

3. **Page Management**

   - Reads HTML files from a `public` folder.
   - Dynamically serves content using `fs.readFile`.
   - Example:
     ```js
     fs.readFile("./public/index.html", (err, data) => {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end(data);
     });
     ```

4. **Error Handling**
   - Proper error handling if a file is missing.
   - Returns a fallback 404 HTML page.

---

## 📂 Project Structure

```
project-folder/
│── server.js        # Main server file
│── public/          # Folder containing HTML pages
│   ├── index.html
│   ├── about.html
│   └── contact.html
│── README.md        # Documentation
```

---

## 🚀 How to Run

1. Clone this repository or create files as shown.
2. Run the server:
   ```bash
   node server.js
   ```
3. Open browser and visit:
   - [http://localhost:3000](http://localhost:3000) → Home Page
   - [http://localhost:3000/about](http://localhost:3000/about) → About Page
   - [http://localhost:3000/contact](http://localhost:3000/contact) → Contact Page

---

## 📖 Example Code Snippet

```js
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

## 🛠️ Tech Used

- **Node.js** (Core `http` & `fs` modules)
- **JavaScript (ES Modules)**

---

## 📌 Future Improvements
- Use frameworks like **Express.js** for scalable projects. Wait for Express.js repo 😉

---
