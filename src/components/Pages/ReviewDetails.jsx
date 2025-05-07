import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
    const review = useLoaderData();
    console.log(review);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full aspect-[16/9] bg-black overflow-hidden" src={review.coverUrl} alt={review.title} />
                <div className="p-6 space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">{review.title}</h2>
                    <p className="text-gray-600"><strong>Genre:</strong> {review.genre}</p>
                    <p className="text-gray-600"><strong>Rating:</strong> ⭐ {review.rating}</p>
                    <p className="text-gray-700"><strong>Description:</strong> {review.description}</p>
                    <p className="text-sm text-gray-500">Released: {review.year}</p>
                    <div className="pt-2 border-t mt-4">
                        <p className="text-sm text-gray-500">Reviewed by: <span className="font-medium">{review.userName}</span></p>
                        <p className="text-sm text-gray-500">{review.userEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
