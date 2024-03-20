import type { ColumnDef, Row as TanRow } from "@tanstack/react-table";
import { Dot, Minus } from "lucide-react";

export type Row = {
  decimal: number;
  morse: string;
  nato: string;
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
      return (
        <div className="flex">
          {morseStr.split("").map((s) => {
            switch (s) {
              case ".":
                return <Dot size={size} />;
              case "-":
                return <Minus size={size} />;
              default:
                console.error("unrecognized morse");
                return "x";
            }
          })}
        </div>
      );
    },
  },
];
