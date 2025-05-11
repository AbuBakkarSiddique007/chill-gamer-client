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


    if (!review) return <p className="text-center">Loading review...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Update Review</h2>
            <form onSubmit={handleUpdate} className="space-y-4">

                <div>
                    <label className="block font-medium">Game Cover Image URL</label>
                    <input type="url" name="coverUrl" defaultValue={review.coverUrl} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Game Title / Name</label>
                    <input type="text" name="title" defaultValue={review.title} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Review Description</label>
                    <textarea name="description" rows="4" defaultValue={review.description} className="textarea textarea-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Rating (1-10)</label>
                    <input type="number" name="rating" min="1" max="10" defaultValue={review.rating} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Publishing Year</label>
                    <input type="number" name="year" min="1980" max="2099" defaultValue={review.year} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Genre</label>
                    <select name="genre" defaultValue={review.genre} className="select select-bordered w-full" required>
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Simulation">Simulation</option>
                        <option value="Shooter">Shooter</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">User Name</label>
                        <input type="text" value={review.userName} readOnly className="input input-bordered w-full bg-gray-100" />
                    </div>
                    <div>
                        <label className="block font-medium">User Email</label>
                        <input type="email" value={review.userEmail} readOnly className="input input-bordered w-full bg-gray-100" />
                    </div>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary w-full">Update Review</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;
