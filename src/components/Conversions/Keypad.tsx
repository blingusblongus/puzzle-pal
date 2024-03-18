import { Button } from "../ui/button";

type KeypadProps = {
  radix: number;
  displayValue: string;
  setter: (value: React.SetStateAction<string>) => void;
};
export const Keypad = ({ radix, setter, displayValue }: KeypadProps) => {
  const KeypadButton = ({ num }: { num: number }) => {
    return (
      <Button
        value={num}
        onClick={() => setter(displayValue + num.toString())}
        size="lg"
      >
        {num}
      </Button>
    );
  };

  const ClearButton = () => {
    return (
      <Button size="lg" onClick={() => setter("")}>
        C
      </Button>
    );
  };

  switch (radix) {
    case 2:
      return (
        <div className="mb-16 flex w-full flex-col gap-4 bg-purple-950">
          <div className="grid grid-cols-2 gap-4">
            <KeypadButton num={0} />
            <KeypadButton num={1} />
          </div>
          <ClearButton />
        </div>
      );

    default:
      return <div>No Radix Provided</div>;
  }
};
