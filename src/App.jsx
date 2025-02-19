import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import List from "./pages/List";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
          path: "/home",
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/article",
          element: <Article />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
