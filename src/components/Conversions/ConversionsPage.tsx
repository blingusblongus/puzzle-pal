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
import { Label } from "../ui/label";
import { RadixResult } from "./RadixResult";
import type { ReactAstroProps } from "@/types/ReactAstroProps";

type ConversionsPageProps = { defaultRadix?: number } & ReactAstroProps;
export const ConversionsPage = ({
  defaultRadix = 10,
}: ConversionsPageProps) => {
  const [fromRadix, setFromRadix] = useState(defaultRadix);
  const [fromValue, setFromValue] = useState("");
  const base10 = parseInt(fromValue, fromRadix) || 0;

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Label className="font-bold" id="radix-selector-label">
            Input Radix:
          </Label>
          <div className="w-40">
            <Select
              defaultValue={defaultRadix.toString()}
              onValueChange={(v) => {
                setFromValue(base10.toString(parseInt(v)));
                setFromRadix(parseInt(v));
              }}
            >
              <SelectTrigger aria-labelledby="radix-selector-label">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Radix</SelectLabel>
                  <SelectItem value="2">Binary (2)</SelectItem>
                  <SelectItem value="10">Decimal (10)</SelectItem>
                  <SelectItem value="12">Duodecimal (12)</SelectItem>
                  <SelectItem value="16">Hexadecimal (16)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Input value={fromValue} readOnly className="text-right text-lg" />

        {/* <Separator className="h-10" /> */}

        <div className="grid grid-cols-2 gap-4">
          <RadixResult result={base10.toString(2)} label="Binary" />
          <RadixResult result={base10.toString()} label="Decimal" />
          <RadixResult result={base10.toString(12)} label="Duodecimal" />
          <RadixResult result={base10.toString(16)} label="Hexadecimal" />
        </div>
      </div>

      <Keypad radix={fromRadix} setter={setFromValue} />
    </div>
  );
};
