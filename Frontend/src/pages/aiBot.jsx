import React, { useEffect, useRef, useState } from "react";
import {
    FaRobot,
    FaPaperPlane,
    FaPlus,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const AiBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isThinking, setIsThinking] = useState(false);

    const messagesEndRef = useRef(null);

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

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages, isThinking]);

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
        }, 1400);
    };

    const AiIcon = () => (
        <div className="w-8 h-8 shrink-0 rounded-xl bg-[#ede9fe] text-[#6d28d9] flex items-center justify-center">
            <FaRobot size={13} />
        </div>
    );

    return (
        <div className="h-screen overflow-hidden bg-[#faf7f2] text-[#20202a]">
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div className="lg:ml-64 h-screen flex flex-col overflow-hidden">
                <DashboardNavbar setIsOpen={setIsOpen} />

                <section className="flex-1 min-h-0 mx-4 my-30 lg:mx-60 lg:my-5 bg-linear-to-r from-[#621182] to-[#9333ea] text-white border border-black rounded-2xl overflow-hidden shadow-sm flex flex-col">

                    {/* Header */}
                    <div className="shrink-0 px-5 sm:px-6 py-4 border-b border-white/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-11 h-11 rounded-2xl bg-[#20202a] text-white flex items-center justify-center">
                                    <FaRobot size={18} />
                                </div>

                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#22c55e] rounded-full border-2 border-[#fffdf9]" />
                            </div>

                            <div>
                                <h2 className="font-bold text-sm">
                                    StudyBuddy AI
                                </h2>

                                <p className="text-xs text-[#a7f3d0] mt-0.5">
                                    Online · Ready to help
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 min-h-0 px-4 sm:px-6 py-6 space-y-5 overflow-y-auto overscroll-contain study-scrollbar">
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

                                <div
                                    className={`max-w-[82%] ${
                                        msg.sender === "user"
                                            ? "items-end"
                                            : "items-start"
                                    }`}
                                >
                                    {msg.sender === "ai" && (
                                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
                                            StudyBuddy AI
                                        </span>
                                    )}

                                    <div
                                        className={`mt-1 px-4 py-3 rounded-2xl ${
                                            msg.sender === "user"
                                                ? "bg-[#20202a] text-white rounded-tr-sm"
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
                                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
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

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions */}
                    <div className="shrink-0 px-4 sm:px-6 pb-3">
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                            {suggestedQuestions.map((question) => (
                                <button
                                    key={question}
                                    type="button"
                                    onClick={() => sendMessage(question)}
                                    className="whitespace-nowrap shrink-0 px-3 py-2 rounded-xl border border-[#ebe7df] bg-white text-[11px] font-medium text-[#77737d] hover:border-[#c4b5fd] hover:bg-[#faf7ff] hover:text-[#6d28d9] transition"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="shrink-0 p-2 sm:p-3 border-t border-white/20">
                        <div className="flex items-center gap-2 rounded-2xl bg-[#f5f1eb] border border-[#ebe7df] focus-within:border-[#c4b5fd] focus-within:ring-2 focus-within:ring-[#ede9fe] transition">
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
                                className="min-w-0 flex-1 outline-none bg-transparent text-[#20202a] text-sm placeholder:text-[#aaa5a0]"
                            />

                            <button
                                type="button"
                                onClick={() => sendMessage()}
                                disabled={!message.trim() || isThinking}
                                className="w-7 h-7 shrink-0 rounded-sm bg-[#6d28d9] text-white flex items-center justify-center hover:bg-[#5b21b6] disabled:opacity-30 disabled:cursor-not-allowed transition mr-2"
                            >
                                <FaPaperPlane size={13} />
                            </button>
                        </div>

                        <p className="text-[10px] text-white/50 text-center mt-2">
                            AI-generated plans are suggestions. You can modify them anytime.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AiBot;