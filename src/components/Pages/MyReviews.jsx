import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Swal from 'sweetalert2';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user.email) {
            fetch(`https://chill-gamer-server-rosy.vercel.app/my-review?email=${user.email}`)
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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-rosy.vercel.app/review/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setReviews(reviews.filter(review => review._id !== id));

                            Swal.fire({
                                icon: 'success',
                                title: 'Deleted!',
                                text: 'Your review has been deleted.',
                                confirmButtonColor: '#3b82f6'
                            });
                        }
                    });
            }
        });
    };


    if (loading) return <p className="text-center mt-8">Loading...</p>;

    return (
        <div className="min-h-screen py-12 px-4 bg-base-200">
            <div className="max-w-5xl mx-auto p-8 rounded-xl shadow-lg bg-base-100">
                <h1 className="text-4xl font-bold text-center mb-8 text-primary">My Game Reviews</h1>

                {reviews.length === 0 ? (
                    <p className="text-center text-base-content/70 text-lg">
                        You don't have any reviews yet. <br />
                        <Link to="/add-review" className="text-primary hover:underline">Add one now!</Link>
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full border border-base-200">
                            <thead className="bg-primary text-primary-content">
                                <tr>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Rating</th>
                                    <th className="py-3 px-4 text-left">Year</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review) => (
                                    <tr key={review._id} className="hover:bg-base-200 transition duration-200">
                                        <td className="py-3 px-4 text-base-content">{review.title}</td>
                                        <td className="py-3 px-4 text-base-content">{review.rating}</td>
                                        <td className="py-3 px-4 text-base-content">{review.year}</td>
                                        <td className="py-3 px-4">
                                            <Link
                                                to={`/updateReview/${review._id}`}
                                                className="btn btn-sm btn-warning mr-2"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="btn btn-sm btn-error text-white"
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