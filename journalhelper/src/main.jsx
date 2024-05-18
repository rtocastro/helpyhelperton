import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Entrance from './pages/Entrance.jsx';
import MainPage from './pages/MainPage.jsx';
import CalFresh from './pages/CalFresh.jsx';
import CalWorks from './pages/CalWorks.jsx';
import GeneralRelief from './pages/GeneralRelief.jsx';
import Medical from './pages/Medical.jsx';

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
        path: '/helper',
        element: <helper />,
      },
      {
        path: '/CalWorks',
        element: <CalWorks />,
      },
      {
        path: '/GeneralRelief',
        element: <GeneralRelief />,
      },
      {
        path: '/Medical',
        element: <Medical />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
