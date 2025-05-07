import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const loadedData = useLoaderData()
    const [data, setData] = useState(loadedData)
    console.log(loadedData);

    return (
        <div className='max-w-11/12 mx-auto mb-10'>
            <h1>
                All Reviews Page content comes here : ${loadedData.length}
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map((review) => <ReviewCard
                        review={review}
                        key={review._id}
                    >
                    </ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;