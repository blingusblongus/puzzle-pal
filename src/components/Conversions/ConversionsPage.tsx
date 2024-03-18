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
        size="lg"
      >
        {num}
      </Button>
    );
  };

  const ClearButton = () => {
    return (
      <Button size="lg" onClick={() => setFromValue("")}>
        C
      </Button>
    );
  };

  const base10 = parseInt(fromValue, 2) || 0;

  return (
    <div className="h-full w-full">
      <div className="flex items-end justify-between">
        <span>Result: </span>
        <span className="text-2xl font-bold">{base10}</span>
      </div>

      <Input value={fromValue} readOnly className="bg-slate-700 text-right" />
      <div className="flex gap-1 py-1">
        <KeypadButton num={0} />
        <KeypadButton num={1} />
        <ClearButton />
      </div>

      <div>Base10: {base10 || 0}</div>
      <div>Base2: {base10.toString(2)}</div>
      <div>Base3: {base10.toString(3)}</div>
      <div>Duodecimal: {base10.toString(12)}</div>
      <div>Hexadecimal: {base10.toString(16)}</div>
    </div>
  );
};

export const intToBin = (int: number): string => {
  return int.toString(2);
};

export const binToInt = (bin: string): number => {
  return parseInt(bin, 2);
};
