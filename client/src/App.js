import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import ViewTask from "./pages/ViewTask";
import UpdateTask from "./pages/UpdateTask";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <AddTask /> },
        { path: "/view", element: <ViewTask /> },
        { path: "/task/:id", element: <UpdateTask /> },
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
