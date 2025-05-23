import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData);
    const [originalData, setOriginalData] = useState(loadedData);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const genres = ['Action', 'RPG', 'Adventure', 'Strategy', 'Simulation', 'Shooter'];

    const handleSort = (type) => {
        const sorted = [...data].sort((a, b) => a[type] - b[type]);
        setData(sorted);
        setDropdownOpen(false);
    };

    const handleFilter = (genre) => {
        if (genre === 'All') {
            setData(originalData);
        } else {
            const filtered = originalData.filter((item) => item.genre === genre);
            setData(filtered);
        }
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('#dropdownMenu')) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen bg-base-200 p-8">
            <div className="relative mb-10 flex justify-center">
                <div className="dropdown">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="btn bg-base-300 hover:bg-base-300/90 border border-base-content/20 text-base-content"
                    >
                        Sort / Filter
                    </button>

                    {dropdownOpen && (
                        <div id="dropdownMenu" className="absolute top-12 z-50 bg-base-300 p-4 border border-base-content/20 rounded-lg w-52 shadow-xl">
                            <div>
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'sort' ? null : 'sort')}
                                    className="w-full text-left px-3 py-1 rounded hover:bg-base-200 text-primary"
                                >
                                    Sort By
                                </button>
                                {activeSubmenu === 'sort' && (
                                    <div className="mt-1 ml-3 space-y-1">
                                        <button
                                            onClick={() => handleSort('rating')}
                                            className="block w-full text-left px-3 py-1 rounded hover:bg-base-200 text-accent"
                                        >
                                            Rating (Asc)
                                        </button>
                                        <button
                                            onClick={() => handleSort('year')}
                                            className="block w-full text-left px-3 py-1 rounded hover:bg-base-200 text-secondary"
                                        >
                                            Year (Asc)
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mt-2">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'filter' ? null : 'filter')}
                                    className="w-full text-left px-3 py-1 rounded hover:bg-base-200 text-info"
                                >
                                    Filter By Genre
                                </button>
                                {activeSubmenu === 'filter' && (
                                    <div className="mt-1 ml-3 space-y-1 max-h-40 overflow-y-auto">
                                        <button
                                            onClick={() => handleFilter('All')}
                                            className="block w-full text-left px-3 py-1 rounded hover:bg-base-200 text-error"
                                        >
                                            All
                                        </button>
                                        {genres.map((genre) => (
                                            <button
                                                key={genre}
                                                onClick={() => handleFilter(genre)}
                                                className="block w-full text-left px-3 py-1 rounded hover:bg-base-200 text-warning"
                                            >
                                                {genre}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.length > 0 ? (
                    data.map((review) => <ReviewCard key={review.id} review={review} />)
                ) : (
                    <div className="col-span-full text-center text-lg text-base-content/70">
                        No reviews found. Try adjusting the filters or sorting options.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllReviews;