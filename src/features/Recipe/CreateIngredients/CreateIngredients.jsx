//* react-hooks
import { useState } from "react";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* UI-components
import Input from "../../../components/ui/Input/Input";
import Button from "../../../components/ui/Button/Button";
import ParallaxEffect from "../../../components/ui/ParallaxEffect/ParallaxEffect";

//* recipe-feature-components
import Ingredient from "../Ingredient/Ingredient";

//* slice
import { addIngredient } from "../recipeSlice";

//* styles
import styles from "./CreateIngredients.module.css";

function CreateIngredients() {
  const [nameInput, setNameInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");

  const ingredients = useSelector((state) => state.recipe.ingredients);

  const dispatch = useDispatch();

  function handleAddIngredient(e) {
    e.preventDefault();
    if (nameInput === "" || quantityInput === "") return;

    dispatch(addIngredient({ name: nameInput, amount: quantityInput }));
    setNameInput("");
    setQuantityInput("");
  }

  return (
    <div className={styles.main_container}>
      <h3 className={styles.ingredients_header}>Add Ingredients</h3>

      {ingredients?.length > 0 &&
        ingredients?.map((ingredient) => (
          <Ingredient ingredient={ingredient} key={nanoid()} />
        ))}

      <div className={styles.break}></div>

      <div className={styles.input_container}>
        <div>
          <label>Ingredient name</label>
          <Input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div>
          <label>Ingredient quantity</label>
          <Input
            value={quantityInput}
            onChange={(e) => setQuantityInput(e.target.value)}
          />
        </div>

        <ParallaxEffect>
          <Button
            className={styles.add_button}
            onClick={handleAddIngredient}
            type="blue-hollow"
          >
            <p>Add</p>
          </Button>
        </ParallaxEffect>
      </div>
    </div>
  );
}

export default CreateIngredients;
