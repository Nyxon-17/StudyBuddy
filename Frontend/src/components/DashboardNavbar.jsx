import React from "react";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const DashboardNavbar = ({ setIsOpen }) => {
    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8">

            {/* Left */}
            <div className="flex items-center gap-4">

                {/* Mobile menu */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600"
                    aria-label="Open menu"
                >
                    <FaBars />
                </button>

                {/* Search */}
                <div className="hidden sm:flex items-center w-64 lg:w-80 h-10 bg-gray-50 rounded-xl px-4 gap-3">
                    <FaSearch className="text-gray-400 text-sm" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none w-full text-sm text-gray-700"
                    />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3 sm:gap-5">

                {/* Notifications */}
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative w-10 h-10 rounded-xl hover:bg-gray-50 flex items-center justify-center text-gray-500"
                >
                    <FaBell />

                    <span className="absolute top-2 right-2 w-2 h-2 bg-green-700 rounded-full border-2 border-white" />
                </button>

                {/* User */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                        AS
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-gray-900">
                            Sahid
                        </p>

                        <p className="text-xs text-gray-400">
                            Student
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;