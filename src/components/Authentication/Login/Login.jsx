import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!email || !password) {
            return Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please enter both email and password.',
            });
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

                fetch("https://chill-gamer-server-rosy.vercel.app/users", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loggedInUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful!',
                            text: `Welcome back, ${user.displayName || 'User'}!`,
                            timer: 2000,
                            showConfirmButton: false,
                        });
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
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Incorrect email or password.',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        setGoogleLoading(true);
        setError("");

        handleGoogleLogin()
            .then((result) => {
                const user = result.user;

                const loggedInUser = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                };

                fetch("https://chill-gamer-server-rosy.vercel.app/users", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loggedInUser),
                })
                    .then(res => res.json())
                    .then(data => {
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
                setGoogleLoading(false);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 bg-base-200">
            <div className="max-w-md w-full p-8 rounded-lg shadow-xl space-y-6 bg-base-100">
                <form onSubmit={handleLoginForm} className="space-y-4">
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold text-center text-base-content">
                            Login to Your Account
                        </legend>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-base-content/20"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-base-content/20"
                                required
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3 text-primary cursor-pointer select-none"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>

                        {error && <p className="text-error text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </fieldset>
                </form>

                <div className="text-center my-4 text-base-content/50">OR</div>

                <button
                    type="button"
                    className="w-full btn btn-error"
                    onClick={handleGoogleSignIn}
                    disabled={googleLoading}
                >
                    <FaGoogle className="mr-2" />
                    {googleLoading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        "Login with Google"
                    )}
                </button>

                <div className="mt-6 text-center">
                    <p className="text-base-content/70">
                        New to the website?{' '}
                        <NavLink to="/register" className="text-primary font-semibold hover:underline">
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;