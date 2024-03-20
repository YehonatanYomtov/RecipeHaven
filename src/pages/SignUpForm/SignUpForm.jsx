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
import { signup } from "../../features/User/userSlice";

//* styles
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  //! change all inputs to use the useRef hook to minimize the code.

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = inputs;

  const [alert, setAlert] = useState("");

  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      return setAlert("One or more inputs are empty!");
    }

    if (password !== confirmPassword) {
      return setAlert("Password and ConfirmPassword do not match!");
    }

    dispatch(signup({ email, password }));
    navigate("/");
    setInputs((cur) => {
      return { ...cur, email: "", password: "", confirmPassword: "" };
    });
  }

  function handleInputs(e, state) {
    setInputs((cur) => {
      return { ...cur, [state]: e.target.value };
    });
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (
      (email !== "" && password === "" && confirmPassword === "") ||
      (email === "" && password === "" && confirmPassword === "")
    ) {
      setAlert("");
    }
  }, [email, password, confirmPassword]);

  return (
    <div className={styles.container_main}>
      {status === "error" && error && <ErrorMessage message={error} />}

      {status === "loading" && !error && <LoadingSpinner />}

      {status !== "loading" && !error && (
        <ParallaxEffect glareColor={"#98d4ffc0"} glare={0.18}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <div className={styles.blur}></div>
            <h1>Sign Up</h1>

            <Input
              ref={inputRef}
              value={email}
              onChange={(e) => handleInputs(e, "email")}
              className={styles.input}
              type="email"
              placeholder="Email..."
            />

            <Input
              value={password}
              onChange={(e) => handleInputs(e, "password")}
              className={styles.input}
              type="password"
              placeholder="Password..."
            />

            <Input
              value={confirmPassword}
              onChange={(e) => handleInputs(e, "confirmPassword")}
              className={styles.input}
              type="password"
              placeholder="Confirm Password..."
            />

            {alert !== "" && <PopUp>{alert}</PopUp>}

            <div className={styles.no_account}>
              Already have an account?
              <Link className={styles.link} to="/log-in">
                {" "}
                Log in
              </Link>
            </div>
            <Button className={styles.sign_up_button}>Sign Up</Button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </ParallaxEffect>
      )}
    </div>
  );
}

export default SignUpForm;
