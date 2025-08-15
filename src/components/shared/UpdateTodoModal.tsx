'use client'

import React, { useTransition } from 'react'
import { MuiModal } from '../modal/MuiModal'
import TodoForm from './TodoForm'
import { useTodoStore } from '@/stores/todo-store-provider'
import { TodoFormSchema, TodoFormSchemaType, TodoModelType } from '@/models/todo'
import { validateZodSchema } from '@/models/utils'
import { enqueueSnackbar } from 'notistack'
import { useUpdateTodo } from '@/lib/APIs'
import { catchApiError } from '@/utils/helper'
import TWModal from '../modal/TWModal'

type UpdateTodoModalProps = {
  item: TodoModelType | null
  onClose: () => void
}

const UpdateTodoModal = (props: UpdateTodoModalProps) => {
  const { item, onClose } = props;

  const [isPending, startTransition] = useTransition();
  const { form, reset, setErrors } = useTodoStore((state) => state);
  const updateTodo = useUpdateTodo()

  const handleOnUpdate = () => {
    const [payload, errors] = validateZodSchema<TodoFormSchemaType>(form, TodoFormSchema)
    if(errors){
      // Just to see the results
      console.table(errors)

      setErrors(errors)
      enqueueSnackbar("Invalid form input", { variant: "error" })
      return;
    }
    startTransition(async () => {
      if(!item) return
      const { res, error } = await catchApiError(updateTodo.mutateAsync({ id: item.id, data: payload }))

      // Just to see the results
      console.log('Update Response', res)
      console.table(res?.data)

      if(error){
        enqueueSnackbar(error, { variant: "error" })
        return;
      }
      enqueueSnackbar("Todo Updated!", { variant: "success" })
      reset()
      onClose()
    })
  }

  return (
    <TWModal open={Boolean(item)} onClose={onClose} title={'Update Todo'} onConfirm={handleOnUpdate} loadingConfirm={isPending}>
      <TodoForm />
    </TWModal>
  )
}

export default UpdateTodoModal