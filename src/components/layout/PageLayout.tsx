interface PageLayoutProps {
  header: React.ReactNode;
  children?: React.ReactNode;
}

export function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <div className="w-full h-full p-2 m-0 flex flex-col space-y-1 ">
      {/* Header */}
      <div className="block w-full h-auto px-2 py-0 space-y-3">{header}</div>

      {/* Body */}
      <div className="flex gap-3 items-start w-full h-auto px-2 py-0">
        {children && children}
      </div>
    </div>
  );
}
