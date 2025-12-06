interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function FormDialog({ open, onClose, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        className="bg-white rounded-xl p-5 w-[500px] shadow-2xl
          transform transition-all duration-300
          animate-[fadeIn_0.3s_ease,scaleIn_0.3s_ease]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
