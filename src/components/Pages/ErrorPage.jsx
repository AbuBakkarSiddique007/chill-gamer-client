import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">

                <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
                <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
                <p className="text-lg text-gray-600 mt-2 text-center">
                    The page you're looking for doesn't exist. <br />
                    It might have been moved or deleted.
                </p>

                <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
                    Go Back Home
                </Link>

                <img
                    src="/public/images/errorPage.png"
                    alt="404 Illustration"
                    className="w-80 mt-6"
                />
            </div>
        </div>
    );
};

export default ErrorPage;