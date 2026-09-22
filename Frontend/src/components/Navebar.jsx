import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const linkStyles = ({ isActive }) =>
    isActive
        ? "text-blue-600 bg-blue-50 px-3 py-2 font-medium rounded-lg block"
        : "block px-3 py-2 text-gray-600 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition duration-200";

const Navebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-gray-200 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-5 py-4">

                {/* Logo */}
                <a href="/" className="flex items-center gap-3 group">
                    <div className="h-4 w-60 absolute -top-7">
                        <img src={logo} alt="" />
                    </div>
                </a>

                {/* Right */}
                <div className="flex items-center gap-3 md:order-2">

                    {/* Get Started */}
                    <NavLink
                        to="/register"
                        className="hidden sm:block text-white bg-green-700 hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-blue-200 font-semibold rounded-xl text-sm px-5 py-2.5 transition-all duration-300"
                    >
                        Get Started
                    </NavLink>

                    {/* Mobile Menu */}
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-gray-600 rounded-xl md:hidden hover:bg-blue-50 hover:text-blue-600 transition"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <div
                    className={`${open ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mt-5 md:mt-0 p-4 md:p-0 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none border border-gray-200 md:border-0">

                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={linkStyles}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}

                        {/* Mobile Get Started */}
                        <li className="sm:hidden pt-2">
                            <NavLink
                                to="/register"
                                onClick={() => setOpen(false)}
                                className="block w-full text-center text-white bg-green-700 hover:bg-blue-700 hover:shadow-lg font-semibold rounded-xl px-5 py-2.5 transition-all duration-300"
                            >
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navebar;