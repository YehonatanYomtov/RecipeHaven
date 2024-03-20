//* react-hooks
import { forwardRef } from "react";

//* styles
import styles from "./Input.module.css";

const Input = forwardRef(function Input({ className, ...otherProps }, ref) {
  return (
    <input
      ref={ref}
      className={`${className} ${styles.input}`}
      {...otherProps}
    />
  );
});
export default Input;
