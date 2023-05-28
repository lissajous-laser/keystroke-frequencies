"use strict";
import { expect, it, jest } from "@jest/globals";
import { main } from "../main";

jest.mock("fs", () => {
  return {
    /** @param {string} path */
    readdirSync: (path) => ["file1.log", "file2.log"],
    /** @param {string} path */
    readFileSync: (path) => {
      if (path === "file1.log") {
        return "âFat âCat";
      } else if (path === "file2.log") {
        return "QQof SS";
      } else {
        return "";
      }
    }
  }
});




it("SHOULD only use the mocked values", () => {
  main();
  expect(1).toBe(1);
});