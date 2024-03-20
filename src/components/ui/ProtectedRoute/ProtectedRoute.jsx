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
  //   console.log("User ->", user);
  //   console.log(localStorage);
  //   console.log("SignedIn ->", userSignedIn);

  if (userSignedIn && !user) {
    return (
      <div className={styles.spinnerBgStyling}>
        <LoadingSpinner />
      </div>
    );
  }

  if (userSignedIn && user) {
    return children;
  }

  if (!userSignedIn && !user) {
    return <Navigate replace to="/log-in" />;
  }

  return null;
}

export default ProtectedRoute;
