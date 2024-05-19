//* react-router
import { Link } from "react-router-dom";

//* redux-hooks
import { useDispatch, useSelector } from "react-redux";

//* user-slice
import { logout, setIsClicked } from "../userSlice";

//* recipe-slice
import { resetRecipeHistory } from "../../Recipe/recipeSlice";

//* components-UI
// import LoadingSpinner from "../../../components/ui/LoadingSpinner/LoadingSpinner";

//* user-feature-components
import UploadImageSection from "../UploadImageSection/UploadImageSection";

//* 3rd-party-loading-components
import { Dna } from "react-loader-spinner";

//* styles
import styles from "./AccountSection.module.css";

function AccountSection() {
  const status = useSelector((state) => state.user.status);
  const isClicked = useSelector((state) => state.user.isClicked);
  const uid = useSelector((state) => state.user.user.uid);

  const dispatch = useDispatch();

  return (
    <section className={styles.account_section_main_container}>
      <Link to={"/recipes/liked-recipes"}>
        <div className={`${styles.view_icon} ${styles.icon}`}></div>
        {/* <img src="/images/icons/View-icon.png" alt="" />*/}
        View all recipes
      </Link>

      <Link to={"/recipes/new"}>
        <div className={`${styles.add_icon} ${styles.icon}`}></div>
        {/* <img src="/images/icons/Add-icon.png" alt="Add" />*/}
        Add a new recipe
      </Link>

      <div className={styles.change_profile_image_section}>
        <div
          className={styles.text_button_container}
          onClick={() => dispatch(setIsClicked())}
        >
          <div className={`${styles.change_image_icon} ${styles.icon}`}></div>
          {/*<img src="/images/icons/Change-image-icon.png" alt="Sign out" />*/}
          Change profile image
        </div>

        {isClicked && <UploadImageSection isClicked={isClicked} />}

        {status === "loading" && (
          <Dna height="45" width="45" wrapperStyle={{ alignSelf: "center" }} />
        )}
      </div>

      <div
        className={styles.text_button_container}
        onClick={() => dispatch(resetRecipeHistory(uid))}
      >
        <div className={`${styles.clear_icon} ${styles.icon}`}></div>
        {/*<img src="/images/icons/Clean-icon.png" alt="Sign out" />*/}
        Clear recipe history
      </div>

      <div
        className={styles.text_button_container}
        onClick={() => dispatch(logout())}
      >
        <div className={`${styles.log_out_icon} ${styles.icon}`}></div>
        {/*<img src="/images/icons/Signout-icon.png" alt="Sign out" />*/}
        Sign Out
      </div>
    </section>
  );
}

export default AccountSection;
