import { useCloseModal, useModal } from "@/hooks/useModal";
import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal() {
  const { open, onClose, title, data, width } = useModal();
  const closeModal = useCloseModal();

  const handleClose = () => {
    onClose && onClose();
    closeModal();
  };

  if (!data) return <></>;

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          style={{
            maxWidth: width || 450,
          }}
          className="DialogContent overflow-auto gradient-light card"
          onInteractOutside={handleClose}
        >
          <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            {data}
          </Dialog.Description>
          <Dialog.Close>
            <button className="IconButton" aria-label="Close">
              <IoCloseOutline color="#ffffff66" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
