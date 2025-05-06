import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Pages/ErrorPage";
import RootLayout from "../components/RootLayout/RootLayout";

export const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        [{
            path: "/",
            element: <h1>Home</h1>,

        }]
    ]
}])