import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const WatchList = () => {
    const { user } = useContext(AuthContext)
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

    if (loading) return <p className="text-center mt-10">Loading WatchList...</p>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">My Game WatchList</h2>
            {watchList.length === 0 ? (
                <p className="text-center text-gray-500">No games in your WatchList yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {watchList.map(item => (
                        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={item.coverUrl} alt={item.title} className="w-full aspect-[16/9]" />
                            <div className="p-4 space-y-2">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600">Genre: {item.genre}</p>
                                <p className="text-sm text-gray-600">Rating: ⭐ {item.rating}</p>
                                <p className="text-sm text-gray-500">Year: {item.year}</p>
                                <button
                                    onClick={() => deleteWatchListItem(item._id)}
                                    className="text-red-500 mt-2"
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
