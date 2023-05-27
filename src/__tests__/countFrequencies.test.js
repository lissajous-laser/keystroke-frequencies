import { expect, it } from "@jest/globals";
import { countFrequencies } from "../countFrequencies";

it("SHOULD record all documented F-row keys", () => {
  const text = "¾¿ÀÁÂÃÄÅÆÇÈÉ";

  const result = countFrequencies(text);
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
  }

  expect(result).toEqual(expected);
});

