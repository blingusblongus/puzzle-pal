import { describe, expect, it } from "vitest";
import { translateToMorse, ERROR_INVALID } from "./translateToMorse";

describe("translateToMorse", () => {
  it("returns a string", () => {
    expect(translateToMorse("..--..")).toBeTypeOf("string");
  });
  it("Translates 'hello world'", () => {
    expect(translateToMorse(".... . .-.. .-.. ---/.-- --- .-. .-.. -..")).toBe(
      "HELLO WORLD",
    );
  });
  it("returns error message for invalid chars", () => {
    expect(translateToMorse("../. -.. 2")).toBe(ERROR_INVALID);
  });
});
