import React, { ReactNode } from 'react'
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
  if (!open) return <></>

  return (
    <div className='fixed z-[999] inset-0 bg-black/40 backdrop-blur-xs flex justify-center items-center'>
      <div className=' bg-white max-w-lg w-full dark:bg-gray-800 p-4 rounded-xl flex flex-col gap-4'>
        <h2 className='text-2xl'>{title}</h2>
        <hr/>
        {children}
        <div className='flex justify-end gap-2'>
          <TWButton variant='danger' disabled={loadingConfirm} onClick={onClose}>Cancel</TWButton>
          <TWButton variant='primary' loading={loadingConfirm} onClick={onConfirm}>Save</TWButton>
        </div>
      </div>
    </div>
  )
}

export default TWModal
