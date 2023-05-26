import * as fs from "node:fs/promises";

fs.readdir("./").then((result) => console.log(result));