const path = require("path");
const filepath = 'C:/Program Files/nodejs/ghjk/ghjk/hjk';

const ek = 'hello';
const be = 'index.txt';
const fullPath =path.join(ek,be)

const rel = ""
const abs = path.resolve(rel);


const dir = path.dirname(filepath);

const bn = path.basename(filepath);

const extName = path.extname(filepath);

console.log(extName);


