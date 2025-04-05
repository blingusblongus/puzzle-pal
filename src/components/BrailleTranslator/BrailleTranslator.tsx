import { Dot, Minus, MoveDown, MoveLeft, MoveRight, Space } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import clsx from "clsx";
import { useState } from "react";

const BTN_DIAMETER = "12";
const BTN_GAP = "2";

export const BrailleTranslator = () => {
  const [inputText, setInputText] = useState("hello world");
  const [fromBraille, setFromMorse] = useState(true);

  const [bitmask, setBitmask] = useState(0b000000);

  return (
    <div className="flex w-full flex-col gap-4">
      <div>{inputText}</div>
      <div>{bitmask.toString(2).padStart(6, "0")}</div>
      <div className="flex w-full flex-col gap-2">
        {[...Array(3)].map((_, y) => {
          return (
            <div
              key={y}
              className={`flex w-full gap-${BTN_GAP} justify-center`}
            >
              {[...Array(2)].map((_, x) => {
                const pos = 1 << (y * 2 + x);
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
  );
};
