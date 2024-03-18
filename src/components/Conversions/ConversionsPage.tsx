import { useState } from "react";
import { Input } from "../ui/input";
import { Keypad } from "./Keypad";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const ConversionsPage = () => {
  const [fromRadix, setFromRadix] = useState(2);
  const [fromValue, setFromValue] = useState("");
  const base10 = parseInt(fromValue, fromRadix) || 0;

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div>
        <div className="flex items-center gap-4">
          <div className="font-bold">Input Radix:</div>
          <div className="w-40">
            <Select
              defaultValue="2"
              onValueChange={(v) => {
                setFromValue(base10.toString(parseInt(v)));
                setFromRadix(parseInt(v));
              }}
            >
              <SelectTrigger className="bg-primary-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Radix</SelectLabel>
                  <SelectItem value="2">Binary (2)</SelectItem>
                  <SelectItem value="10">Decimal (10)</SelectItem>
                  <SelectItem value="16">Hexadecimal (16)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <span>Result: </span>
          <span className="text-2xl font-bold">{base10}</span>
        </div>

        <Input value={fromValue} readOnly className="bg-slate-700 text-right" />

        <div>Base10: {base10 || 0}</div>
        <div>Base2: {base10.toString(2)}</div>
        <div>Base3: {base10.toString(3)}</div>
        <div>Duodecimal: {base10.toString(12)}</div>
        <div>Hexadecimal: {base10.toString(16)}</div>
      </div>

      <Keypad
        radix={fromRadix}
        setter={setFromValue}
        displayValue={fromValue}
      />
    </div>
  );
};

export const intToBin = (int: number): string => {
  return int.toString(2);
};

export const binToInt = (bin: string): number => {
  return parseInt(bin, 2);
};
