import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import AC from "../Components/AllComponets/AC";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Experience from "../Components/Experience/Experience";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";
import Coder from "../Components/ProjectDetails/Coder";
import Luxury from "../Components/ProjectDetails/Luxury";
import Pixel from "../Components/ProjectDetails/Pixel";
import Services from "../Components/Services/Services";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        children: [
            {
                path:'/',
                element: <AC/>,                
            },
            {
                path:'/luxury-wheel',
                element: <Luxury/>
            },
            {
                path:'/pixel-click',
                element: <Pixel/>
            },
            {
                path:'/coder-brain',
                element: <Coder/>
            },
        ]
    }
])
