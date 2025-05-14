const Slider = () => {
    const handleSlideChange = (e, target) => {
        e.preventDefault();
        const targetSlide = document.getElementById(target);
        targetSlide?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='py-10 px-6'>
            <div className="carousel w-full rounded-lg shadow-lg">
               
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/50 dark:bg-black/70 p-4">
                        <h2 className="text-4xl font-bold mb-4 text-white">Explore Epic Adventures</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Step into fantasy worlds, battle dragons, and conquer kingdoms.
                        </p>
                        <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-md font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:scale-105">
                            Play Now
                        </button>
                    </div>
                    <img
                        src="/images/sliderOne.jpg"
                        className="w-full h-96 object-cover brightness-90 transition-all duration-500"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide4')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❮
                        </button>
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide2')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/50 dark:bg-black/70 p-4">
                        <h2 className="text-4xl font-bold mb-4 text-white">Multiplayer Mayhem</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Team up or go solo in fast-paced online battles with real players.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition-all duration-300 ease-in-out hover:scale-105">
                            Join Battle
                        </button>
                    </div>
                    <img
                        src="/images/sliderTwo.jpg"
                        className="w-full h-96 object-cover brightness-90 transition-all duration-500"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide1')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❮
                        </button>
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide3')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/50 dark:bg-black/70 p-4">
                        <h2 className="text-4xl font-bold mb-4 text-white">Retro Classics</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Relive the golden age of gaming with iconic 8-bit adventures.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white transition-all duration-300 ease-in-out hover:scale-105">
                            Start Playing
                        </button>
                    </div>
                    <img
                        src="/images/sliderThree.jpg"
                        className="w-full h-96 object-cover brightness-90 transition-all duration-500"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide2')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❮
                        </button>
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide4')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 bg-black/50 dark:bg-black/70 p-4">
                        <h2 className="text-4xl font-bold mb-4 text-white">Future of Gaming</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Experience VR, ray tracing, and next-gen realism like never before.
                        </p>
                        <button className="text-xl text-gray-300 hover:text-white mb-6 transition-all duration-300 ease-in-out hover:scale-105">
                            Discover More
                        </button>
                    </div>
                    <img
                        src="/images/sliderFour.jpg"
                        className="w-full h-96 object-cover brightness-90 transition-all duration-500"
                        alt="Slide 4"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide3')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❮
                        </button>
                        <button
                            onClick={(e) => handleSlideChange(e, 'slide1')}
                            className="btn btn-circle bg-gray-800/70 hover:bg-gray-700/90 text-white transition duration-300"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;