import { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return <form noValidate {...props} ref={ref} />;
});

export default Form;
