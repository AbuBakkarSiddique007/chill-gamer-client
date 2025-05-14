const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content relative">
                <div className="w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                  
                    <aside className="flex flex-col items-center md:items-start">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-primary mb-2"
                        >
                            <path d="M20 6h-3V3a1 1 0 0 0-2 0v3h-6V3a1 1 0 1 0-2 0v3H4a2 2 0 0 0-2 2v5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2ZM7 14a1 1 0 1 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H7Zm9-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>
                        <p className="font-bold text-lg text-center md:text-left">
                            Chill Gamer
                            <br />
                            Leveling up your gaming experience 🎮
                        </p>
                        <p className="text-sm mt-2">
                            &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
                        </p>
                    </aside>

                   
                    <nav className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-lg mb-4">Game Genres</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            <a href="#" className="link link-hover">Action</a>
                            <a href="#" className="link link-hover">Adventure</a>
                            <a href="#" className="link link-hover">RPG</a>
                            <a href="#" className="link link-hover">Shooter</a>
                            <a href="#" className="link link-hover">Strategy</a>
                            <a href="#" className="link link-hover">Indie</a>
                        </div>
                    </nav>

                    
                    <nav className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                        <div className="grid grid-flow-col gap-6">
                            <a href="#" aria-label="Twitter" className="hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.942 13.942 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573A4.903 4.903 0 0 1 .96 9.1v.06a4.917 4.917 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.905 13.905 0 0 0 7.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
                                </svg>
                            </a>

                            <a href="#" aria-label="YouTube" className="hover:text-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>

                            <a href="#" aria-label="Facebook" className="hover:text-info">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z" />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>

               
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hidden md:block fixed bottom-8 right-8 btn btn-primary btn-circle shadow-lg"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            </footer>
        </div>
    );
};

export default Footer;