import React, { useMemo, useState } from "react";
import {
    FaPlus,
    FaRobot,
    FaCheck,
    FaTrash,
    FaEdit,
    FaClock,
    FaCalendarAlt,
    FaChevronDown,
    FaLightbulb,
    FaBookOpen,
    FaFire,
    FaTimes,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const DEFAULT_FORM = {
    title: "",
    subject: "",
    priority: "Medium",
    due: "Today",
    time: "30m",
};

const FILTERS = ["All", "Pending", "Completed"];

const PRIORITY_STYLES = {
    High: "bg-[#fff0ed] text-[#e35d3f]",
    Medium: "bg-[#fff7df] text-[#c38a00]",
    Low: "bg-[#edf8ef] text-[#4f9b62]",
};

const AI_TASKS = [
    {
        title: "Revise React Hooks",
        subject: "Web Development",
        priority: "High",
        due: "Today",
        time: "45m",
    },
    {
        title: "Practice 5 Array Problems",
        subject: "Programming",
        priority: "Medium",
        due: "Tomorrow",
        time: "1h",
    },
    {
        title: "Review Previous Notes",
        subject: "Computer Science",
        priority: "Low",
        due: "Tomorrow",
        time: "30m",
    },
];

const INITIAL_TASKS = [
    {
        id: 1,
        title: "Complete React Components",
        subject: "Web Development",
        priority: "High",
        due: "Today",
        time: "1h 30m",
        completed: false,
    },
    {
        id: 2,
        title: "Revise Data Structures",
        subject: "Computer Science",
        priority: "Medium",
        due: "Tomorrow",
        time: "1h",
        completed: false,
    },
    {
        id: 3,
        title: "Practice C Programming",
        subject: "Programming",
        priority: "High",
        due: "Sep 22",
        time: "45m",
        completed: true,
    },
    {
        id: 4,
        title: "Read Software Engineering Notes",
        subject: "Software Engineering",
        priority: "Low",
        due: "Sep 24",
        time: "30m",
        completed: false,
    },
];

const Tasks = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [filter, setFilter] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [formData, setFormData] = useState(DEFAULT_FORM);
    const [aiLoading, setAiLoading] = useState(false);
    const [aiMessage, setAiMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const completedTasks = useMemo(
        () => tasks.filter((task) => task.completed).length,
        [tasks]
    );

    const progress = tasks.length
        ? Math.round((completedTasks / tasks.length) * 100)
        : 0;

    const pendingTasks = tasks.length - completedTasks;

    const filteredTasks = useMemo(() => {
        if (filter === "Completed") {
            return tasks.filter((task) => task.completed);
        }

        if (filter === "Pending") {
            return tasks.filter((task) => !task.completed);
        }

        return tasks;
    }, [tasks, filter]);

    const openAddModal = () => {
        setEditingTask(null);
        setFormData(DEFAULT_FORM);
        setShowModal(true);
    };

    const openEditModal = (task) => {
        setEditingTask(task);
        setFormData({
            title: task.title,
            subject: task.subject,
            priority: task.priority,
            due: task.due,
            time: task.time,
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingTask(null);
        setFormData(DEFAULT_FORM);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveTask = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) return;

        if (editingTask) {
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === editingTask.id
                        ? { ...task, ...formData }
                        : task
                )
            );
        } else {
            setTasks((prev) => [
                {
                    id: Date.now(),
                    ...formData,
                    completed: false,
                },
                ...prev,
            ]);
        }

        closeModal();
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const generateAITasks = () => {
        if (aiLoading) return;

        setAiLoading(true);
        setAiMessage("");

        setTimeout(() => {
            const timestamp = Date.now();

            const newTasks = AI_TASKS.map((task, index) => ({
                ...task,
                id: timestamp + index,
                completed: false,
            }));

            setTasks((prev) => [...newTasks, ...prev]);
            setAiLoading(false);
            setAiMessage(
                "I've created 3 study tasks based on your current subjects."
            );

            setTimeout(() => {
                setAiMessage("");
            }, 4000);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#292522]">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64">
                <DashboardNavbar setIsOpen={setIsOpen} />

                <main className="px-5 py-6 md:px-8 lg:px-10">
                    {/* Header */}
                    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#9a7bff]">
                                Study Planner
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight text-[#292522] md:text-4xl">
                                My Tasks
                            </h1>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-[#8b8580]">
                                Organize your study work and let StudyBuddy's AI
                                help you plan what to do next.
                            </p>
                        </div>

                        <button
                            onClick={openAddModal}
                            className="flex w-fit items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#403b37]"
                        >
                            <FaPlus size={12} />
                            Add Task
                        </button>
                    </div>

                    {/* Top Cards */}
                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {/* Progress */}
                        <div className="rounded-[28px] border border-[#eeeae4] bg-white p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-[#918b86]">
                                        Today's Progress
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold">
                                        {progress}%
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eee9ff] text-[#8c70e8]">
                                    <FaCheck />
                                </div>
                            </div>

                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#f0ede9]">
                                <div
                                    className="h-full rounded-full bg-[#9a7bff] transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            <p className="mt-3 text-xs text-[#99928d]">
                                {completedTasks} of {tasks.length} tasks completed
                            </p>
                        </div>

                        {/* Pending */}
                        <div className="rounded-[28px] border border-[#eeeae4] bg-[#fff5eb] p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-[#a28a78]">
                                        Pending Tasks
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-[#4a3830]">
                                        {pendingTasks}
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#ef8b51] shadow-sm">
                                    <FaClock />
                                </div>
                            </div>

                            <p className="mt-5 text-xs text-[#a28a78]">
                                Keep your study streak going.
                            </p>
                        </div>

                        {/* AI Card */}
                        <div className="relative overflow-hidden rounded-3xl bg-green-600 p-6 text-white sm:col-span-2 xl:col-span-1">
                            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#9a7bff] opacity-30 blur-2xl"/>

                            <div className="relative">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0e4b1e]">
                                        <FaRobot />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">
                                            StudyBuddy AI
                                        </p>

                                        <p className="text-xs text-white/60">
                                            Smart task assistant
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-4 text-sm leading-6 text-white/70">
                                    Need help planning today's study session?
                                    Let AI create tasks for you.
                                </p>

                                <button
                                    onClick={generateAITasks}
                                    disabled={aiLoading}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#302b38] transition hover:bg-[#f3efff] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <FaLightbulb />
                                    {aiLoading
                                        ? "Creating your tasks..."
                                        : "Generate with AI"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* AI Message */}
                    {aiMessage && (
                        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#e4dcff] bg-[#f4f0ff] px-5 py-4 text-sm text-[#725bb7]">
                            <FaRobot />
                            {aiMessage}
                        </div>
                    )}

                    {/* Task Section */}
                    <div className="rounded-[30px] border border-[#eeeae4] bg-white p-5 md:p-7">
                        {/* Toolbar */}
                        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                            <div>
                                <h2 className="text-xl font-bold">
                                    Your Tasks
                                </h2>

                                <p className="mt-1 text-sm text-[#99928d]">
                                    Stay on top of your learning goals.
                                </p>
                            </div>

                            <div className="flex rounded-xl bg-[#f6f4f1] p-1">
                                {FILTERS.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setFilter(item)}
                                        className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${filter === item
                                                ? "bg-white text-[#292522] shadow-sm"
                                                : "text-[#99928d] hover:text-[#292522]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tasks */}
                        <div className="space-y-3">
                            {filteredTasks.length === 0 ? (
                                <div className="py-16 text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f6f2ff] text-[#9a7bff]">
                                        <FaBookOpen />
                                    </div>

                                    <h3 className="font-semibold">
                                        No tasks found
                                    </h3>

                                    <p className="mt-1 text-sm text-[#99928d]">
                                        Add a task to start planning your study.
                                    </p>
                                </div>
                            ) : (
                                filteredTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className={`group flex flex-col gap-4 rounded-2xl border p-4 transition md:flex-row md:items-center ${task.completed
                                                ? "border-[#e8eee8] bg-[#fbfdfb]"
                                                : "border-[#eeeae4] bg-white hover:border-[#ded8d0] hover:shadow-sm"
                                            }`}
                                    >
                                        {/* Checkbox */}
                                        <button
                                            onClick={() =>
                                                toggleTask(task.id)
                                            }
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${task.completed
                                                    ? "border-[#65a872] bg-[#65a872] text-white"
                                                    : "border-[#ddd7d0] bg-white text-transparent hover:border-[#9a7bff]"
                                                }`}
                                        >
                                            <FaCheck size={13} />
                                        </button>

                                        {/* Main */}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3
                                                    className={`font-semibold ${task.completed
                                                            ? "text-[#aaa5a0] "
                                                            : "text-[#302c29]"
                                                        }`}
                                                >
                                                    {task.title}
                                                </h3>

                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${PRIORITY_STYLES[
                                                        task.priority
                                                        ]
                                                        }`}
                                                >
                                                    {task.priority}
                                                </span>
                                            </div>

                                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#99928d]">
                                                <span className="flex items-center gap-1.5">
                                                    <FaBookOpen />
                                                    {task.subject}
                                                </span>

                                                <span className="flex items-center gap-1.5">
                                                    <FaCalendarAlt />
                                                    {task.due}
                                                </span>

                                                <span className="flex items-center gap-1.5">
                                                    <FaClock />
                                                    {task.time}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() =>
                                                    openEditModal(task)
                                                }
                                                className="flex h-9 w-9 items-center justify-center rounded-xl text-[#918b86] transition hover:bg-[#f1edff] hover:text-[#8064df]"
                                                title="Edit task"
                                            >
                                                <FaEdit size={13} />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    deleteTask(task.id)
                                                }
                                                className="flex h-9 w-9 items-center justify-center rounded-xl text-[#918b86] transition hover:bg-[#fff0ed] hover:text-[#e35d3f]"
                                                title="Delete task"
                                            >
                                                <FaTrash size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* AI Suggestion */}
                    <div className="mt-6 rounded-[28px] border border-[#eeeae4] bg-[#fffdf8] p-6 md:p-7">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0d8] text-[#df9a32]">
                                    <FaFire />
                                </div>

                                <div>
                                    <p className="text-sm font-bold text-[#4a4038]">
                                        AI Study Suggestion
                                    </p>

                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-[#958b82]">
                                        You have several programming tasks
                                        pending. Try completing one small
                                        coding task before moving to theory.
                                        This can help you maintain your study
                                        momentum.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={generateAITasks}
                                className="shrink-0 rounded-xl bg-[#f0e9ff] px-4 py-2.5 text-xs font-bold text-[#785fd0] transition hover:bg-[#e7deff]"
                            >
                                Ask AI
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Add / Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#292522]/40 px-4 backdrop-blur-sm">
                    <div className="w-full max-w-lg rounded-[30px] bg-white p-6 shadow-2xl md:p-8">
                        {/* Modal Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">
                                    {editingTask
                                        ? "Edit Task"
                                        : "Create New Task"}
                                </h2>

                                <p className="mt-1 text-sm text-[#99928d]">
                                    Add details for your study task.
                                </p>
                            </div>

                            <button
                                onClick={closeModal}
                                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f6f4f1] text-[#817a74] hover:bg-[#eeeae5]"
                            >
                                <FaTimes size={13} />
                            </button>
                        </div>

                        <form onSubmit={saveTask} className="space-y-5">
                            {/* Title */}
                            <div>
                                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#817a74]">
                                    Task name
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Complete React assignment"
                                    className="w-full rounded-xl border border-[#e6e1db] bg-[#fcfbf9] px-4 py-3 text-sm outline-none transition focus:border-[#9a7bff] focus:ring-2 focus:ring-[#9a7bff]/10"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#817a74]">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Web Development"
                                    className="w-full rounded-xl border border-[#e6e1db] bg-[#fcfbf9] px-4 py-3 text-sm outline-none transition focus:border-[#9a7bff] focus:ring-2 focus:ring-[#9a7bff]/10"
                                />
                            </div>

                            {/* Details */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {/* Priority */}
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#817a74]">
                                        Priority
                                    </label>

                                    <div className="relative">
                                        <select
                                            name="priority"
                                            value={formData.priority}
                                            onChange={handleInputChange}
                                            className="w-full appearance-none rounded-xl border border-[#e6e1db] bg-[#fcfbf9] px-3 py-3 text-sm outline-none focus:border-[#9a7bff]"
                                        >
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>

                                        <FaChevronDown
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa29a]"
                                            size={10}
                                        />
                                    </div>
                                </div>

                                {/* Due */}
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#817a74]">
                                        Due
                                    </label>

                                    <input
                                        type="date"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleInputChange}
                                        placeholder="Today"
                                        className="w-full rounded-xl border border-[#e6e1db] bg-[#fcfbf9] px-3 py-3 text-sm outline-none focus:border-[#9a7bff]"
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#817a74]">
                                        Time
                                    </label>

                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        placeholder="30m"
                                        className="w-full rounded-xl border border-[#e6e1db] bg-[#fcfbf9] px-3 py-3 text-sm outline-none focus:border-[#9a7bff]"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 rounded-xl border border-[#e5e0da] px-4 py-3 text-sm font-semibold text-[#77706a] transition hover:bg-[#f8f6f3]"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="flex-1 rounded-xl bg-[#292522] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#403b37]"
                                >
                                    {editingTask
                                        ? "Save Changes"
                                        : "Create Task"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tasks;