'use client';

import { TodoModelType } from '@/models/todo'
import React from 'react'
import { MuiCheckbox } from '../checkbox/MuiCheckbox';
import { Trash, PenSquareIcon } from 'lucide-react';
import { IconButton } from '@mui/material';
import { TWCheckbox } from '../checkbox/TWCheckbox';
import { TWButton } from '../button/TWButton';

type TodoItemProps = {
  loading?: boolean
  item: TodoModelType
  handleDelete: () => void
  handleMarkAsDone: (isDone: boolean) => void
  onClickUpdate: () => void
}

export const TodoItem = (props: TodoItemProps) => {
  const { loading, item, handleDelete, handleMarkAsDone, onClickUpdate } = props;

  return (
    <li className="border rounded p-5 transition-all flex justify-between gap-2">
      <div className="flex flex-col gap-2">
        <p>{item.title}</p>
        <TWCheckbox
          name='completed'
          checked={item.completed}
          onChange={({ target }) => handleMarkAsDone(target.checked)}
          label='Mark as done'
          disabled={loading} />
      </div>
      
      <div className='flex items-center'>
        <TWButton onClick={onClickUpdate} disabled={loading}>
          <PenSquareIcon className={loading ? "text-gray-500" : "text-orange-400 hover:text-orange-600"}/>
        </TWButton>
        <TWButton onClick={handleDelete} disabled={loading}>
          <Trash className={loading ? "text-gray-500" : "text-red-400 hover:text-red-600"}/>
        </TWButton>
      </div>
    </li>
  )
}
