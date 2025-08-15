import React from 'react'

type TWCheckboxProps = {
  name: string
  label: string
  errorText?: string
} & React.ComponentProps<'input'>

export const TWCheckbox = (props: TWCheckboxProps) => {

  const { id, name, label, errorText, ...otherProps} = props;
  const _id = id || name

  return (
    <>
      <div className="mt-2 flex gap-2 items-center justify-start">
        <input id={_id} name={name} type='checkbox' className={`h-4 w-4 `} {...otherProps}/>
        <label htmlFor={_id} className="block text-sm/6 font-medium dark:text-white">{label}</label>
      </div>
      {errorText && <small className='text-red-400 px-2'>{errorText}</small>}
    </>
  )
}
