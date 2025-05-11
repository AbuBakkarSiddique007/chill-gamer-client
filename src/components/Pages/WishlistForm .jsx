import React, { useState } from "react";

const WishlistForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        year: "",
        userEmail: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:5000/wishlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        alert("Game suggestion submitted!");
        setFormData({ title: "", genre: "", year: "", userEmail: "" });
    };

    return (
        <section className="bg-slate-800 text-white py-24 px-6 text-center">
            <div className="max-w-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Suggest a Game to Review
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="title"
                        type="text"
                        placeholder="Game Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                    <input
                        name="genre"
                        type="text"
                        placeholder="Genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                    />
                    <input
                        name="year"
                        type="text"
                        placeholder="Expected Release Year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                    />
                    <input
                        name="userEmail"
                        type="email"
                        placeholder="Your Email (optional)"
                        value={formData.userEmail}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white w-full p-2 rounded-lg hover:bg-blue-700"
                    >
                        Submit Suggestion
                    </button>
                </form>
            </div>
        </section>
    );
};

export default WishlistForm;
