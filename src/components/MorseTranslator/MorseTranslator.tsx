import { Dot, Minus, MoveDown, MoveLeft, MoveRight, Space } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { translateFromMorse } from "./translateFromMorse";
import { translateToMorse } from "./translateToMorse";
import { Label } from "../ui/label";

export const MorseTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [fromMorse, setFromMorse] = useState(true);
  const output = fromMorse
    ? translateFromMorse(inputText)
    : translateToMorse(inputText);

  const toggleDirection = () => {
    setInputText("");
    setFromMorse((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          {fromMorse ? (
            <>
              <span>Morse</span>
              <MoveRight />
              <span>English</span>
            </>
          ) : (
            <>
              <span>English</span>
              <MoveRight />
              <span>Morse</span>
            </>
          )}
          <Button aria-label="swap language" onClick={toggleDirection}>
            Swap
          </Button>
        </div>
        {fromMorse ? (
          <>
            <Label htmlFor="input-values">Input:</Label>
            <div
              id="input-values"
              className="flex h-0 min-h-12 w-full flex-wrap rounded-lg border border-neutral-600 p-3"
            >
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
            <Label htmlFor="output-values">Output:</Label>
            <Textarea
              id="output-values"
              className="border-neutral-600"
              value={output}
              readOnly
            />
          </>
        ) : (
          <>
            <Label htmlFor="input-values">Input:</Label>
            <Textarea
              id="input-values"
              className="border-neutral-600"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Input text to translate..."
            />
            <MoveDown />
            <Label htmlFor="output-values">Output:</Label>
            <div
              id="output-values"
              className="flex  min-h-12 w-full flex-wrap rounded-lg border border-neutral-600 p-3"
            >
              {output.split("").map((char, i) => {
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
          </>
        )}
      </div>
      {fromMorse && (
        <>
          <div className="flex justify-center gap-4">
            <Button
              aria-label="dot"
              onClick={() => setInputText((prev) => prev + ".")}
            >
              <Dot />
            </Button>
            <Button
              aria-label="dash"
              onClick={() => setInputText((prev) => prev + "-")}
            >
              <Minus />
            </Button>
            <Button
              aria-label="backspace"
              onClick={() =>
                setInputText((prev) => prev.slice(0, prev.length - 1))
              }
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
        </>
      )}
    </div>
  );
};
