import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();

    const { title, genre, rating, description, year, coverUrl, userName, userEmail } = review;

    console.log(review);

    const handleAddToWatchlist = () => {
        if (!user?.email) {
            Swal.fire("Login Required", "Please log in first.", "warning");
            return;
        }

        const newWatchListItem = {
            title,
            genre,
            rating,
            description,
            year,
            coverUrl,
            userEmail: user.email,
        };

        fetch("http://localhost:5000/watchList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWatchListItem),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire("Success", data.message, "success");
                } else {
                    Swal.fire("Info", data.message, "info");
                }
            })
            .catch(err => {
                console.error("Failed to add to WatchList:", err);
                Swal.fire("Error", "Something went wrong!", "error");
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-800 px-4 py-8">
            <div className="max-w-5xl w-full bg-slate-700 text-white shadow-2xl rounded-xl overflow-hidden md:flex">

                <div className="md:w-1/2">
                    <img
                        src={coverUrl}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>


                <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-gray-300"><span className="font-semibold">🎮 Genre:</span> {genre}</p>
                    <p className="text-gray-300"><span className="font-semibold">⭐ Rating:</span> {rating}</p>
                    <p className="text-gray-200"><span className="font-semibold">📝 Description:</span> {description}</p>
                    <p className="text-sm text-gray-400">📅 Released: {year}</p>
                    <p className="text-sm text-gray-400">👤 Reviewer: {userName || "Anonymous"}</p>
                    <p className="text-sm text-gray-400">📧 Email: {userEmail || "N/A"}</p>

                    <button
                        onClick={handleAddToWatchlist}
                        className="mt-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md font-medium w-fit"
                    >
                        Add to WatchList
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
