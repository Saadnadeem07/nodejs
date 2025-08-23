// ===============================================
// Node.js Filesystem (fs SYNC) Practice
// Topic: Creating, Reading & Deleting Directories
// ===============================================

//now we will use Sync everywhere to make it sync
//comment uncomment it according to logic but syntax is ok
import * as fs from "fs";
fs.mkdirSync("c:\\nodejs");
fs.mkdirSync("c:\\nodejs\\courses");
fs.mkdirSync("c:\\nodejs1\\courses\\redux\\toolkit");
console.log("✅ Directories created (without recursive)");
fs.mkdirSync("c:\\nodejs1\\courses\\redux\\toolkit", { recursive: true });
console.log("✅ Directories created successfully (with recursive:true)");
const files = fs.readdirSync("c:\\nodejs1");
console.log("📂 Contents of c:\\nodejs1:");
for (const file of files) {
  console.log(" -", file);
}
fs.rmdirSync("c:\\nodejs1\\courses\\redux\\toolkit");
console.log("🗑️ Directory deleted (must be empty).");
fs.rmSync("c:\\nodejs1", { recursive: true, force: true });
console.log("🗑️ Directory deleted recursively using fs.rmSync.");
