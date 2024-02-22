import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
