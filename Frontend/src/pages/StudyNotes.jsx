import React, { useMemo, useState } from "react";
import {
    FaBookOpen,
    FaPlus,
    FaSearch,
    FaStar,
    FaRegStar,
    FaEdit,
    FaTrash,
    FaRobot,
    FaLightbulb,
    FaTimes,
    FaSave,
    FaChevronRight,
    FaBookmark,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const INITIAL_NOTES = [
    {
        id: 1,
        title: "Introduction to Data Structures",
        subject: "Computer Science",
        topic: "Data Structures",
        content:
            "Data structures are ways of organizing and storing data so that it can be accessed and modified efficiently.",
        date: "Today",
        saved: true,
        color: "purple",
    },
    {
        id: 2,
        title: "Operating System Basics",
        subject: "Operating System",
        topic: "Introduction",
        content:
            "An operating system is system software that manages computer hardware, software resources and provides common services for programs.",
        date: "Yesterday",
        saved: false,
        color: "orange",
    },
    {
        id: 3,
        title: "Database Normalization",
        subject: "DBMS",
        topic: "Normalization",
        content:
            "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.",
        date: "Sep 18",
        saved: true,
        color: "green",
    },
    {
        id: 4,
        title: "Computer Networks",
        subject: "Networking",
        topic: "Network Basics",
        content:
            "A computer network connects multiple devices so they can communicate and share resources with each other.",
        date: "Sep 17",
        saved: false,
        color: "pink",
    },
];

const AI_SUGGESTIONS = [
    {
        id: 1,
        title: "Learn Stack & Queue",
        subject: "Data Structures",
        description:
            "Continue your Data Structures topic with Stack, Queue and Circular Queue.",
    },
    {
        id: 2,
        title: "Practice SQL Joins",
        subject: "DBMS",
        description:
            "Revise INNER JOIN, LEFT JOIN and RIGHT JOIN with simple examples.",
    },
    {
        id: 3,
        title: "Understand OS Scheduling",
        subject: "Operating System",
        description:
            "Study FCFS, SJF, Round Robin and Priority Scheduling next.",
    },
];

const EMPTY_FORM = {
    title: "",
    subject: "",
    topic: "",
    content: "",
};

const COLOR_CLASSES = {
    purple: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        border: "border-purple-200",
    },
    orange: {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-200",
    },
    green: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        border: "border-emerald-200",
    },
    pink: {
        bg: "bg-pink-100",
        text: "text-pink-700",
        border: "border-pink-200",
    },
};

