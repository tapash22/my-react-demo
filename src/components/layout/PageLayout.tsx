import { Container } from "./Container";

interface PageLayoutProps {
  header: React.ReactNode;
  children?: React.ReactNode;
}

export function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <Container
      direction="column"
      className="w-full h-full p-2 m-0 flex flex-col space-y-1"
    >
      {/* header */}
      <Container className="flex flex-col w-full h-auto px-2 py-0 space-y-3">
        {header}
      </Container>
      <Container className=" w-full h-auto px-2">{children}</Container>
    </Container>
  );
}
