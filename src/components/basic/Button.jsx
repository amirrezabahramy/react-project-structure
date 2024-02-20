import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return <button {...props} type={props?.type || "button"} ref={ref} />;
});

export default Button;
