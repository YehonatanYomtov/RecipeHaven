//* react-hooks
import { useEffect, useState } from "react";

//* styles
import styles from "./DarkLightModeButton.module.css";

function DarkLightModeButton() {
  const [lightTheme, setLightTheme] = useState(true);
  function handleThemeMode() {
    setLightTheme((cur) => !cur);
  }

  const rootEl = document.querySelector(":root");
  useEffect(() => {
    if (!lightTheme) {
      rootEl.setAttribute("class", "dark");
      localStorage.setItem("theme", "dark");
    }
    if (lightTheme) {
      document.documentElement.style.getPropertyValue("color-scheme", "light");
      rootEl.removeAttribute("class", "dark");
      localStorage.setItem("theme", "light");
    }
  }, [lightTheme, rootEl]);

  return (
    <button
      style={{
        backgroundColor: `${lightTheme ? "#f4f4f4" : "#50605d"}`,
        border: `2px solid ${lightTheme ? "#b4b4b4" : "#384442"}`,
      }}
      className={styles.theme_button_base}
      onClick={handleThemeMode}
    >
      <div className={lightTheme ? styles.light_theme : styles.dark_theme}>
        <img
          src={lightTheme ? "/images/Light-mode.png" : "/images/Dark-mode.png"}
          alt="Theme"
        />
      </div>
    </button>
  );
}

export default DarkLightModeButton;
