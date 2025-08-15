import { TodoModelType } from "@/models/todo"
import { queryOptions } from "@tanstack/react-query"
import { axiosInstance } from "./axios"

// #region getTodosOptions
export const getTodosOptions = queryOptions<TodoModelType[]>({
  queryKey: ['todo'],
  queryFn: async () => {
    const response = await axiosInstance.get('/todos')
    return response.data
  },
})
// #endregion
