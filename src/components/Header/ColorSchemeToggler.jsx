import { useThemeContext } from "../../globalContext/ThemeContext";

export const ColorSchemeToggler = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <label className="ui-switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </>
  );
};
