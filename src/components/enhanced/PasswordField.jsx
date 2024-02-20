import TextField from "./TextField";
import { forwardRef, useState } from "react";

const PasswordField = forwardRef(
  ({ label, error, helperText, startContent, inputProps }, ref) => {
    const [isShow, setShow] = useState(false);

    const handleShow = () => {
      setShow(true);
    };

    const handleHide = () => {
      setShow(false);
    };

    return (
      <TextField
        ref={ref}
        label={label}
        error={error}
        helperText={helperText}
        startContent={startContent}
        endContent={
          isShow ? (
            <span onClick={handleHide}>Hide</span>
          ) : (
            <span onClick={handleShow}>Show</span>
          )
        }
        inputProps={{
          ...inputProps,
          type: isShow ? inputProps?.type : "password",
        }}
      />
    );
  }
);

export default PasswordField;
