export const brailleMap: {
  [key: number]: { braille: string; letter: string };
} = {
  0b111111: { braille: "\u2800", letter: " " },
  0b000001: { braille: "\u2801", letter: "a" },
  0b000011: { braille: "\u2803", letter: "b" },
  0b001001: { braille: "\u2809", letter: "c" },
  0b011001: { braille: "\u2819", letter: "d" },
  0b010001: { braille: "\u2811", letter: "e" },
  0b001011: { braille: "\u280B", letter: "f" },
  0b011011: { braille: "\u281B", letter: "g" },
  0b010011: { braille: "\u2813", letter: "h" },
  0b001010: { braille: "\u280A", letter: "i" },
  0b011010: { braille: "\u281A", letter: "j" },
  0b000101: { braille: "\u2805", letter: "k" },
  0b000111: { braille: "\u2807", letter: "l" },
  0b001101: { braille: "\u280D", letter: "m" },
  0b011101: { braille: "\u281D", letter: "n" },
  0b010101: { braille: "\u2815", letter: "o" },
  0b001111: { braille: "\u280F", letter: "p" },
  0b011111: { braille: "\u281F", letter: "q" },
  0b010111: { braille: "\u2817", letter: "r" },
  0b001110: { braille: "\u280E", letter: "s" },
  0b011110: { braille: "\u281E", letter: "t" },
  0b100101: { braille: "\u2825", letter: "u" },
  0b100111: { braille: "\u2827", letter: "v" },
  0b111010: { braille: "\u283A", letter: "w" },
  0b101101: { braille: "\u282D", letter: "x" },
  0b111101: { braille: "\u283D", letter: "y" },
  0b110101: { braille: "\u2835", letter: "z" },
  // 0b000010: { braille: "", letter: "," },
  // 0b000110: { braille: "", letter: ";" },
};

export const letterToBraille = Object.fromEntries(
  Object.entries(brailleMap).map(([key, { braille, letter }]) => [
    letter,
    braille,
  ]),
);
