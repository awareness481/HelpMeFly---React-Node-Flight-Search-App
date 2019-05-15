import React from 'react';
import FilledInput from "@material-ui/core/FilledInput";

const Input = props => {
  return (
    <FilledInput
      disableUnderline={true}
      className={props.class}
      name={props.name}
      onChange={props.change}
      required={true}
      type="text"
      value={props.dest}
      placeholder={props.plch}
      autoComplete='off'
    />
  )
}

export default Input;