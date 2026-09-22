import React, { useEffect, useState } from "react";
import study from "../assets/study.png";
import {
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaPlay,
  FaRobot,
  FaBookOpen,
  FaLightbulb,
} from "react-icons/fa";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";

const About = () => {
  const words = ["Plan", "Learn", "Track", "Achieve"];
  const [wordIndex, setWordIndex] = useState(0);

  // Change the highlighted word every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navebar />

      <div className="bg-white text-slate-900 overflow-hidden">

        {/* Hero section */}
        <section className="relative min-h-screen flex items-center bg-blue-50">

          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-10"
          >
            <source
              src="https://media.istockphoto.com/id/2151261126/video/an-adult-hispanic-woman-with-glasses-focused-on-coding-on-dual-monitors-working-late-at-night.mp4?s=mp4-640x640-is&k=20&c=lN7NNU6rXSXhy5vcIHTPQoLTB4hxxHKNJNIyg-__fRs="
              type="video/mp4"
            />
          </video>

          {/* Light overlay and gradient */}
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="absolute inset-0 bg-linear-to-br from-blue-50/90 via-white/80 to-indigo-50/90"></div>

          {/* Decorative glow */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full"></div>

          {/* Hero content */}
          <div className="relative z-10 max-w-6xl mx-auto my-5 px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

              {/* Hero text */}
              <div className="w-full">
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
                  Your study.
                  <br />
                  Your{" "}
                  <span key={wordIndex} className="inline-block text-blue-600 animate-slideUp">
                    {words[wordIndex]}
                  </span>
                  <span className="text-slate-900">.</span>
                </h1>

                <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                  StudyBuddy helps students organize their studies,
                  build smarter routines, track progress and create
                  personalized study plans with AI.
                </p>

                {/* Hero buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                  <button className="group flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 bg-green-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300">
                    Start Learning
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative block w-full px-4 md:px-0 md: sm:px-8 mt-12 lg:mt-0">
                <div className="relative w-full max-w-xl mx-auto">

                  {/* Image background glow */}
                  <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-blue-500/20 to-purple-500/20 blur-2xl"></div>

                  {/* Main image */}
                  <div className="relative h-full rounded-[3rem] border border-slate-200 bg-white/70 backdrop-blur-xl overflow-hidden shadow-xl">
                    <img
                      src={study}
                      alt="Student studying"
                      className="w-full h-auto object-cover opacity-90"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                      <p className="text-xs sm:text-sm text-blue-200 mb-2 tracking-wider">
                        STUDY SMARTER
                      </p>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">
                        Make every hour count.
                      </h3>
                    </div>
                  </div>

                  {/* AI planner card */}
                  <div className="absolute top-6 sm:top-10 xl:top-16 -left-2 sm:-left-6 xl:-left-12 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-2.5 sm:p-4 flex items-center gap-3 animate-float shadow-xl">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <FaBrain className="text-blue-600 text-sm sm:text-base" />
                    </div>

                    <div>
                      <p className="text-[10px] sm:text-xs text-slate-400">
                        AI Planner
                      </p>

                      <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 whitespace-nowrap">
                        Plan generated
                      </p>
                    </div>
                  </div>

                  {/* Progress card */}
                  <div className="absolute bottom-10 sm:bottom-16 xl:bottom-24 -right-2 sm:-right-6 xl:-right-10 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-2.5 sm:p-4 flex items-center gap-3 animate-floatReverse shadow-xl">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <FaCheckCircle className="text-green-500 text-sm sm:text-base" />
                    </div>

                    <div>
                      <p className="text-[10px] sm:text-xs text-slate-400">
                        Today's progress
                      </p>

                      <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 whitespace-nowrap">
                        82% completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-xs tracking-[0.3em]">
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* Intro section */}
        <section className="relative py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-blue-600 uppercase tracking-[0.3em] text-sm font-bold mb-5">
                  Why StudyBuddy
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  Studying shouldn't feel
                  <span className="text-blue-600"> overwhelming.</span>
                </h2>
              </div>

              <div>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Students often struggle with planning, deadlines,
                  distractions and knowing what to study next.
                  StudyBuddy brings everything into one simple
                  learning space.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-28 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">

            <div className="mb-16">
              <p className="text-blue-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                One platform
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Everything you need to study better.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* AI study plans */}
              <div className="group p-7 rounded-3xl bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 shadow-sm">
                <FaRobot className="text-3xl text-blue-600 mb-8" />

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  AI Study Plans
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  Generate personalized study schedules based
                  on your subjects, time and goals.
                </p>
              </div>

              {/* Smart planning */}
              <div className="group p-7 rounded-3xl bg-white border border-slate-200 hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-2 transition-all duration-500 shadow-sm">
                <FaClock className="text-3xl text-purple-600 mb-8" />

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Smart Planning
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  Organize your study sessions and manage
                  deadlines without confusion.
                </p>
              </div>

              {/* Progress tracking */}
              <div className="group p-7 rounded-3xl bg-white border border-slate-200 hover:bg-green-50 hover:border-green-200 hover:-translate-y-2 transition-all duration-500 shadow-sm">
                <FaChartLine className="text-3xl text-green-600 mb-8" />

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Track Progress
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  See your completed tasks and understand
                  how your study habits are improving.
                </p>
              </div>

              {/* Study notes */}
              <div className="group p-7 rounded-3xl bg-white border border-slate-200 hover:bg-yellow-50 hover:border-yellow-200 hover:-translate-y-2 transition-all duration-500 shadow-sm">
                <FaBookOpen className="text-3xl text-yellow-600 mb-8" />

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Study Notes
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  Keep important notes organized and easily
                  accessible while studying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-20">
              <p className="text-blue-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Simple process
              </p>

              <h2 className="text-4xl sm:text-6xl font-bold text-slate-900">
                From confusion to clarity.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Step 1 */}
              <div className="relative">
                <span className="text-7xl font-black text-slate-100">
                  01
                </span>

                <div className="-mt-5 relative">
                  <FaLightbulb className="text-3xl text-blue-600 mb-5" />

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    Set your goals
                  </h3>

                  <p className="text-slate-500">
                    Add your subjects, exams and available
                    study hours.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="text-7xl font-black text-slate-100">
                  02
                </span>

                <div className="-mt-5 relative">
                  <FaBrain className="text-3xl text-purple-600 mb-5" />

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    Let AI plan
                  </h3>

                  <p className="text-slate-500">
                    StudyBuddy creates a personalized
                    plan for your goals.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="text-7xl font-black text-slate-100">
                  03
                </span>

                <div className="-mt-5 relative">
                  <FaChartLine className="text-3xl text-green-600 mb-5" />

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    Track & improve
                  </h3>

                  <p className="text-slate-500">
                    Complete tasks and watch your progress
                    grow every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;