import React from "react";

const quickLinks = ["Home", "About", "Services", "Contact"];

const resources = [
    "Study Materials",
    "Courses",
    "Notes",
    "Help Center",
];

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <a href="#" className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                <span className="text-white text-xl font-bold">
                                    S
                                </span>
                            </div>

                            <span className="text-2xl font-bold text-white">
                                Study<span className="text-blue-500">Buddy</span>
                            </span>
                        </a>

                        <p className="text-gray-400 leading-7 text-sm">
                            StudyBuddy helps students learn, organize their
                            studies, and manage their academic journey in one
                            simple platform.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="mb-5 text-sm font-semibold uppercase text-white">
                            Quick Links
                        </h2>

                        <ul className="space-y-3 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h2 className="mb-5 text-sm font-semibold uppercase text-white">
                            Resources
                        </h2>

                        <ul className="space-y-3 text-sm">
                            {resources.map((resource) => (
                                <li key={resource}>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        {resource}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="mb-5 text-sm font-semibold uppercase text-white">
                            Contact Us
                        </h2>

                        <ul className="space-y-4 text-sm">

                            {/* Email */}
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-blue-500 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                <span>support@studybuddy.com</span>
                            </li>

                            {/* Phone */}
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-blue-500 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a2 2 0 011.89 1.32l1.1 2.93a2 2 0 01-.45 2.12L9.6 10.6a16 16 0 006.8 6.8l1.23-1.23a2 2 0 012.12-.45l2.93 1.1A2 2 0 0124 18.72V22a2 2 0 01-2 2C10.06 24 0 13.94 0 2a2 2 0 012-2h3z"
                                    />
                                </svg>

                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-gray-500">
                        © 2026 StudyBuddy. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-white transition"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="text-gray-500 hover:text-white transition"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;