import React, { useEffect, useRef, useState } from "react";
import {
    FaRobot,
    FaPaperPlane,
    FaPlus,
    FaClock,
    FaCheckCircle,
    FaCalendarAlt,
    FaMagic,
    FaChevronDown,
    FaRegLightbulb,
    FaBrain,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const StudyPlanner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [planCreated, setPlanCreated] = useState(false);

    const chatContainerRef = useRef(null);

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "ai",
            text: "Hey Sahid! 👋 I'm your StudyBuddy AI Agent.",
        },
        {
            id: 2,
            sender: "ai",
            text: "I'll help you create a realistic study plan based on your subjects, goals and available time.",
        },
        {
            id: 3,
            sender: "ai",
            text: "First, tell me what you want to achieve. For example: “I have semester exams next month and want to finish all my subjects.”",
        },
    ]);

    const suggestedQuestions = [
        "I have exams next month",
        "I can study 3 hours daily",
        "Help me finish Data Structures",
    ];

    const studyPlan = [
        {
            day: "Monday",
            date: "21 Sep",
            tasks: [
                {
                    time: "09:00 AM",
                    title: "Linked List",
                    subject: "Data Structures",
                    duration: "45 min",
                    color: "#6d28d9",
                },
                {
                    time: "11:00 AM",
                    title: "SQL Queries",
                    subject: "Database Management",
                    duration: "45 min",
                    color: "#ea580c",
                },
                {
                    time: "07:00 PM",
                    title: "JavaScript ES6",
                    subject: "Web Development",
                    duration: "30 min",
                    color: "#15803d",
                },
            ],
        },
        {
            day: "Tuesday",
            date: "22 Sep",
            tasks: [
                {
                    time: "09:00 AM",
                    title: "Stacks & Queues",
                    subject: "Data Structures",
                    duration: "60 min",
                    color: "#6d28d9",
                },
                {
                    time: "03:00 PM",
                    title: "Network Layer",
                    subject: "Computer Networks",
                    duration: "45 min",
                    color: "#be185d",
                },
            ],
        },
        {
            day: "Wednesday",
            date: "23 Sep",
            tasks: [
                {
                    time: "10:00 AM",
                    title: "React Components",
                    subject: "Web Development",
                    duration: "60 min",
                    color: "#15803d",
                },
                {
                    time: "07:00 PM",
                    title: "ER Model Revision",
                    subject: "Database Management",
                    duration: "30 min",
                    color: "#ea580c",
                },
            ],
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            chatContainerRef.current?.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 50);

        return () => clearTimeout(timer);
    }, [messages, isThinking]);

    const generatePlan = () => {
        setPlanCreated(true);
    };

    const sendMessage = (customMessage = "") => {
        const text = customMessage || message;

        if (!text.trim() || isThinking) return;

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: text.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setIsThinking(true);

        setTimeout(() => {
            const aiResponses = [
                "Got it! I'll take that into account when building your plan.",
                "That makes sense. I'll balance your difficult subjects with shorter revision sessions.",
                "Perfect. I have enough information to create a study plan for you.",
            ];

            const aiMessage = {
                id: Date.now() + 1,
                sender: "ai",
                text: aiResponses[
                    Math.floor(Math.random() * aiResponses.length)
                ],
            };

            setMessages((prev) => [...prev, aiMessage]);
            setIsThinking(false);

            setTimeout(() => {
                setPlanCreated(true);
            }, 700);
        }, 1400);
    };

    const AiIcon = () => (
        <div className="w-8 h-8 shrink-0 rounded-xl bg-[#ede9fe] text-[#6d28d9] flex items-center justify-center">
            <FaRobot size={13} />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#faf7f2] text-[#20202a]">
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div className="lg:ml-64 min-h-screen">
                <DashboardNavbar setIsOpen={setIsOpen} />

                <main className="pt-20 p-4 sm:p-6 lg:p-8">
                    {/* Page Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#ede9fe] text-[#6d28d9] flex items-center justify-center">
                                <FaMagic size={14} />
                            </div>

                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6d28d9]">
                                AI Study Planner
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Plan your studies with AI.
                        </h1>

                        <p className="text-sm text-[#77737d] mt-1">
                            Talk to your personal study agent and let it build your plan.
                        </p>
                    </div>

                    {/* AI Workspace */}
                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">

                        {/* Chat */}
                        <section className="xl:col-span-3 bg-[#fffdf9] border border-[#ebe7df] rounded-3xl overflow-hidden shadow-sm flex flex-col h-170 max-h-[calc(120vh-180px)] min-h-0">

                            {/* Agent Header */}
                            <div className="px-5 sm:px-6 py-4 border-b border-[#ebe7df] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-11 h-11 rounded-2xl bg-green-800 text-white flex items-center justify-center">
                                            <FaRobot size={18} />
                                        </div>

                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#22c55e] rounded-full border-2 border-[#fffdf9]" />
                                    </div>

                                    <div>
                                        <h2 className="font-bold text-sm">
                                            StudyBuddy AI
                                        </h2>

                                        <p className="text-xs text-[#22a05a] mt-0.5">
                                            Online · Ready to help
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-xl hover:bg-[#f5f1eb] text-[#96919a] flex items-center justify-center transition"
                                >
                                    <FaChevronDown size={12} />
                                </button>
                            </div>

                            {/* Chat Messages */}
                            <div
                                ref={chatContainerRef}
                                className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-6 space-y-5 study-scrollbar"
                            >
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex gap-3 ${
                                            msg.sender === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        {msg.sender === "ai" && <AiIcon />}

                                        <div className={`max-w-[82%] ${
                                            msg.sender === "user"
                                                ? "items-end"
                                                : "items-start"
                                        }`}>
                                            {msg.sender === "ai" && (
                                                <span className="text-[10px] font-bold text-[#96919a] uppercase tracking-wider">
                                                    StudyBuddy AI
                                                </span>
                                            )}

                                            <div
                                                className={`mt-1 px-4 py-3 rounded-2xl ${
                                                    msg.sender === "user"
                                                        ? "bg-green-800 text-white rounded-tr-sm"
                                                        : "bg-[#f5f1eb] text-[#45414a] rounded-tl-sm"
                                                }`}
                                            >
                                                <p className="text-sm leading-relaxed wrap-break-word">
                                                    {msg.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Thinking */}
                                {isThinking && (
                                    <div className="flex gap-3">
                                        <AiIcon />

                                        <div>
                                            <span className="text-[10px] font-bold text-[#96919a] uppercase tracking-wider">
                                                StudyBuddy AI
                                            </span>

                                            <div className="mt-1 bg-[#f5f1eb] rounded-2xl rounded-tl-sm px-5 py-4 flex gap-1">
                                                <span className="w-2 h-2 bg-[#aaa5a0] rounded-full animate-bounce" />
                                                <span className="w-2 h-2 bg-[#aaa5a0] rounded-full animate-bounce [animation-delay:150ms]" />
                                                <span className="w-2 h-2 bg-[#aaa5a0] rounded-full animate-bounce [animation-delay:300ms]" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Suggested Questions */}
                            <div className="px-4 sm:px-6 pb-3">
                                <div className="flex gap-2 overflow-x-auto pb-1">
                                    {suggestedQuestions.map((question) => (
                                        <button
                                            key={question}
                                            type="button"
                                            onClick={() => sendMessage(question)}
                                            disabled={isThinking}
                                            className="whitespace-nowrap shrink-0 px-3 py-2 rounded-xl border border-[#ebe7df] bg-white text-[11px] font-medium text-[#77737d] hover:border-[#c4b5fd] hover:bg-[#faf7ff] hover:text-[#6d28d9] disabled:opacity-50 disabled:cursor-not-allowed transition"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input */}
                            <div className="p-4 sm:p-5 border-t border-[#ebe7df]">
                                <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#f5f1eb] border border-[#ebe7df] focus-within:border-[#c4b5fd] focus-within:ring-2 focus-within:ring-[#ede9fe] transition">
                                    <button
                                        type="button"
                                        className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-[#96919a] hover:bg-white hover:text-[#6d28d9] transition"
                                    >
                                        <FaPlus size={13} />
                                    </button>

                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                sendMessage();
                                            }
                                        }}
                                        placeholder="Tell your AI agent about your study goals..."
                                        className="flex-1 min-w-0 bg-transparent outline-none text-sm text-[#20202a] placeholder:text-[#aaa5a0]"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => sendMessage()}
                                        disabled={!message.trim() || isThinking}
                                        className="w-10 h-10 shrink-0 rounded-xl bg-[#6d28d9] text-white flex items-center justify-center hover:bg-[#5b21b6] disabled:opacity-30 disabled:cursor-not-allowed transition"
                                    >
                                        <FaPaperPlane size={13} />
                                    </button>
                                </div>

                                <p className="text-[10px] text-[#aaa5a0] text-center mt-2">
                                    AI-generated plans are suggestions. You can modify them anytime.
                                </p>
                            </div>
                        </section>

                        {/* AI Plan */}
                        <section className="xl:col-span-2 bg-[#fffdf9] border border-[#ebe7df] rounded-3xl overflow-hidden shadow-sm">

                            {/* Plan Header */}
                            <div className="px-5 sm:px-6 py-5 border-b border-[#ebe7df]">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt
                                                className="text-[#6d28d9]"
                                                size={14}
                                            />

                                            <h2 className="font-bold">
                                                Your AI Plan
                                            </h2>
                                        </div>

                                        <p className="text-xs text-[#96919a] mt-1">
                                            Generated for your current goals
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="px-3 py-2 rounded-lg bg-[#f5f1eb] text-[10px] font-bold text-[#77737d] hover:bg-[#ede9fe] hover:text-[#6d28d9] transition"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>

                            {!planCreated ? (
                                <div className="px-6 py-16 text-center">
                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ede9fe] text-[#6d28d9] flex items-center justify-center mb-4">
                                        <FaMagic size={22} />
                                    </div>

                                    <h3 className="font-bold">
                                        Your plan will appear here
                                    </h3>

                                    <p className="text-xs text-[#96919a] max-w-xs mx-auto mt-2 leading-relaxed">
                                        Tell the AI agent about your exams,
                                        subjects and available study time.
                                        It will build your personalized schedule.
                                    </p>

                                    <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[#6d28d9]">
                                        <FaRegLightbulb />
                                        <span>Start by answering the AI</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-5">

                                    {/* Plan Status */}
                                    <div className="mb-5 p-4 rounded-2xl bg-[#ecfdf5] border border-[#bbf7d0]">
                                        <div className="flex items-center gap-2 text-[#15803d]">
                                            <FaCheckCircle />

                                            <span className="text-xs font-bold">
                                                AI plan generated
                                            </span>
                                        </div>

                                        <p className="text-xs text-[#4b5563] mt-1">
                                            3 days planned · 5h 15m total study time
                                        </p>
                                    </div>

                                    {/* Plan Days */}
                                    <div className="space-y-5">
                                        {studyPlan.map((day) => (
                                            <div key={day.day}>
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-sm font-bold">
                                                            {day.day}
                                                        </h3>

                                                        <p className="text-[10px] text-[#96919a]">
                                                            {day.date}
                                                        </p>
                                                    </div>

                                                    <span className="text-[10px] font-semibold text-[#96919a]">
                                                        {day.tasks.length} sessions
                                                    </span>
                                                </div>

                                                <div className="space-y-2">
                                                    {day.tasks.map((task) => (
                                                        <div
                                                            key={`${day.day}-${task.title}`}
                                                            className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5f0] border border-[#eee9e2]"
                                                        >
                                                            <div
                                                                className="w-1 self-stretch rounded-full"
                                                                style={{
                                                                    backgroundColor:
                                                                        task.color,
                                                                }}
                                                            />

                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-xs font-bold truncate">
                                                                    {task.title}
                                                                </p>

                                                                <p className="text-[10px] text-[#96919a] mt-0.5">
                                                                    {task.subject}
                                                                </p>
                                                            </div>

                                                            <div className="text-right shrink-0">
                                                                <p className="text-[10px] font-semibold text-[#55515a]">
                                                                    {task.time}
                                                                </p>

                                                                <div className="flex items-center justify-end gap-1 text-[9px] text-[#aaa5a0] mt-0.5">
                                                                    <FaClock size={8} />
                                                                    {task.duration}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Regenerate */}
                                    <button
                                        type="button"
                                        onClick={generatePlan}
                                        className="w-full mt-5 py-3 rounded-xl border border-[#d8d2ca] text-xs font-semibold text-[#77737d] hover:border-[#6d28d9] hover:text-[#6d28d9] hover:bg-[#faf7ff] transition"
                                    >
                                        <FaMagic className="inline mr-2" />
                                        Regenerate with AI
                                    </button>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* AI Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">

                        <div className="bg-[#fffdf9] border border-[#ebe7df] rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#ede9fe] text-[#6d28d9] flex items-center justify-center">
                                <FaBrain size={15} />
                            </div>

                            <div>
                                <p className="text-xs font-bold">
                                    Understands your goals
                                </p>

                                <p className="text-[10px] text-[#96919a] mt-0.5">
                                    AI adapts to your needs
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#fffdf9] border border-[#ebe7df] rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center">
                                <FaClock size={15} />
                            </div>

                            <div>
                                <p className="text-xs font-bold">
                                    Fits your schedule
                                </p>

                                <p className="text-[10px] text-[#96919a] mt-0.5">
                                    No unrealistic study plans
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#fffdf9] border border-[#ebe7df] rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] text-[#15803d] flex items-center justify-center">
                                <FaCheckCircle size={15} />
                            </div>

                            <div>
                                <p className="text-xs font-bold">
                                    Tracks your progress
                                </p>

                                <p className="text-[10px] text-[#96919a] mt-0.5">
                                    Plans change as you improve
                                </p>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default StudyPlanner;