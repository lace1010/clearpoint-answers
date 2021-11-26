import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext();

const Content = () => {
  const context = useContext(
    ThemeContext
  );
  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
};

const Context = () => {
    const [theme, setTheme] = useState("dark");
    const switchTheme = () => {
      theme === "dark" ? setTheme("light") : setTheme("dark");
    };
    return (
      <ThemeContext.Provider value={{theme, switchTheme}}>
        <Content />
      </ThemeContext.Provider>
    );
}

export default Context;
