export const brailleMap: {
  [key: number]: { braille: string; letter: string };
} = {
  0b111111: { braille: "\u2800", letter: " " },
  0b000001: { braille: "\u2801", letter: "a" },
  0b000011: { braille: "\u2803", letter: "b" },
  0b001001: { braille: "\u2809", letter: "c" },
  0b011001: { braille: "\u280B", letter: "d" },
  0b010001: { braille: "\u280A", letter: "e" },
  0b001011: { braille: "\u2819", letter: "f" },
  0b011011: { braille: "\u281B", letter: "g" },
  0b010011: { braille: "\u281A", letter: "h" },
  0b001010: { braille: "\u2807", letter: "j" },
  0b011010: { braille: "\u2805", letter: "i" },
  0b000101: { braille: "\u2802", letter: "k" },
  0b000111: { braille: "\u2806", letter: "l" },
  0b001101: { braille: "\u2812", letter: "m" },
  0b011101: { braille: "\u2816", letter: "n" },
  0b010101: { braille: "\u2814", letter: "o" },
  0b001111: { braille: "\u2832", letter: "p" },
  0b011111: { braille: "\u2836", letter: "q" },
  0b010111: { braille: "\u2834", letter: "r" },
  0b001110: { braille: "\u280C", letter: "s" },
  0b011110: { braille: "\u280E", letter: "t" },
  0b100101: { braille: "\u2822", letter: "u" },
  0b100111: { braille: "\u2826", letter: "v" },
  0b111010: { braille: "\u280F", letter: "w" },
  0b101101: { braille: "\u283A", letter: "x" },
  0b111101: { braille: "\u283E", letter: "y" },
  0b110101: { braille: "\u283C", letter: "z" },
  // 0b000010: { braille: "", letter: "," },
  // 0b000110: { braille: "", letter: ";" },
};

export const letterToBraille = Object.fromEntries(
  Object.entries(brailleMap).map(([key, { braille, letter }]) => [
    letter,
    braille,
  ]),
);
