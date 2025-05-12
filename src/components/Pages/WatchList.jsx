import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
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
        Swal.fire({
            title: "Are you sure?",
            text: "This game will be removed from your WatchList.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/watchList/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(() => {
                        setWatchList(prevWatchList => prevWatchList.filter(item => item._id !== id));
                        Swal.fire(
                            "Removed!",
                            "The game has been removed from your WatchList.",
                            "success"
                        );
                    })
                    .catch(err => {
                        console.error("Error deleting from WatchList:", err);
                        Swal.fire("Error!", "Failed to remove the game.", "error");
                    });
            }
        });
    };

    if (loading) return <p className="text-center text-gray-300 mt-10">Loading WatchList...</p>;

    return (
        <div className="p-6 mx-auto bg-slate-800 min-h-screen">
            <h2 className="text-4xl font-bold text-center text-white mb-8">My Game WatchList</h2>

            {watchList.length === 0 ? (
                <p className="text-center text-gray-400">No games in your WatchList yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-slate-700 rounded-xl overflow-hidden shadow-md">
                        <thead className="bg-slate-600 text-white text-left">
                            <tr>
                                <th className="px-4 py-3">Cover</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Genre</th>
                                <th className="px-4 py-3">Rating</th>
                                <th className="px-4 py-3">Year</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchList.map(item => (
                                <tr key={item._id} className="border-t border-slate-600 hover:bg-slate-600 transition">
                                    <td className="px-4 py-3">
                                        <img
                                            src={item.coverUrl}
                                            alt={item.title}
                                            className="w-20 h-12 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-3 text-white">{item.title}</td>
                                    <td className="px-4 py-3 text-gray-300">{item.genre}</td>
                                    <td className="px-4 py-3 text-gray-300">{item.rating}</td>
                                    <td className="px-4 py-3 text-gray-300">{item.year}</td>
                                    <td className="px-4 py-3 text-gray-300">{item.userEmail}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => deleteWatchListItem(item._id)}
                                            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default WatchList;
