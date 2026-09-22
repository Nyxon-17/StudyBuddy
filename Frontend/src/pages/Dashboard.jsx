import React, { useState } from "react";
import {
    FaBookOpen,
    FaClock,
    FaTasks,
    FaChartLine,
    FaPlay,
    FaArrowRight,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = () => {
    // Mobile sidebar state
    const [isOpen, setIsOpen] = useState(false);

    // Temporary user data
    const user = {
        name: "Abdul",
    };

    // Dashboard stats
    const stats = [
        {
            title: "Subjects",
            value: "8",
            icon: <FaBookOpen />,
            iconBg: "bg-[#ede9fe]",
            iconColor: "text-[#6d28d9]",
            boxBg: "bg-blue-300/90",

        },
        {
            title: "Study Hours",
            value: "12.5",
            icon: <FaClock />,
            iconBg: "bg-[#fef3c7]",
            iconColor: "text-[#d97706]",
            boxBg: "bg-yellow-200/90",
        },
        {
            title: "Completed Tasks",
            value: "24",
            icon: <FaTasks />,
            iconBg: "bg-[#dcfce7]",
            iconColor: "text-[#15803d]",
            boxBg: "bg-red-300/90",
        },
        {
            title: "Overall Progress",
            value: "78%",
            icon: <FaChartLine />,
            iconBg: "bg-[#fce7f3]",
            iconColor: "text-[#be185d]",
            boxBg: "bg-green-300/90",
        },
    ];

    // Temporary course data
    const courses = [
        {
            title: "Web Development",
            progress: 78,
            lessons: "24 Lessons",
            color: "purple",
        },
        {
            title: "JavaScript",
            progress: 64,
            lessons: "18 Lessons",
            color: "orange",
        },
        {
            title: "Database Management",
            progress: 42,
            lessons: "15 Lessons",
            color: "green",
        },
    ];

    const weeklyProgress = [45, 60, 50, 72, 65, 85, 78];

    // Course color variations
    const courseColors = {
        purple: {
            bg: "bg-[#ede9fe]",
            icon: "text-[#6d28d9]",
            bar: "bg-[#8b5cf6]",
        },
        orange: {
            bg: "bg-[#ffedd5]",
            icon: "text-[#ea580c]",
            bar: "bg-[#f97316]",
        },
        green: {
            bg: "bg-[#dcfce7]",
            icon: "text-[#15803d]",
            bar: "bg-[#22c55e]",
        },
    };

    return (
        <div className="min-h-screen bg-[#faf7f2] text-[#20202a]">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64 min-h-screen">
                <DashboardNavbar setIsOpen={setIsOpen} />

                <main className="pt-20 p-4 sm:p-6 lg:p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <p className="text-[#8a8790] text-sm mb-1">
                            Welcome back !
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#20202a]">
                                    Hello, {user.name}
                                </h1>

                                <p className="text-[#77737d] mt-2">
                                    Here's what's happening with your learning today.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl ${stat.boxBg} p-4 sm:p-5 border border-[#ebe7df] shadow-[0_4px_20px_rgba(32,32,42,0.04)] hover:shadow-[0_8px_30px_rgba(32,32,42,0.07)] transition`}
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className={`w-11 h-11 rounded-xl ${stat.iconBg} ${stat.iconColor} flex items-center justify-center`}>
                                        {stat.icon}
                                    </div>

                                    <span className="text-xs text-[#aaa6ae]">
                                        2026
                                    </span>
                                </div>

                                <p className="text-[#77737d] text-sm">
                                    {stat.title}
                                </p>

                                <h2 className="text-2xl font-black text-[#20202a] mt-1">
                                    {stat.value}
                                </h2>
                            </div>
                        ))}
                    </div>

                    {/* Progress section */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Weekly progress */}
                        <div className="lg:col-span-2 bg-white rounded-3xl p-5 sm:p-7 border border-[#ebe7df] shadow-[0_4px_20px_rgba(32,32,42,0.04)]">
                            <div className="flex items-center justify-between mb-7">
                                <div>
                                    <h2 className="text-lg font-bold text-[#20202a]">
                                        Weekly Progress
                                    </h2>

                                    <p className="text-sm text-[#8a8790] mt-1">
                                        Your learning activity this week
                                    </p>
                                </div>

                                <div className="w-10 h-10 rounded-xl bg-[#ede9fe] flex items-center justify-center">
                                    <FaChartLine className="text-[#6d28d9]" />
                                </div>
                            </div>

                            {/* Weekly chart */}
                            <div className="h-56 flex items-end justify-between gap-2 sm:gap-4">
                                {weeklyProgress.map((value, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col items-center gap-2"
                                    >
                                        <div className="w-full flex items-end justify-center h-44">
                                            <div
                                                className={`w-full max-w-10 rounded-t-lg transition-all hover:opacity-80 ${index === 5 ? "bg-[#f59e0b]" : "bg-[#8b5cf6]"}`}
                                                style={{ height: `${value}%` }}
                                            ></div>
                                        </div>

                                        <span className="text-xs text-[#8a8790]">
                                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 pt-5 border-t border-[#f0ede7] flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-[#99959d]">
                                        Weekly average
                                    </p>

                                    <p className="font-bold text-[#20202a] mt-1">
                                        65%
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-[#99959d]">
                                        Best day
                                    </p>

                                    <p className="font-bold text-[#d97706] mt-1">
                                        Saturday
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Overall progress */}
                        <div className="bg-indigo-900/90 rounded-3xl p-5 sm:p-7 text-white shadow-[0_8px_30px_rgba(32,32,42,0.12)]">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-lg font-bold">
                                        Overall Progress
                                    </h2>

                                    <p className="text-sm text-[#aaa7af] mt-1">
                                        Keep going! You're doing great.
                                    </p>
                                </div>

                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                    <FaChartLine className="text-[#f59e0b]" />
                                </div>
                            </div>

                            <div className="flex justify-center py-8">
                                <div className="relative w-40 animate-floatDelay h-40">
                                    <svg
                                        className="w-full h-full -rotate-90"
                                        viewBox="0 0 100 100"
                                    >
                                        {/* Progress background */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="42"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            fill="none"
                                            className="text-white/10"
                                        />

                                        {/* Progress value */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="42"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray="264"
                                            strokeDashoffset="58"
                                            strokeLinecap="round"
                                            className="text-[#f59e0b]"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-black">
                                            78%
                                        </span>

                                        <span className="text-xs text-[#aaa7af]">
                                            Completed
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-[#20202a] py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
                                Continue Learning
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Recent courses */}
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#ebe7df] shadow-[0_4px_20px_rgba(32,32,42,0.04)] mt-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-[#20202a]">
                                    Recent Courses
                                </h2>

                                <p className="text-sm text-[#8a8790] mt-1">
                                    Continue where you left off
                                </p>
                            </div>

                            <button className="text-[#6d28d9] text-sm font-bold hover:text-[#5b21b6] transition">
                                View All
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {courses.map((course, index) => {
                                const colors = courseColors[course.color];

                                return (
                                    <div
                                        key={index}
                                        className="border border-[#ebe7df] rounded-2xl p-5 hover:shadow-[0_8px_25px_rgba(32,32,42,0.07)] hover:-translate-y-0.5 transition"
                                    >
                                        <div className="flex items-center justify-between mb-5">
                                            <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.icon} flex items-center justify-center`}>
                                                <FaBookOpen />
                                            </div>

                                            <span className="text-xs text-[#8a8790]">
                                                {course.lessons}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-[#20202a]">
                                            {course.title}
                                        </h3>

                                        <div className="mt-5">
                                            <div className="flex justify-between text-xs mb-2">
                                                <span className="text-[#8a8790]">
                                                    Progress
                                                </span>

                                                <span className={`${colors.icon} font-bold`}>
                                                    {course.progress}%
                                                </span>
                                            </div>

                                            <div className="w-full h-2 bg-[#f0ede7] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-2 ${colors.bar} rounded-full transition-all`}
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <button className={`mt-5 text-sm ${colors.icon} font-bold flex items-center gap-2 hover:gap-3 transition-all`}>
                                            <FaPlay className="text-xs" />
                                            Continue
                                            <FaArrowRight className="text-xs" />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Motivation card */}
                    <div className="mt-6 rounded-3xl bg-[#ede9fe] border border-[#ddd6fe] p-6 sm:p-7">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                            <div>
                                <p className="text-sm font-bold text-[#6d28d9] uppercase tracking-wide">
                                    Keep learning
                                </p>

                                <h2 className="text-2xl font-black text-[#20202a] mt-2">
                                    Small progress every day adds up.
                                </h2>

                                <p className="text-sm text-[#625b71] mt-2">
                                    Stay consistent and keep building your skills.
                                </p>
                            </div>

                            <div className="shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                <FaBookOpen className="text-xl text-[#6d28d9]" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;