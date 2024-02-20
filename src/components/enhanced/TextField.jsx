import { forwardRef } from "react";
import Input from "../basic/Input";

const TextField = forwardRef(
  (
    { label, error, helperText, startContent, endContent, inputProps, ...rest },
    inputRef
  ) => {
    return (
      <div {...rest}>
        {Boolean(label) && <label htmlFor={inputProps?.name}>{label}</label>}
        {Boolean(startContent) && <>{startContent}</>}
        <Input {...inputProps} ref={inputRef} />
        {Boolean(endContent) && <>{endContent}</>}
        {Boolean(helperText) && <small>{helperText}</small>}
      </div>
    );
  }
);

export default TextField;
