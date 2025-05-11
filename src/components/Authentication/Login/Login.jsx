import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLoginForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!email || !password) {
            return alert("Please enter both email and password");
        }

        setLoading(true);
        setError("");

        handleLogin(email, password)
            .then(result => {
                const user = result.user;

                const loggedInUser = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                };

                fetch("http://localhost:5000/users", {
                    method: "PUT",
                    headers:
                    {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loggedInUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("User info saved successfully", data);
                        navigate("/");
                    })
                    .catch(error => {
                        console.error("Error saving user info:", error);
                        setError("Failed to save user info.");
                    });
            })
            .catch((err) => {
                console.error(err);
                setError("Login failed, please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };


    const handleGoogleSignIn = () => {
        setLoading(true);
        setError("");

        handleGoogleLogin()
            .then((result) => {
                const user = result.user;

                const loggedInUser = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                };

                fetch("http://localhost:5000/users", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loggedInUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Google user info saved", data);
                        navigate("/");
                    })
                    .catch(error => {
                        console.error("Error saving Google user info:", error);
                        setError("Failed to save Google user info.");
                    });
            })
            .catch((err) => {
                console.error(err);
                setError("Google sign-in failed");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 px-6 py-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl space-y-6">
                <form onSubmit={handleLoginForm} className="space-y-4">
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold text-gray-900 text-center">
                            Login to Your Account
                        </legend>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                            required
                        />

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </fieldset>
                </form>

                <div className="text-center my-4 text-gray-500">OR</div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                >
                    <FaGoogle className="mr-2" /> {loading ? "Signing in..." : "Login with Google"}
                </button>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        New to the website?{' '}
                        <NavLink to="/register" className="text-blue-500 font-semibold hover:underline">
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
