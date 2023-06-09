"use strict";

/**
 * @param {string} text
 * @param {Object.<string, number>} frequencies
 * */
export const countFrequencies = (text, frequencies) => {
  let isShiftInUse = false;

  /** @param {string} key */
  const count = (key) => {
    if (frequencies[key]) {
      frequencies[key]++
    } else {
      frequencies[key] = 1;
    }
  }

  for (let letter of text) {
    switch (letter) {

      // #region F-row
      case "":
        count("Esc");
        isShiftInUse = false;
        break;
      case "¾":
        count("F1");
        isShiftInUse = false;
        break;
      case "¿":
        count("F2");
        isShiftInUse = false;
        break;
      case "À":
        count("F3");
        isShiftInUse = false;
        break;
      case "Á":
        count("F4");
        isShiftInUse = false;
        break;
      case "Â":
        count("F5");
        isShiftInUse = false;
        break;
      case "Ã":
        count("F6");
        isShiftInUse = false;
        break;
      case "Ä":
        count("F7");
        isShiftInUse = false;
        break;
      case "Å":
        count("F8");
        isShiftInUse = false;
        break;
      case "Æ":
        count("F9");
        isShiftInUse = false;
        break;
      case "Ç":
        count("F10");
        isShiftInUse = false;
        break;
      case "È":
        count("F11");
        isShiftInUse = false;
        break;
      case "É":
        count("F12");
        isShiftInUse = false;
        break;
      case "":
        count("Scroll");
        isShiftInUse = false;
        break;
      case "":
        count("Pause");
        isShiftInUse = false;
        break;
      // #endregion

      // #region 60% cluster non-chars
      case "":
        count("Backsp");
        isShiftInUse = false;
        break;
      case "	":
        count("Tab");
        isShiftInUse = false;
        break;
      case "å":
        count("Caps");
        isShiftInUse = false;
        break;
      case "\n":
        count("Enter");
        isShiftInUse = false;
        break;
      case "á":
        count("LShift");
        isShiftInUse = true;
        break;
      case "â":
        count("RShift");
        isShiftInUse = true;
        break;
      case "ã":
        count("LCtrl");
        isShiftInUse = false;
        break;
      case "é":
        count("LAlt");
        isShiftInUse = false;
        break;
      case " ":
        count("RCtrl");
        isShiftInUse = false;
        break;
      case "ì":
        count("RWin");
        isShiftInUse = false;
        break;
      case "ä":
        count("RAlt");
        isShiftInUse = false;
        break;
      // #endregion

      // #region nav cluster
      case "Q":
        if (isShiftInUse) {
          count("Q");
        } else {
          count("Left");
        }
        break;
      case "R":
        if (isShiftInUse) {
          count("R");
        } else {
          count("Up");
        }
        break;
      case "S":
        if (isShiftInUse) {
          count("S");
        } else {
          count("Right");
        }
        break;
      case "T":
        if (isShiftInUse) {
          count("T");
        } else {
          count("Down");
        }
        break;
      case "P":
        if (isShiftInUse) {
          count("P");
        } else {
          count("Home");
        }
        break;
      case "U":
        if (isShiftInUse) {
          count("U");
        } else {
          count("PgUp");
        }
        break;
      case "W":
        if (isShiftInUse) {
          count("W");
        } else {
          count("End");
        }
        break;
      case "V":
        if (isShiftInUse) {
          count("V");
        } else {
          count("PgDn");
        }
        break;
      case "ÿ":
        count("Delete");
        break;
      // #endregionKXKXKX

      // #region 60% cluster letter chars
      case "p":
        count("P");
        isShiftInUse = false;
        break;
      case "q":
        count("Q");
        isShiftInUse = false;
        break;
      case "r":
        count("R");
        isShiftInUse = false;
        break;
      case "s":
        count("S");
        isShiftInUse = false;
        break;
      case "t":
        count("T");
        isShiftInUse = false;
        break;
      case "u":
        count("U");
        isShiftInUse = false;
        break;
      case "v":
        count("V");
        isShiftInUse = false;
        break;
      case "w":
        count("W");
        isShiftInUse = false;
        break;

      case "e":
        isShiftInUse = false;
      case "E":
        count("E");
        break;

      case "y":
        isShiftInUse = false;
      case "Y":
        count("Y");
        break;

      case "i":
        isShiftInUse = false;
      case "I":
        count("I");
        break;

      case "o":
        isShiftInUse = false;
      case "O":
        count("O");
        break;

      case "a":
        isShiftInUse = false;
      case "A":
        count("A");
        break;

      case "d":
        isShiftInUse = false;
      case "D":
        count("D");
        break;

      case "f":
        isShiftInUse = false;
      case "F":
        count("F");
        break;

      case "g":
        isShiftInUse = false;
      case "G":
        count("G");
        break;

      case "h":
        isShiftInUse = false;
      case "H":
        count("H");
        break;

      case "j":
        isShiftInUse = false;
      case "J":
        count("J");
        break;

      case "k":
        isShiftInUse = false;
      case "K":
        count("K");
        break;

      case "l":
        isShiftInUse = false;
      case "L":
        count("L");
        break;

      case "z":
        isShiftInUse = false;
      case "Z":
        count("Z");
        break;

      case "x":
        isShiftInUse = false;
      case "X":
        count("X");
        break;

      case "c":
        isShiftInUse = false;
      case "C":
        count("C");
        break;

      case "b":
        isShiftInUse = false;
      case "B":
        count("B");
        break;

      case "n":
        isShiftInUse = false;
      case "N":
        count("N");
        break;

      case "m":
        isShiftInUse = false;
      case "M":
        count("M");
        break;
      // #endregion

      // #region 60% cluster non-letter chars
      case " ":
        count("Space");
        isShiftInUse = false;
        break;
      case "`":
      case "~":
        isShiftInUse = false;
        count("`");
        break;
      case "1":
      case "!":
        isShiftInUse = false;
        count("1");
        break;
      case "2":
      case "@":
        isShiftInUse = false;
        count("2");
        break;
      case "3":
      case "#":
        isShiftInUse = false;
        count("3");
        break;
      case "4":
      case "$":
        isShiftInUse = false;
        count("4");
        break;
      case "5":
      case "%":
        isShiftInUse = false;
        count("5");
        break;
      case "6":
      case "^":
        isShiftInUse = false;
        count("6");
        break;
      case "7":
      case "&":
        isShiftInUse = false;
        count("7");
        break;
      case "8":
      case "*":
        isShiftInUse = false;
        count("8");
        break;
      case "9":
      case "(":
        isShiftInUse = false;
        count("9");
        break;
      case "0":
      case ")":
        isShiftInUse = false;
        count("0");
        break;
      case "-":
      case "_":
        isShiftInUse = false;
        count("-");
        break;
      case "=":
      case "+":
        isShiftInUse = false;
        count("=");
        break;
      case "[":
      case "{":
        isShiftInUse = false;
        count("[");
        break;
      case "]":
      case "}":
        isShiftInUse = false;
        count("]");
        break;
      case "\\":
      case "|":
        isShiftInUse = false;
        count("\\");
        break;
      case ";":
      case ":":
        isShiftInUse = false;
        count(";");
        break;
      case "'":
      case "\"":
        isShiftInUse = false;
        count("'");
        break;
      case ",":
      case "<":
        isShiftInUse = false;
        count(",");
        break;
      case ".":
      case ">":
        isShiftInUse = false;
        count(".");
        break;
      case "/":
      case "?":
        isShiftInUse = false;
        count("/");
        break;
      // #endregion
    }
  }

  return frequencies;
}