const StudyNotes = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [notes, setNotes] = useState(INITIAL_NOTES);

    const savedNotesCount = useMemo(
        () => notes.filter((note) => note.saved).length,
        [notes]
    );

    const subjectsCount = useMemo(
        () => new Set(notes.map((note) => note.subject)).size,
        [notes]
    );

    const filteredNotes = useMemo(() => {
        const query = search.trim().toLowerCase();

        return notes.filter((note) => {
            const matchesSearch =
                !query ||
                note.title.toLowerCase().includes(query) ||
                note.subject.toLowerCase().includes(query) ||
                note.topic.toLowerCase().includes(query);

            const matchesTab =
                activeTab === "all" ||
                (activeTab === "saved" && note.saved);

            return matchesSearch && matchesTab;
        });
    }, [notes, search, activeTab]);

    const resetForm = () => {
        setFormData(EMPTY_FORM);
        setEditingNote(null);
    };

    const closeModal = () => {
        setShowModal(false);
        resetForm();
    };

    const openCreateModal = () => {
        resetForm();
        setShowModal(true);
    };

    const openEditModal = (note) => {
        setEditingNote(note);

        setFormData({
            title: note.title,
            subject: note.subject,
            topic: note.topic,
            content: note.content,
        });

        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveNote = () => {
        const title = formData.title.trim();
        const subject = formData.subject.trim();
        const topic = formData.topic.trim();
        const content = formData.content.trim();

        if (!title || !subject || !content) {
            alert("Please fill in title, subject and content.");
            return;
        }

        const noteData = {
            title,
            subject,
            topic,
            content,
        };

        if (editingNote) {
            setNotes((prev) =>
                prev.map((note) =>
                    note.id === editingNote.id
                        ? { ...note, ...noteData }
                        : note
                )
            );
        } else {
            setNotes((prev) => [
                {
                    id: Date.now(),
                    ...noteData,
                    date: "Just now",
                    saved: false,
                    color: "purple",
                },
                ...prev,
            ]);
        }

        closeModal();
    };

    const deleteNote = (id) => {
        if (!window.confirm("Are you sure you want to delete this note?")) {
            return;
        }

        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    const toggleSaved = (id) => {
        setNotes((prev) =>
            prev.map((note) =>
                note.id === id
                    ? { ...note, saved: !note.saved }
                    : note
            )
        );
    };

    const saveSuggestion = (suggestion) => {
        const newNote = {
            id: Date.now(),
            title: suggestion.title,
            subject: suggestion.subject,
            topic: suggestion.title,
            content: suggestion.description,
            date: "AI Suggested",
            saved: true,
            color: "orange",
        };

        setNotes((prev) => [newNote, ...prev]);
        setActiveTab("saved");
    };

    const getColorClasses = (color) =>
        COLOR_CLASSES[color] || COLOR_CLASSES.purple;

    return (
        <div className="min-h-screen bg-[#faf8f5] text-[#29233d]">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64">
                <DashboardNavbar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />

                <main className="px-4 py-6 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-purple-600">
                                <FaBookOpen />
                                <span>Study Space</span>
                            </div>

                            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                                My Notes
                            </h1>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                                Keep your important study notes organized and
                                let AI suggest what you should learn next.
                            </p>
                        </div>

                        <button
                            onClick={openCreateModal}
                            className="flex w-fit items-center gap-2 rounded-2xl bg-[#29233d] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700"
                        >
                            <FaPlus />
                            Create Note
                        </button>
                    </div>

                    {/* AI Banner */}
                    <div className="relative mb-8 overflow-hidden rounded-[28px] bg-linear-to-r from-[#31264d] via-[#51346b] to-[#8c4b45] p-6 text-white shadow-xl">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full animate-floatReverse bg-white/20" />
                        <div className="absolute -bottom-16 right-28 h-44 w-44 rounded-full animate-float bg-orange-300/20" />

                        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur">
                                    <FaRobot />
                                </div>

                                <div>
                                    <div className="mb-1 flex items-center gap-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-orange-200">
                                            StudyBuddy AI
                                        </span>

                                    </div>

                                    <h2 className="text-xl font-black">
                                        Your next study topic is waiting.
                                    </h2>

                                    <p className="mt-1 max-w-xl text-sm text-purple-100">
                                        Based on your saved notes, AI has
                                        prepared some topics you may want to
                                        study next.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setActiveTab("all")}
                                className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#31264d] transition hover:bg-orange-100"
                            >
                                View Suggestions
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mb-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        <div className="rounded-2xl border border-[#eee8e1] bg-white p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Total Notes
                            </p>

                            <h3 className="mt-2 text-2xl font-black">
                                {notes.length}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                Notes in your library
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#eee8e1] bg-white p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Saved
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-orange-500">
                                {savedNotesCount}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                Important notes
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#eee8e1] bg-white p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Subjects
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-purple-600">
                                {subjectsCount}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                Subjects covered
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#eee8e1] bg-white p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                AI Ideas
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-emerald-600">
                                {AI_SUGGESTIONS.length}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                Topics suggested
                            </p>
                        </div>
                    </div>

                    {/* Notes + Suggestions */}
                    <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1fr_350px]">
                        {/* Notes */}
                        <section>
                            {/* Tabs + Search */}
                            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex w-fit rounded-xl bg-[#eee9e4] p-1">
                                    <button
                                        onClick={() => setActiveTab("all")}
                                        className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                                            activeTab === "all"
                                                ? "bg-white text-[#29233d] shadow-sm"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        All Notes
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("saved")}
                                        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition ${
                                            activeTab === "saved"
                                                ? "bg-white text-[#29233d] shadow-sm"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        <FaStar className="text-orange-500" />
                                        Saved
                                    </button>
                                </div>

                                <div className="relative w-full md:max-w-xs">
                                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Search notes..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-[#e9e2db] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                                    />
                                </div>
                            </div>

                            {/* Note Cards */}
                            <div className="space-y-4">
                                {filteredNotes.length === 0 ? (
                                    <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center">
                                        <FaBookOpen className="mx-auto mb-4 text-3xl text-gray-300" />

                                        <h3 className="font-bold text-gray-700">
                                            No notes found
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-400">
                                            Try another search or create a new
                                            note.
                                        </p>
                                    </div>
                                ) : (
                                    filteredNotes.map((note) => {
                                        const colors = getColorClasses(
                                            note.color
                                        );

                                        return (
                                            <div
                                                key={note.id}
                                                className={`group rounded-3xl border ${colors.border} bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${colors.bg} ${colors.text}`}
                                                    >
                                                        <FaBookOpen />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                                            <div>
                                                                <h3 className="text-lg font-black">
                                                                    {note.title}
                                                                </h3>

                                                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                                                    <span
                                                                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${colors.bg} ${colors.text}`}
                                                                    >
                                                                        {
                                                                            note.subject
                                                                        }
                                                                    </span>

                                                                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-500">
                                                                        {
                                                                            note.topic
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <button
                                                                onClick={() =>
                                                                    toggleSaved(
                                                                        note.id
                                                                    )
                                                                }
                                                                className="rounded-xl p-2 text-gray-400 transition hover:bg-orange-50 hover:text-orange-500"
                                                            >
                                                                {note.saved ? (
                                                                    <FaStar className="text-orange-500" />
                                                                ) : (
                                                                    <FaRegStar />
                                                                )}
                                                            </button>
                                                        </div>

                                                        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
                                                            {note.content}
                                                        </p>

                                                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                                                            <span className="text-xs font-medium text-gray-400">
                                                                {note.date}
                                                            </span>

                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={() =>
                                                                        openEditModal(
                                                                            note
                                                                        )
                                                                    }
                                                                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
                                                                >
                                                                    <FaEdit />
                                                                    Edit
                                                                </button>

                                                                <button
                                                                    onClick={() =>
                                                                        deleteNote(
                                                                            note.id
                                                                        )
                                                                    }
                                                                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                                                                >
                                                                    <FaTrash />
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </section>

                        {/* AI Suggestions */}
                        <aside>
                            <div className="sticky top-24 rounded-3xl border border-[#eee4d9] bg-[#fffdf9] p-5 shadow-sm">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                                        <FaLightbulb />
                                    </div>

                                    <div>
                                        <h3 className="font-black">
                                            AI Suggestions
                                        </h3>

                                        <p className="text-xs text-gray-400">
                                            Pick what to study next
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {AI_SUGGESTIONS.map((suggestion) => (
                                        <div
                                            key={suggestion.id}
                                            className="rounded-2xl border border-[#eee7df] bg-white p-4 transition hover:border-orange-200 hover:shadow-md"
                                        >
                                            <div className="mb-3 flex items-start justify-between gap-3">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500">
                                                        {suggestion.subject}
                                                    </span>

                                                    <h4 className="mt-1 font-bold text-[#29233d]">
                                                        {suggestion.title}
                                                    </h4>
                                                </div>

                                                <FaChevronRight className="mt-1 text-xs text-gray-300" />
                                            </div>

                                            <p className="text-xs leading-5 text-gray-500">
                                                {suggestion.description}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    saveSuggestion(suggestion)
                                                }
                                                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-50 py-2.5 text-xs font-bold text-orange-600 transition hover:bg-orange-100"
                                            >
                                                <FaBookmark />
                                                Save as Note
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-2xl bg-[#29233d] p-4 text-white">
                                    <div className="flex items-start gap-3">
                                        <FaRobot className="mt-1 text-orange-300 animate-bounce" />

                                        <div>
                                            <p className="text-xs font-bold">
                                                AI Study Tip
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-purple-100">
                                                Keep notes short and add examples
                                                while studying. It makes
                                                revision much easier.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>

            {/* Create / Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#171321]/60 px-4 backdrop-blur-sm">
                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl study-scrollbar">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-purple-500">
                                    StudyBuddy Notes
                                </p>

                                <h2 className="mt-1 text-xl font-black">
                                    {editingNote
                                        ? "Edit Note"
                                        : "Create New Note"}
                                </h2>
                            </div>

                            <button
                                onClick={closeModal}
                                className="rounded-xl bg-gray-100 p-2.5 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="space-y-5 p-6">
                            <div>
                                <label className="mb-2 block text-sm font-bold text-gray-700">
                                    Note Title
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Introduction to Java"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Java Programming"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Topic
                                    </label>

                                    <input
                                        type="text"
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Classes"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-gray-700">
                                    Note Content
                                </label>

                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    rows="8"
                                    placeholder="Write your study notes here..."
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                                />
                            </div>

                            {/* AI Helper */}
                            <div className="flex gap-3 rounded-2xl bg-purple-50 p-4 text-purple-800">
                                <FaRobot className="mt-0.5 shrink-0 text-purple-600" />

                                <div>
                                    <p className="text-xs font-black">
                                        AI Note Assistant
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-purple-600">
                                        Later, StudyBuddy AI can summarize this
                                        note, generate examples and suggest
                                        related topics automatically.
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    onClick={closeModal}
                                    className="rounded-xl px-5 py-3 text-sm font-bold text-gray-500 transition hover:bg-gray-100"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleSaveNote}
                                    className="flex items-center gap-2 rounded-xl bg-[#29233d] px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-700"
                                >
                                    <FaSave />
                                    {editingNote
                                        ? "Update Note"
                                        : "Save Note"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudyNotes;