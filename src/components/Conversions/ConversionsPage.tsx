import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ConversionsPage = () => {
  const [fromValue, setFromValue] = useState("");

  const KeypadButton = ({ num }: { num: number }) => {
    return (
      <Button
        value={num}
        onClick={() => setFromValue(fromValue + num.toString())}
      >
        {num}
      </Button>
    );
  };

  const ClearButton = () => {
    return <Button onClick={() => setFromValue("")}>C</Button>;
  };

  console.log(fromValue);

  return (
    <div>
      <Input value={fromValue} readOnly className="bg-slate-400 text-right" />
      <div className="flex gap-1 py-1">
        <KeypadButton num={0} />
        <KeypadButton num={1} />
        <ClearButton />
      </div>
      <div>Result: {parseInt(fromValue, 2)}</div>
    </div>
  );
};

export const intToBin = (int: number): string => {
  return int.toString(2);
};

export const binToInt = (bin: string): number => {
  return parseInt(bin, 2);
};
