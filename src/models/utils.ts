import { ZodObject } from "zod";

// #region validateZodSchema
type ValidateZodSchemaType<T> = [T,  undefined] | [undefined,  Record<string, string>]
export const validateZodSchema = <T>(data: unknown, schema: ZodObject): ValidateZodSchemaType<T>  => {
  const results = schema.safeParse(data);
  if(results.error) {
    const errors: Record<string, string> = {}
    results.error.issues.forEach((issue) => {
      const path = issue.path.join('.')
      errors[path] = issue.message
    })
    return [undefined, errors]
  }
  return [results.data as T, undefined]
}
// #endregion