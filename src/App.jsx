//* react-router
import { RouterProvider } from "react-router-dom";

//* router
import BrowserRouter from "./routes/BrowserRouter";

function App() {
  return <RouterProvider router={BrowserRouter()} />;
}

export default App;

//TODO [✔] -> Make the cards gap more so that the cards flipping animation is better.
//TODO [✔] -> Organize the image folder into sub-folders with each picture to its category.
//TODO [] -> Switch Browse-related logic such as the fetching recipes from the API from the RecipeSlice to the BrowseSlice.
//TODO [] -> Check if you can place the 'const router = createBrowserRouter([])' and all the Routing code in another external file and export it here.
//TODO [✔] -> Fix the CreateNewRecipe's CSS.
//TODO [] -> Create the Dark-mode for the app.
//TODO [] -> Organize the CSS variables file, and throw out all the un-needed code.
//TODO [] -> See if you need to create any more Util functions in your app.
//TODO [] -> See if you need to create any more Custom-hooks in your app.
//TODO [] -> Check if there is a way to condense farther your code in the RecipeFullInfoTag component: 1) If to create additional Re-usable components. 2) If to condense the logic code.
//TODO [] -> Decide whether you want to place the SignIn and SignUp components in the Layout so that it has the Navbar as well (just with different NavLinks). or not with the Navbar but just a header of the site.
//TODO [✔] -> Fix the createIngredients component's styling.
//TODO [] -> Check the createIngredients component's logic if needed to condense.
//TODO [✔] -> Check if there is a need for a Context instead of Redux store.
//TODO [✔] -> Fix Signup and Signin input space CSS.
//TODO [] -> Get Styling ideas for each page from other websites.
//TODO [✔] -> Change the HistoryBrowseTag under the Search input to only show when you clicked on the search input.
//TODO [✔] -> Check if you even need this <BackButton /> component.
//TODO [] -> Find out if the <BackButton /> should be in the <AppLayout /> component, or should it just be placed in each component individually?
//TODO [] -> Find out if the conditional rendering of the <BackButton /> should be in the <AppLayout /> component or in the return statement of the <BackButton /> component.
//TODO [] -> Add a movable image to the CreateRecipe component.
//TODO [✔] -> Try and place the pending/fulfilled/rejected code into a reusable helper function or custom hook and use it in all the Redux stores.
//TODO [] -> Fix picture-not-showing on card in the likedRecipes component.
//TODO [] -> Make the site CSS responsive to all sizes.
//TODO [] -> Check the re-rendering of all components via the react dev tools console, id anything is running slow.
//TODO [] -> Check for any uneseccary state vars, if some can be a derived state or a useRef hook instead.
//TODO [] -> Figure out a way to make a re-usable component for the signing in and signing up components and just add the uneseccary logic to the SignUp component.
//TODO [] -> Check if there are any unneeded div or any other HTML element that can be replaced with a react Fragment (and ones that need a key prop just use the <Fragment key={} /> instead of <></>).
//TODO [✔] -> Decide weather you should create a separate Route to a user info page where there you can delete the account.
//TODO [] -> Place ALL data-logic to be handled in the slices instead of inside the component.
//TODO [✔] -> FIX the user auth issue.
//TODO [✔] -> Add a sort-by button that will sort out your liked recipes from your created ones in the
//TODO [] -> Fix long email name on the UserTag.
//TODO [] -> Switch all conditionals that check -> if (an object exists || if any of their children exist) instead of using the 'or'/'||' operator just use the newer JS syntax : if (objectExists?.AlsoDoesThePropertyInsideIt) {...}.
//TODO [] -> If you have time, implement a userName instead of the user email showing up on the UserTag.
//TODO [] -> Add a Edit button for the RecipeCard component.
//TODO [✔] -> Make functionality for all the amounts (creating, deleting, liked), with firebase.
//TODO [] -> Use svh is like the vh CSS property for mobile screens.
//TODO [] -> Try to resize the picture you receive from Firebase so that it isn't so big and thus will take longer to load when loading each time into the app.
//TODO [] -> Make the RecipeHaven app responsive.
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->

//?===============
//? CODE REFACTORING:

//TODO [] -> Component's name should be clear and on point.
//TODO [] -> Use as many custom-hooks as possible (to make the code more readable).
//TODO [✔] -> Use rhe rest operator instead of manually destructuring the values.
//TODO [] -> Make sue all useEffect hooks do one "job".
//TODO [] -> Check for state that you don't need to keep re-rendering and switch it off to a useRef hook instead.
//TODO [✔] -> Refactor the <HomePage/> components into sub-components, and if possible re-usable components.
//TODO [✔] -> Refactor the Async thunks in the recipe slice, and make it into a re-usable function.
//TODO [] -> Use the has() CSS property to style any parent based on its child.
//TODO [] -> Nest all children CSS into their parents.
//TODO [] -> Rename CSS class names for better understanding.
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->
//TODO [] ->

//? QUESTIONS:

//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
//? -> [Topic: ], Q:
