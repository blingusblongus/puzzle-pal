import { Dot, Minus, MoveDown, MoveLeft, Space } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { morseDictionary } from "./morseDictionary";

export const MorseTranslator = () => {
  const [inputText, setInputText] = useState("");

  const words = inputText.split("/").map((word) => word.split(" "));

  let output = "";

  for (let word of words) {
    for (let letter of word) {
      output += morseDictionary[letter] || "";
    }
    output += " ";
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <div>Input:</div>
        <div className="flex h-0 min-h-12 w-full flex-wrap rounded-lg border border-neutral-600 p-3">
          {inputText.split("").map((char) => {
            switch (char) {
              case ".":
                return <Dot size={10} />;
              case "-":
                return <Minus size={10} />;
              case " ":
                return <span className="w-3" />;
              case "/":
                return <Space size={16} />;
              default:
                return char;
            }
          })}
        </div>
        {/* <Textarea className="border-neutral-600" value={inputText} /> */}
        <MoveDown />
        <div>Output:</div>
        <Textarea className="border-neutral-600" value={output} />
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={() => setInputText((prev) => prev + ".")}>
          <Dot />
        </Button>
        <Button onClick={() => setInputText((prev) => prev + "-")}>
          <Minus />
        </Button>
        <Button
          onClick={() => setInputText((prev) => prev.slice(0, prev.length - 1))}
        >
          <MoveLeft />
        </Button>
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={() => setInputText((prev) => prev + " ")}>
          Next Letter
        </Button>
        <Button onClick={() => setInputText((prev) => prev + "/")}>
          Next Word
        </Button>
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={() => setInputText("")}>Clear</Button>
      </div>
    </div>
  );
};
