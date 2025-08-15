'use client'

import React, { useTransition } from 'react'
import { MuiModal } from '../modal/MuiModal'
import TodoForm from './TodoForm'
import { useTodoStore } from '@/stores/todo-store-provider'
import { TodoFormSchema, TodoFormSchemaType } from '@/models/todo'
import { validateZodSchema } from '@/models/utils'
import { enqueueSnackbar } from 'notistack'
import { useCreateTodo } from '@/lib/APIs'
import { catchApiError } from '@/utils/helper'
import TWModal from '../modal/TWModal'

type CreateTodoModalProps = {
  open: boolean
  onClose: () => void
}

const CreateTodoModal = (props: CreateTodoModalProps) => {
  const { open, onClose } = props;

  const [isPending, startTransition] = useTransition();
  const { form, reset, setErrors } = useTodoStore((state) => state);
  const createTodo = useCreateTodo()

  const handleOnSave = () => {
    const [payload, errors] = validateZodSchema<TodoFormSchemaType>(form, TodoFormSchema)
    if(errors){
      // Just to see the results
      console.table(errors)

      setErrors(errors)
      enqueueSnackbar("Invalid form input", { variant: "error" })
      return;
    }
    startTransition(async () => {
      const { res, error } = await catchApiError(createTodo.mutateAsync({ data: payload }))

      // Just to see the results
      console.log('Create Response', res)
      console.table(res?.data)

      if(error){
        enqueueSnackbar(error, { variant: "error" })
        return;
      }
      enqueueSnackbar("New Todo Created!", { variant: "success" })
      reset()
      onClose()
    })
  }

  return (
    <TWModal open={open} onClose={onClose} title={'Add Todo'} onConfirm={handleOnSave} loadingConfirm={isPending}>
      <TodoForm />
    </TWModal>
  )
}

export default CreateTodoModal