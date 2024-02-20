import { forwardRef } from "react";
import Button from "../basic/Button";
const LoadingButton = forwardRef(({ isLoading, ...rest }, ref) => {
  return (
    <Button disabled={isLoading || rest?.disabled} {...rest} ref={ref}>
      {isLoading ? "Loading..." : rest?.children}
    </Button>
  );
});

export default LoadingButton;
