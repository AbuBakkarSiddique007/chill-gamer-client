import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData);

    return (
        <div className="mx-auto bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">All Reviews</h2>
            <p className="text-center mb-6">Explore the reviews of your favorite games and share your thoughts with the community.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((review) => (
                    <ReviewCard
                        key={review._id}
                        review={review}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllReviews;
