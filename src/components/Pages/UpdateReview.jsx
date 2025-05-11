import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
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

        fetch(`http://localhost:5000/review/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Review updated successfully!");
                    navigate("/my-review");
                }
            });
    };

    if (!review) return <p className="text-center text-white py-20">Loading review...</p>;

    return (
        <div className="mx-auto bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-8  shadow-2xl">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Update Your Game Review</h2>
                <form onSubmit={handleUpdate} className="space-y-5">
                    <div>
                        <label className="block font-medium mb-1">Game Cover Image URL</label>
                        <input
                            type="url"
                            name="coverUrl"
                            defaultValue={review.coverUrl}
                            className="input input-bordered w-full bg-[#0f172a] text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Game Title / Name</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={review.title}
                            className="input input-bordered w-full bg-[#0f172a] text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Review Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            defaultValue={review.description}
                            className="textarea textarea-bordered w-full bg-[#0f172a] text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Rating (1-10)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="10"
                            defaultValue={review.rating}
                            className="input input-bordered w-full bg-[#0f172a] text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Publishing Year</label>
                        <input
                            type="number"
                            name="year"
                            min="1980"
                            max="2099"
                            defaultValue={review.year}
                            className="input input-bordered w-full bg-[#0f172a] text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Genre</label>
                        <select
                            name="genre"
                            defaultValue={review.genre}
                            className="select select-bordered w-full bg-[#0f172a] text-white"
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
                            <label className="block font-medium mb-1">User Name</label>
                            <input
                                type="text"
                                value={review.userName}
                                readOnly
                                className="input input-bordered w-full bg-gray-800 text-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">User Email</label>
                            <input
                                type="email"
                                value={review.userEmail}
                                readOnly
                                className="input input-bordered w-full bg-gray-800 text-gray-300"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white font-semibold"
                    >
                        Update Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;
