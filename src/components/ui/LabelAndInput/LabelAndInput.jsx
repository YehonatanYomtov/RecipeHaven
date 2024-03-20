//* UI-components
import Input from "../Input/Input";

//* styles
import styles from "./LabelAndInput.module.css";

function LabelAndInput({
  className,
  style = {},
  label = "",
  inputName = "",
  value,
  onChange,
}) {
  return (
    <div
      className={`${styles.label_input_container} ${styles[className]}`}
      style={style}
    >
      <label>{label}</label>
      <Input name={inputName} value={value} onChange={onChange} />
    </div>
  );
}

export default LabelAndInput;
