//* react-hooks
import { useState } from "react";

//* react-router
import { Link } from "react-router-dom";

//* redux-hooks
import { useDispatch, useSelector } from "react-redux";

//* components-UI
import ParallaxEffect from "../../../components/ui/ParallaxEffect/ParallaxEffect";

//* user-slice
import { logout } from "../userSlice";

//* 3rd-party-loading-components
import { Dna } from "react-loader-spinner";

//* styles
import styles from "./UserTag.module.css";

function UserTag() {
  const [isActive, setIsActive] = useState(false);

  const status = useSelector((state) => state.user.status);
  const email = useSelector((state) => state.user.user.email);
  const photoURL = useSelector((state) => state.user.user.photoURL);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    setIsActive(false);
  }

  return (
    <>
      <div
        className={styles.main_container}
        onClick={() => setIsActive((cur) => !cur)}
      >
        <ParallaxEffect>
          <div className={styles.image_container}>
            {status === "loading" ? (
              <Dna height={22} width={22} />
            ) : (
              <img
                className={`${styles.image} ${styles.spin}`}
                src={photoURL || "/images/User-dark.png"}
                alt="User Pic"
              />
            )}
          </div>
        </ParallaxEffect>
        <div className={styles.email_text_container}>
          <p className={styles.email_text}>{email || "User"}</p>
        </div>
      </div>

      <div
        className={`${styles.dropdown_container} ${
          isActive ? styles.active : null
        }`}
      >
        <Link
          to={"/user"}
          onClick={() => setIsActive(false)}
          className={`${styles.dropdown_button} ${styles.dropdown_top_button}`}
        >
          View Profile
        </Link>

        <button
          className={`${styles.dropdown_button} ${styles.dropdown_bottom_button}`}
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default UserTag;
