export const brailleMap: {
  [key: number]: { braille: string; letter: string };
} = {
  0b111111: { braille: "\u2800", letter: " " }, // Space (no dots)
  0b000001: { braille: "\u2801", letter: "a" }, // Dot 1
  0b000011: { braille: "\u2803", letter: "b" }, // Dots 1-2
  0b001001: { braille: "\u2809", letter: "c" }, // Dots 1-4
  0b011001: { braille: "\u280B", letter: "d" }, // Dots 1-2-4
  0b010001: { braille: "\u280A", letter: "e" }, // Dots 1-4
  0b001011: { braille: "\u2819", letter: "f" }, // Dots 1-2-5
  0b011011: { braille: "\u281B", letter: "g" }, // Dots 1-2-4-5
  0b010011: { braille: "\u281A", letter: "h" }, // Dots 1-4-5
  0b001010: { braille: "\u2807", letter: "j" }, // Dots 2-4-5
  0b011010: { braille: "\u2805", letter: "i" }, // Dots 2-5
  0b000101: { braille: "\u2802", letter: "k" }, // Dots 1-3
  0b000111: { braille: "\u2806", letter: "l" }, // Dots 1-2-3
  0b001101: { braille: "\u2812", letter: "m" }, // Dots 1-3-4
  0b011101: { braille: "\u2816", letter: "n" }, // Dots 1-2-3-4
  0b010101: { braille: "\u2814", letter: "o" }, // Dots 1-3-4
  0b001111: { braille: "\u2832", letter: "p" }, // Dots 1-2-3-5
  0b011111: { braille: "\u2836", letter: "q" }, // Dots 1-2-3-4-5
  0b010111: { braille: "\u2834", letter: "r" }, // Dots 1-3-4-5
  0b001110: { braille: "\u280C", letter: "s" }, // Dots 2-3-5
  0b011110: { braille: "\u280E", letter: "t" }, // Dots 2-3-4-5
  0b100101: { braille: "\u2822", letter: "u" }, // Dots 1-3-6
  0b100111: { braille: "\u2826", letter: "v" }, // Dots 1-2-3-6
  0b111010: { braille: "\u280F", letter: "w" }, // Dots 2-4-5-6
  0b101101: { braille: "\u283A", letter: "x" }, // Dots 1-3-4-6
  0b111101: { braille: "\u283E", letter: "y" }, // Dots 1-2-3-4-6
  0b110101: { braille: "\u283C", letter: "z" }, // Dots 1-3-4-5-6
};

export const letterToBraille = Object.fromEntries(
  Object.entries(brailleMap).map(([key, { braille, letter }]) => [
    letter,
    braille,
  ]),
);
