import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Entrance from './pages/Entrance.jsx';
import MainPage from './pages/MainPage.jsx';
import Helper from './pages/Helper.jsx';
import AskAI from './pages/AskAI.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Entrance />,
      },
      {
        path: '/mainpage',
        element: <MainPage />,
      },
      {
        path: '/<Helper></Helper>',
        element: <<Helper></Helper> />,
      },
      {
        path: '/AskAI',
        element: <AskAI />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
