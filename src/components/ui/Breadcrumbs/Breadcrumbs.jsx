//* react-router
import { Link, useLocation } from "react-router-dom";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* styles
import styles from "./Breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link className={styles.text} to={currentLink} key={nanoid()}>
          /{crumb}
        </Link>
      );
    });

  return (
    <>
      {location.pathname !== "/" && (
        <div className={styles.container}>{crumbs}</div>
      )}
    </>
  );
}

export default Breadcrumbs;
