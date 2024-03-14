import { useState, type ChangeEventHandler } from "react";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";

export const Indexr = () => {
  const [offset, setOffset] = useState([0]);
  const [inputValue, setInputValue] = useState("test");

  const updateOffset = (value: number[]) => {
    setOffset(value);
  };

  const updateText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const resultText = calculateOffsetText(inputValue, offset[0]);

  return (
    <div className="w-full">
      <div>Indexr</div>
      <div>Index offset: {offset}</div>
      <Input value={inputValue} onChange={updateText} />
      <Input readOnly value={resultText} />
      <div className="p-5">
        <Slider
          defaultValue={[0]}
          value={offset}
          onValueChange={updateOffset}
          max={26}
          min={-26}
          step={1}
        />
      </div>
    </div>
  );
};

export const calculateOffsetText = (input: string, offset: number): string => {
  let result = "";

  for (let i = 0; i < input.length; ++i) {
    const code = input.charCodeAt(i);
    console.log(code);

    if (code < 65 || code > 122) {
      result += input[i];
      continue;
    }
    const uppercase = code < 97;

    let newCode = code + offset;

    switch (true) {
      case uppercase && newCode < 65:
        newCode += 26;
        break;
      case uppercase && newCode > 90:
        newCode -= 26;
        break;
      case !uppercase && newCode < 97:
        newCode += 26;
        break;
      case !uppercase && newCode > 122:
        newCode -= 26;
        break;
      default:
        break;
    }

    const newChar = String.fromCharCode(newCode);

    result += newChar;
  }

  return result;
};
