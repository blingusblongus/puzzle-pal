import { DataTable } from "./DataTable";
import { rows } from "./rows";
import { columns } from "./columns";

export const LookupPage = () => {
  return (
    <div className="h-full max-h-full w-full">
      <DataTable columns={columns} data={rows} />
    </div>
  );
};
