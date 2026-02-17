interface PageLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <div className="w-full h-full p-2 m-0 flex flex-col scrollbar-thin">
      {/* Header */}
      <div className="block w-full h-auto p-2 space-y-5">{header}</div>

      {/* Body */}
      <div className="flex gap-3 items-start w-full h-auto p-2">{children}</div>
    </div>
  );
}
