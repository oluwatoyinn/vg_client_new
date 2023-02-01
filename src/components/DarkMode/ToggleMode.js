import React from "react";
import { ThemeContext } from "./themeContext";
import SunIcon from "./../icons/SunIcon";
import MoonIcon from "./../icons/MoonIcon";

const ToggleMode = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          {/* sun */}
          <SunIcon />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 bg-white focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          {/* moon */}
          <MoonIcon />
        </button>
      )}
    </div>
  );
};

export default ToggleMode;
