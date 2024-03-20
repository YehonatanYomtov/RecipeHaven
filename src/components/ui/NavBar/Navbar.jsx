//* react-router
import { Link, NavLink } from "react-router-dom";

//* UI-components
import Logo from "../Logo/Logo";

//* user-feature-components
import UserTag from "../../../features/User/UserTag/UserTag";

//* styles
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <ul className={styles.ul}>
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
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
          to="/browse"
        >
          Browse recipes
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
      </li>

      <li>
        <UserTag />
      </li>
    </ul>
  );
}

export default Navbar;
