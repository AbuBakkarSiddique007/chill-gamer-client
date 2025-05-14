import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const TopRatedGames = () => {
    const [topGames, setTopGames] = useState([]);

    useEffect(() => {
        fetch("https://chill-gamer-server-rosy.vercel.app/top-rated")
            .then(res => res.json())
            .then(data => setTopGames(data));
    }, []);

    return (
        <div className="bg-base-200 px-4 mx-auto py-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
                <Zoom triggerOnce>Highest Rated Games</Zoom>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {topGames.map(game => (
                    <Fade key={game._id} cascade damping={0.2} triggerOnce>
                        <div
                            className="bg-base-100 rounded-2xl shadow-xl p-6 flex flex-col justify-between items-center 
                                       hover:scale-105 transition-all duration-300 ease-in-out
                                       border-4 border-transparent hover:border-primary/30 
                                       relative before:absolute before:inset-0 before:border-2 before:border-primary/10 
                                       before:rounded-xl before:pointer-events-none
                                       h-[420px]"
                        >
                            <img
                                src={game.coverUrl}
                                alt={game.title}
                                className="rounded-lg w-full object-contain mb-6 max-h-48 bg-base-300 p-2"
                            />
                            <div className="text-center flex-grow flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-base-content mb-1">{game.title}</h3>
                                <p className="text-sm text-base-content/70 mb-1">Genre: {game.genre}</p>
                                <p className="text-sm text-base-content/70 mb-4">Rating: ⭐ {game.rating}</p>
                            </div>
                            <Link to={`/review/${game._id}`}>
                                <button className="px-5 py-2 text-sm bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition duration-300 border-2 border-primary/70">
                                    Explore Details
                                </button>
                            </Link>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default TopRatedGames;
