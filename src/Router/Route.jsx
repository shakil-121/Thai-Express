import {
    createBrowserRouter,
  } from "react-router-dom"; 
import Main from "../Layout/Main";
import Blog from "../Shared/Blog";
import Home from "../Pages/Home/Home";
import About from "../Shared/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
           path:'/', 
           element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }, 
        { 
            path:'about', 
            element:<About></About>
        }
      ]
    },
  ]); 

  export default router;