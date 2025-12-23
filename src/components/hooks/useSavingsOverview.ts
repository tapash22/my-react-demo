import { useMemo } from "react";
import type { Fund } from "../../assets/type/budget-type";
import { calculateSavingsStats } from "../../utils/calculateSavingsStats";

export const useSavingsOverview = (
  funds: Fund[],
  savingAmount: number,
  target: number,
  income: number
) => {
  return useMemo(() => {
    return calculateSavingsStats(funds, savingAmount, target, income);
  }, [funds, savingAmount, target, income]);
};
