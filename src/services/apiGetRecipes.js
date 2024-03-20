//* redux-toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";

//* utils
import { stringShortener as createRecipeID } from "../utils/stringShortener";

const API_URL = "https://api.edamam.com/api/recipes/v2?type=public";
const API_ID = "app_id=da690883";
const API_KEY = "app_key=657eb04660507187a400a91259e973fd";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async (typeOfFood) => {
    const res = await fetch(`${API_URL}&q=${typeOfFood}&${API_ID}&${API_KEY}`);

    if (!res.ok) throw Error("Failed getting recipes");

    const data = await res.json();

    const recipes = data.hits.map((rec) => {
      return {
        ...rec.recipe,
        id: createRecipeID(rec.recipe.uri, "_").substring(1),
      };
    });

    return recipes;
  }
);

export const fetchFilteredRecipes = createAsyncThunk(
  "recipe/fetchFilteredRecipes",
  async (allFilteredCategories) => {
    const categories = allFilteredCategories.map((obj) => obj.category);

    const options = allFilteredCategories.map((obj) => obj.option);

    function createQueryString() {
      return categories.map((cat, i) => `&${cat}=${options[i]}`).join("");
    }

    const res = await fetch(
      `${API_URL}&${API_ID}&${API_KEY}${createQueryString()}`
    );

    if (!res.ok) throw Error("Failed getting recipes");

    const data = await res.json();

    const recipes = data.hits.map((rec) => {
      return {
        ...rec.recipe,
        id: createRecipeID(rec.recipe.uri, "_").substring(1),
      };
    });

    return recipes;
  }
);

export const fetchSpecificRecipe = createAsyncThunk(
  "recipe/fetchSpecificRecipes",
  async (id) => {
    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&${API_ID}&${API_KEY}`
    );

    if (!res.ok) throw Error("Failed getting recipes");

    const data = await res.json();
    console.log(data);

    const recipe = {
      ...data.recipe,
      id: createRecipeID(data.recipe.uri, "_").substring(1),
    };

    return recipe;
  }
);
