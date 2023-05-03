import {
    createBrowserRouter,
  } from "react-router-dom"; 
import Main from "../Layout/Main";
import Blog from "../Shared/Blog";
import Home from "../Pages/Home/Home";
import About from "../Shared/About";
import RecipeLayout from "../Layout/RecipeLayout";
import Recipe from "../Pages/Recipe/Recipe";
import LogLayout from "../Layout/LogLayout";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";
import TramsCondition from "../Pages/Log/TramsCondition";

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
    {
     path:'', 
     element:<LogLayout></LogLayout>,
     children:[
      {
        path:'login', 
        element:<Login></Login>
      },
      {
        path:'/registration', 
        element:<Register></Register>
      }, 
      {
        path:'trams',
        element:<TramsCondition></TramsCondition>
      }
     ]

    },
    {
        path:'/', 
        element:<RecipeLayout></RecipeLayout>, 
        children:[
            {
                path:'chef/:id', 
                element:<Recipe></Recipe>,
                loader:({params})=>fetch(`https://thai-express-server-shakil-121.vercel.app/chef/${params.id}`)
            }
        ]
    }
  ]); 

  export default router;