const path = require("path");

// path absoluto

console.log(path.resolve("text.txt"));

// formar path
const midFOlder = "relatorios";
const fileName = "otavio.txt";

const finalPath = path.join("/", "arquivos", midFOlder, fileName);

console.log(finalPath);
