// ===============================================
// Node.js Filesystem (fs/promises) Practice
// Topic: Creating, Reading & Deleting Directories
// ===============================================

// Import the filesystem (fs) module with promise-based APIs
import * as fs from "fs/promises";

try {
  // =============================
  // 1. CREATE DIRECTORIES (without recursive)
  // =============================

  // Create a folder "c:\nodejs"
  // This works only if "c:\nodejs" does not already exist.
  // If it already exists → Error: EEXIST
  await fs.mkdir("c:\\nodejs");

  // Create "c:\nodejs\courses"
  // This will work only if "c:\nodejs" already exists.
  // If parent folder is missing → Error: ENOENT
  await fs.mkdir("c:\\nodejs\\courses");

  // Try to create nested directory in one go
  // ❌ This will FAIL because parent folders might not exist
  // Error: ENOENT → no such file or directory
  await fs.mkdir("c:\\nodejs1\\courses\\redux\\toolkit");

  console.log("✅ Directories created (without recursive)");
} catch (error) {
  console.error("❌ Error (without recursive):", error.message);
}

// =============================
// 2. CREATE DIRECTORIES (with recursive: true)
// =============================

try {
  // Using { recursive: true } fixes the ENOENT problem.
  // It will create all missing parent folders automatically.
  await fs.mkdir("c:\\nodejs1\\courses\\redux\\toolkit", { recursive: true });

  console.log("✅ Directories created successfully (with recursive:true)");
} catch (error) {
  console.error("❌ Error (with recursive:true):", error.message);
}

// =============================
// 3. READ DIRECTORY CONTENTS
// =============================

try {
  // Read contents of "c:\nodejs1"
  const files = await fs.readdir("c:\\nodejs1");

  console.log("📂 Contents of c:\\nodejs1:");
  for (const file of files) {
    console.log(" -", file);
  }
} catch (error) {
  console.error("❌ Error reading directory:", error.message);
}

// =============================
// 4. DELETE DIRECTORIES (strict fs.rmdir) fs.rmdir is depreciated
// =============================

try {
  // fs.rmdir only deletes EMPTY folders.
  // If folder has files/subfolders → Error: ENOTEMPTY
  await fs.rmdir("c:\\nodejs1\\courses\\redux\\toolkit");

  console.log("🗑️ Directory deleted (must be empty).");
} catch (error) {
  console.error("❌ Error deleting (rmdir):", error.message);
}

// =============================
// 5. DELETE DIRECTORIES (modern fs.rm) fs.rmdir is depreciated
// =============================

try {
  // fs.rm with { recursive:true, force:true } can delete non-empty folders
  // ⚠️ Be VERY careful → this can delete entire folder trees
  await fs.rm("c:\\nodejs1", { recursive: true, force: true });

  console.log("🗑️ Directory deleted recursively using fs.rm.");
} catch (error) {
  console.error("❌ Error deleting (rm):", error.message);
}
