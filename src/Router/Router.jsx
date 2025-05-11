import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Pages/ErrorPage";
import RootLayout from "../components/RootLayout/RootLayout";
import AddReview from "../components/Pages/AddReview";
import AllReviews from "../components/Pages/AllReviews";
import Home from "../components/Home/Home";
import ReviewDetails from "../components/Pages/ReviewDetails";
import Register from "../components/Authentication/Register/Register";
import Login from "../components/Authentication/Login/Login";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import MyReviews from "../components/Pages/MyReviews";
import UpdateReview from "../components/Pages/UpdateReview";
import WatchList from "../components/Pages/WatchList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-review",
                element: (
                    <PrivateRoute>
                        <AddReview></AddReview>
                    </PrivateRoute>
                ),
            },
            {
                path: "/all-reviews",
                element: <AllReviews></AllReviews>,
                loader: () => fetch("http://localhost:5000/reviews")
            },
            {
                path: "/my-review",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
            },

            {
                path: "/updateReview/:id",
                element: (
                    <PrivateRoute>
                        <UpdateReview></UpdateReview>
                    </PrivateRoute>
                ),
            },


            {
                path: "/myWatchList",
                element: (
                    <PrivateRoute>
                        <WatchList></WatchList>
                    </PrivateRoute>
                )
            },


            {
                path: "review/:id",
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
                    .then(res => res.json())
                    .catch(error => {
                        console.error('Error fetching review:', error);
                        return null;
                    })
            },


            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ],
    }
]);
