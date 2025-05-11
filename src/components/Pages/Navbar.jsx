import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);

    const navLinkClass = ({ isActive }) => isActive ? "text-blue-500 font-bold" : "";

    const navLinks = <>
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/all-reviews" className={navLinkClass}>All Reviews</NavLink></li>
        <li><NavLink to="/add-review" className={navLinkClass}>Add Review</NavLink></li>
        <li><NavLink to="/my-review" className={navLinkClass}>My Review</NavLink></li>
        <li><NavLink to="/myWatchList" className={navLinkClass}>Game WatchList</NavLink></li>

    </>;

    const handleSignOut = () => {
        handleLogout()
            .then(() => console.log("Logged out"))
            .catch(err => console.error(err));
    };



    return (
        <div className='border-2 border-red-700 mb-5'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl" to="/">Chill Gamer</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end space-x-2">
                    {user ? (
                        <>
                            <img
                                src={user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2"
                                title={user.displayName || "User"}
                            />
                            <button onClick={handleSignOut} className="btn btn-error text-white">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                            <Link to="/register" className="btn btn-secondary">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
