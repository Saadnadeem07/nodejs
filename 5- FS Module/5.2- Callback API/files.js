// ===============================================
// Node.js Filesystem (fs) Practice - Callback API
// Topic: Writing, Reading, Appending, Copying, and File Stats
// ===============================================

// Moving from `fs/promises` → callback-based `fs`
// - No `await` or async/await
// - Every method takes a callback: (error, data) => {...}
// ===============================================

const fs = require("fs");

// =============================
// 1. WRITE FILE (overwrites if exists)
// =============================

fs.writeFile("README.md", "Hello World!", "utf-8", (error) => {
  if (error) {
    console.error("❌ Error writing file:", error.message);
    return;
  }
  console.log("✅ File written successfully!");
});

// =============================
// 2. READ FILE
// =============================

fs.readFile("README.md", "utf-8", (error, data) => {
  if (error) {
    console.error("❌ Error reading file:", error.message);
    return;
  }
  console.log("📖 Reading FileData first time =", data);
});

// =============================
// 3. OVERWRITE FILE AGAIN
// =============================

fs.writeFile("README.md", "Again writing in the File", "utf-8", (error) => {
  if (error) {
    console.error("❌ Error overwriting file:", error.message);
    return;
  }

  // Read after overwrite completes
  fs.readFile("README.md", "utf-8", (error, data) => {
    if (error) {
      console.error("❌ Error reading file after overwrite:", error.message);
      return;
    }
    console.log("📖 Reading FileData after re-writing =", data);
  });
});

// =============================
// 4. APPEND TO FILE
// =============================

fs.appendFile(
  "README.md",
  "\nThis sentence will be appended at EOF (end of file).",
  (error) => {
    if (error) {
      console.error("❌ Error appending file:", error.message);
      return;
    }

    // Read after append completes
    fs.readFile("README.md", "utf-8", (error, data) => {
      if (error) {
        console.error("❌ Error reading after append:", error.message);
        return;
      }
      console.log("📖 FileData after appending =", data);
    });
  }
);

// =============================
// 5. COPY FILE + 6. GET STATS
// =============================

fs.copyFile("README.md", "copiedFile.txt", (error) => {
  if (error) {
    console.error("❌ Error copying file:", error.message);
    return;
  }
  console.log("✅ File copied to copiedFile.txt");

  // Read the copied file only after copy is done
  fs.readFile("copiedFile.txt", "utf-8", (error, data) => {
    if (error) {
      console.error("❌ Error reading copied file:", error.message);
      return;
    }
    console.log("📖 Content of copiedFile.txt =", data);

    // Get stats only after file is confirmed copied
    fs.stat("copiedFile.txt", (error, stats) => {
      if (error) {
        console.error("❌ Error getting stats:", error.message);
        return;
      }

      console.log("📊 Stats of copiedFile.txt =", stats);
      console.log("📌 Is File?", stats.isFile());
      console.log("📌 Is Directory?", stats.isDirectory());
    });
  });
});
