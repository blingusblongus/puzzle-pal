import { Dot, Minus, MoveDown, MoveLeft, Space } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { translateToMorse } from "./translateToMorse";

export const MorseTranslator = () => {
  const [inputText, setInputText] = useState("");
  const output = translateToMorse(inputText);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <div>Input:</div>
        <div className="flex h-0 min-h-12 w-full flex-wrap rounded-lg border border-neutral-600 p-3">
          {inputText.split("").map((char, i) => {
            const key = "morse" + char + i.toString();
            switch (char) {
              case ".":
                return <Dot key={key} size={10} />;
              case "-":
                return <Minus key={key} size={10} />;
              case " ":
                return <span key={key} className="w-3" />;
              case "/":
                return <Space key={key} size={16} />;
              default:
                return char;
            }
          })}
        </div>
        <MoveDown />
        <div>Output:</div>
        <Textarea className="border-neutral-600" value={output} readOnly />
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