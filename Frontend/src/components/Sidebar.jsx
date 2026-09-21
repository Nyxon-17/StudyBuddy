import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaBookOpen,
    FaHome,
    FaTasks,
    FaUser,
    FaSignOutAlt,
    FaTimes,
    FaChartBar,
    FaRegFileAlt,
    FaGraduationCap,
    FaCalendarAlt,
    FaRobot,
} from "react-icons/fa";

const menuItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <FaHome />,
    },
    {
        name: "My Subjects",
        path: "/subjects",
        icon: <FaGraduationCap />,
    },
    {
        name: "AI Chatbot",
        path: "/aiBot",
        icon: <FaRobot />,
    },
    {
        name: "Study Planner",
        path: "/planner",
        icon: <FaCalendarAlt />,
    },
    {
        name: "Tasks",
        path: "/tasks",
        icon: <FaTasks />,
    },
    {
        name: "Progress",
        path: "/progress",
        icon: <FaChartBar />,
    },
    {
        name: "Study Notes",
        path: "/notes",
        icon: <FaRegFileAlt />,
    },
];

const bottomItems = [
    {
        name: "Profile",
        path: "/profile",
        icon: <FaUser />,
    },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
    const closeSidebar = () => setIsOpen(false);

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition ${
            isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
            >
                {/* Logo */}
                <div className="h-20 px-6 flex items-center justify-between border-b border-gray-100">
                    <NavLink
                        to="/"
                        onClick={closeSidebar}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                            <FaBookOpen size={18} />
                        </div>

                        <span className="text-xl font-bold text-gray-900">
                            Study<span className="text-blue-600">Buddy</span>
                        </span>
                    </NavLink>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={closeSidebar}
                        className="lg:hidden text-gray-400 hover:text-gray-700"
                        aria-label="Close sidebar"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Main Menu */}
                <div className="flex-1 px-4 py-6 overflow-y-auto study-scrollbar">
                    <p className="px-3 mb-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                        Menu
                    </p>

                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeSidebar}
                                className={navLinkClass}
                            >
                                <span className="text-base">
                                    {item.icon}
                                </span>

                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* General */}
                    <p className="px-3 mb-3 mt-8 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                        General
                    </p>

                    <nav className="space-y-1">
                        {bottomItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeSidebar}
                                className={navLinkClass}
                            >
                                <span className="text-base">
                                    {item.icon}
                                </span>

                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Logout */}
                <div className="p-4 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={() => console.log("Logout")}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-500 transition"
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;