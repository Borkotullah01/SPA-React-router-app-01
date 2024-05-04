import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Errorpage from './Components/Errorpage.jsx';
import Hero from './Components/Hero.jsx';
import Contacts from './Components/Contacts.jsx';
import About from './Components/About.jsx';
import Users from './Components/Users.jsx';
import UserDetails from './Components/UserDetails.jsx';
import Posts from './Components/Posts.jsx';
import PostDetails from './Components/PostDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      },
      {
        path: "/users",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: "/users/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>
      },
      {
        path: "/posts/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>
      },
      {
        path: "/about",
        element: <About></About>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
