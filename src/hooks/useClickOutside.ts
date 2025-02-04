import { useEffect, useRef } from "react";

interface HandleClickOutsideCallback {
  (): void;
}

export function useClickOutside<T extends HTMLElement>(callbackFn: HandleClickOutsideCallback) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackFn();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callbackFn, ref]);

  return ref;
}
