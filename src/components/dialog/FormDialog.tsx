import { FaTimes } from "react-icons/fa";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  sizeType?: "tiny" | "small" | "medium" | "large";
  footer?: React.ReactNode;
}

export default function FormDialog({
  open,
  onClose,
  children,
  title,
  subtitle,
  sizeType = "medium",
  footer,
}: DialogProps) {
  if (!open) return null;

  const getSize = (type: "tiny" | "small" | "medium" | "large") => {
    switch (type) {
      case "tiny":
        return { width: "30vw", height: "30vh" };
      case "small":
        return { width: "30vw", height: "30vh" };
      case "medium":
        return { width: "40vw", height: "70vh" };
      case "large":
        return { width: "70vw", height: "80vh" };
      default:
        return { width: "50vw", height: "50vh" };
    }
  };

  const { width, height } = getSize(sizeType);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div
        className="relative w-full bg-white rounded-xl shadow-2xl
          transform transition-all duration-300
          animate-[fadeIn_0.3s_ease,scaleIn_0.3s_ease]"
        style={{ width, height }}
      >
        {/* Header */}
        {width}
        <div className="absolute top-0 w-full p-6 flex justify-between items-center border-b-2  border-gray-200 px-4">
          {title && <h2 className="text-xl font-semibold px-4">{title}</h2>}
          <FaTimes
            onClick={onClose}
            size={20}
            color="gray"
            className="cursor-pointer"
          />
        </div>
        {/* Content - 70% with scroll */}
        <div className="p-5 overflow-y-auto absolute h-full w-full  top-0  bottom-10 flex justify-center items-center">
          {/* confirm message */}
          {subtitle && (
            <div className="flex justify-center items-center p-5 ">
              <p className="tracking-wide leading-4 font-normal text-xl">
                Are you sure you want to delete this{" "}
                <span className="font-bold text-lg tracking-wide">
                  {subtitle}?
                </span>
              </p>
            </div>
          )}

          {/* childern */}
          {children && <div className="p-5 w-100">{children}</div>}
        </div>
        {/* footer 15% */}
        {footer && (
          <div className="absolute bottom-0 w-full p-6 border-t-2 border-gray-200 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
