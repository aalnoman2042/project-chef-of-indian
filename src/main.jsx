import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";

import Login from "./components/login/login.jsx";
import Home from "./components/home/Home.jsx";
import Signup from "./components/signup/Signup.jsx";
import AuthProvider from "../provider/AuthProvider.jsx";
import Blog from "./components/blog/Blog.jsx";
import NotFound from "./components/errorPage/NotFound.jsx";
import Chefs from "./components/chefs/Chefs.jsx";
import Recipe from "./components/recipe/recipe.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chefdetails",
        element: <Chefs></Chefs>,
  
      },
      {
        path: "chefdetails/:id",
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-chef-of-indian-aalnoman2042.vercel.app/chefdetails/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Signup></Signup>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
