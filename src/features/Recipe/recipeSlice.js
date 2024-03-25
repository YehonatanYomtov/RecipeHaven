import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  fetchRecipes,
  fetchFilteredRecipes,
  fetchSpecificRecipe,
} from "../../services/apiGetRecipes";

//* firebase-imports
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/config";

//* utils
import {
  addCaseFullTemplate,
  addCasePendingTemplate,
  addCaseRejectedTemplate,
} from "../../utils/addCaseTemplate";
import { sortNestedObjects } from "../../utils/sortNestedObjects";
import { sortArrayOfObjects } from "../../utils/sortArrayOfObjects";
import { filterRecipesOfCurrentUser } from "../../utils/filterRecipesOfCurrentUser";
import { deleteEntireFirebaseCollection } from "../../utils/deleteEntireFirebaseCollection";

const initialState = {
  status: "idle",
  recipes: [],
  //TODO: Check if you need the 'likedRecipes' array.
  likedRecipes: [],
  // sorted: false,
  recipeFullInfo: {},
  ingredients: [],
  // categories: [],
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,

  reducers: {
    addIngredient(state, action) {
      state.ingredients.push(action.payload);
    },

    setCategories(state, action) {
      state.categories.push(action.payload);
      console.log("action.payload: ", action.payload);
    },

    exitError(state) {
      state.error = null;
    },
  },

  extraReducers(builder) {
    addCaseFullTemplate(builder, fetchRecipes, { recipes: "payload" });
    //* ====
    addCaseFullTemplate(builder, fetchFilteredRecipes, { recipes: "payload" });
    //* ====
    addCaseFullTemplate(builder, fetchSpecificRecipe, {
      recipeFullInfo: "payload",
    });
    //* ====
    addCasePendingTemplate(builder, createNewRecipe);
    builder.addCase(createNewRecipe.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.likedRecipes = [
        ...state.likedRecipes,
        { ...action.payload, createdByUser: true },
      ];
      state.ingredients = [];
    });
    addCaseRejectedTemplate(builder, createNewRecipe);
    //* ====
    builder.addCase(deleteRecipe.fulfilled, (state, action) => {
      state.status = "succeeded";
      const filtered = state.likedRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      state.likedRecipes = filtered;
    });
    addCaseRejectedTemplate(builder, deleteRecipe);
    //* ====
    builder.addCase(likeRecipe.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.likedRecipes.push(action.payload);
    });
    addCaseRejectedTemplate(builder, likeRecipe);
    //* ====
    addCaseFullTemplate(builder, sortRecipesByName, { recipes: "payload" });
    //* ====
    addCaseFullTemplate(builder, sortRecipesByCalories, { recipes: "payload" });
    //* ====
    addCaseFullTemplate(builder, sortLikedRecipesByName, {
      likedRecipes: "payload",
    });
    //* ====
    addCaseFullTemplate(builder, sortLikedRecipesByCalories, {
      likedRecipes: "payload",
    });
    //* ====
    addCaseFullTemplate(builder, getLikedRecipeCollection, {
      likedRecipes: "payload",
    });
    //* ====
    addCaseFullTemplate(builder, sortLikedRecipesByLiked, {
      likedRecipes: "payload",
    });
    //* ====
    addCaseFullTemplate(builder, sortLikedRecipesByCreated, {
      likedRecipes: "payload",
    });
    //* ====
    addCaseFullTemplate(builder, resetRecipeHistory);
    //* ====
  },
});

export const { addIngredient, exitError } = recipeSlice.actions;

export default recipeSlice.reducer;

//* async-thunks
export const createNewRecipe = createAsyncThunk(
  "recipe/createNewRecipe",
  async (recipe) => {
    const finalRecipe = {
      ...recipe,
      createdByUser: true,
    };

    await addDoc(collection(db, "recipesCreated"), {
      uid: recipe.uid,
    });

    await addDoc(collection(db, "likedRecipes"), finalRecipe);

    return finalRecipe;
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipe/deleteRecipe",
  async (recipe) => {
    const collectionRef = collection(db, "likedRecipes");
    const documents = await getDocs(collectionRef);

    let array = [];
    documents.forEach((doc) => {
      array.push({ ...doc.data(), dbId: doc.id });
    });

    await addDoc(collection(db, "recipesDeleted"), {
      uid: recipe.uid,
    });

    const match = array.find((recipe) => recipe.id === recipe.id);
    const docRef = doc(db, "likedRecipes", match.dbId);
    await deleteDoc(docRef);

    return recipe.id;
  }
);

export const likeRecipe = createAsyncThunk(
  "recipe/likeRecipe",
  async (recipe) => {
    const finalRecipe = {
      ...recipe,
      liked: true,
    };

    await addDoc(collection(db, "likedRecipes"), finalRecipe);

    await addDoc(collection(db, "recipesLiked"), {
      uid: finalRecipe.uid,
    });

    return finalRecipe;
  }
);

export const resetRecipeHistory = createAsyncThunk(
  "recipe/resetRecipeHistory",
  async (uid) => {
    await deleteEntireFirebaseCollection("recipesLiked", uid);
    await deleteEntireFirebaseCollection("recipesDeleted", uid);
    await deleteEntireFirebaseCollection("recipesCreated", uid);
  }
);

export const sortRecipesByName = createAsyncThunk(
  "recipe/sortRecipesByName",
  async (array) => {
    const sorted = await sortNestedObjects(array, "label");
    return sorted;
  }
);

export const sortRecipesByCalories = createAsyncThunk(
  "recipe/sortRecipesByCalories",
  async (array) => {
    const sorted = await sortNestedObjects(array, "calories");
    return sorted;
  }
);

export const sortLikedRecipesByName = createAsyncThunk(
  "recipe/sortLikedRecipesByName",
  async (array) => {
    const likedRecipes = await sortNestedObjects(array, "label");
    return likedRecipes;
  }
);

export const sortLikedRecipesByCalories = createAsyncThunk(
  "recipe/sortLikedRecipesByCalories",
  async (array) => {
    const sorted = await sortNestedObjects(array, "calories");
    return sorted;
  }
);

export const sortLikedRecipesByLiked = createAsyncThunk(
  "recipe/sortLikedRecipesByLiked",
  async (array) => {
    const sorted = sortArrayOfObjects(array, "liked");
    return sorted;
  }
);

export const sortLikedRecipesByCreated = createAsyncThunk(
  "recipe/sortLikedRecipesByCreated",
  async (array) => {
    const sorted = sortArrayOfObjects(array, "createdByUser");
    return sorted;
  }
);

export const getLikedRecipeCollection = createAsyncThunk(
  "recipe/getLikedRecipeCollection",
  async (uid) => {
    const colRef = collection(db, "likedRecipes");
    const docsSnap = await getDocs(colRef);

    let array = [];
    docsSnap.forEach((doc) => {
      array.push(doc.data());
    });

    const filteredLikedRecipes = filterRecipesOfCurrentUser(array, uid);
    // array.filter((recipe) => recipe.uid === uid);
    return filteredLikedRecipes;
  }
);
