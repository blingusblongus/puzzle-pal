import { MoveRight } from "lucide-react";

type ShiftTableProps = {
  offset: number;
};
export const ShiftTable = ({ offset }: ShiftTableProps) => {
  const shift = offset % 26; // Ensure offset is in range

  const alphabet = [];
  let shifted: Array<number>;
  for (let i = 0; i < 26; ++i) {
    alphabet.push(65 + i);
  }

  switch (true) {
    case shift === 0:
      shifted = alphabet;
      break;
    case shift > 0:
      shifted = alphabet.slice(shift).concat(alphabet.slice(0, shift));
      break;
    case shift < 0:
      const s = 26 + shift;
      shifted = alphabet.slice(s).concat(alphabet.slice(0, s));
      break;
    default:
      shifted = [];
      console.error("Error shifting alphabet");
  }

  const a1 = alphabet.slice(0, 13);
  const a2 = alphabet.slice(13);
  const b1 = shifted.slice(0, 13);
  const b2 = shifted.slice(13);

  return (
    <div className="flex w-full justify-evenly gap-2">
      <div className="flex w-1/3 justify-center gap-2">
        <div className="flex w-5 flex-col text-center">
          {a1.map((code) => {
            return <div key={"a" + code}>{String.fromCharCode(code)}</div>;
          })}
        </div>
        <div className="flex w-5 flex-col text-center">
          {a1.map(() => (
            <MoveRight />
          ))}
        </div>
        <div className="flex w-5 flex-col text-center">
          {b1.map((code) => (
            <div key={"b" + code}>{String.fromCharCode(code)}</div>
          ))}
        </div>
      </div>
      <div className="flex w-1/3 justify-center gap-2">
        <div className="flex w-5 flex-col text-center">
          {a2.map((code) => {
            return <div key={"a" + code}>{String.fromCharCode(code)}</div>;
          })}
        </div>
        <div className="flex w-5 flex-col text-center">
          {a1.map(() => (
            <MoveRight />
          ))}
        </div>
        <div className="flex w-5 flex-col text-center">
          {b2.map((code) => (
            <div key={"b" + code}>{String.fromCharCode(code)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
