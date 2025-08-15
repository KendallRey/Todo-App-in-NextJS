import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "./axios"

// Extend / Modify here
type CreateMutationProps = { data: unknown }
type UpdateMutationProps = { id: ID, data: unknown }
type DeleteMutationProps = { id: ID }

// #region useCreateTodo
export const useCreateTodo = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data }: CreateMutationProps) => {
      return axiosInstance.post('/todos', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })
}
// #endregion

// #region useUpdateTodo
export const useUpdateTodo = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, data} : UpdateMutationProps) => {
      return axiosInstance.put(`/todos/${id}`, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })
}
// #endregion

// #region useDeleteTodo
export const useDeleteTodo = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id }: DeleteMutationProps) => {
      return axiosInstance.delete(`/todos/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })
}
// #endregion