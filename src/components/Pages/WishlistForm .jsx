import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Swal from 'sweetalert2';

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.title && formData.genre && formData.year) {
            Swal.fire({
                title: 'Success!',
                text: 'Thanks for your game suggestion! (This is a demo)',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            setFormData({ title: "", genre: "", year: "", userEmail: "" });
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Please fill in all required fields',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <section className="bg-base-200 py-24 px-6">
            <div className="max-w-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6 text-base-content">
                    <Typewriter
                        words={['Suggest a Game to Review']}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        name="title"
                        type="text"
                        placeholder="Game Title *"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full input input-bordered focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input
                        name="genre"
                        type="text"
                        placeholder="Genre *"
                        value={formData.genre}
                        onChange={handleChange}
                        className="w-full input input-bordered focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input
                        name="year"
                        type="text"
                        placeholder="Expected Release Year *"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full input input-bordered focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input
                        name="userEmail"
                        type="email"
                        placeholder="Your Email "
                        value={formData.userEmail}
                        onChange={handleChange}
                        className="w-full input input-bordered focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        className="w-full btn btn-primary"
                    >
                        Submit Suggestion
                    </button>
                </form>
            </div>
        </section>
    );
};

export default WishlistForm;