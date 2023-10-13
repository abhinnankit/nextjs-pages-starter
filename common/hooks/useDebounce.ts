import { useEffect, useRef } from 'react';

interface IDebounceProps {
  dependencies: any[];
  delay?: number;
  callbackFn: () => void;
}

export function useDebounce({ dependencies, delay = 500, callbackFn }: IDebounceProps) {
  const debounce = useRef(setTimeout(() => {}, 0));
  useEffect(() => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      callbackFn();
    }, delay);
  }, [dependencies, delay, callbackFn]);
}
