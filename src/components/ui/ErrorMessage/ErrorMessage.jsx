//* react-router
import { useLocation, useNavigate, useRouteError } from "react-router-dom";

//* redux
import { useDispatch } from "react-redux";

//* components-UI
import Button from "../Button/Button";
import ParallaxEffect from "../ParallaxEffect/ParallaxEffect";

//* slice
import { exitError } from "../../../features/Recipe/recipeSlice";

//* styles
import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  const error = useRouteError();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  function handleError() {
    if (location.pathname === "/log-in") {
      navigate("/log-in");
    } else if (location.pathname === "/sign-up") {
      navigate("/sign-up");
    } else {
      navigate(-1);
    }
    dispatch(exitError());
  }

  console.error(message || error);

  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <i>{error?.statusText || error?.message || message}</i>

      <Button onClick={handleError} type="blue-hollow">
        Ok
      </Button>
    </div>
  );
}

export default ErrorMessage;
