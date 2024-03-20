//* react-hooks
import { useEffect, useState } from "react";

//* react-router
import { useNavigate } from "react-router-dom";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* recipe-feature-components
import CreateIngredients from "../../features/Recipe/CreateIngredients/CreateIngredients";

//* components-UI
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

//* slice
import { createNewRecipe } from "../../features/Recipe/recipeSlice";

//* styles
import styles from "./CreateNewRecipe.module.css";
import LabelAndInput from "../../components/ui/LabelAndInput/LabelAndInput";

const initialState = {
  recipeName: "",
  cuisineType: "",
  dishType: "",
  mealType: "",
  imageUrl: "",
  calories: "",
};

function CreateNewRecipe() {
  const [input, setInput] = useState(initialState);
  const [animate, setAnimate] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  const ingredients = useSelector((state) => state.recipe.ingredients);
  const uid = useSelector((state) => state.user.user.uid);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newRecipe = {
    label: input.recipeName,
    cuisineType: input.cuisineType,
    dishType: [input.dishType],
    mealType: [input.mealType],
    image: input.imageUrl,
    calories: input.calories,
    ingredients,
    id: nanoid(),
    uid,
  };

  function selectSetterForInput(e) {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setInput({
      ...input,
      recipeName: "",
      cuisineType: "",
      dishType: "",
      imageUrl: "",
      calories: "",
    });
    dispatch(createNewRecipe(newRecipe));
    navigate("/recipes");
  }

  useEffect(() => setAnimate(true), []);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.animation}>
        <img
          className={
            animate
              ? `${styles.notebook} ${styles.notebook_animation}`
              : styles.notebook
          }
          src="/images/animated/Notebook.png"
          alt="Notebook"
        />

        <div className={styles.cup_coffee_container}>
          <img
            className={
              animate
                ? `${styles.cup_coffee} ${styles.cup_coffee_animation}`
                : styles.cup_coffee
            }
            src="/images/animated/Cup-coffee.png"
            alt="Cup coffee"
          />
        </div>

        <img
          className={
            animate
              ? `${styles.red_pen} ${styles.red_pen_animation}`
              : styles.red_pen
          }
          src="/images/animated/Red-pen.png"
          alt="Red pen"
        />
      </div>

      <LabelAndInput
        label="Recipe name"
        inputName="recipeName"
        value={input.recipeName}
        onChange={selectSetterForInput}
      />

      <LabelAndInput
        label="Cuisine type"
        inputName="cuisineType"
        value={input.cuisineType}
        onChange={selectSetterForInput}
      />

      <LabelAndInput
        label="Dish type"
        inputName="dishType"
        value={input.dishType}
        onChange={selectSetterForInput}
      />

      <LabelAndInput
        label="Meal type"
        inputName="mealType"
        value={input.mealType}
        onChange={selectSetterForInput}
      />

      <LabelAndInput
        label="Image url"
        inputName="imageUrl"
        value={input.imageUrl}
        onChange={selectSetterForInput}
      />

      <LabelAndInput
        label="Calories"
        inputName="calories"
        value={input.calories}
        onChange={selectSetterForInput}
      />

      <CreateIngredients />

      <Button type="blue">Create</Button>
    </form>
  );
}

export default CreateNewRecipe;
