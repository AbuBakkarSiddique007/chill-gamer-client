import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // For Google Sign In
    const googleProvider = new GoogleAuthProvider();

    // For Email and Password  create user
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for Email and Password Sign In
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for Email and Password Sign Out
    const handleLogout = () => {
        return signOut(auth);
    }

    // For Google Sign In
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // for user profile management
    // const manageUserProfile = async (name, image) => {
    //     await updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: image
    //     });
    //     const updatedUser = { ...auth.currentUser, displayName: name, photoURL: image };
    //     setUser(updatedUser);
    // }

    // for password reset
    const resetPassword = async (email) => {
        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            await signOut(auth);

            window.open("https://mail.google.com", "_blank");
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Failed to send reset email. Please try again.");
        }
    };

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        user,
        setUser,
        loading,
        resetPassword
    }

    // Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribed();
    }, []);


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;