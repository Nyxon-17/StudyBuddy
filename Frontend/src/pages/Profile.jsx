import React, { useEffect, useRef, useState } from "react";
import {
    FaCamera,
    FaCheck,
    FaEnvelope,
    FaUser,
    FaEdit,
    FaGraduationCap,
    FaShieldAlt,
    FaBookOpen,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const PROFILE_BACKGROUND =
    "https://m.gettywallpapers.com/wp-content/uploads/2023/06/Purple-Profile-Picture.jpg";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Abdul Sahid");
    const [email, setEmail] = useState("abdul@example.com");
    const [profileImage, setProfileImage] = useState(null);
    const [saved, setSaved] = useState(false);

    const fileInputRef = useRef(null);

    const getInitials = (value) => {
        const words = value.trim().split(/\s+/).filter(Boolean);

        if (!words.length) return "U";
        if (words.length === 1) {
            return words[0].charAt(0).toUpperCase();
        }

        return (
            words[0].charAt(0) + words[words.length - 1].charAt(0)
        ).toUpperCase();
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setProfileImage((previousImage) => {
            if (previousImage) {
                URL.revokeObjectURL(previousImage);
            }

            return imageUrl;
        });

        setSaved(false);
        e.target.value = "";
    };

    const handleSave = () => {
        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 2500);
    };

    useEffect(() => {
        return () => {
            if (profileImage) {
                URL.revokeObjectURL(profileImage);
            }
        };
    }, [profileImage]);

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#292522]">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64">
                <DashboardNavbar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />

                <main className="px-5 py-6 md:px-8 lg:px-10">
                    <div className="mx-auto max-w-5xl">
                        {/* Profile Card */}
                        <div className="overflow-hidden rounded-4xl border border-[#eeeae4] bg-white shadow-sm">
                            {/* Cover */}

                            <div>
                                <div className="absolute right-16 z-50 top-30 w-30 h-30 bg-green-500/50 animate-float rounded-full"></div>
                                <div className="absolute right-60 z-50 top-30 w-20 h-20 bg-green-500/50 animate-float rounded-full"></div>
                                <div className="absolute left-200 top-50 z-50 w-15 h-15 bg-indigo-500/50 animate-floatReverse rounded-full"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 left-250 top-60 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 left-225 top-40 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-1 w-1 bg-white opacity-50 left-210 top-65 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 right-200 top-50 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 left-250 top-50 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-1 w-1 bg-white opacity-50 left-150 top-40 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 left-150 bottom-50 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 right-230 bottom-36 animate-ping z-50"></div>
                                <div className="absolute rounded-full h-2 w-2 bg-white opacity-50 right-30 bottom-50 animate-ping z-50"></div>

                                <div

                                    className="relative h-52 overflow-hidden bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${PROFILE_BACKGROUND}')`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/20" />

                                    <div className="absolute left-7 top-7 z-10">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                            StudyBuddy Profile
                                        </p>

                                        <h2 className="mt-2 max-w-md text-2xl font-bold text-white">
                                            Your learning identity, your way.
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Summary */}
                            <div className="relative px-6 pb-7 md:px-8">
                                <div className="-mt-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                    {/* Avatar */}
                                    <div className="relative">
                                        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-[30px] border-8 border-white bg-[#9a7bff] shadow-lg">
                                            {profileImage ? (
                                                <img
                                                    src={profileImage}
                                                    alt="Profile"
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-4xl font-bold text-white">
                                                    {getInitials(name)}
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            onClick={() =>
                                                fileInputRef.current?.click()
                                            }
                                            className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-xl border-4 border-white bg-[#302b38] text-white transition hover:bg-[#423c4c]"
                                            title="Change profile picture"
                                        >
                                            <FaCamera size={13} />
                                        </button>

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </div>

                                    {/* User Info */}
                                    <div className="flex-1 sm:pb-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h2 className="text-2xl font-bold">
                                                {name || "Your Name"}
                                            </h2>

                                            <span className="flex items-center gap-1 rounded-full bg-[#f1faf3] px-2.5 py-1 text-[10px] font-bold text-[#65a872]">
                                                <FaCheck size={8} />
                                                STUDENT
                                            </span>
                                        </div>

                                        <p className="mt-1 text-sm text-[#99928d]">
                                            {email}
                                        </p>
                                    </div>
                                </div>

                                {/* Profile Stats */}
                                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    <div className="rounded-2xl bg-[#faf9f6] p-4">
                                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#eee9ff] text-[#8c70e8]">
                                            <FaGraduationCap size={14} />
                                        </div>

                                        <p className="text-xs text-[#99928d]">
                                            Account type
                                        </p>

                                        <p className="mt-1 text-sm font-bold">
                                            Student
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#fff5eb] p-4">
                                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#e98a4d]">
                                            <FaBookOpen />
                                        </div>

                                        <p className="text-xs text-[#99928d]">
                                            Learning
                                        </p>

                                        <p className="mt-1 text-sm font-bold">
                                            Active
                                        </p>
                                    </div>

                                    <div className="col-span-2 rounded-2xl bg-[#f1faf3] p-4 sm:col-span-1">
                                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#65a872]">
                                            <FaShieldAlt size={14} />
                                        </div>

                                        <p className="text-xs text-[#99928d]">
                                            Profile
                                        </p>

                                        <p className="mt-1 text-sm font-bold">
                                            Protected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="mt-6 rounded-[30px] border border-[#eeeae4] bg-white p-6 md:p-8">
                            <div className="mb-7 flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">
                                        Personal Information
                                    </h2>

                                    <p className="mt-1 text-sm text-[#99928d]">
                                        Update the information connected to
                                        your StudyBuddy account.
                                    </p>
                                </div>

                                <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#eee9ff] text-[#8c70e8] sm:flex">
                                    <FaEdit size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Name */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Full Name
                                    </label>

                                    <div className="relative">
                                        <FaUser
                                            size={13}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aaa39d]"
                                        />

                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setSaved(false);
                                            }}
                                            placeholder="Enter your name"
                                            className="w-full rounded-2xl border border-[#e7e2dc] bg-[#faf9f6] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#9a7bff] focus:bg-white"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Email Address
                                    </label>

                                    <div className="relative">
                                        <FaEnvelope
                                            size={13}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aaa39d]"
                                        />

                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setSaved(false);
                                            }}
                                            placeholder="Enter your email"
                                            className="w-full rounded-2xl border border-[#e7e2dc] bg-[#faf9f6] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#9a7bff] focus:bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Save */}
                            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                                {saved && (
                                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#65a872]">
                                        <FaCheck size={11} />
                                        Changes saved
                                    </div>
                                )}

                                <button
                                    onClick={handleSave}
                                    className="rounded-2xl bg-[#302b38] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#423c4c]"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        {/* Profile Picture */}
                        <div className="mt-6 rounded-[30px] border border-[#eeeae4] bg-white p-6 md:p-8">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#9a7bff] text-2xl font-bold text-white">
                                    {profileImage ? (
                                        <img
                                            src={profileImage}
                                            alt="Profile preview"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        getInitials(name)
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-bold">
                                        Profile Picture
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-[#99928d]">
                                        Upload a profile picture or continue
                                        using your initials. JPG, PNG or WEBP
                                        recommended.
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="rounded-2xl border border-[#e7e2dc] px-5 py-3 text-sm font-semibold transition hover:border-[#9a7bff] hover:bg-[#faf9f6]"
                                >
                                    Change Picture
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;