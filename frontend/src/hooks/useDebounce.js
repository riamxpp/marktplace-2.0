import { useRef } from "react";

export default function useDebounce(fn, timer) {
  let timerRef = useRef(null);

  function debounceFn(...args) {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      fn(...args);
    }, timer);
  }
  return debounceFn;
}
