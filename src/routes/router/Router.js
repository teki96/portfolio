import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Banner from "../../pages/banner/Banner";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Banner /> },
        ]
    }
])