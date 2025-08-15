import { AxiosError } from "axios"

// #region catchApiError
export const catchApiError = async <T>(fn: Promise<T>) => {
  try {
    const res = await fn
    return {
      res: res,
      error: undefined
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        res: undefined,
        error: err.message,
      }
    }
    return {
      res: undefined,
      error:  "Process Failed"
    }
  }
}
// #endregion