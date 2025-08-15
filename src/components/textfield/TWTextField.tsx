import React from 'react'

type TWTextfieldProps = {
  name: string
  label: string
  errorText?: string
} & React.ComponentProps<'input'>

export const TWTextfield = (props: TWTextfieldProps) => {

  const { id, name, label, value, errorText, ...otherProps} = props;
  const _id = id || name
  const isError = !!errorText
  return (
    <div>
      <label htmlFor={_id} className="block text-sm/6 font-medium dark:text-white">{label}</label>
      <div className="mt-2">
        <div className={`"flex items-center rounded-md outline-1 -outline-offset-1 ${ isError ? "outline-red-500" : "outline-gray-600"} has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500"`}>
          <input id={_id} name={name} value={value || ''} className={`w-full block min-w-0 grow dark:bg-gray-800 py-1.5 pr-3 pl-2 text-base dark:text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6`} {...otherProps}/>
        </div>
      </div>
      {errorText && <small className='text-red-400 px-2'>{errorText}</small>}
    </div>
  )
}
