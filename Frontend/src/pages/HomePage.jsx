import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaBrain,
    FaCheckCircle,
    FaChartLine,
    FaClock,
    FaRobot,
    FaTasks,
    FaBookOpen,
    FaCalendarAlt,
    FaGraduationCap,
    FaFire,
    FaQuoteLeft,
    FaChevronDown,
    FaCheck,
    FaPlayCircle,
    FaStar,
} from "react-icons/fa";

import Navebar from "../components/Navebar";
import Footer from "../components/Footer";

export default function HomePage() {
    const words = ["Potential", "Progress", "Success", "Results"];
    const [wordIndex, setWordIndex] = useState(0);

    // change the hero word every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navebar />

            <div className="min-h-screen bg-white text-slate-900">

                {/* hero section */}
                <section id="home" className="relative overflow-hidden bg-slate-50 pt-2">
                    <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
                    <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
                        <div>
                            <h1 className="text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                Build habits.
                                <br />
                                Unlock{" "}
                                <span key={wordIndex} className="inline-block animate-slideUp text-blue-600">
                                    {words[wordIndex]}
                                </span>
                                <span className="text-slate-900">.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                                StudyMate helps students create personalized study plans,
                                manage tasks, track progress, and use AI to make learning
                                more organized and effective.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <button className="group flex items-center justify-center gap-3 rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700">
                                    Start Studying
                                    <FaArrowRight className="transition group-hover:translate-x-1" />
                                </button>

                                
                            </div>

                            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500">
                                <span className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    Simple to use
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    AI powered
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    Student focused
                                </span>
                            </div>
                        </div>

                        {/* dashboard preview */}
                        <div className="relative">
                            <div className="absolute -left-2 top-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-xl animate-float sm:-left-6 sm:top-10 sm:p-4 xl:-left-12 xl:top-16">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-11 sm:w-11">
                                    <FaClock className="text-sm text-blue-600 sm:text-base" />
                                </div>

                                <div>
                                    <p className="text-[10px] text-slate-400 sm:text-xs">Today progress</p>
                                    <p className="whitespace-nowrap text-xs font-semibold text-slate-800 sm:text-sm md:text-base">
                                        70% completed
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                                    <div>
                                        <p className="text-sm text-slate-400">Good morning,</p>
                                        <h2 className="text-xl font-bold">Nyxon 😍</h2>
                                    </div>

                                    <div className="h-10 w-10 rounded-full bg-blue-100 text-center leading-10 text-blue-600">
                                        N
                                    </div>
                                </div>

                                {/* dashboard stats */}
                                <div className="mt-5 grid grid-cols-3 gap-3">
                                    <div className="rounded-2xl bg-blue-50 p-4">
                                        <FaTasks className="mb-2 text-blue-600" />
                                        <p className="text-2xl font-bold">12</p>
                                        <p className="text-xs text-slate-500">Tasks</p>
                                    </div>

                                    <div className="rounded-2xl bg-purple-50 p-4">
                                        <FaClock className="mb-2 text-purple-600" />
                                        <p className="text-2xl font-bold">4.5h</p>
                                        <p className="text-xs text-slate-500">Study Time</p>
                                    </div>

                                    <div className="rounded-2xl bg-green-50 p-4">
                                        <FaChartLine className="mb-2 text-green-600" />
                                        <p className="text-2xl font-bold">72%</p>
                                        <p className="text-xs text-slate-500">Progress</p>
                                    </div>
                                </div>

                                {/* todays study tasks */}
                                <div className="mt-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="font-bold">Today's Study Plan</h3>
                                        <span className="text-sm font-medium text-blue-600">View all</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/50">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                                <FaCheckCircle />
                                            </div>

                                            <div className="flex-1">
                                                <p className="font-semibold">C Programming</p>
                                                <p className="text-xs text-slate-500">Arrays & Functions • 1 hour</p>
                                            </div>

                                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                                                Done
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/50">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                                <FaBrain />
                                            </div>

                                            <div className="flex-1">
                                                <p className="font-semibold">Mathematics</p>
                                                <p className="text-xs text-slate-500">Matrices • 45 minutes</p>
                                            </div>

                                            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-600">
                                                Pending
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/50">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                                <FaTasks />
                                            </div>

                                            <div className="flex-1">
                                                <p className="font-semibold">Computer Networks</p>
                                                <p className="text-xs text-slate-500">OSI Model • 1 hour</p>
                                            </div>

                                            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-600">
                                                Pending
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* features */}
                <section id="features" className="bg-white py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="font-bold text-2xl uppercase tracking-widest text-blue-600">
                                Everything you need
                            </p>

                            <h2 className="mt-3 text-4xl font-bold tracking-tight">
                                One place for your entire study routine
                            </h2>

                            <p className="mt-5 text-slate-600">
                                StudyMate brings planning, productivity and AI together
                                in one simple platform.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-green-700 group-hover:text-white">
                                    <FaRobot size={22} />
                                </div>
                                <h3 className="text-xl font-bold">AI Study Planner</h3>
                                <p className="mt-3 leading-7 text-slate-500">
                                    Get personalized study plans based on your subjects,
                                    available time and upcoming exams.
                                </p>
                            </div>

                            <div className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                                    <FaTasks size={22} />
                                </div>
                                <h3 className="text-xl font-bold">Smart Task Management</h3>
                                <p className="mt-3 leading-7 text-slate-500">
                                    Organize assignments, study tasks and deadlines
                                    without losing track of your priorities.
                                </p>
                            </div>

                            <div className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                                    <FaChartLine size={22} />
                                </div>
                                <h3 className="text-xl font-bold">Track Your Progress</h3>
                                <p className="mt-3 leading-7 text-slate-500">
                                    Understand your study habits with simple progress
                                    tracking and performance insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* study overview */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <div className="relative">
                            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />

                            <div className="relative animate-floatReverse rounded-4xl border border-slate-200 bg-white p-3 shadow-2xl transition">
                                <img
                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85"
                                    alt="Student studying"
                                    className="h-105 w-full rounded-3xl object-cover"
                                />

                                <div className="absolute -right-2 top-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-xl animate-floatDelay sm:-right-6 sm:top-10 sm:p-4 xl:-right-12 xl:top-16">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-11 sm:w-11">
                                        <FaChartLine className="text-sm text-blue-600 sm:text-base" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-slate-400 sm:text-xs">Today's progress</p>
                                        <p className="whitespace-nowrap text-xs font-semibold text-slate-800 sm:text-sm md:text-base">
                                            70% completed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-center">
                                <span className="inline-flex rounded-xl uppercase px-10 py-3 text-xl font-bold text-blue-600">
                                Built for students
                            </span>
                            </div>

                            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                                Everything you need to
                                <span className="text-blue-600"> study better.</span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                From planning your day to tracking your progress,
                                StudyBuddy gives you one simple place to manage
                                your entire study routine.
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                        <FaCalendarAlt />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Plan your day</h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-500">
                                            Create realistic study schedules around
                                            your classes and free time.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                        <FaBrain />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Learn with AI</h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-500">
                                            Get personalized study guidance based
                                            on your subjects and goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                                        <FaChartLine />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Track progress</h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-500">
                                            See what you have completed and where
                                            you need to improve.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* how it works */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xl font-bold uppercase tracking-widest text-blue-600">
                            Simple workflow
                        </span>

                        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                            Start studying in 3 simple steps
                        </h2>

                        <p className="mt-5 text-lg text-slate-500">
                            No complicated setup. Just tell StudyBuddy what
                            you want to achieve and start learning.
                        </p>
                    </div>

                    <div className="relative mt-16 grid gap-8 md:grid-cols-3">
                        <div className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-600">
                                    01
                                </div>
                                <FaBookOpen className="text-3xl text-blue-200 transition group-hover:text-blue-500" />
                            </div>

                            <h3 className="mt-7 text-xl font-bold">Add your subjects</h3>
                            <p className="mt-3 leading-7 text-slate-500">
                                Add your subjects, topics, exam dates and
                                available study time.
                            </p>
                        </div>

                        <div className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-xl font-black text-purple-600">
                                    02
                                </div>
                                <FaRobot className="text-3xl text-purple-200 transition group-hover:text-purple-500" />
                            </div>

                            <h3 className="mt-7 text-xl font-bold">Let AI plan</h3>
                            <p className="mt-3 leading-7 text-slate-500">
                                StudyBuddy creates a personalized roadmap
                                according to your available time.
                            </p>
                        </div>

                        <div className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-black text-green-600">
                                    03
                                </div>
                                <FaGraduationCap className="text-3xl text-green-200 transition group-hover:text-green-500" />
                            </div>

                            <h3 className="mt-7 text-xl font-bold">Learn & improve</h3>
                            <p className="mt-3 leading-7 text-slate-500">
                                Follow your plan, complete tasks and watch
                                your progress grow every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* study analytics */}
            <section className="bg-slate-950 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <div>
                            <div className="text-center">
                                <span className="inline-flex rounded-xl uppercase px-6 py-3 text-xl font-bold text-blue-300">
                                Your learning dashboard
                            </span>
                            </div>

                            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                                Turn your study
                                <span className="text-blue-400"> effort into progress.</span>
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                                Understand your study habits with clear statistics,
                                completion rates and learning activity.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <FaClock className="text-blue-400" />
                                    <p className="mt-3 text-3xl font-black">24.5h</p>
                                    <p className="mt-1 text-sm text-slate-400">Study this week</p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <FaTasks className="text-purple-400" />
                                    <p className="mt-3 text-3xl font-black">86%</p>
                                    <p className="mt-1 text-sm text-slate-400">Tasks completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src="https://media.istockphoto.com/id/1271204266/video/data-and-statistics-graphics-with-movement.mp4?s=mp4-640x640-is&k=20&c=JdS01gb17qSubCqRBZcmekP7GqelhUn7Qv2HwRIhZV0="
                                    className="h-105 w-full rounded-3xl object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                        <FaChartLine />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">Weekly progress</p>
                                        <p className="font-bold text-white">+18.4%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* study benefits */}
            <section className="bg-blue-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="overflow-hidden rounded-4xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
                                alt="Students learning together"
                                className="h-112.5 w-full object-cover"
                            />
                        </div>

                        <div>
                            <span className="font-bold uppercase tracking-widest text-blue-600">
                                Designed around you
                            </span>

                            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                                Study with less stress
                                <span className="text-blue-600"> and more focus.</span>
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                A good study system should make learning easier,
                                not add more work.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Personalized study schedules",
                                    "Simple task and deadline management",
                                    "AI-powered learning assistance",
                                    "Progress and performance tracking",
                                    "Daily study motivation",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 text-xs text-white">
                                            <FaCheck />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* study streak */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="overflow-hidden rounded-4xl bg-linear-to-br from-green-600 to-green-900 p-8 text-white shadow-2xl md:p-12">
                        <div className="grid items-center gap-10 md:grid-cols-2">
                            <div>
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                                    <FaFire />
                                </div>

                                <h2 className="mt-6 text-4xl font-black">
                                    Keep your study streak alive.
                                </h2>

                                <p className="mt-5 leading-7 text-blue-100">
                                    Consistency matters more than studying everything
                                    in one day. Build a routine and keep moving forward.
                                </p>

                                <button className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-bold text-blue-600 transition hover:-translate-y-1 hover:bg-blue-50">
                                    Start your streak
                                    <FaArrowRight />
                                </button>
                            </div>

                            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-blue-100">Current streak</p>
                                        <p className="mt-1 text-5xl font-black">12</p>
                                        <p className="mt-1 text-sm text-blue-100">days</p>
                                    </div>

                                    <FaFire className="text-6xl text-orange-300" />
                                </div>

                                <div className="mt-8 grid grid-cols-7 gap-2">
                                    {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                                        <div key={index} className="flex aspect-square items-center justify-center rounded-lg bg-white/20">
                                            <FaCheck className="text-xs" />
                                        </div>
                                    ))}
                                </div>

                                <p className="mt-4 text-center text-sm text-blue-100">
                                    7 study sessions completed this week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* student reviews */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="font-bold uppercase tracking-widest text-xl text-blue-600">
                            Student experiences
                        </span>

                        <h2 className="mt-3 text-4xl font-black md:text-5xl">
                            Made for real students
                        </h2>

                        <p className="mt-5 text-slate-500">
                            A simple study workspace designed to keep students
                            organized and consistent.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                name: "Kuddus Hoque",
                                role: "BCA Student",
                                text: "The study planner makes it much easier to organize my subjects and daily tasks.",
                            },
                            {
                                name: "Partha Protim Bora",
                                role: "College Student",
                                text: "I like having my tasks, study time and progress in one place.",
                            },
                            {
                                name: "Tilok chatre",
                                role: "Computer Science Student",
                                text: "The AI planning concept makes preparing for exams feel much more structured.",
                            },
                        ].map((student) => (
                            <div key={student.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                                <FaQuoteLeft className="text-2xl text-blue-200" />

                                <p className="mt-5 leading-7 text-slate-600">
                                    "{student.text}"
                                </p>

                                <div className="mt-6 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                                        {student.name.charAt(0)}
                                    </div>

                                    <div>
                                        <p className="font-bold">{student.name}</p>
                                        <p className="text-xs text-slate-400">{student.role}</p>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-1 text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar key={star} size={13} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* faq */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="text-center">
                        <span className="font-bold uppercase tracking-widest text-xl text-blue-600">
                            FAQ
                        </span>

                        <h2 className="mt-3 text-4xl font-black md:text-5xl">
                            Frequently asked questions
                        </h2>

                        <p className="mt-5 text-slate-500">
                            Everything you need to know about StudyBuddy.
                        </p>
                    </div>

                    <div className="mt-12 space-y-4">
                        {[
                            {
                                q: "What is StudyBuddy?",
                                a: "StudyBuddy is a student-focused platform for planning study sessions, managing tasks and tracking learning progress.",
                            },
                            {
                                q: "Can StudyBuddy create a study plan?",
                                a: "Yes. The AI planner can create a personalized roadmap using your subjects, available study time and exam dates.",
                            },
                            {
                                q: "Can I track my study progress?",
                                a: "Yes. Your dashboard can show completed tasks, study time and overall progress.",
                            },
                            {
                                q: "Is StudyBuddy suitable for college students?",
                                a: "Yes. The platform can be used to organize college subjects, assignments, exams and personal study goals.",
                            },
                        ].map((faq) => (
                            <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-900">
                                    {faq.q}
                                    <FaChevronDown className="transition group-open:rotate-180" />
                                </summary>

                                <p className="mt-4 max-w-3xl leading-7 text-slate-500">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
            {/* final call to action */}
            <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
                <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-green-700/20 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-2xl shadow-xl shadow-blue-600/30">
                        <FaGraduationCap />
                    </div>

                    <h2 className="mt-7 text-4xl font-black md:text-6xl">
                        Your goals deserve
                        <span className="text-blue-400"> a better plan.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        Organize your studies, build better habits and make
                        consistent progress with StudyBuddy.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link to="/Register" className="group flex items-center justify-center gap-3 rounded-xl bg-green-700 px-8 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-green-500">
                            Get Started
                            <FaArrowRight className="transition group-hover:translate-x-1" />
                        </Link>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

