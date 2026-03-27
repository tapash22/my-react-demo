import { transactionList } from "../store/home-data";
import { DemoTable } from "../components/table/DemoTable";
import { useState } from "react";
import type { Transaction } from "../features/type/User";

export function Transaction() {
  const [hideColumns] = useState<(keyof Transaction)[]>(["status"]);

  return (
    <div className="w-full flex justify-center items-center rounded-2xl bg-(--background) ring-1 ring-(--input-border) p-1 shadow-(--shadow)">
      <DemoTable
        data={transactionList}
        pageSize={4}
        hideColumns={hideColumns}
      />
    </div>
  );
}
