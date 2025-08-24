// Importing the built-in HTTP and File System (fs) modules.
// ⚠️ In production, developers usually prefer Express.js (built on top of http)
// because it simplifies routing, middleware, and response handling.
import http from "http";
import fs from "fs";

// Create an HTTP server.
// This callback executes EVERY TIME a request is made to the server.
// - req (IncomingMessage): contains request details (URL, method, headers).
// - res (ServerResponse): used to send data back to the client.
const server = http.createServer((req, res) => {
  console.log(`📩 Request: ${req.method} ${req.url}`);

  // Example of manual routing (Express makes this much simpler).
  if (req.url === "/" && req.method === "GET") {
    console.log("➡️ Serving Home Page");

    // Set response headers: (statusCode, statusMessage, headers)
    res.writeHead(200, "OK", { "Content-Type": "text/html" });

    // Serve index.html from the public folder
    fs.readFile("./public/index.html", (error, data) => {
      if (error) {
        console.error("❌ Error reading index.html:", error.message);
        res.writeHead(500, "Server Error", { "Content-Type": "text/plain" });
        return res.end("Internal Server Error");
      }
      res.end(data); // End the response with file contents
    });
  } else if (req.url === "/about" && req.method === "GET") {
    console.log("➡️ Serving About Page");

    res.writeHead(200, "OK", { "Content-Type": "text/html" });

    fs.readFile("./public/about.html", (error, data) => {
      if (error) {
        console.error("❌ Error reading about.html:", error.message);
        res.writeHead(500, "Server Error", { "Content-Type": "text/plain" });
        return res.end("Internal Server Error");
      }
      res.end(data);
    });
  } else {
    // Handle unknown routes → 404 Not Found
    res.writeHead(404, "Not Found", { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

// Start the server on port 8000
// This callback runs once when the server is ready to accept requests.
server.listen(8000, () => {
  console.log("✅ Server is running at http://localhost:8000");
});

/*
📘 Key Concepts Learned:

1. http.createServer()
   - Creates a low-level web server in Node.js.
   - Express.js internally uses this.

2. res.writeHead(statusCode, statusMessage, headers)
   - Sets HTTP status and headers.
   - Example: 200 = OK, 404 = Not Found, 500 = Server Error.

3. fs.readFile()
   - Reads HTML files from disk to serve as responses.

4. res.end()
   - Always required to finish the response.
   - Can send a string, Buffer, or nothing.

5. Routing (manual in this example)
   - Here we check `req.url` and `req.method` manually.
   - Express replaces this with clean APIs like `app.get("/about", ...)`.

6. Content-Type
   - Must be set correctly:
     • "text/html" → HTML pages
     • "application/json" → JSON APIs
     • "text/plain" → plain text responses

👉 Once you understand this low-level approach, Express.js will feel much easier,
since it automates routing, headers, error handling, and static file serving.
*/
