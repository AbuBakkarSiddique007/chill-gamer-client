import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const MyReviews = () => {
    const { user } = useContext(AuthContext)
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

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Reviews</h2>

           
            {reviews.length === 0 ? (
                <p className="text-center text-gray-500">You don't have any reviews yet. Start by adding one!</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full border">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Rating</th>
                                <th>Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review._id}>
                                    <td>{review.title}</td>
                                    <td>{review.rating}</td>
                                    <td>{review.year}</td>
                                    <td>
                                        <Link
                                            to={`/updateReview/${review._id}`}
                                            className="btn btn-sm btn-warning mr-2"
                                        >
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(review._id)}
                                            className="btn btn-sm btn-error"
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
    );
};

export default MyReviews;