import { transactions } from "../store/data";
import { DemoTable } from "../components/table/DemoTable";

export function Transaction() {
  return (
    <div className="w-full rounded-xl bg-(--background) shadow-md p-2">
      <DemoTable data={transactions} pageSize={3} />
    </div>
  );
}
