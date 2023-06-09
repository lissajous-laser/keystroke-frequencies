"use strict";
import { expect, it } from "@jest/globals";
import { countFrequencies } from "../countFrequencies";

it("SHOULD record all documented F-row keys", () => {
  const text = "¾¿ÀÁÂÃÄÅÆÇÈÉ";
  const result = countFrequencies(text, {});
  const expected = {
    Esc: 1,
    F1: 1,
    F2: 1,
    F3: 1,
    F4: 1,
    F5: 1,
    F6: 1,
    F7: 1,
    F8: 1,
    F9: 1,
    F10: 1,
    F11: 1,
    F12: 1,
    Scroll: 1,
    Pause: 1
  };

  expect(result).toEqual(expected);
});

it("SHOULD record all documented 60% cluster non-character keys", () => {
  const text = "	å\náâãé ìä";
  const result = countFrequencies(text, {});
  const expected = {
    Backsp: 1,
    Tab: 1,
    Caps: 1,
    Enter: 1,
    LShift: 1,
    RShift: 1,
    LCtrl: 1,
    LAlt: 1,
    RCtrl: 1,
    RWin: 1,
    RAlt: 1,
  };

  expect(result).toEqual(expected);
});

it("SHOULD record all documented nav cluster keys", () => {
  const text = "PQRSTUVWÿ";
  const result = countFrequencies(text, {});
  const expected = {
    Home: 1,
    Left: 1,
    Up: 1,
    Right: 1,
    Down: 1,
    PgUp: 1,
    PgDn: 1,
    End: 1,
    Delete: 1,
  };

  expect(result).toEqual(expected);
});

it("SHOULD record all lower-case letter keys", () => {
  const text = "qwertyuiopasdfghjklzxcvbnm";
  const result = countFrequencies(text, {});
  const expected = {
    Q: 1,
    W: 1,
    E: 1,
    R: 1,
    T: 1,
    Y: 1,
    U: 1,
    I: 1,
    O: 1,
    P: 1,
    A: 1,
    S: 1,
    D: 1,
    F: 1,
    G: 1,
    H: 1,
    J: 1,
    K: 1,
    L: 1,
    Z: 1,
    X: 1,
    C: 1,
    V: 1,
    B: 1,
    N: 1,
    M: 1
  };

  expect(result).toEqual(expected);
});

it("SHOULD record all upper-case letter keys WHEN shift is engaged", () => {
  const text = "áQWERTYUIOPASDFGHJKLZXCVBNM";
  const result = countFrequencies(text, {});
  const expected = {
    LShift: 1,
    Q: 1,
    W: 1,
    E: 1,
    R: 1,
    T: 1,
    Y: 1,
    U: 1,
    I: 1,
    O: 1,
    P: 1,
    A: 1,
    S: 1,
    D: 1,
    F: 1,
    G: 1,
    H: 1,
    J: 1,
    K: 1,
    L: 1,
    Z: 1,
    X: 1,
    C: 1,
    V: 1,
    B: 1,
    N: 1,
    M: 1
  };

  expect(result).toEqual(expected);
});

it("SHOULD record all non-letter characters", () => {
  const text = "`1234567890-=[]\\;',./~!@#$%^&*()_+{}|:\"<>? ";

  const result = countFrequencies(text, {});
  const expected = {
    "`": 2,
    "1": 2,
    "2": 2,
    "3": 2,
    "4": 2,
    "5": 2,
    "6": 2,
    "7": 2,
    "8": 2,
    "9": 2,
    "0": 2,
    "-": 2,
    "=": 2,
    "[": 2,
    "]": 2,
    "\\": 2,
    ";": 2,
    "'": 2,
    ",": 2,
    ".": 2,
    "/": 2,
    Space: 1
  };

  expect(result).toEqual(expected);
});

it(`SHOULD only record certain capital letters as alpha keys
  WHEN preceeded by a shift key`, () => {

  const text = "PQRSTUVW áPQRSTUVW âPQRSTUVW PQRSTUVW";
  const result = countFrequencies(text, {});
  const expected = {
    Space: 3,
    P: 2,
    Q: 2,
    R: 2,
    S: 2,
    T: 2,
    U: 2,
    V: 2,
    W: 2,
    Home: 2,
    Left: 2,
    Up: 2,
    Right: 2,
    Down: 2,
    PgUp: 2,
    PgDn: 2,
    End: 2,
    LShift: 1,
    RShift: 1
  };

  expect(result).toEqual(expected);
});