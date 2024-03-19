import { describe, expect, it } from "vitest";
import { translateFromMorse, ERROR_INVALID } from "./translateFromMorse";

describe("translateFromMorse", () => {
  it("returns a string", () => {
    expect(translateFromMorse("..--..")).toBeTypeOf("string");
  });
  it("Translates 'hello world'", () => {
    expect(
      translateFromMorse(".... . .-.. .-.. ---/.-- --- .-. .-.. -.."),
    ).toBe("HELLO WORLD");
  });
  it("returns error message for invalid chars", () => {
    expect(translateFromMorse("../. -.. 2")).toBe(ERROR_INVALID);
  });
  it("returns '' when input is empty", () => {
    expect(translateFromMorse("")).toBe("");
  });
});
