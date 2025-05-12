import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';


const Register = () => {
    const { handleRegister, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

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

        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters long and include both uppercase and lowercase letters.");
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

                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'Your account has been created.',
                    confirmButtonColor: '#3085d6',
                });

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
                    photo: user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
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
                setGoogleLoading(false);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 px-6 py-8">
            <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
                <form onSubmit={handleRegisterForm} className="space-y-4">
                    <div>
                        <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    </div>
                    <div>
                        <input type="text" name="image" placeholder="Profile Image URL" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    </div>
                    <div>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <button
                        type="submit"
                        className="w-full flex justify-center items-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                        disabled={loading}
                    >
                        {loading && (
                            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        )}
                        {loading ? "Registering" : "Register"}
                    </button>
                </form>

                <div className="text-center my-4 text-gray-500">OR</div>

                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full flex justify-center items-center bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-200"
                    disabled={loading}
                >
                    {googleLoading && (
                        <span
                            className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                        >nav</span>
                    )}
                    Sign in with Google
                </button>

                <p className="text-center mt-6 text-gray-700">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
