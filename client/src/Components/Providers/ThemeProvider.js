import React, { useState, useContext, useEffect, useMemo, useRef } from "react";

const ThemeContext = React.createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({ children }) {
  //provider state
  const [theme, setTheme] = useState(false);
  const effectRan = useRef(false);

  useEffect(() => {
    const data = window.localStorage.getItem("theme");

    if (effectRan.current === false) {
      if (data !== null) setTheme(JSON.parse(data));
      effectRan.current = true;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const themeHandler = (e) => {
    e.preventDefault();

    setTheme(!theme);
  };

  const theme_state = {
    themeHandler,
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={theme_state}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
