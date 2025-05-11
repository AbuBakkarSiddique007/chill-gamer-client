import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const ReviewDetails = () => {
    const { user } = useContext(AuthContext)
    const review = useLoaderData();

    const { _id, title, genre, rating, description, year, coverUrl } = review;

    const handleAddToWatchlist = () => {
        if (!user?.email) {
            alert("Please log in first.");
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
            .then(() => {
                alert("Added to Watchlist!");
            })
            .catch(err => {
                console.error("Failed to add to Watchlist:", err);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full aspect-[16/9] bg-black overflow-hidden" src={coverUrl} alt={title} />
                <div className="p-6 space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600"><strong>Genre:</strong> {genre}</p>
                    <p className="text-gray-600"><strong>Rating:</strong> ⭐ {rating}</p>
                    <p className="text-gray-700"><strong>Description:</strong> {description}</p>
                    <p className="text-sm text-gray-500">Released: {year}</p>
                    <div className="pt-2 border-t mt-4">
                        <button
                            onClick={handleAddToWatchlist}
                            className="btn btn-primary mt-4"
                        >
                            Add to WatchList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
