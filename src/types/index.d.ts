type ID = number

type RCE<T = HTMLInputElement> = React.ChangeEvent<T>

type FormStoreType<T extends Record<string, unknown>> = {
  form: Partial<T>
  error: Partial<T>
}