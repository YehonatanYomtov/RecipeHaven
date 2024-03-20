//* react-hooks
import { useEffect } from "react";

//* react-router
import { Navigate, createBrowserRouter } from "react-router-dom";

//* redux-hooks
import { useSelector } from "react-redux";

//* layout-feature-components
import AppLayout from "../layouts/AppLayout/AppLayout";

//* pages
import SignUpForm from "../pages/SignUpForm/SignUpForm";
import LogInForm from "../pages/LogInForm/LogInForm";
import ProtectedRoute from "../components/ui/ProtectedRoute/ProtectedRoute";
import HomePage from "../pages/HomePage/HomePage";
import BrowseRecipes from "../pages/BrowseRecipes/BrowseRecipes";
import Recipes from "../pages/Recipes/Recipes";
import CreateNewRecipe from "../pages/CreateNewRecipe/CreateNewRecipe";
import LikedRecipes from "../pages/LikedRecipes/LikedRecipes";
import RecipeFullInfo from "../pages/RecipeFullInfo/RecipeFullInfo";
import UserPage from "../pages/UserPage/UserPage";
// import EditRecipe from "../features/Recipe/EditRecipe/EditRecipe";

//* components-UI
import ErrorMessage from "../components/ui/ErrorMessage/ErrorMessage";

//* custom-hooks
import useAuth from "../hooks/useAuth";

// NOTE: This seems to be ok, since it's being called in a top level component that doesn't have its own state
// If it did, you might have an issue with React keeping track of existing state in the hooks here.
function BrowserRouter() {
  const user = useSelector((state) => state.user.user);
  const userSignedIn = useSelector((state) => state.user.userSignedIn);
  const error = useSelector((state) => state.user.error);

  useAuth();

  useEffect(() => {
    localStorage.setItem("userSignedIn", JSON.stringify(userSignedIn));
  }, [userSignedIn]);

  const router = createBrowserRouter([
    {
      path: "/sign-up",
      element:
        !user && !userSignedIn ? <SignUpForm /> : <Navigate replace to="/" />,
    },
    {
      path: "/log-in",
      element:
        !user && !userSignedIn ? <LogInForm /> : <Navigate replace to="/" />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      errorElement: <ErrorMessage message={error} />,
      children: [
        { index: true, element: <HomePage /> },

        { path: "user", element: <UserPage /> },

        { path: "browse", element: <BrowseRecipes /> },
        { path: "browse/:recipeID", element: <RecipeFullInfo /> },

        { path: "recipes", element: <Recipes /> },
        { path: "recipes/new", element: <CreateNewRecipe /> },
        // { path: "recipes/edit/:recipeID", element: <EditRecipe /> },
        { path: "recipes/liked-recipes", element: <LikedRecipes /> },
        {
          path: "recipes/liked-recipes/:recipeID",
          element: <RecipeFullInfo />,
        },
      ],
    },
  ]);

  return router;
}

export default BrowserRouter;
