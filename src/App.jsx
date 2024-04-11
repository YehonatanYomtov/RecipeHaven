//* react-router
import { RouterProvider } from "react-router-dom";

//* router
import BrowserRouter from "./routes/BrowserRouter";

function App() {
  return <RouterProvider router={BrowserRouter()} />;
}

export default App;
