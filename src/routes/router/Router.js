import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Banner from "../../pages/banner/Banner";
import About from "../../pages/about/About";
import Portfolio from "../../pages/portfolio/Portfolio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Banner /> },
            { path: "about", element: <About /> },
            { path: "portfolio", element: <Portfolio /> },
        ]
    }
])