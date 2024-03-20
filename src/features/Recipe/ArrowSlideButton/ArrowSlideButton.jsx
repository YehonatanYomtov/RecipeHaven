//* redux
import { useDispatch } from "react-redux";

//* UI-components
import Button from "../../../components/ui/Button/Button";

//* styles
import styles from "./ArrowSlideButton.module.css";
import { useState } from "react";
import DeleteButton from "../../../components/ui/DeleteButton/DeleteButton";
import { deleteRecipe } from "../recipeSlice";

function ArrowSlideButton({ recipe }) {
  const [arrowButtonClicked, setArrowButtonClicked] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={`${
          arrowButtonClicked ? styles.arrow_button_active : styles.arrow_button
        }`}
        onClick={() => setArrowButtonClicked((cur) => !cur)}
      >
        {arrowButtonClicked ? "▶︎" : "◀︎"}
      </Button>

      <div
        className={`${
          arrowButtonClicked
            ? styles.buttons_sliding_container_active
            : styles.buttons_sliding_container_non_active
        }`}
      >
        <DeleteButton
          className={styles.delete_button}
          onClick={() => dispatch(deleteRecipe(recipe))}
        />

        {/*<div className={styles.breaker}></div>

    <Link to={`/recipes/edit/${id}`}>
      <div className={styles.edit_button}></div>
  </Link>*/}

        {/*<Button className={styles.add_note_button}>+</Button>*/}
      </div>
    </>
  );
}

export default ArrowSlideButton;
