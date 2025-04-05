import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { brailleMap, letterToBraille } from "./brailleMaps";
import clsx from "clsx";
import { useState } from "react";

const BTN_DIAMETER = "12";
const BTN_GAP = "2";

export const BrailleTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [bitmask, setBitmask] = useState(0b000000);

  const letter = brailleMap[bitmask]?.letter;
  const brailleMessage = inputText
    .split("")
    .map((letter) => letterToBraille[letter.toLowerCase()] || " ")
    .join("");

  return (
    <div className="flex w-full flex-col gap-4">
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></Textarea>
      <div className="flex justify-center">&darr;</div>
      <Textarea className="text-xl" value={brailleMessage} readOnly></Textarea>
      <div className="flex w-full">
        <div className="flex w-1/2 flex-col items-center justify-between gap-4">
          <div className="mt-4 items-center text-4xl">
            {letter?.toUpperCase()}
          </div>
          <div className="flex w-full justify-around gap-6">
            <Button
              className="w-1/3"
              onClick={() => {
                setInputText(inputText.slice(0, inputText.length - 1));
              }}
            >
              &larr;
            </Button>
            <Button
              className="w-1/2"
              onClick={() => {
                setInputText(inputText + (letter ? letter : " "));
              }}
            >
              {letter ? "Save" : "Space"}
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          {[...Array(3)].map((_, y) => {
            return (
              <div
                key={y}
                className={`flex w-full gap-${BTN_GAP} justify-center`}
              >
                {[...Array(2)].map((_, x) => {
                  const pos = 1 << (y + x * 3);
                  return (
                    <div
                      key={x}
                      className={clsx(
                        `h-${BTN_DIAMETER} min-h-${BTN_DIAMETER} w-${BTN_DIAMETER} min-w-${BTN_DIAMETER} rounded-full border-2 border-primary`,
                        {
                          "bg-muted": bitmask & pos,
                        },
                      )}
                      onClick={() => setBitmask((prev) => prev ^ pos)}
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
