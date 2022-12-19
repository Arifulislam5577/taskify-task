import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import ViewTask from "./pages/ViewTask";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <AddTask /> },
        { path: "/view", element: <ViewTask /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
