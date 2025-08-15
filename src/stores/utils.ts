'use client'

// #region setForm
export const setForm = <T extends Record<string, unknown>>(set: Function, data: T) => {
  return set((state: FormStoreType<T>) => {
    state.form = data
    state.error = { }
  })
}
// #endregion

// #region setOnChange
export const setOnChange = <T extends Record<string, unknown>>(set: Function, e: RCE) => {
  const { name, type, checked, value } = e.target;
  return set((state: FormStoreType<T>) => {
    state.form = { ...state.form, [name]: type == "checkbox" ? checked : value }
    state.error = { ...state.error, [name]: undefined }
  })
}
// #endregion


// #region setErrors
export const setErrors = (set: Function, err: Record<string, unknown>) => {
  return set((state: FormStoreType<Record<string, unknown>>) => {
    state.error = err
  })
}
// #endregion

// #region setReset
export const setReset = <T extends Record<string, unknown>>(set: Function, data: T) => {
  return set((state: FormStoreType<T>) => {
    state.form = data
    state.error = { }

  })
}
// #endregion