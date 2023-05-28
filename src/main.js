"use strict";
import * as fs from "fs";
import { countFrequencies } from "./countFrequencies.js";

export const main =  () => {
  /** @type {string} */
  let text = "";
  /** @type {string[]} */
  let fileNames = [];

  try {
    fileNames = fs.readdirSync("./logs");
  } catch (err) {
    console.error(err);
  }

  const logFiles = fileNames.filter((fileName) => /\.log$/.test(fileName));
  /** @type {Object.<string, number>} frequencies */
  let frequencies = {};

  logFiles.forEach(async (file) => {
    try {
      text = fs.readFileSync(`./logs/${file}`, "utf-8");
    } catch (err) {
      console.error(err)
    }
    frequencies = countFrequencies(text, frequencies);
  });

  const frequenciesList = Object.entries(frequencies);
  frequenciesList.sort((a, b) => b[1] - a[1]);
  console.log(frequenciesList);
  const sortedFrequencies = Object.fromEntries(frequenciesList);
  console.log(sortedFrequencies);
};

main();