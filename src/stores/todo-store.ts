'use client'

import { TodoFormSchemaType } from '@/models/todo'
import { createStore } from 'zustand/vanilla'
import { setErrors, setForm, setOnChange, setReset } from './utils'
import { immer } from 'zustand/middleware/immer'

export type TodoActions = {
  onChange: (e: RCE) => void
  reset: () => void
  setForm: (data: Record<string, unknown>) => void
  setErrors: (err: Record<string, string>) => void
}

export type TodoStore = FormStoreType<TodoFormSchemaType> & TodoActions

export const initTodoStore = (): TodoFormSchemaType => {
  return {
    title:  "",
    completed: false,
  }
}

export const defaultInitState: TodoFormSchemaType = {
  title: "",
  completed: false,
}

export const createTodoStore = (
  initState: TodoFormSchemaType = defaultInitState,
) => {
  return createStore<TodoStore>()(
    immer((set) => ({
      form: initState,
      error: {},
      setForm: (data) => setForm(set, data),
      onChange: (e) => setOnChange(set, e),
      setErrors: (err) => setErrors(set, err),
      reset: () => setReset(set, initState),
    }))
  )
}
