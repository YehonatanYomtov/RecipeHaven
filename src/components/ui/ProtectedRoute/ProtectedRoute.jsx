//* react-router
import { Navigate } from "react-router-dom";

//* redux
import { useSelector } from "react-redux";

//* UI-components
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

//* styles
import styles from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.user);
  const userSignedIn = useSelector((state) => state.user.userSignedIn);
  // console.log("User ->", user);
  // console.log(localStorage);
  // console.log("SignedIn ->", userSignedIn);

  if (userSignedIn) {
    if (user) return children;

    return (
      <div className={styles.spinnerBgStyling}>
        <LoadingSpinner />
      </div>
    );
  }

  return <Navigate replace to="/log-in" />;
}

export default ProtectedRoute;
