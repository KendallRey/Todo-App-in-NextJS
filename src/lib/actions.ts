"use server"

import { revalidatePath } from "next/cache"
import { axiosInstance } from "./axios"

export async function createTodo(data: Record<string, unknown>) {
  'use server'
  try {
    console.log(`Server: Create Todo`)
    const res = await axiosInstance.post('/todos', data)
    revalidatePath('/')
    return { data: res.data, error: undefined}
  }
  catch {
    return { data: undefined, error: "Something went wrong" }
  }

}

export async function updateTodo(id: ID, data: Record<string, unknown>) {
  'use server'
  try {
    console.log(`Server: Update Todo (${id})`)
    const res = await axiosInstance.put(`/todos/${id}`, data)
    revalidatePath('/')
    return { data: res.data, error: undefined}
  }
  catch {
    return { data: undefined, error: "Something went wrong" }
  }

}

// #region deleteTodo
export async function deleteTodo(id: ID) {
  'use server'
  try {
    console.log(`Server: Delete Todo (${id})`)
    const res = await axiosInstance.delete(`/todos/${id}`)
    revalidatePath('/')
    return { data: res.data, error: undefined}
  }
  catch {
    return { data: undefined, error: "Something went wrong" }
  }
}
// #endregion