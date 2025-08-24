// Importing the built-in HTTP module (no need to install anything).
// In real projects, people use Express.js on top of this for easier development.
import http from "http";

// Create a server
// This callback runs EVERY TIME a request comes to the server.
// req = request object (info about the request like URL, method, headers, etc.)
// res = response object (what we send back to the client)
const server = http.createServer((req, res) => {
  // Good for debugging to see what client requested
  console.log(`Request received: ${req.method} ${req.url}`);

  // ----- Setting response headers -----
  // res.writeHead(statusCode, statusMessage, headersObject)
  // statusCode: 200 = success, 404 = not found, 500 = server error, etc.
  // Content-Type: tells browser what type of data is being sent (HTML, JSON, plain text, etc.)

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Saad's Node.js Server 🚀</h1>");
    res.write("<p>This is the homepage</p>");
    res.end(); // Must end the response, otherwise request hangs.
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1><p>Learning Node.js makes Express easier.</p>");
  } else if (req.url === "/data" && req.method === "GET") {
    // Sending JSON response
    res.writeHead(200, "OK", { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "Saad Nadeem", skill: "Learning Node.js" }));
  } else {
    // If no route matches, send 404
    res.writeHead(404, "Not Found", { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

// Start the server on port 8000
// Callback runs once when server is ready
server.listen(8000, () => {
  console.log("✅ Server is running at http://localhost:8000");
});

/*
  📝 Things to learn from this code:

  1. http.createServer():
     - Lowest level way to make a web server in Node.js.
     - Express is built on top of this.

  2. res.writeHead():
     - Sets the status code and response headers.

  3. res.write():
     - Sends chunks of response (useful for streaming data).

  4. res.end():
     - Must always be called to finish the response.

  5. Routing:
     - Here we used if-else to handle routes ("/", "/about", "/data").
     - Express makes this part much simpler using app.get("/route", ...).

  6. Content-Type:
     - "text/html" → for HTML pages
     - "application/json" → for API responses
     - "text/plain" → for plain text
     - Without proper Content-Type, the browser may not display data correctly.

  👉 Once you understand this, Express.js will feel 100x easier because
     you don’t have to manually check req.url/method or set headers.
*/
