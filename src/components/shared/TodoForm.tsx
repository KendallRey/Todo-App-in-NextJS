'use client'

import React from 'react'
import { useTodoStore } from '@/stores/todo-store-provider';
import { TWCheckbox, TWTextfield } from '..';

const TodoForm = () => {

  const { form, error, onChange } = useTodoStore((state) => state);

  return (
    <div className='flex flex-col gap-2'>
      <TWTextfield label="Title" name='title' value={form.title || ""} onChange={onChange} errorText={error?.title} />
      <span>
        <TWCheckbox label="Mark as done" name='completed' checked={form.completed || false} onChange={onChange}/>
      </span>
    </div>
  )
}

export default TodoForm
