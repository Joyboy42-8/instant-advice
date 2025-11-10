import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import Error from "./components/Error";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "favorites",
          element: <Favorites />
        }
      ],
    }
  ]);

  return(
    <RouterProvider router={router} />
  );
}