import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import router from './routes/router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
