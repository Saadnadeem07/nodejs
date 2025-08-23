import { URL } from "url";

const myURL = new URL(
  "https://www.youtube.com:8080/watch?query=string#hashkey"
);
const Search = new URL(
  "https://www.youtube.com/results?search_query=node+js+video"
);
console.log("host:", myURL.host);
console.log("hash:", myURL.hash);
console.log("hostname:", myURL.hostname);
console.log("port:", myURL.port);
console.log("href:", myURL.href);
console.log("protocol:", myURL.protocol);
console.log("search:", Search.search);
console.log("search:", Search.searchParams);
