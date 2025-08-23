// ===============================================
// Node.js Filesystem (fs) Practice - Callback API
// Topic: Creating, Reading & Deleting Directories
// ===============================================

// Moving from `fs/promises` → callback-based `fs`
// - No async/await
// - No try/catch (errors are handled inside callbacks)
// - First parameter of callback = error
// - Second parameter (if any) = result
// ===============================================

// import * as fs from "fs";
const fs = require("fs");

// =============================
// 1. CREATE DIRECTORIES (without recursive)
// =============================

// Create "c:\nodejs"
// Works only if "c:\nodejs" does NOT already exist.
// If it exists → Error: EEXIST
fs.mkdir("c:\\nodejs", (error) => {
  if (error) {
    console.error("❌ Error creating c:\\nodejs:", error.message);
    return; // Stop execution on error
  }
  console.log("✅ Directory 'c:\\nodejs' created successfully!");
});

// Create "c:\nodejs\courses"
// Works only if "c:\nodejs" already exists.
// If parent folder missing → Error: ENOENT
fs.mkdir("c:\\nodejs\\courses", (error) => {
  if (error) {
    console.error("❌ Error creating c:\\nodejs\\courses:", error.message);
    return;
  }
  console.log("✅ Directory 'c:\\nodejs\\courses' created successfully!");
});

// Try creating nested directory directly
// ❌ FAILS if parent folders are missing → ENOENT
fs.mkdir("c:\\nodejs1\\courses\\redux\\toolkit", (error) => {
  if (error) {
    console.error("❌ Error creating deep folder without recursive:", error.message);
    return;
  }
  console.log("✅ Nested directory created (without recursive).");
});

// =============================
// 2. CREATE DIRECTORIES (with recursive: true)
// =============================

// With { recursive: true }, Node will create ALL missing parents.
// Example: Creates nodejs1 → courses → redux → toolkit all at once
fs.mkdir("c:\\nodejs1\\courses\\redux\\toolkit", { recursive: true }, (error) => {
  if (error) {
    console.error("❌ Error creating recursive directories:", error.message);
    return;
  }
  console.log("✅ Directories created successfully (with recursive:true).");
});

// =============================
// 3. READ DIRECTORY CONTENTS
// =============================

// Reads contents of a folder
// Callback provides: error + files[] array
fs.readdir("c:\\nodejs1", (error, files) => {
  if (error) {
    console.error("❌ Error reading c:\\nodejs1:", error.message);
    return;
  }

  console.log("📂 Contents of c:\\nodejs1:");
  files.forEach((file) => console.log(" -", file));
});

// =============================
// 4. DELETE DIRECTORIES (old fs.rmdir - deprecated)
// =============================

// fs.rmdir ONLY deletes EMPTY folders
// If not empty → ENOTEMPTY error
fs.rmdir("c:\\nodejs1\\courses\\redux\\toolkit", (error) => {
  if (error) {
    console.error("❌ Error deleting with rmdir:", error.message);
    return;
  }
  console.log("🗑️ Directory deleted (using rmdir, must be empty).");
});

// =============================
// 5. DELETE DIRECTORIES (modern fs.rm)
// =============================

// fs.rm is the modern replacement for fs.rmdir
// With { recursive:true, force:true } → deletes everything inside
// ⚠️ WARNING: Be careful, this can wipe large folder trees
fs.rm("c:\\nodejs1", { recursive: true, force: true }, (error) => {
  if (error) {
    console.error("❌ Error deleting with rm:", error.message);
    return;
  }
  console.log("🗑️ Directory deleted recursively using fs.rm.");
});

