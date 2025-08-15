'use client'

import TextField, { TextFieldProps } from '@mui/material/TextField'
import React from 'react'

type MuiTextFieldProps = {
  errorText?: string
} & TextFieldProps

export const MuiTextField = (props: MuiTextFieldProps) => {
  const { errorText, error, helperText, ...otherProps} = props;

  const isError = !!errorText || error

  return (
    <TextField {...otherProps} error={isError} helperText={helperText || errorText}/>
  )
}
