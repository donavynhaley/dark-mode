import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkmode", initialValue);
  return [darkMode, setDarkMode];
};
