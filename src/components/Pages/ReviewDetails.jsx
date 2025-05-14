import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();

    const { title, genre, rating, description, year, coverUrl, userName, userEmail } = review;

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

        fetch("https://chill-gamer-server-rosy.vercel.app/watchList", {
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
        <div className="flex justify-center items-center min-h-screen px-4 py-8 bg-base-200">
            <div className="max-w-5xl w-full bg-base-100 shadow-2xl rounded-xl overflow-hidden md:flex border border-base-content/20">

                <div className="md:w-1/2 bg-base-300">
                    <img
                        src={coverUrl}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold text-base-content">{title}</h2>
                    <p className="text-base-content/80"><span className="font-semibold">🎮 Genre:</span> {genre}</p>
                    <p className="text-base-content/80"><span className="font-semibold">⭐ Rating:</span> {rating}</p>
                    <p className="text-base-content"><span className="font-semibold">📝 Description:</span> {description}</p>
                    <p className="text-sm text-base-content/70">📅 Released: {year}</p>
                    <p className="text-sm text-base-content/70">👤 Reviewer: {userName || "Anonymous"}</p>
                    <p className="text-sm text-base-content/70">📧 Email: {userEmail || "N/A"}</p>

                    <button
                        onClick={handleAddToWatchlist}
                        className="mt-2 btn btn-primary w-fit"
                    >
                        Add to WatchList
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;