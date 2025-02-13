import React from "react";
import "./theme.css";
import useLocalStorage from "./useLocalStorage";

const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello, there!</p>
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </div>
  );
};

export default LightDark;
