import fs from "fs"; // Importing the 'fs' (File System) module from Node.js core library

// Writing numbers (0–999) to a file named 'data.txt'
// 'flag: "a"' ensures that data is appended to the file instead of overwriting it
for (let i = 0; i < 1000; i++) {
  fs.writeFileSync("data.txt", `${i}\n`, { flag: "a" });
}

// Creating a readable stream from the file 'data.txt'
// Streams allow us to read data in chunks instead of loading the entire file into memory
// "utf-8" ensures the stream reads text instead of raw binary data
let x = fs.createReadStream("./data.txt", "utf-8");

// Listening for the 'data' event which is emitted whenever a chunk of data is available
// Instead of reading the whole file at once, Node.js gives us chunks, improving performance
x.on("data", (data) => {
  console.log(data); // Printing each chunk of data as it is read
});
