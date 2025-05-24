import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Shared/Home/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/aboutme',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/projects',
                element:<Projects />
            },
        ]
    },
])
export default Route;