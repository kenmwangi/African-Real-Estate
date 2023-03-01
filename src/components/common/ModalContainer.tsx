import { useCallback, useEffect, useId, type FC, type ReactNode } from "react";

export interface ModalContainerProps {
  visible?: boolean;
  onClose?(): void;
}

interface Props extends ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: FC<Props> = ({
  visible,
  children,
  onClose,
}): JSX.Element | null => {
  const containerId = useId();
  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  // const handleClick = ({ target }: any) => {
  //   if (target.id === containerId) handleClose();
  // };

  useEffect(() => {
    const closeModal = ({ key }: any) => key === "Escape" && handleClose();
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  }, [handleClose]);

  if (!visible) return null;

  return (
    <div
      id={containerId}
      // onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-5 backdrop-blur-[2px] dark:bg-opacity-5"
    >
      {children}
    </div>
  );
};

export default ModalContainer;
