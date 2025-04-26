import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the icon

const Modal = ({
  show,
  closeModal,
  children,
  title,
  style = {},
  classNames = "",
  contentSyles = "",
  hideCloseButton,
  customBackdrop,
}: any) => {
  const modalRef = React.useRef(null);

  if (!show) {
    return null;
  }

  return (
    <div
      className={`overflow-auto bg-black bg-opacity-40 fixed inset-0 z-30 w-full h-full min-h-[100dvh] min-w-[100dvw] ${customBackdrop}`}
    >
      <div
        className={`absolute left-1/2 top-1/2 transform -translate-1/2 bg-white pointer-events-auto flex flex-col items-center gap-2 min-h-40 min-w-[25rem] px-4 py-2 z-50 custom-scrollbar-thin shadow-md ${classNames} animate-fade-in text-gray-800 rounded-xl`}
        ref={modalRef}
        style={style}
      >
        {title && (
          <label className="flex items-center text-xl rounded-b-xl px-8 w-max h-max bg-primary font-semibold">
            {title}
          </label>
        )}
        {!hideCloseButton && (
          <div
            className="absolute right-1 top-1 p-2 hover:cursor-pointer"
            onClick={closeModal}
          >
            <AiOutlineClose size={20} />
          </div>
        )}
        <div className={`mt-10 w-full min-h-20 ${contentSyles}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
