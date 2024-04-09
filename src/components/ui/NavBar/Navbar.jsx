//* react-router
import { Link, NavLink } from "react-router-dom";

//* UI-components
import Logo from "../Logo/Logo";

//* user-feature-components
import UserTag from "../../../features/User/UserTag/UserTag";

//* styles
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth <= 400);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul
      className={
        !isMobileScreen ? styles.ul : `${styles.ul}  ${styles.mobile_navbar}`
      }
    >
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
          to="/"
          end
        >
          {isMobileScreen ? (
            <img src="./images/icons/Home-icon.png" alt="home" />
          ) : (
            "Home"
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
          to="/browse"
        >
          {isMobileScreen ? (
            <img src="./images/icons/Browse-icon.png" alt="browse" />
          ) : (
            "Browse recipes"
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
          to="/recipes"
        >
          {isMobileScreen ? (
            <img src="./images/icons/Recipes-icon.png" alt="browse" />
          ) : (
            "Recipes"
          )}
        </NavLink>
      </li>

      <li>
        <UserTag />
      </li>
    </ul>
  );
}

export default Navbar;
