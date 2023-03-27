import React from 'react'
import Homepage from "../pages/Homepage.jsx";
import About from '../pages/About.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../layout/Footer.jsx';
import Main from '../layout/Main';
import AppartementPage from '../pages/AppartementPage.jsx';
import ErrorPageNotFound from '../pages/ErrorPageNotFound.jsx';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";


export const HeaderFooterLayout = () => {
   return <>
       <Navbar/>
       <Main>
           <Outlet/>
       </Main>
       <Footer/>
    </>
}

export const router = createBrowserRouter ([
{
  
  element : <HeaderFooterLayout/>,
  errorElement: <ErrorPageNotFound/>,
     children : [{
        path: "/",
        element : <Homepage/>,
        
     },
      {
        path:"/flat",
        element :<AppartementPage/>
      },

      {
        path:"/about",
        element :<About/>
      }
    ]
}
  
]);

export default router;
