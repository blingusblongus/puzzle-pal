import { describe, expect, it } from "vitest";
import { translateToMorse } from "./translateToMorse";

describe("translateToMorse", () => {
  it("returns a string", () => {
    expect(translateToMorse("hello")).toBeTypeOf("string");
  });
  it("Translates 'hello world'", () => {
    expect(translateToMorse("hello world")).toBe(
      ".... . .-.. .-.. ---/.-- --- .-. .-.. -..",
    );
  });
  it("returns '' when input is empty", () => {
    expect(translateToMorse("")).toBe("");
  });
});
