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
        <div className="bg-slate-800  text-white py-20 px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6"> Highest Rated Games</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {topGames.map(game => (
                    <div key={game._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={game.coverUrl} alt={game.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-1">{game.title}</h3>
                            <p className="text-sm text-gray-600">Genre: {game.genre}</p>
                            <p className="text-sm text-gray-600">Rating: ⭐ {game.rating}</p>
                            <Link to={`/review/${game._id}`}>
                                <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
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
