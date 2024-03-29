export const ERROR_INVALID = "Error: Invalid character.";

export const translateFromMorse = (input: string): string => {
  if (input === "") return "";

  const words = input.split("/").map((word) => word.split(" "));

  let output = "";

  for (let word of words) {
    for (let letter of word) {
      if (letter === "") continue;
      const nextLetter = morseDictionary[letter];
      if (!nextLetter) {
        return ERROR_INVALID;
      }
      output += nextLetter;
    }
    output += " ";
  }

  return output.slice(0, output.length - 1);
};

const morseDictionary: { [key: string]: string } = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "..._": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
