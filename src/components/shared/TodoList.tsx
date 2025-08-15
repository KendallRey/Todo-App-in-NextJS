'use client'

import { getTodosOptions } from '@/lib/queryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import React, { useState, useTransition } from 'react'
import { TodoItem } from './TodoItem'
import { deleteTodo, updateTodo } from '@/lib/actions'
import { enqueueSnackbar } from 'notistack'
import { TodoModelType } from '@/models/todo'
import UpdateTodoModal from './UpdateTodoModal'
import { useTodoStore } from '@/stores/todo-store-provider'

const TodoList = () => {
  const [isPending, startTransition] = useTransition()

  const { setForm, reset } = useTodoStore((state) => state)

  const { data } = useSuspenseQuery(getTodosOptions)

  // #region updateTodo
  const [todoToUpdate, setTodoToUpdate] = useState<TodoModelType | null>(null)
  const onClickUpdate = (item: TodoModelType) => {
    setTodoToUpdate(item)
    setForm(item)
  }
  // #endregion

  const handleDelete = async (item: TodoModelType) => {
    startTransition(async () => {
      const { error } = await deleteTodo(item.id)
      if(error) {
        enqueueSnackbar("Something went wrong", { variant: 'error' })
        return;
      }
      console.log('Delete Res Data', data)
      enqueueSnackbar(`Deleted ${item.title}!`, { variant: 'success' })
    })
  }

  const handleMarkAsDone = async (item: TodoModelType, isDone: boolean) => {
    startTransition(async () => {
      const { data, error } = await updateTodo(item.id, { completed: isDone })
      if(error) {
        enqueueSnackbar("Something went wrong", { variant: 'error' })
        return;
      }
      console.log('Update Res Data', data)
      enqueueSnackbar(`${item.title} marked as ${isDone ? "done" : "not done"}!`, { variant: 'success' })
    })
  }

  return (
    <ul className="flex flex-col gap-4">
      {data.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          loading={isPending}
          onClickUpdate={() => onClickUpdate(item)}
          handleMarkAsDone={(isDone) => handleMarkAsDone(item, isDone)}
          handleDelete={() => handleDelete(item)}
          />
      ))}

      <UpdateTodoModal
        item={todoToUpdate}
        onClose={()=> {
          setTodoToUpdate(null)
          reset()
        }}
        />
    </ul>
  )
}

export default TodoList