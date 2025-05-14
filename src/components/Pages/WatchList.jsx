import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const WatchList = () => {
    const { user } = useContext(AuthContext);
    const [watchList, setWatchList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://chill-gamer-server-rosy.vercel.app/watchList?email=${user.email}`)
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
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-rosy.vercel.app/watchList/${id}`, {
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

    if (loading) return <p className="text-center mt-10">Loading WatchList...</p>;

    return (
        <div className="p-6 mx-auto min-h-screen bg-base-200">
            <h2 className="text-4xl font-bold text-center mb-8 text-base-content">My Game WatchList</h2>

            {watchList.length === 0 ? (
                <p className="text-center text-base-content/70">No games in your WatchList yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto rounded-xl overflow-hidden shadow-md bg-base-100">
                        <thead className="bg-primary text-primary-content text-left">
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
                                <tr key={item._id} className="border-t border-base-200 hover:bg-base-200 transition">
                                    <td className="px-4 py-3">
                                        <img
                                            src={item.coverUrl}
                                            alt={item.title}
                                            className="w-20 h-12 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-3 text-base-content">{item.title}</td>
                                    <td className="px-4 py-3 text-base-content/80">{item.genre}</td>
                                    <td className="px-4 py-3 text-base-content/80">{item.rating}</td>
                                    <td className="px-4 py-3 text-base-content/80">{item.year}</td>
                                    <td className="px-4 py-3 text-base-content/80">{item.userEmail}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => deleteWatchListItem(item._id)}
                                            className="btn btn-error btn-sm"
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