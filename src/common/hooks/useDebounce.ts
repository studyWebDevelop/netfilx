import { useEffect, useState } from "react";

const useDebounce = (value: string, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay ?? 300);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
