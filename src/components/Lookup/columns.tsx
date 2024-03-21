import type { ColumnDef, Row as TanRow } from "@tanstack/react-table";
import { Dot, Minus } from "lucide-react";
import { Semaphore } from "./Semaphore";

export type Row = {
  decimal: number;
  morse: string;
  nato: string;
  semaphore: [number, number];
  braille: string;
};

const convertNum = (row: TanRow<Row>, radix: number) => {
  return parseInt(row.getValue("decimal")).toString(radix);
};

const getLetter = (row: TanRow<Row>) => {
  const idx = 64 + parseInt(row.getValue("decimal"));
  return String.fromCharCode(idx);
};

export const columns: ColumnDef<Row>[] = [
  { accessorKey: "nato", header: "NATO" },
  {
    accessorKey: "letter",
    header: "Letter",
    cell: ({ row }) => getLetter(row),
    filterFn: (row, _id, filterValue) => {
      return (
        (filterValue as string).toLowerCase() === getLetter(row).toLowerCase()
      );
    },
  },
  { accessorKey: "decimal", header: "Decimal" },
  {
    accessorKey: "binary",
    header: "Binary",
    cell: ({ row }) => convertNum(row, 2),
  },
  {
    accessorKey: "ternary",
    header: "Ternary",
    cell: ({ row }) => convertNum(row, 3),
  },
  {
    accessorKey: "hex",
    header: "Hex",
    cell: ({ row }) => convertNum(row, 16),
  },
  {
    accessorKey: "morse",
    header: "Morse",
    cell: ({ row }) => {
      const morseStr: string = row.getValue("morse");
      const size = 14;
      const key = "mor-" + row.getValue("decimal");
      return (
        <div key={"mor-" + row.getValue("decimal")} className="flex">
          {morseStr.split("").map((s, i) => {
            switch (s) {
              case ".":
                return <Dot key={key + "-" + i} size={size} />;
              case "-":
                return <Minus key={key + "-" + i} size={size} />;
              default:
                console.error("unrecognized morse");
                return "x";
            }
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "braille",
    header: "Braille",
    cell: ({ row }) => (
      <div
        key={"bra-" + row.getValue("decimal")}
        className="flex justify-center text-2xl"
      >
        {row.getValue("braille")}
      </div>
    ),
  },
  {
    accessorKey: "semaphore",
    header: "Semaphore",
    cell: ({ row }) => {
      const [a1, a2] = row.getValue("semaphore") as Row["semaphore"];
      return (
        <div
          key={"sem-" + row.getValue("decimal")}
          className="flex w-full justify-center"
        >
          <Semaphore angle1={a1} angle2={a2} size={40} />
        </div>
      );
    },
  },
];
