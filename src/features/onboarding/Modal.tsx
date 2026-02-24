import { DemoButton } from "../../components/button/DemoButton";

export function Modal({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose} // clicking outside the modal closes it
    >
      <div
        className="bg-white p-5 border border-gray-300 w-[400px] text-center rounded-lg"
        onClick={(e) => e.stopPropagation()} // prevent click inside modal from closing
      >
        {children}
        {/* Optional Close Button */}
        <DemoButton onClick={onClose} />
      </div>
    </div>
  );
}
