import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRatedGames = () => {
    const [topGames, setTopGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/top-rated")
            .then(res => res.json())
            .then(data => setTopGames(data));
    }, []);

    return (
        <div className="bg-slate-800 text-white py-20 px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-10">
                Highest Rated Games
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {topGames.map(game => (
                    <div
                        key={game._id}
                        className="bg-slate-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105"
                    >
                        <img
                            src={game.coverUrl}
                            alt={game.title}
                            className="w-full h-48 object-contain rounded-t-lg"
                        />
                        <div className="p-6 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold text-gray-100 mb-2">{game.title}</h3>
                            <p className="text-sm text-gray-300 mb-2">Genre: {game.genre}</p>
                            <p className="text-sm text-gray-300 mb-4">Rating: ⭐ {game.rating}</p>
                            <Link to={`/review/${game._id}`}>
                                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                    Explore Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedGames;
