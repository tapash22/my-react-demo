import FormDialog from "../dialog/FormDialog";

interface ConfirmationProps {
  showConfirmDialog: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  onConfirm: (confirmed: boolean) => void;
}

export default function ConfirmationMessage({
  showConfirmDialog,
  onClose,
  title,
  subtitle,
  onConfirm,
}: ConfirmationProps) {
  if (!showConfirmDialog) return null;

  const handleCancel = () => {
    onConfirm(false);
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(true);
    onClose();
  };

  return (
    <>
      <FormDialog
        open={showConfirmDialog}
        onClose={onClose}
        title={title}
        sizeType="tiny"
        subtitle={subtitle}
        footer={
          <>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="px-5 py-2 rounded-lg bg-blue-400 text-white"
            >
              confirm
            </button>
          </>
        }
      ></FormDialog>
    </>
  );
}
