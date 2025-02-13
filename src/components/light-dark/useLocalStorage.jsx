import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue =
        JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    } catch {
      console.error("Error");
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    JSON.stringify(localStorage.setItem(key, value));
  }, [key, value]);
  return [value, setValue];
}
