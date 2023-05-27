"use strict";
import * as fs from "node:fs/promises";
import {countFrequencies} from "./src/countFrequencies.js";

(async () => {
  /** @type {string} */
  let text = "";

  try {
    text = await fs.readFile("../test.log", "utf-8");
  } catch (err) {
    console.error(err)
  }

  const frequencies = countFrequencies(text);
  console.log(frequencies);
})();
