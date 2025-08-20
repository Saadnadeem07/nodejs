//require is an older way of doing things if you creating a new project must use import rather than using require - imort used in next folder ESmodules

const greeting = require("./greet");
const { p1, p2, p3 } = require("./persons");
//we can use both ways like .js at end or without it

//used name p1 so that one can not misunderstood that import export name must be same
greeting("saad");
greeting(p1);
greeting(p2);
greeting(p3);
