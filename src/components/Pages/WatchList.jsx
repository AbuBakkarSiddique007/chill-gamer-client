import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const WatchList = () => {
    const { user } = useContext(AuthContext);
    const [watchList, setWatchList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/watchList?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setWatchList(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch WatchList:", err);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    const deleteWatchListItem = (id) => {
        fetch(`http://localhost:5000/watchList/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(() => {
                setWatchList(prevWatchList => prevWatchList.filter(item => item._id !== id));
                alert("Game removed from WatchList");
            })
            .catch(err => {
                console.error("Error deleting from WatchList:", err);
                alert("Failed to remove the game from WatchList");
            });
    };

    if (loading) return <p className="text-center text-gray-300 mt-10">Loading WatchList...</p>;

    return (
        <div className="p-6 mx-auto bg-slate-800 min-h-screen">
            <h2 className="text-4xl font-bold text-center text-white mb-8">My Game WatchList</h2>

            {watchList.length === 0 ? (
                <p className="text-center text-gray-400">No games in your WatchList yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {watchList.map(item => (
                        <div
                            key={item._id}
                            className="bg-slate-700 text-white rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={item.coverUrl}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-300">🎮 Genre: {item.genre}</p>
                                <p className="text-sm text-gray-300">⭐ Rating: {item.rating}</p>
                                <p className="text-sm text-gray-400">📅 Year: {item.year}</p>
                                <button
                                    onClick={() => deleteWatchListItem(item._id)}
                                    className="mt-3 inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition"
                                >
                                    Remove from WatchList
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchList;
