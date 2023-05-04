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
import Error from "../Error/Error";
import Private from "../Private/Praivate";
import Profile from "../Pages/Log/Profile";

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
            element:<Private><Blog></Blog></Private>
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
      }, 
      {
        path:'/profile', 
        element:<Profile></Profile>
      }
     ]

    },
    {
        path:'/', 
        element:<RecipeLayout></RecipeLayout>, 
        children:[
            {
                path:'chef/:id', 
                element:<Private><Recipe></Recipe></Private>
            }
        ]
    }, 
    {
      path:'*',
      element:<Error></Error>
    }
  ]); 

  export default router;