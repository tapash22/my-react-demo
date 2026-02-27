import { transactions } from "../store/data";
import { DemoTable } from "../components/table/DemoTable";

export function Transaction() {
  return (
    <div className="w-full rounded-xl bg-(--surface) p-3 shadow-xl">
      <DemoTable data={transactions} pageSize={4} />
    </div>
  );
}
