import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // Checking if key is saved in local storage already and if not then setting to initialValue
  const [storedValue, setStoredValue] = useState(() => {
    // getting item with key ini local storage
    const item = window.localStorage.getItem(key);
    // if item is null sets to initial value else returns current value
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    // Saves state like a normal hook
    setStoredValue(value);

    // Commiits state to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
