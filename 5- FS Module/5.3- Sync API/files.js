// ===============================================
// Node.js Filesystem (fs SYNC) Practice
// Topic: Writing, Reading, Appending, Copying, and File Stats
// ===============================================
import * as fs from "fs";

fs.writeFileSync("saad.md", "Hello World!");
let fileData = fs.readFileSync("saad.md", "utf-8");
console.log("Reading FileData first time = ", fileData);

fs.writeFileSync("saad.md", "Again writing in the File");
fileData = fs.readFileSync("saad.md", "utf-8");
console.log("Reading FileData after re-writing  = ", fileData);

//WHAT IF I WANT TO ADD SOME DATA IN THAT FILE NOT OVERWRITE IT???
fileData = fs.appendFileSync(
  "saad.md",
  "This sentence will be appended at EOF(end of file)"
);
fileData = fs.readFileSync("saad.md", "utf-8");
console.log("FileData after appending  = ", fileData);

fs.copyFileSync("saad.md", "copiedFile.txt");
//this will create a new file named copiedFile.txt with all content in saad.md
fileData = fs.readFileSync("copiedFile.txt", "utf-8");
console.log("content of copiedFile.txt = ", fileData);

//GET STATS of this copiedFile.txt
let txtStats = fs.statSync("copiedFile.txt");
console.log("STATS of this copiedFile.txt = ", txtStats);
console.log("copiedFile.txt is a File = ", txtStats.isDirectory());
console.log("copiedFile.txt is a Directory = ", txtStats.isFile());
