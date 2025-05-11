import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { handleRegister, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegisterForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError("");
        setLoading(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }
        if (!name || !email || !image) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }

        handleRegister(email, password)
            .then(() => {
                const newUser = { name, email, photo: image };

                return fetch("http://localhost:5000/users", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                });
            })
            .then((res) => res.json())
            .then(() => {
                form.reset();
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    //handle Google sign-in
    const handleGoogleSignIn = () => {
        setLoading(true);
        setError("");

        handleGoogleLogin()
            .then((result) => {
                const user = result.user;
                const loggedInUser = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png', // Fallback if no photoURL is provided
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
        <div className="flex flex-col items-center justify-center h-screen md:h-auto py-12 px-4 bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleRegisterForm} className="space-y-4">
                    <fieldset className="p-4 border border-gray-300 rounded-lg space-y-3">
                        <legend className="text-xl font-semibold text-gray-900 px-2">Create an Account</legend>

                        <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900 mt-2" />
                        <input type="text" name="image" placeholder="Profile Image URL" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />
                        <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />
                        <input type="password" name="password" placeholder="Password" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />

                        {error && <p className="text-red-500">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition mt-4 cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </fieldset>
                </form>

                <div className="text-center my-4 text-gray-500">OR</div>

                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
                >
                    Sign in with Google
                </button>

                <p className="text-center mt-4">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
