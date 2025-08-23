import os from "os";
// Returns the operating system platform (e.g., 'win32', 'linux', 'darwin')
console.log("os.platform : ", os.platform());
// Returns the CPU architecture (e.g., 'x64', 'arm')
console.log("os.arch : ", os.arch());
// Returns information about each logical CPU core
// Useful for checking performance, scaling workloads, clustering
console.log("os.cpus : ", os.cpus());
// Returns the hostname of the operating system (computer name)
console.log("os.hostname : ", os.hostname());
// Returns the current user's home directory (useful for saving user files)
console.log("os.homedir : ", os.homedir());
// Returns total system memory in bytes
console.log("os.totalmem : ", os.totalmem());
// Returns free system memory in bytes
console.log("os.freemem : ", os.freemem());
// Can calculate used memory
console.log("used memory : ", os.totalmem() - os.freemem());
console.log("os.type : ", os.type()); // Operating system name ('Windows_NT', 'Linux', 'Darwin')
console.log("os.release : ", os.release()); // OS version/release number
console.log("os.uptime : ", os.uptime()); // System uptime in seconds
console.log("os.loadavg : ", os.loadavg()); // Load average (useful in Linux/macOS, not on Windows)
console.log("os.tmpdir : ", os.tmpdir()); // Default directory for temporary files

console.log("os.userInfo : ", os.userInfo()); // Info about current logged-in user (username, UID, home dir, shell)
// Returns the network interfaces and their details (IP, MAC, etc.)
// Useful for networking apps, IP detection
console.log("os.networkInterfaces : ", os.networkInterfaces());
