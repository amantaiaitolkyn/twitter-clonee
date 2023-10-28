import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post";
import Profile from "./components/profile";
import AddPost from "./components/addPost";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "home",
                element: <Home/>,
            },
            {
                path: "posts",
                element: <Post/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "addPost",
                element: <AddPost/>,
            }

        ]
    }

])
root.render(
    <RouterProvider router = {router} />

);