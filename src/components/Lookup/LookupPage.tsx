import { DataTable } from "./DataTable";
import { type Row, columns } from "./columns";
const rows: Row[] = [
  {
    decimal: 1,
    morse: ".-",
    nato: "alfa",
    semaphore: [180, 225],
  },
  {
    decimal: 2,
    morse: "-...",
    nato: "bravo",
    semaphore: [180, 270],
  },
  {
    decimal: 3,
    morse: "-.-.",
    nato: "charlie",
    semaphore: [180, 315],
  },
  {
    decimal: 4,
    morse: "-..",
    nato: "delta",
    semaphore: [180, 0],
  },
];
export const LookupPage = () => {
  return (
    <div>
      <DataTable columns={columns} data={rows} />
    </div>
  );
};
