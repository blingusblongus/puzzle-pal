import { DataTable } from "./DataTable";
import { rows } from "./rows";
import { columns } from "./columns";

export const LookupPage = () => {
  return (
    <div className="w-full overflow-scroll">
      <DataTable columns={columns} data={rows} />
    </div>
  );
};
