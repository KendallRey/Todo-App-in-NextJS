import React, { ReactNode, useEffect, useState } from 'react'
import { TWButton } from '../button/TWButton';

type TWModalProps = {
  title: string
  children?: ReactNode
  open: boolean;
  onClose: () => void
  onConfirm: () => void
  loadingConfirm?: boolean
}

const TWModal = (props: TWModalProps) => {
  const { open, onClose, onConfirm, title, children, loadingConfirm } = props;

  const [_open, _setOpen] = useState(open);

  useEffect(() => {
    const timeout = setTimeout(() => _setOpen(open), open ? 5 : 300);
    return () => clearTimeout(timeout);
  }, [open]);

  if (!_open && !open) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center
        bg-black/40 transition-opacity duration-300
        ${(_open && open) ? "opacity-100 backdrop-blur-xs" : "opacity-0 backdrop-blur-none"}`}
    >
      <div
        className={`bg-white dark:bg-gray-800 max-w-lg w-full p-4 rounded-xl flex flex-col gap-4
          transform transition-all duration-300 ease-out
          ${(_open && open) ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        <h2 className="text-2xl">{title}</h2>
        <hr />
        {children}
        <div className="flex justify-end gap-2">
          <TWButton
            variant="danger"
            disabled={loadingConfirm}
            onClick={onClose}
          >
            Cancel
          </TWButton>
          <TWButton
            variant="primary"
            loading={loadingConfirm}
            onClick={onConfirm}
          >
            Save
          </TWButton>
        </div>
      </div>
    </div>
  );
};


export default TWModal
