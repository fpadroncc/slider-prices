import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home";
import Exercise1 from "./views/Exercise1";
import Exercise2 from "./views/Exercise2";

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "exercise1", element: <Exercise1 /> },
  { path: "exercise2", element: <Exercise2 /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
