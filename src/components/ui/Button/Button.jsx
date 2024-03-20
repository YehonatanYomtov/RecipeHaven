//* styles
import styles from "./Button.module.css";

function Button({ className, children, type, ...otherProps }) {
  return (
    <button
      className={`${!type ? styles.button : styles[type]} ${className} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
