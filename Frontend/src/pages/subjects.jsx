import React, { useMemo, useState } from "react";
import {
    FaPlus,
    FaSearch,
    FaBookOpen,
    FaCheck,
    FaClock,
    FaArrowRight,
    FaTimes,
    FaGraduationCap,
    FaChartLine,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const Subjects = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [subjects, setSubjects] = useState([
        {
            id: 1,
            name: "Data Structures",
            short: "DS",
            color: "purple",
            progress: 72,
            currentTopic: "Linked List",
            previousTopic: "Arrays",
            topics: [
                { name: "Introduction to Data Structures", completed: true },
                { name: "Arrays", completed: true },
                { name: "Linked List", completed: false },
                { name: "Stack", completed: false },
                { name: "Queue", completed: false },
            ],
        },
        {
            id: 2,
            name: "Database Management",
            short: "DB",
            color: "orange",
            progress: 58,
            currentTopic: "SQL Queries",
            previousTopic: "ER Model",
            topics: [
                { name: "Introduction to DBMS", completed: true },
                { name: "ER Model", completed: true },
                { name: "SQL Queries", completed: false },
                { name: "Normalization", completed: false },
                { name: "Transactions", completed: false },
            ],
        },
        {
            id: 3,
            name: "Web Development",
            short: "WD",
            color: "green",
            progress: 84,
            currentTopic: "React Components",
            previousTopic: "JavaScript ES6",
            topics: [
                { name: "HTML & CSS", completed: true },
                { name: "JavaScript ES6", completed: true },
                { name: "React Components", completed: true },
                { name: "React Hooks", completed: false },
                { name: "API Integration", completed: false },
            ],
        },
        {
            id: 4,
            name: "Computer Networks",
            short: "CN",
            color: "pink",
            progress: 41,
            currentTopic: "Transport Layer",
            previousTopic: "Network Layer",
            topics: [
                { name: "Network Basics", completed: true },
                { name: "OSI Model", completed: true },
                { name: "Network Layer", completed: false },
                { name: "Transport Layer", completed: false },
                { name: "Application Layer", completed: false },
            ],
        },
    ]);

    const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
    const [search, setSearch] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newSubject, setNewSubject] = useState("");

    const colors = {
        purple: {
            bg: "bg-purple-300/80",
            icon: "bg-[#7c3aed]",
            text: "text-[#6d28d9]",
            bar: "bg-[#8b5cf6]",
        },
        orange: {
            bg: "bg-orange-300/80",
            icon: "bg-[#f97316]",
            text: "text-[#ea580c]",
            bar: "bg-[#fb923c]",
        },
        green: {
            bg: "bg-green-300/80",
            icon: "bg-[#16a34a]",
            text: "text-[#15803d]",
            bar: "bg-[#4ade80]",
        },
        pink: {
            bg: "bg-[#ffd9e7]",
            icon: "bg-[#db2777]",
            text: "text-[#be185d]",
            bar: "bg-[#f472b6]",
        },
    };

    const getColor = (color) => colors[color] || colors.purple;

    const filteredSubjects = useMemo(() => {
        const value = search.toLowerCase().trim();

        return subjects.filter((subject) =>
            subject.name.toLowerCase().includes(value)
        );
    }, [subjects, search]);

    const overallProgress = subjects.length
        ? Math.round(
              subjects.reduce(
                  (total, subject) => total + subject.progress,
                  0
              ) / subjects.length
          )
        : 0;

    const addSubject = () => {
        const name = newSubject.trim();

        if (!name) return;

        const newItem = {
            id: Date.now(),
            name,
            short: name.substring(0, 2).toUpperCase(),
            color: "purple",
            progress: 0,
            currentTopic: "Add your first topic",
            previousTopic: "No previous topic",
            topics: [],
        };

        setSubjects((prev) => [...prev, newItem]);
        setSelectedSubject(newItem);
        setNewSubject("");
        setShowAddModal(false);
    };

    const toggleTopic = (topicIndex) => {
        const updatedSubjects = subjects.map((subject) => {
            if (subject.id !== selectedSubject.id) return subject;

            const topics = subject.topics.map((topic, index) =>
                index === topicIndex
                    ? { ...topic, completed: !topic.completed }
                    : topic
            );

            const completed = topics.filter(
                (topic) => topic.completed
            ).length;

            const progress = topics.length
                ? Math.round((completed / topics.length) * 100)
                : 0;

            const currentIndex = topics.findIndex(
                (topic) => !topic.completed
            );

            return {
                ...subject,
                topics,
                progress,
                currentTopic:
                    currentIndex !== -1
                        ? topics[currentIndex].name
                        : "All topics completed",
                previousTopic:
                    currentIndex > 0
                        ? topics[currentIndex - 1].name
                        : "No previous topic",
            };
        });

        setSubjects(updatedSubjects);

        setSelectedSubject(
            updatedSubjects.find(
                (subject) => subject.id === selectedSubject.id
            )
        );
    };

    const currentColors = getColor(selectedSubject.color);

    const completedTopics = selectedSubject.topics.filter(
        (topic) => topic.completed
    ).length;

    const remainingTopics = selectedSubject.topics.filter(
        (topic) => !topic.completed
    ).length;

    return (
        <div className="min-h-screen bg-[#faf7f2] text-[#20202a]">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64 min-h-screen">
                <DashboardNavbar setIsOpen={setIsOpen} />

                <main className="pt-0">
                    {/* Header */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                            <div>

                                <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                                    My Subjects
                                </h1>

                                <p className="text-gray-500 mt-2">
                                    Keep track of your subjects, topics and
                                    learning progress.
                                </p>
                            </div>

                            <button
                                onClick={() => setShowAddModal(true)}
                                className="flex items-center justify-center gap-2 px-5 py-3 bg-green-800 text-white rounded-xl font-semibold hover:bg-[#34343f] transition"
                            >
                                <FaPlus />
                                Add Subject
                            </button>
                        </div>

                        {/* Search */}
                        <div className="mt-8 relative max-w-md">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search subjects..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#8b5cf6] transition"
                            />
                        </div>
                    </section>

                    {/* Subject Cards */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                        {filteredSubjects.length === 0 ? (
                            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
                                <FaSearch className="mx-auto text-3xl text-gray-300" />

                                <h3 className="font-bold text-lg mt-4">
                                    No subjects found
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    Try searching for another subject.
                                </p>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {filteredSubjects.map((subject) => {
                                    const subjectColors = getColor(
                                        subject.color
                                    );

                                    const isSelected =
                                        selectedSubject.id === subject.id;

                                    return (
                                        <button
                                            key={subject.id}
                                            onClick={() =>
                                                setSelectedSubject(subject)
                                            }
                                            className={`text-left p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                                                isSelected
                                                    ? "border-[#20202a] shadow-md"
                                                    : "border-gray-200"
                                            } ${subjectColors.bg}`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div
                                                    className={`w-11 h-11 ${subjectColors.icon} text-white rounded-xl flex items-center justify-center font-bold`}
                                                >
                                                    {subject.short}
                                                </div>

                                                <span className="text-sm font-bold">
                                                    {subject.progress}%
                                                </span>
                                            </div>

                                            <h3 className="mt-6 text-lg font-bold">
                                                {subject.name}
                                            </h3>

                                            <p className="text-sm text-gray-600 mt-1">
                                                Current: {subject.currentTopic}
                                            </p>

                                            <div className="mt-5">
                                                <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full ${subjectColors.bar} rounded-full`}
                                                        style={{
                                                            width: `${subject.progress}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </section>

                    {/* Main Content */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-16">
                        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
                            {/* Topics */}
                            <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-7">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <p
                                            className={`text-sm font-semibold ${currentColors.text}`}
                                        >
                                            CURRENT SUBJECT
                                        </p>

                                        <h2 className="text-2xl sm:text-3xl font-black mt-1">
                                            {selectedSubject.name}
                                        </h2>
                                    </div>

                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black"
                                    >
                                        View Details
                                        <FaArrowRight />
                                    </button>
                                </div>

                                {/* Current / Previous */}
                                <div className="grid sm:grid-cols-2 gap-4 mt-7">
                                    <div
                                        className={`${currentColors.bg} rounded-2xl p-5`}
                                    >
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <FaBookOpen />
                                            Previous Topic
                                        </div>

                                        <h3 className="font-bold mt-3">
                                            {selectedSubject.previousTopic}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Completed
                                        </p>
                                    </div>

                                    <div className="bg-green-800 text-white rounded-2xl p-5">
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <FaClock />
                                            Current Topic
                                        </div>

                                        <h3 className="font-bold mt-3">
                                            {selectedSubject.currentTopic}
                                        </h3>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Continue learning
                                        </p>
                                    </div>
                                </div>

                                {/* Topics */}
                                <div className="mt-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-lg">
                                            Topics
                                        </h3>

                                        <span className="text-sm text-gray-500">
                                            {completedTopics}/
                                            {selectedSubject.topics.length}{" "}
                                            completed
                                        </span>
                                    </div>

                                    {selectedSubject.topics.length === 0 ? (
                                        <div className="py-10 text-center text-gray-500">
                                            No topics added yet.
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {selectedSubject.topics.map(
                                                (topic, index) => (
                                                    <button
                                                        key={topic.name}
                                                        onClick={() =>
                                                            toggleTopic(index)
                                                        }
                                                        className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition text-left"
                                                    >
                                                        <div
                                                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                                                topic.completed
                                                                    ? "border-[#65a872] bg-[#65a872] text-white"
                                                                    : "border-2 border-gray-300 text-transparent"
                                                            }`}
                                                        >
                                                            <FaCheck size={13} />
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <p
                                                                className={`font-medium ${
                                                                    topic.completed
                                                                        ? "text-gray-400"
                                                                        : "text-gray-800"
                                                                }`}
                                                            >
                                                                {topic.name}
                                                            </p>

                                                            <p className="text-xs text-gray-400 mt-1">
                                                                Topic {index + 1}
                                                            </p>
                                                        </div>

                                                        <FaArrowRight className="text-gray-300 shrink-0" />
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="space-y-6">
                                {/* Overall Progress */}
                                <div className="bg-green-800 text-white rounded-3xl p-6 sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-400 text-sm">
                                                Overall Progress
                                            </p>

                                            <h2 className="text-4xl font-black mt-2">
                                                {overallProgress}%
                                            </h2>
                                        </div>

                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                            <FaChartLine className="text-xl" />
                                        </div>
                                    </div>

                                    <div className="mt-7">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">
                                                All subjects
                                            </span>

                                            <span>{overallProgress}%</span>
                                        </div>

                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#f59e0b] rounded-full"
                                                style={{
                                                    width: `${overallProgress}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject Progress */}
                                <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Subject Progress
                                            </p>

                                            <h3 className="text-xl font-bold mt-1">
                                                {selectedSubject.name}
                                            </h3>
                                        </div>

                                        <div
                                            className={`w-12 h-12 rounded-xl ${currentColors.bg} flex items-center justify-center`}
                                        >
                                            <FaGraduationCap
                                                className={
                                                    currentColors.text
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-7">
                                        <div className="flex items-end justify-between mb-3">
                                            <span className="text-3xl font-black">
                                                {selectedSubject.progress}%
                                            </span>

                                            <span className="text-sm text-gray-400">
                                                completed
                                            </span>
                                        </div>

                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${currentColors.bar} rounded-full`}
                                                style={{
                                                    width: `${selectedSubject.progress}%`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-7">
                                        <div className="bg-[#faf7f2] rounded-xl p-4">
                                            <p className="text-xs text-gray-500">
                                                Completed
                                            </p>

                                            <p className="text-xl font-bold mt-1">
                                                {completedTopics}
                                            </p>
                                        </div>

                                        <div className="bg-[#faf7f2] rounded-xl p-4">
                                            <p className="text-xs text-gray-500">
                                                Remaining
                                            </p>

                                            <p className="text-xl font-bold mt-1">
                                                {remainingTopics}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Topic */}
                                <div
                                    className={`${currentColors.bg} animate-floatReverse rounded-3xl p-6`}
                                >
                                    <p
                                        className={`text-sm ${currentColors.text} font-semibold`}
                                    >
                                        UP NEXT
                                    </p>

                                    <h3 className="text-2xl font-black mt-2">
                                        {selectedSubject.currentTopic}
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-2">
                                        Continue from where you stopped last
                                        time.
                                    </p>

                                    <button
                                        type="button"
                                        className={`mt-5 flex items-center gap-2 font-semibold ${currentColors.text}`}
                                    >
                                        Continue
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Add Subject Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
                    <div
                        onClick={() => setShowAddModal(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    StudyBuddy
                                </p>

                                <h2 className="text-2xl font-black mt-1">
                                    Add Subject
                                </h2>
                            </div>

                            <button
                                onClick={() => setShowAddModal(false)}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="mt-7">
                            <label className="text-sm font-semibold">
                                Subject Name
                            </label>

                            <input
                                type="text"
                                placeholder="e.g. Operating Systems"
                                value={newSubject}
                                onChange={(e) =>
                                    setNewSubject(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        addSubject();
                                    }
                                }}
                                className="w-full mt-2 px-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-[#8b5cf6]"
                            />
                        </div>

                        <button
                            onClick={addSubject}
                            className="w-full mt-6 py-3.5 rounded-xl bg-green-800 text-white font-semibold hover:bg-[#34343f] transition"
                        >
                            Add Subject
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subjects;