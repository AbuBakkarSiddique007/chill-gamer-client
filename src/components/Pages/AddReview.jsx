import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);  


    useEffect(() => {
        if (user) {
            setLoading(false);  
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const coverUrl = form.coverUrl.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        if (!user) {
            setError("Please login to submit a review");
            return;
        }

        const review = {
            coverUrl,
            title,
            description,
            rating,
            year,
            genre,
            userName,
            userEmail
        };

        console.log(review);

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };


    if (loading) {
        return <p>Loading user data...</p>;
    }

    console.log(user);


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add New Game Review</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block font-medium">Game Cover Image URL</label>
                    <input type="url" name="coverUrl" className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Game Title / Name</label>
                    <input type="text" name="title" className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Review Description</label>
                    <textarea name="description" rows="4" className="textarea textarea-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Rating (1-10)</label>
                    <input type="number" name="rating" min="1" max="10" className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Publishing Year</label>
                    <input type="number" name="year" min="1980" max="2099" className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium">Genre</label>
                    <select name="genre" className="select select-bordered w-full" required>
                        <option value="">Select Genre</option>
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
                        <label className="block font-medium">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            className="input input-bordered w-full"
                            defaultValue={user?.displayName || ''} 
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block font-medium">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            className="input input-bordered w-full"
                            defaultValue={user?.email || ''}
                            disabled
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary w-full">Submit Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;
