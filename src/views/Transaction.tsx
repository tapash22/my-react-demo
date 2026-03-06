import { transactions } from "../store/data";
import { DemoTable } from "../components/table/DemoTable";

export function Transaction() {
  return (
    <div className="w-full rounded-2xl bg-(--surface) ring-1 ring-(--input-border) p-3 shadow-(--shadow-card)">
      <DemoTable data={transactions} pageSize={4} />
    </div>
  );
}
