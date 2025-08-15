'use client';

import { forwardRef, ReactElement, ReactNode, Ref } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type MuiModalProps = {
  title: string
  children?: ReactNode
  open: boolean;
  onClose: () => void
  onConfirm: () => void
  loadingConfirm?: boolean
}

export const MuiModal = (props: MuiModalProps) => {
  const { open, onClose, onConfirm, title, children, loadingConfirm } = props;

  return (
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={onClose}
        aria-describedby="form-dialog-slide-description"
        fullWidth
        maxWidth='md'
      >
        <DialogTitle>{title}</DialogTitle>
        <div className='p-5'>
          {children}
        </div>
        <DialogActions>
          <Button onClick={onClose} disabled={loadingConfirm}>Cancel</Button>
          <Button onClick={onConfirm} loading={loadingConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
  );
}
