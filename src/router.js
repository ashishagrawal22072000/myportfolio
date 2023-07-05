import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './page/home/home';
import About from './page/about/about';
import Service from './page/service/service';
import Portfolio from './page/portfolio/portfolio';
import Contact from './page/contact/contact';
import ERROR_404 from './page/404/404';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Detail from './page/portfoliodetail/detail';



export default function Router() {
    // const routers  = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Home /> 
    //     },
    //     {
    //         path: '/about',
    //         element: <About /> 
    //     },
        
    //     {
    //         path: '/services',
    //         element: <Service /> 
    //     },
    //     {
    //         path: '/portfolio',
    //         element: <Portfolio /> 
    //     },
    //     {
    //         path: '/contact',
    //         element: <Contact /> 
    //     },
    //     {
    //         path: '*',
    //         element: <ERROR_404 /> 
    //     }
    // ]);

  return (
    
    <>
    
    <Routes>
        <Route path="/myportfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/portfolio/:id" element={<Detail />}></Route>

    </Routes>
    </>
  )
}
