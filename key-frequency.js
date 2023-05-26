import * as fs from "node:fs";

(() => {
  try {
    /** @type {string} */
    const text = fs.readFileSync("./test.log", "utf-8");


    let isShiftInUse = false;
    let isCapsLockInUse = false;

    /** @type {Object.<string, number>} */
    const frequencies = {};

    /** @param {string} key */
    const count = (key) => {
      if (frequencies.key) {
        frequencies.key++
      } else {
        frequencies.key = 1;
      }
    }

    for (let letter of text) {
      switch (letter) {
        case "":
          count("Esc");
          break;
        case "¾":
          count("F1");
          break;
        case "¿":
          count("F2");
          break;
        case "À":
          count("F3");
          break;
        case "Á":
          count("F4");
          break;
        case "Â":
          count("F5");
          break;
        case "Ã":
          count("F6");
          break;
        case "Ä":
          count("F7");
          break;
        case "Å":
          count("F8");
          break;
        case "Æ":
          count("F9");
          break;
      }
    }

  } catch (err) {
    console.error(err)
  }
})();
