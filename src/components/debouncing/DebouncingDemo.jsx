import React, { useState, useEffect } from 'react';

// Small debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function DebouncingDemo() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 500); // 500ms debounce

  useEffect(() => {
    if (debouncedText) {
      console.log('API call with:', debouncedText);
      // You would actually call your API here
    }
  }, [debouncedText]);

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type to search..."
    />
  );
}