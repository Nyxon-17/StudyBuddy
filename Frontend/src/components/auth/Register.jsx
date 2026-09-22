import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navebar from "../Navebar";
import Footer from "../Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Update form values
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Check password before creating account
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register Data:", formData);
  };

  return (
    <>
      <Navebar />

      <div className="mt-20 min-h-screen bg-white flex items-center justify-center px-3 sm:px-5 lg:px-8 py-4 sm:py-8">
        {/* Main container */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-lg lg:shadow-xl">

          {/* Left side */}
          <div className="hidden lg:flex relative bg-linear-to-br from-blue-50 via-white to-purple-50 p-8 xl:p-12 flex-col justify-between overflow-hidden min-h-170">
            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-28 -right-20 w-80 h-80 bg-purple-100 rounded-full opacity-60"></div>

            {/* Logo */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-green-700 flex items-center justify-center text-white shrink-0">
                <FaBookOpen size={20} />
              </div>

              <span className="text-2xl font-bold text-gray-900">
                Study<span className="text-blue-600">Buddy</span>
              </span>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-md py-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 my-0 bg-white border border-blue-100 px-2 py-2 rounded-2xl text-xl text-blue-600 font-medium shadow-sm mb-6 animate-float">
                <FaCheckCircle />
                <span>Your learning journey starts here</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Learn smarter.
                <br />
                <span className="text-blue-600">Grow faster.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base xl:text-lg leading-7 xl:leading-8">
                Create your StudyBuddy account and get access to smart study
                tools, personalized learning and everything you need to stay
                ahead.
              </p>

              {/* Feature cards */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <FaBookOpen />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Smart Learning
                    </h3>
                    <p className="text-sm text-gray-500">
                      Study according to your goals
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Track Your Progress
                    </h3>
                    <p className="text-sm text-gray-500">
                      See how far you have come
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom text */}
            <p className="relative z-10 text-sm text-gray-400">
              © 2026 StudyBuddy. Learn better, every day.
            </p>
          </div>

          {/* Right side */}
          <div className="bg-white flex items-center justify-center px-4 py-8 sm:px-8 sm:py-10 lg:px-10 xl:px-14 lg:py-12">
            <div className="w-full max-w-md">
              {/* Mobile logo */}
              <div className="lg:hidden flex items-center justify-center gap-3 mb-8 sm:mb-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-green-700 flex items-center justify-center text-white shrink-0">
                  <FaBookOpen size={18} />
                </div>

                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  Study<span className="text-blue-600">Buddy</span>
                </span>
              </div>

              {/* Heading */}
              <div className="mb-7 sm:mb-8">
                <p className="text-white font-bold text-xs sm:text-2xl mb-2 sm:mb-3 text-center font-sans bg-green-500 rounded-2xl mx-25 my-5 p-2">
                  GET STARTED
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Create your account
                </h2>

                <p className="text-sm sm:text-base text-gray-500 leading-6">
                  Start your personalized learning journey with StudyBuddy.
                </p>
              </div>

              {/* Register form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full name
                  </label>

                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      autoComplete="name"
                      className="w-full h-12 sm:h-13 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>

                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                      minLength={6}
                      autoComplete="new-password"
                      className="w-full h-12 sm:h-13 pl-11 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition text-sm sm:text-base"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm password
                  </label>

                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                      minLength={6}
                      autoComplete="new-password"
                      className="w-full h-12 sm:h-13 pl-11 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition text-sm sm:text-base"
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 accent-blue-600 shrink-0 cursor-pointer"
                  />

                  <p className="text-xs sm:text-sm text-gray-500 leading-5">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Create account */}
                <button
                  type="submit"
                  className="w-full h-12 sm:h-13 bg-green-700 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-blue-100 hover:shadow-blue-200 text-sm sm:text-base"
                >
                  Create Account
                  <FaArrowRight size={13} />
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 sm:gap-4 my-5 sm:my-6">
                <div className="flex-1 h-px bg-gray-200"></div>

                <span className="text-xs font-medium text-gray-400">OR</span>

                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Google register */}
              <button
                type="button"
                onClick={() => console.log("Continue with Google")}
                className="w-full h-12 sm:h-13 border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-3 transition text-sm sm:text-base"
              >
                <FcGoogle size={20} />
                <span>Continue with Google</span>
              </button>

              {/* Login link */}
              <div className="mt-6 sm:mt-7 text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              {/* Security note */}
              <div className="mt-7 sm:mt-8 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-gray-400">
                <FaLock size={10} />
                <span>Your information is securely protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;