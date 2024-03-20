import { Dot } from "lucide-react";
import { DataTable } from "./DataTable";
import { type Row, columns } from "./columns";
const rows: Row[] = [
  {
    decimal: 1,
    morse: ".-",
    nato: "alfa",
  },
  {
    decimal: 2,
    morse: "-...",
    nato: "bravo",
  },
  {
    decimal: 3,
    morse: "-.-.",
    nato: "Charlie",
  },
];
export const LookupPage = () => {
  return (
    <div>
      <DataTable columns={columns} data={rows} />
    </div>
  );
};
