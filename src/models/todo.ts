import z from "zod";
import { BaseModel, booleanField, booleanFieldRequired, numberField, stringField, stringFieldRequired } from "./base";

// #region TodoModel
export const TodoModel = BaseModel.extend({
  userId: numberField,
  title: stringField,
  completed: booleanField,
})
export type TodoModelType = z.infer<typeof TodoModel>
// #endregion

export const TodoFormSchema = z.object({
  title: stringFieldRequired,
  completed: booleanFieldRequired,
})
export type TodoFormSchemaType = z.infer<typeof TodoFormSchema>