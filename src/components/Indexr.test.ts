import { describe, expect, it } from "vitest";
import { calculateOffsetText } from "./Indexr";

describe("Indexr", () => {
  describe("calculateOffsetText", () => {
    it("returns a string", () => {
      expect(calculateOffsetText("hello", 1)).toBeTypeOf("string");
    });
    it("a + 1 = b", () => {
      expect(calculateOffsetText("a", 1)).toBe("b");
    });
    it("A + 1 = B", () => {
      expect(calculateOffsetText("A", 1)).toBe("B");
    });
    it("a - 1 = z", () => {
      expect(calculateOffsetText("a", -1)).toBe("z");
    });
    it("A - 1 = Z", () => {
      expect(calculateOffsetText("A", -1)).toBe("Z");
    });
    it("Handles Spaces", () => {
      expect(calculateOffsetText("A b", -1)).toBe("Z a");
    });
    it("Handles Other non alpha chars", () => {
      expect(calculateOffsetText("Eloob!", -3)).toBe("Billy!");
    });
  });
});
