import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'
import React from 'react'

type MuiCheckboxProps = {
  label?: string
} & CheckboxProps

export const MuiCheckbox = (props: MuiCheckboxProps) => {
  const { label, ...otherProps } = props;
  return (
    <FormControlLabel control={<Checkbox {...otherProps} />} label={label} />
  )
}
