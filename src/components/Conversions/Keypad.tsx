import { MoveLeft } from "lucide-react";
import { Button } from "../ui/button";

type KeypadProps = {
  radix: number;
  setter: (value: React.SetStateAction<string>) => void;
};
export const Keypad = ({ radix, setter }: KeypadProps) => {
  const KeypadButton = ({ num }: { num: number | string }) => {
    return (
      <Button
        value={num}
        onClick={() => setter((prev) => prev + num.toString())}
        size="lg"
        className="text-lg"
      >
        {num}
      </Button>
    );
  };

  const ClearRow = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Button
          className="text-lg"
          size="lg"
          onClick={() => setter((prev) => prev.slice(0, prev.length - 1))}
        >
          <MoveLeft />
        </Button>
        <Button className="text-lg" size="lg" onClick={() => setter("")}>
          C
        </Button>
      </div>
    );
  };

  switch (radix) {
    case 2:
      return (
        <div className="flex w-full max-w-sm flex-col gap-4 self-center">
          <div className="grid grid-cols-2 gap-4">
            <KeypadButton num={0} />
            <KeypadButton num={1} />
          </div>
          <ClearRow />
        </div>
      );
    case 10:
      return (
        <div className="flex w-full max-w-sm flex-col gap-4 self-center">
          <div className="grid grid-cols-3 gap-4">
            <KeypadButton num={1} />
            <KeypadButton num={2} />
            <KeypadButton num={3} />
            <KeypadButton num={4} />
            <KeypadButton num={5} />
            <KeypadButton num={6} />
            <KeypadButton num={7} />
            <KeypadButton num={8} />
            <KeypadButton num={9} />
            <div />
            <KeypadButton num={0} />
            <div />
          </div>
          <ClearRow />
        </div>
      );
    case 16:
      return (
        <div className="flex w-full max-w-sm flex-col gap-4 self-center">
          <div className="grid grid-cols-3 gap-4">
            <KeypadButton num={1} />
            <KeypadButton num={2} />
            <KeypadButton num={3} />
            <KeypadButton num={4} />
            <KeypadButton num={5} />
            <KeypadButton num={6} />
            <KeypadButton num={7} />
            <KeypadButton num={8} />
            <KeypadButton num={9} />
            <KeypadButton num={"a"} />
            <KeypadButton num={"b"} />
            <KeypadButton num={"c"} />
            <KeypadButton num={"d"} />
            <KeypadButton num={"e"} />
            <KeypadButton num={"f"} />
            <div />
            <KeypadButton num={0} />
            <div />
          </div>
          <ClearRow />
        </div>
      );

    default:
      return <div>No Radix Provided</div>;
  }
};
