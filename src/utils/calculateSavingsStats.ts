import type { Fund } from "../assets/type/budget-type";

export const calculateSavingsStats = (
  funds: Fund[],
  savingAmount: number,
  target: number,
  income: number
) => {
  let totalSaved = 0;
  let totalGoals = 0;

  // Manual loop as requested
  funds.forEach((fund) => {
    totalSaved += fund.currentAmount;
    totalGoals += fund.targetAmount;
  });

  //need to achived
  const remaining = totalGoals - totalSaved;
  //use for progressbar
  const overallProgress =
    totalGoals > 0 ? Math.round((totalSaved / totalGoals) * 100) : 0;

  const savedThisMonth = savingAmount ? savingAmount : 1200;
  const monthlyProgress = Math.round((savedThisMonth / target) * 100);
  const savingsRate = Math.round((savedThisMonth / income) * 100);
  return {
    totalGoals,
    totalSaved,
    remaining,
    overallProgress,
    savedThisMonth,
    monthlyTarget: target,
    monthlyProgress,
    savingsRate,
  };
};
