import { Container } from "./Container";

interface PageLayoutProps {
  header: React.ReactNode;
  children?: React.ReactNode;
}

export function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <Container
      direction="column"
      className="max-w-screen mx-auto w-full h-full flex flex-col gap-2 p-4"
    >
      {/* header */}
      <Container className="w-full px-2">{header}</Container>
      <Container className=" w-full h-auto flex-1 overflow-auto px-2">
        {children}
      </Container>
    </Container>
  );
}
