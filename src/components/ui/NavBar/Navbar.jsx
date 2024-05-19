//* react-hooks
import { useEffect, useState } from "react";

//* react-router
import { Link, NavLink } from "react-router-dom";

//* UI-components
import Logo from "../Logo/Logo";

//* user-feature-components
import UserTag from "../../../features/User/UserTag/UserTag";

//* styles
import styles from "./NavBar.module.css";

function Navbar() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [navBarOpened, setNavBarOpened] = useState(false);

  function handleOpenHamburgerMenu() {
    setNavBarOpened((cur) => !cur);
  }

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
    <>
      {isMobileScreen && (
        <button className={styles.hamburger} onClick={handleOpenHamburgerMenu}>
          <img
            src={`./images/icons/${
              !navBarOpened ? "Hamburger" : "Close-window"
            }-icon.png`}
            alt=""
          />
        </button>
      )}

      <ul
        className={
          !isMobileScreen
            ? styles.ul
            : !navBarOpened
            ? styles.mobile_navbar
            : `${styles.mobile_navbar} ${styles.opened_hamburger}`
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
              <img
                src={`./images/icons/Home-${
                  isMobileScreen ? "mobile-" : ""
                }icon.png`}
                alt="home"
              />
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
              <img
                src={`./images/icons/Browse-${
                  isMobileScreen ? "mobile-" : ""
                }icon.png`}
                alt="browse"
              />
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
              <img
                src={`./images/icons/Recipes-${
                  isMobileScreen ? "mobile-" : ""
                }icon.png`}
                alt="recipes"
              />
            ) : (
              "Recipes"
            )}
          </NavLink>
        </li>

        <li>
          {isMobileScreen ? (
            <NavLink to="/user">
              <UserTag />
            </NavLink>
          ) : (
            <UserTag />
          )}
        </li>
      </ul>
    </>
  );
}

export default Navbar;
