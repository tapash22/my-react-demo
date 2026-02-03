import React from "react";
import type { EmptyStatus } from "../../features/type/User";
import { STATUS_CONFIG } from "./constants";

interface EmptyStateProps {
  status: EmptyStatus;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ status, action }) => {
  const { icon: Icon, title, description } = STATUS_CONFIG[status];

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="mb-4 rounded-full bg-slate-100 p-4 dark:bg-slate-800">
        <Icon size={48} className="text-slate-400" />
      </div>
      <h3 className="text-lg font-bold text-(--foreground)">{title}</h3>
      <p className="mt-1 text-sm text-(--foreground) max-w-xs">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
