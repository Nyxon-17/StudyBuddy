import React, { useState } from "react";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Update the form values as the user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navebar />

      <div className="min-h-screen bg-[#f8faff] text-gray-900">

        {/* hero section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 pt-20 pb-12 md:pt-28 md:pb-16 relative">
            <div className="max-w-3xl">

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Let's make your
                <span className="text-blue-600"> study journey </span>
                better.
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl">
                Have a question, suggestion, or need help with StudyBuddy?
                Send us a message and our team will get back to you.
              </p>
            </div>
          </div>
        </section>

        {/* contact section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">

              {/* Contact information */}
              <div className="lg:col-span-2">
                <div className="h-full rounded-3xl bg-gray-900 p-7 md:p-9 text-white relative overflow-hidden">

                  {/* Designd circles */}
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-green-500/50 animate-float rounded-full"></div>
                  <div className="absolute -left-20 bottom-0 w-56 h-56 bg-indigo-500/50 animate-floatReverse rounded-full"></div>
                  <div className="absolute right-20 bottom-60 w-21 h-21 bg-indigo-200/10 animate-float rounded-full"></div>
                  <div className="absolute left-30 top-26 w-16 h-16 bg-blue-300/20 animate-floatReverse rounded-full"></div>

                  <div className="relative z-10">
                    <span className="text-blue-600 text-xl font-bold uppercase tracking-wider">
                      Get in touch
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                      We'd love to hear from you.
                    </h2>

                    <p className="mt-4 text-gray-400 leading-7">
                      Whether you have a question about StudyBuddy, want to
                      suggest a feature, or just want to say hello, our inbox
                      is open.
                    </p>

                    {/* email */}
                    <div className="mt-10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-400"
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
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="mt-1 font-medium">
                          hello@studybuddy.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="mt-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-400"
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
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="mt-1 font-medium">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    {/* Office address */}
                    <div className="mt-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21s8-4.35 8-11a8 8 0 10-16 0c0 6.65 8 11 8 11z"
                          />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">Office</p>
                        <p className="mt-1 font-medium">
                          Assam, India
                        </p>
                      </div>
                    </div>

                    {/* Response time */}
                    <div className="mt-12 p-5 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-400">
                        Average response time
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        Under 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 md:p-10">

                  <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                      Send us a message
                    </h2>

                    <p className="mt-2 text-gray-500">
                      Fill in the form below and we'll get back to you.
                    </p>
                  </div>

                  {/* Success message */}
                  {submitted && (
                    <div className="mb-6 flex items-center gap-3 rounded-2xl bg-green-50 border border-green-200 px-4 py-4 text-green-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="font-medium">
                        Message sent successfully!
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>

                    {/* Name and email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Your Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mt-5">
                      <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Subject
                      </label>

                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What do you want to talk about?"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
                      />
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                      <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="7"
                        placeholder="Write your message here..."
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition resize-none"
                      ></textarea>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-700 text-white font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
                    >
                      Send Message

                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}