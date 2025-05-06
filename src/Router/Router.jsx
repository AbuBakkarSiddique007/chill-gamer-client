import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([{
    path: "/",
    element: <h1>Hello World!</h1>,
    errorElement: <h1>404 : Not founded!</h1>,
    children: [
        [{
            path: "/",
            element: <h1>Children One </h1>,

        }]
    ]
}])