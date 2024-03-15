import { describe, expect, it } from "vitest";
import { intToBin, binToInt } from "./ConversionsPage.tsx";

describe("Binary", () => {
  describe("intToBin", () => {
    it("is defined", () => {
      expect(intToBin).toBeDefined();
    });
    it("converts 6 -> 110", () => {
      expect(intToBin(6)).toBe("110");
    });
    it("converts 0 -> 0", () => {
      expect(intToBin(0)).toBe("0");
    });
  });
  describe("binToInt", () => {
    it("is defined", () => {
      expect(binToInt).toBeDefined();
    });
    it("converts 111 -> 7", () => {
      expect(binToInt("111")).toBe(7);
    });
    it("converts 0 -> 0", () => {
      expect(binToInt("0")).toBe(0);
    });
  });
});
