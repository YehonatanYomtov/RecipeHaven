//* react-router
import { useLocation, useNavigate } from "react-router-dom";

//* styles
import styles from "./BackButton.module.css";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  //! Placed this here so that there wont be a need of a re-render of all the child components in the AppLayout component.
  return location.pathname !== "/" ? (
    <button
      style={
        location.pathname === "/user"
          ? {
              color: "var(--clr--main-white)",
              borderBottom: "2px solid var(--clr--main-white)",
            }
          : {}
      }
      className={styles.back_button}
      onClick={() => navigate(-1)}
    >
      &larr; Back
    </button>
  ) : null;
}

export default BackButton;
