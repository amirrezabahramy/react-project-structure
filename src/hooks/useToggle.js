import { useState } from "react";

function useToggle(defaultValue) {
  const [state, setState] = useState(Boolean(defaultValue));

  return [
    state,
    () => {
      setState((prev) => !prev);
    },
  ];
}

export default useToggle;
