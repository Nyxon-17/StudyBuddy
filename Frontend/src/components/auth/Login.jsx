import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaBookOpen,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaArrowRight,
    FaShieldAlt,
    FaCheckCircle,
    FaClock,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Footer from "../Footer";
import Navebar from "../Navebar";

const Login = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 1000);
    };

    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        setOtp((prev) => {
            const newOtp = [...prev];
            newOtp[index] = value;
            return newOtp;
        });

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();

        const enteredOtp = otp.join("");

        if (enteredOtp.length !== 6) {
            alert("Please enter the complete 6-digit OTP");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate("/dashboard");
        }, 1000);
    };

    const handleResendOtp = () => {
        console.log("OTP resent to:", formData.email);
        alert("A new OTP has been sent to your email.");
    };

    return (
        <>
            <Navebar />

            <div className="min-h-screen mt-20 bg-gray-50 flex items-center justify-center px-3 sm:px-5 lg:px-8 py-4 sm:py-8">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-xl">

                    {/* Login Section */}
                    <div className="flex flex-col px-5 py-7 sm:px-8 sm:py-10 lg:px-12 xl:px-16 lg:py-12">

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-10 lg:mb-14">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                <FaBookOpen size={19} />
                            </div>

                            <span className="text-xl sm:text-2xl font-bold text-gray-900">
                                Study<span className="text-blue-600">Buddy</span>
                            </span>
                        </div>

                        {/* Form Content */}
                        <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">

                            {step === 1 ? (
                                <>
                                    {/* Heading */}
                                    <div className="mb-7 sm:mb-8">
                                        <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-2">
                                            WELCOME BACK
                                        </p>

                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            Sign in to StudyBuddy
                                        </h1>

                                        <p className="text-sm sm:text-base text-gray-500 leading-6">
                                            Enter your details to continue your learning journey.
                                        </p>
                                    </div>

                                    {/* Login Form */}
                                    <form onSubmit={handleLogin} className="space-y-5">

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email address
                                            </label>

                                            <div className="relative">
                                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    required
                                                    autoComplete="email"
                                                    className="w-full h-12 sm:h-13 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition text-sm sm:text-base"
                                                />
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="text-sm font-medium text-gray-700">
                                                    Password
                                                </label>

                                                <Link
                                                    to="/forgot-password"
                                                    className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700"
                                                >
                                                    Forgot password?
                                                </Link>
                                            </div>

                                            <div className="relative">
                                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    placeholder="Enter your password"
                                                    required
                                                    autoComplete="current-password"
                                                    className="w-full h-12 sm:h-13 pl-11 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition text-sm sm:text-base"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1"
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Remember Me */}
                                        <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 accent-blue-600"
                                            />
                                            Remember me
                                        </label>

                                        {/* Continue */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full h-12 sm:h-13 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition shadow-lg shadow-blue-100"
                                        >
                                            {loading ? (
                                                "Sending OTP..."
                                            ) : (
                                                <>
                                                    Continue
                                                    <FaArrowRight size={13} />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {/* Divider */}
                                    <div className="flex items-center gap-3 my-6">
                                        <div className="flex-1 h-px bg-gray-200" />

                                        <span className="text-xs text-gray-400 font-medium">
                                            OR
                                        </span>

                                        <div className="flex-1 h-px bg-gray-200" />
                                    </div>

                                    {/* Google Login */}
                                    <button
                                        type="button"
                                        onClick={() => console.log("Continue with Google")}
                                        className="w-full h-12 sm:h-13 border border-gray-200 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base font-semibold text-gray-700 hover:bg-gray-50 transition"
                                    >
                                        <FcGoogle size={20} />
                                        Continue with Google
                                    </button>

                                    {/* Register */}
                                    <div className="text-center mt-6">
                                        <p className="text-sm text-gray-500">
                                            Don't have an account?{" "}
                                            <Link
                                                to="/register"
                                                className="font-semibold text-blue-600 hover:text-blue-700"
                                            >
                                                Create account
                                            </Link>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Back */}
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="text-sm text-gray-500 hover:text-blue-600 mb-6 flex items-center gap-2"
                                    >
                                        ← Back to login
                                    </button>

                                    {/* OTP Headig */}
                                    <div className="mb-7">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                                            <FaShieldAlt size={22} />
                                        </div>

                                        <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-2">
                                            VERIFY YOUR ACCOUNT
                                        </p>

                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                            Enter verification code
                                        </h1>

                                        <p className="text-sm sm:text-base text-gray-500 leading-6">
                                            We sent a 6-digit verification code to
                                            <br />
                                            <span className="font-semibold text-gray-700 break-all">
                                                {formData.email}
                                            </span>
                                        </p>
                                    </div>

                                    {/* OTP Form */}
                                    <form onSubmit={handleVerifyOtp}>
                                        <div className="flex justify-between gap-2 sm:gap-3 mb-6">
                                            {otp.map((digit, index) => (
                                                <input
                                                    key={index}
                                                    id={`otp-${index}`}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) =>
                                                        handleOtpChange(e.target.value, index)
                                                    }
                                                    onKeyDown={(e) =>
                                                        handleOtpKeyDown(e, index)
                                                    }
                                                    className="w-11 h-12 sm:w-13 sm:h-14 text-center text-lg sm:text-xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition"
                                                />
                                            ))}
                                        </div>

                                        {/* Timer */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                                                <FaClock />
                                                <span>Code expires in 05:00</span>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={handleResendOtp}
                                                className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
                                            >
                                                Resend OTP
                                            </button>
                                        </div>

                                        {/* Verify */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full h-12 sm:h-13 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition shadow-lg shadow-blue-100"
                                        >
                                            {loading ? (
                                                "Verifying..."
                                            ) : (
                                                <>
                                                    Verify & Continue
                                                    <FaArrowRight size={13} />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {/* Security */}
                                    <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">
                                        <FaLock size={10} />
                                        Your account is securely protected
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Footer Links */}
                        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                            <span>© 2026 StudyBuddy</span>

                            <div className="flex gap-4">
                                <Link to="/privacy" className="hover:text-gray-600">
                                    Privacy
                                </Link>

                                <Link to="/terms" className="hover:text-gray-600">
                                    Terms
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="hidden lg:flex relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-600 to-indigo-700 p-10 xl:p-14 text-white flex-col justify-between min-h-175">

                        {/* Background Decorations */}
                        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10" />
                        <div className="absolute -bottom-30 -left-25 w-96 h-96 rounded-full bg-indigo-400/20" />
                        <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-white/5" />

                        {/* Content */}
                        <div className="relative z-10 max-w-lg">
                            <div className="inline-flex items-center gap-2 my-0 bg-white border border-blue-100 px-2 py-2 rounded-2xl text-xl text-blue-600 font-medium shadow-sm mb-6 animate-float">
                                <FaCheckCircle />
                                <span>Learn smarter with StudyBuddy</span>
                            </div>

                            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-5">
                                Your learning.
                                <br />
                                <span className="text-blue-100">
                                    Your progress.
                                </span>
                            </h2>

                            <p className="text-blue-100 text-base xl:text-lg leading-8 max-w-md">
                                Stay organized, track your progress and build better
                                study habits with your personal learning companion.
                            </p>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="relative z-10 mt-10 animate-floatDelay">
                            <div className="bg-white rounded-2xl p-4 shadow-2xl transform lg:rotate-1">

                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Study Overview
                                        </p>

                                        <h3 className="text-lg font-bold text-gray-900">
                                            Your Progress
                                        </h3>
                                    </div>

                                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                        <FaBookOpen size={15} />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <div className="bg-blue-50 rounded-xl p-3">
                                        <p className="text-[10px] text-gray-500">
                                            Study Time
                                        </p>

                                        <p className="text-sm font-bold text-gray-900">
                                            12.5h
                                        </p>
                                    </div>

                                    <div className="bg-purple-50 rounded-xl p-3">
                                        <p className="text-[10px] text-gray-500">
                                            Courses
                                        </p>

                                        <p className="text-sm font-bold text-gray-900">
                                            08
                                        </p>
                                    </div>

                                    <div className="bg-green-50 rounded-xl p-3">
                                        <p className="text-[10px] text-gray-500">
                                            Progress
                                        </p>

                                        <p className="text-sm font-bold text-gray-900">
                                            78%
                                        </p>
                                    </div>
                                </div>

                                {/* Progress */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs text-gray-500">
                                            Weekly progress
                                        </span>

                                        <span className="text-xs font-semibold text-blue-600">
                                            78%
                                        </span>
                                    </div>

                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="w-[78%] h-full bg-blue-600 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security */}
                        <div className="relative z-10 flex items-center gap-3 mt-8">
                            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                                <FaShieldAlt size={14} />
                            </div>

                            <p className="text-sm text-blue-100">
                                Secure learning experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Login;