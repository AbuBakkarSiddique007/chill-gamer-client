import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Pages/ErrorPage";
import RootLayout from "../components/RootLayout/RootLayout";
import AddReview from "../components/Pages/AddReview";
import AllReviews from "../components/Pages/AllReviews";
import MyReview from "../components/Pages/MyReview";
import GameWatchList from "../components/Pages/GameWatchList";
import H from "../components/Home/Home";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-review",
                element: <AddReview />,
            },
            {
                path: "/all-reviews",
                element: <AllReviews></AllReviews>,
            },
            {
                path: "/my-review",
                element: <MyReview></MyReview>,
            },
            {
                path: "/game-watchList",
                element: <GameWatchList></GameWatchList>,
            }
        ],
    }
]);
