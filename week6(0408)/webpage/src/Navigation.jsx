import React from "react";

function Navigation({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navigation">
      <h1>클라우드 시스템 가이드</h1>
      <button onClick={toggleTheme}>테마 전환</button>
    </nav>
  );
}

export default Navigation;
