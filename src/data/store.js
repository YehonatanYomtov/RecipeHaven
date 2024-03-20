//* redux-toolkits
import { configureStore } from "@reduxjs/toolkit";

//* slice-reducers
import recipeReducer from "../features/Recipe/recipeSlice";
import browseReducer from "../features/Browse/browseSlice";
import userReducer from "../features/User/userSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: { recipe: recipeReducer, browse: browseReducer, user: userReducer },
});

export default store;
