import path from "path";

console.log(path.basename("C:Users/saad/Downloads"));
// Downloads

console.log(path.basename("C:Users//index.html"));
// index.html

console.log(path.basename("C:Users/NodeJs/Path-Modules/index.html", ".html"));
// index

console.log(path.dirname("C:Users/NodeJs/Path-Modules/index.html"));
// C:Users/NodeJs/Path-Modules

console.log(path.extname("C:Users/NodeJs/Path-Modules/index.html"));
// .html

console.log(path.join("c:", "users", "downloads", "index.html"));
// c:\users\downloads\index.html

console.log(path.join("c:", "users", "downloads", "index.html", "."));
// c:\users\downloads\index.html

console.log(path.join("c:", "users", "downloads", "index.html", ".."));
// c:\users\downloads

console.log(path.join("c:", "users", "downloads", "index.html", "../.."));
// c:\users

console.log(path.normalize("C:Users////NodeJs//Path-Modules//index.html"));
// C:Users\NodeJs\Path-Modules\index.html

console.log(path.parse("C:Users/NodeJs/Path-Modules/index.html"));
// {
//   root: 'C:',
//   dir: 'C:Users/NodeJs/Path-Modules',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }
