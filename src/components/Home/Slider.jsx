import React from 'react';

const Slider = () => {
    return (
        <div className='border-2 border-blue-500 mb-5'>
            <div className="carousel w-full rounded-lg shadow-lg">

                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    {/* Centered Game Info */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/40 p-4">
                        <h2 className="text-3xl font-bold text-white">Explore Epic Adventures</h2>
                        <p className="mt-2 text-white text-sm max-w-md">
                            Step into fantasy worlds, battle dragons, and conquer kingdoms.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
                            Play Now
                        </button>
                    </div>
                    <img
                        src="/images/sliderOne.jpg"
                        className="w-full h-96 object-cover brightness-90"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/40 p-4">
                        <h2 className="text-3xl font-bold text-white">Multiplayer Mayhem</h2>
                        <p className="mt-2 text-white text-sm max-w-md">
                            Team up or go solo in fast-paced online battles with real players.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white">
                            Join Battle
                        </button>
                    </div>
                    <img
                        src="/images/sliderTwo.jpg"
                        className="w-full h-96 object-cover brightness-90"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/40 p-4">
                        <h2 className="text-3xl font-bold text-white">Retro Classics</h2>
                        <p className="mt-2 text-white text-sm max-w-md">
                            Relive the golden age of gaming with iconic 8-bit adventures.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
                            Start Playing
                        </button>
                    </div>
                    <img
                        src="/images/sliderThree.jpg"
                        className="w-full h-96 object-cover brightness-90"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/40 p-4">
                        <h2 className="text-3xl font-bold text-white">Future of Gaming</h2>
                        <p className="mt-2 text-white text-sm max-w-md">
                            Experience VR, ray tracing, and next-gen realism like never before.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white">
                            Discover More
                        </button>
                    </div>
                    <img
                        src="/images/sliderFour.jpg"
                        className="w-full h-96 object-cover brightness-90"
                        alt="Slide 4"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
