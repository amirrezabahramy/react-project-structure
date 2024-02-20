import { useEffect, useState } from "react";

function useDebounce(value, interval) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setState(value);
    }, interval || 500);

    return () => {
      clearTimeout(t);
    };
  }, [value]);

  return <div>useDebounce</div>;
}

export default useDebounce;
