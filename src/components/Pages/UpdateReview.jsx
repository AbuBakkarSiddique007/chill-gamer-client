import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch(`https://chill-gamer-server-rosy.vercel.app/review/${id}`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedReview = {
            coverUrl: form.coverUrl.value,
            title: form.title.value,
            description: form.description.value,
            rating: form.rating.value,
            year: form.year.value,
            genre: form.genre.value,
        };

        fetch(`https://chill-gamer-server-rosy.vercel.app/review/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Review updated successfully!",
                        icon: "success",
                        confirmButtonText: "OK"
                    }).then(() => {
                        navigate("/my-review");
                    });
                }
            });
    };

    if (!review) return <p className="text-center py-20">Loading review...</p>;

    return (
        <div className="mx-auto p-8 bg-base-200">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl bg-base-100">
                <h2 className="text-3xl font-bold mb-6 text-center text-base-content">Update Your Game Review</h2>
                <form onSubmit={handleUpdate} className="space-y-5">
                    <div>
                        <label className="block font-medium mb-1 text-base-content">Game Cover Image URL</label>
                        <input
                            type="url"
                            name="coverUrl"
                            defaultValue={review.coverUrl}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-base-content">Game Title / Name</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={review.title}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-base-content">Review Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            defaultValue={review.description}
                            className="textarea textarea-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-base-content">Rating (1-10)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="10"
                            defaultValue={review.rating}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-base-content">Publishing Year</label>
                        <input
                            type="number"
                            name="year"
                            min="1980"
                            max="2099"
                            defaultValue={review.year}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-base-content">Genre</label>
                        <select
                            name="genre"
                            defaultValue={review.genre}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Shooter">Shooter</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1 text-base-content">User Name</label>
                            <input
                                type="text"
                                value={review.userName}
                                readOnly
                                className="input input-bordered w-full bg-base-200"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1 text-base-content">User Email</label>
                            <input
                                type="email"
                                value={review.userEmail}
                                readOnly
                                className="input input-bordered w-full bg-base-200"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 btn btn-primary"
                    >
                        Update Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;