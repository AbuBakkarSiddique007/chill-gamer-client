import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/my-review?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setReviews(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching reviews:", err);
                    setLoading(false);
                });
        }
    }, [user.email]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this review?");
        if (confirm) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setReviews(reviews.filter(review => review._id !== id));
                        alert("Review deleted successfully");
                    }
                });
        }
    };

    if (loading) return <p className="text-center text-white mt-8">Loading...</p>;

    return (
        <div className="min-h-screen bg-slate-900 py-12 px-4">
            <div className="max-w-5xl mx-auto bg-slate-800 p-8 rounded-xl shadow-lg text-white">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">My Game Reviews</h1>

                {reviews.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">
                        You don't have any reviews yet. <br />
                        <Link to="/add-review" className="text-blue-400 hover:underline">Add one now!</Link>
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full text-white border border-slate-700">
                            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Rating</th>
                                    <th className="py-3 px-4 text-left">Year</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review) => (
                                    <tr key={review._id} className="hover:bg-slate-700 transition duration-200">
                                        <td className="py-3 px-4">{review.title}</td>
                                        <td className="py-3 px-4">{review.rating}</td>
                                        <td className="py-3 px-4">{review.year}</td>
                                        <td className="py-3 px-4">
                                            <Link
                                                to={`/updateReview/${review._id}`}
                                                className="btn btn-sm bg-yellow-400 text-black hover:bg-yellow-300 mr-2"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyReviews;
