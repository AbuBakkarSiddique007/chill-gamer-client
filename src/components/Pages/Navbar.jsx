import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import { Slide } from "react-awesome-reveal";


const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);

    console.log(user);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-blue-500 font-bold' : 'hover:text-[#7c3aed] transition';

    const navLinks = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/all-reviews" className={navLinkClass}>All Reviews</NavLink></li>
            <li><NavLink to="/add-review" className={navLinkClass}>Add Review</NavLink></li>
            <li><NavLink to="/my-review" className={navLinkClass}>My Review</NavLink></li>
            <li><NavLink to="/myWatchList" className={navLinkClass}>Game WatchList</NavLink></li>
        </>
    );

    const handleSignOut = () => {
        handleLogout()
            .then(() => console.log('Logged out'))
            .catch(err => console.error(err));
    };

    return (
        <div className="bg-[#0f172a] text-[#f8fafc] shadow-lg">
            <div className="navbar shadow-sm max-w-7xl mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#0f172a] text-[#f8fafc] rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <Link className="btn btn-ghost text-xl" to="/">Chill Gamer</Link> */}
                    <Slide direction="left">
                        <Link className="flex justify-center items-center text-xl font-bold" to="/">
                            <img
                                src="/images/navLogo.png"
                                alt="Logo"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            Chill Gamer
                        </Link>
                    </Slide>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>


                <div className="navbar-end space-x-3">
                    {user ? (
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                                <img
                                    src={user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border-2 cursor-pointer"
                                />
                            </div>
                            <button onClick={handleSignOut} className="btn btn-error text-white">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                            {/* <Link to="/register" className="btn btn-secondary">Register</Link> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
