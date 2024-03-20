//* react-hooks
import { useEffect, useRef, useState } from "react";

//* react-router
import { Link, useNavigate } from "react-router-dom";

//* redux-hooks
import { useDispatch, useSelector } from "react-redux";

//* components-UI
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import ParallaxEffect from "../../components/ui/ParallaxEffect/ParallaxEffect";
import PopUp from "../../components/ui/PopUp/PopUp";

//* user-slice
import { signin } from "../../features/User/userSlice";

//* styles
import styles from "./LogInForm.module.css";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      return setAlert("One or more inputs are empty!");
    }

    dispatch(signin({ email, password }));
    navigate("/");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container_main}>
      {status === "error" && error && <ErrorMessage message={error} />}

      {status === "loading" && !error && <LoadingSpinner />}

      {status !== "loading" && !error && (
        <ParallaxEffect glareColor={"#98d4ffc0"} glare={0.18}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <div className={styles.blur}></div>
            <h1>Log In</h1>

            <Input
              ref={inputRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              type="email"
              placeholder="Email..."
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="Password..."
            />

            {alert !== "" && <PopUp>{alert}</PopUp>}

            <div className={styles.no_account}>
              Don`t have an account?
              <Link className={styles.link} to="/sign-up">
                {" "}
                Create one
              </Link>
            </div>

            <Button className={styles.log_in_button}>Log In</Button>

            {error && <p className={styles.error}>{error}</p>}
          </form>
        </ParallaxEffect>
      )}
    </div>
  );
}

export default LogInForm;
