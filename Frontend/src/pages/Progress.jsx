import React, { useMemo, useState } from "react";
import {
    FaArrowUp,
    FaBrain,
    FaCheckCircle,
    FaClock,
    FaFire,
    FaLightbulb,
    FaBookOpen,
    FaBullseye,
    FaRobot,
    FaChevronDown,
    FaTrophy,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const WEEKLY_DATA = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.2 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 3.8 },
    { day: "Fri", hours: 2.9 },
    { day: "Sat", hours: 4.2 },
    { day: "Sun", hours: 3.5 },
];

const MONTHLY_DATA = [
    { day: "Week 1", hours: 14 },
    { day: "Week 2", hours: 18 },
    { day: "Week 3", hours: 21 },
    { day: "Week 4", hours: 24 },
];

const SUBJECT_PROGRESS = [
    {
        name: "Web Development",
        progress: 86,
        color: "#9a7bff",
    },
    {
        name: "Programming",
        progress: 74,
        color: "#ef8b51",
    },
    {
        name: "Computer Science",
        progress: 68,
        color: "#65a872",
    },
    {
        name: "Software Engineering",
        progress: 61,
        color: "#e3a532",
    },
];

const INSIGHTS = [
    {
        title: "Topics Completed",
        value: "34",
        description: "+6 this week",
        icon: FaBookOpen,
        iconClass: "bg-[#eee9ff] text-[#8c70e8]",
    },
    {
        title: "Practice Sessions",
        value: "21",
        description: "+4 this week",
        icon: FaBrain,
        iconClass: "bg-[#fff0ed] text-[#e35d3f]",
    },
    {
        title: "Achievements",
        value: "8",
        description: "2 unlocked this week",
        icon: FaTrophy,
        iconClass: "bg-[#fff7df] text-[#d49b2e]",
    },
];

const CHART_WIDTH = 800;
const CHART_HEIGHT = 300;
const PADDING_X = 45;
const PADDING_Y = 35;

const Progress = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [period, setPeriod] = useState("This Week");
    const [aiLoading, setAiLoading] = useState(false);
    const [hoveredPoint, setHoveredPoint] = useState(null);
    const [aiAdvice, setAiAdvice] = useState(
        "You are doing well with programming, but your study time drops in the middle of the week. Try adding a short 30-minute session on Wednesday."
    );

    const chartData =
        period === "This Week" ? WEEKLY_DATA : MONTHLY_DATA;

    const totalHours = useMemo(
        () =>
            WEEKLY_DATA.reduce((sum, item) => sum + item.hours, 0).toFixed(1),
        []
    );

    const averageHours = useMemo(
        () =>
            (
                WEEKLY_DATA.reduce((sum, item) => sum + item.hours, 0) /
                WEEKLY_DATA.length
            ).toFixed(1),
        []
    );

    const maxHours = useMemo(
        () => Math.ceil(Math.max(...chartData.map((item) => item.hours)) + 1),
        [chartData]
    );

    const chartPoints = useMemo(
        () =>
            chartData.map((item, index) => ({
                ...item,
                x:
                    PADDING_X +
                    (index * (CHART_WIDTH - PADDING_X * 2)) /
                        (chartData.length - 1),
                y:
                    CHART_HEIGHT -
                    PADDING_Y -
                    (item.hours / maxHours) *
                        (CHART_HEIGHT - PADDING_Y * 2),
            })),
        [chartData, maxHours]
    );

    const linePath = useMemo(() => {
        if (!chartPoints.length) return "";

        return chartPoints.reduce(
            (path, point, index) =>
                index === 0
                    ? `M ${point.x} ${point.y}`
                    : `${path} L ${point.x} ${point.y}`,
            ""
        );
    }, [chartPoints]);

    const areaPath = useMemo(() => {
        if (!chartPoints.length) return "";

        const bottom = CHART_HEIGHT - PADDING_Y;

        return `${linePath}
            L ${chartPoints[chartPoints.length - 1].x} ${bottom}
            L ${chartPoints[0].x} ${bottom}
            Z`;
    }, [chartPoints, linePath]);

    const generateAdvice = () => {
        if (aiLoading) return;

        setAiLoading(true);

        setTimeout(() => {
            setAiAdvice(
                "Your strongest study days are Thursday and Saturday. Try moving one difficult topic to those days and keep Wednesday for lighter revision. Also aim for at least 2.5 hours of focused study each day."
            );

            setAiLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#292522]">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64">
                <DashboardNavbar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />

                <main className="px-5 py-6 md:px-8 lg:px-10">
                    {/* Header */}
                    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#9a7bff]">
                                Learning Analytics
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                                Your Progress
                            </h1>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-[#8b8580]">
                                See how consistently you're learning,
                                where you're improving, and what you
                                can focus on next.
                            </p>
                        </div>

                        <div className="relative">
                            <select
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
                                className="appearance-none rounded-xl border border-[#e7e2dc] bg-white py-3 pl-4 pr-10 text-sm font-semibold outline-none transition focus:border-[#9a7bff]"
                            >
                                <option>This Week</option>
                                <option>This Month</option>
                            </select>

                            <FaChevronDown
                                size={11}
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8d8680]"
                            />
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {/* Study Hours */}
                        <div className="rounded-[26px] border border-[#eeeae4] bg-white p-5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-[#918b86]">
                                        Study Hours
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold">
                                        {totalHours}
                                        <span className="ml-1 text-sm font-medium text-[#aaa39d]">
                                            hrs
                                        </span>
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eee9ff] text-[#8c70e8]">
                                    <FaClock />
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#65a872]">
                                <FaArrowUp size={9} />
                                12% from last week
                            </div>
                        </div>

                        {/* Average */}
                        <div className="rounded-[26px] border border-[#eeeae4] bg-[#fff5eb] p-5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-[#9d897a]">
                                        Daily Average
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-[#493a31]">
                                        {averageHours}
                                        <span className="ml-1 text-sm font-medium text-[#a99384]">
                                            hrs
                                        </span>
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#e98a4d] shadow-sm">
                                    <FaBullseye />
                                </div>
                            </div>

                            <div className="mt-4 text-xs font-semibold text-[#9b806c]">
                                Goal: 3 hrs / day
                            </div>
                        </div>

                        {/* Completion */}
                        <div className="rounded-[26px] border border-[#eeeae4] bg-[#f1faf3] p-5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-[#829487]">
                                        Task Completion
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-[#334337]">
                                        78%
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#65a872] shadow-sm">
                                    <FaCheckCircle />
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#65a872]">
                                <FaArrowUp size={9} />
                                8% improvement
                            </div>
                        </div>

                        {/* Streak */}
                        <div className="rounded-[26px] border border-[#eeeae4] bg-[#fff7df] p-5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-[#9b8a62]">
                                        Study Streak
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-[#51462d]">
                                        7
                                        <span className="ml-1 text-sm font-medium text-[#9d8a5f]">
                                            days
                                        </span>
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#e3a532] shadow-sm">
                                    <FaFire />
                                </div>
                            </div>

                            <div className="mt-4 text-xs font-semibold text-[#9b8550]">
                                Keep the streak alive!
                            </div>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                        {/* Study Activity */}
                        <div className="rounded-[30px] border border-[#eeeae4] bg-white p-6 md:p-7 xl:col-span-2">
                            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                                <div>
                                    <h2 className="text-xl font-bold">
                                        Study Activity
                                    </h2>

                                    <p className="mt-1 text-sm text-[#99928d]">
                                        Your focused learning time
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-semibold text-[#9a7bff]">
                                    <span className="h-2 w-2 rounded-full bg-[#9a7bff]" />
                                    Study hours
                                </div>
                            </div>

                            {/* Chart */}
                            <div className="relative w-full overflow-visible rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900">
                                            Study Analytics
                                        </h4>

                                        <p className="text-xs text-slate-500">
                                            Daily breakdown of your commitment
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                                        Active Track
                                    </div>
                                </div>

                                <div className="relative w-full overflow-visible">
                                    <svg
                                        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                                        className="h-65 w-full overflow-visible"
                                        preserveAspectRatio="none"
                                    >
                                        {/* Grid */}
                                        {[0, 1, 2, 3, 4].map((line) => {
                                            const y =
                                                CHART_HEIGHT -
                                                PADDING_Y -
                                                (line / 4) *
                                                    (CHART_HEIGHT -
                                                        PADDING_Y * 2);

                                            return (
                                                <line
                                                    key={line}
                                                    x1={PADDING_X}
                                                    x2={
                                                        CHART_WIDTH -
                                                        PADDING_X
                                                    }
                                                    y1={y}
                                                    y2={y}
                                                    stroke="#f1f5f9"
                                                    strokeWidth="1"
                                                />
                                            );
                                        })}

                                        {/* Area */}
                                        <path
                                            d={areaPath}
                                            fill="#10b981"
                                            opacity="0.06"
                                        />

                                        {/* Hover Line */}
                                        {hoveredPoint !== null && (
                                            <line
                                                x1={
                                                    chartPoints[hoveredPoint].x
                                                }
                                                x2={
                                                    chartPoints[hoveredPoint].x
                                                }
                                                y1={PADDING_Y}
                                                y2={
                                                    CHART_HEIGHT - PADDING_Y
                                                }
                                                stroke="#10b981"
                                                strokeWidth="1"
                                                strokeDasharray="4 4"
                                                opacity="0.6"
                                            />
                                        )}

                                        {/* Line */}
                                        <path
                                            d={linePath}
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        {/* Points */}
                                        {chartPoints.map((point, index) => (
                                            <g
                                                key={point.day}
                                                className="cursor-pointer"
                                                onMouseEnter={() =>
                                                    setHoveredPoint(index)
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredPoint(null)
                                                }
                                            >
                                                {hoveredPoint === index && (
                                                    <circle
                                                        cx={point.x}
                                                        cy={point.y}
                                                        r="14"
                                                        fill="#10b981"
                                                        opacity="0.15"
                                                    />
                                                )}

                                                <circle
                                                    cx={point.x}
                                                    cy={point.y}
                                                    r={
                                                        hoveredPoint === index
                                                            ? 6
                                                            : 4.5
                                                    }
                                                    fill="#ffffff"
                                                    stroke="#10b981"
                                                    strokeWidth="3"
                                                />

                                                <text
                                                    x={point.x}
                                                    y={CHART_HEIGHT - 10}
                                                    textAnchor="middle"
                                                    fontSize="11"
                                                    fontWeight="600"
                                                    fill="#64748b"
                                                >
                                                    {point.day}
                                                </text>
                                            </g>
                                        ))}
                                    </svg>

                                    {/* Tooltip */}
                                    {hoveredPoint !== null && (
                                        <div
                                            className="pointer-events-none absolute z-30 min-w-35 rounded-xl border border-slate-100 bg-white p-3 shadow-xl transition-all duration-150 ease-out"
                                            style={{
                                                left: `${
                                                    (chartPoints[hoveredPoint]
                                                        .x /
                                                        CHART_WIDTH) *
                                                    100
                                                }%`,
                                                top: `${
                                                    (chartPoints[hoveredPoint]
                                                        .y /
                                                        CHART_HEIGHT) *
                                                    100
                                                }%`,
                                                transform:
                                                    "translate(-50%, -125%)",
                                            }}
                                        >
                                            <div className="flex items-center justify-between gap-4 border-b border-slate-50 pb-1.5">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                    {
                                                        chartPoints[
                                                            hoveredPoint
                                                        ].day
                                                    }{" "}
                                                    Timeline
                                                </span>

                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            </div>

                                            <div className="mt-2 flex items-baseline gap-1">
                                                <span className="text-xl font-bold tracking-tight text-slate-800">
                                                    {
                                                        chartPoints[
                                                            hoveredPoint
                                                        ].hours
                                                    }
                                                </span>

                                                <span className="text-[11px] font-medium text-slate-500">
                                                    hours spent
                                                </span>
                                            </div>

                                            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-slate-100 bg-white" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-2 flex justify-between text-xs text-[#aaa39d]">
                                <span>0h</span>
                                <span>2h</span>
                                <span>4h+</span>
                            </div>
                        </div>

                        {/* Overall Progress */}
                        <div className="rounded-[30px] bg-green-600 p-7 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/60">
                                        Overall Progress
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold">
                                        72%
                                    </h2>
                                </div>

                                <FaTrophy className="text-[#f2c66d]" />
                            </div>

                            <div className="my-8 flex justify-center">
                                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[#423c4c]">
                                    <div className="absolute inset-3 rounded-full border-14 border-[#554e5f]" />

                                    <div className="absolute inset-3 -rotate-45 rounded-full border-14 border-transparent border-b-[#9a7bff] border-r-[#9a7bff] border-t-[#9a7bff]" />

                                    <div className="relative text-center">
                                        <p className="text-4xl font-bold">
                                            72%
                                        </p>

                                        <p className="mt-1 text-xs text-white/50">
                                            learning goal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="mb-2 flex justify-between text-xs">
                                        <span className="text-white/60">
                                            Weekly goal
                                        </span>

                                        <span>20 / 25 hrs</span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="h-full rounded-full bg-[#9a7bff]"
                                            style={{ width: "80%" }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2 flex justify-between text-xs">
                                        <span className="text-white/60">
                                            Tasks
                                        </span>

                                        <span>18 / 23</span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="h-full rounded-full bg-[#72c98b]"
                                            style={{ width: "78%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subject Progress + AI Advice */}
                    <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                        {/* Subjects */}
                        <div className="rounded-[30px] border border-[#eeeae4] bg-white p-6 md:p-7">
                            <div className="mb-7">
                                <h2 className="text-xl font-bold">
                                    Subject Progress
                                </h2>

                                <p className="mt-1 text-sm text-[#99928d]">
                                    How you're progressing across subjects
                                </p>
                            </div>

                            <div className="space-y-6">
                                {SUBJECT_PROGRESS.map((subject) => (
                                    <div key={subject.name}>
                                        <div className="mb-2 flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="h-2.5 w-2.5 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            subject.color,
                                                    }}
                                                />

                                                <span className="text-sm font-semibold">
                                                    {subject.name}
                                                </span>
                                            </div>

                                            <span className="text-xs font-bold">
                                                {subject.progress}%
                                            </span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-[#f0ede9]">
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${subject.progress}%`,
                                                    backgroundColor:
                                                        subject.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Advice */}
                        <div className="overflow-hidden rounded-[30px] bg-[#f2edff] p-6 md:p-7">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9a7bff] text-white">
                                        <FaBrain />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-[#463a62]">
                                            StudyBuddy AI
                                        </p>

                                        <p className="text-xs text-[#897ca3]">
                                            Your personal progress coach
                                        </p>
                                    </div>
                                </div>

                                <FaRobot className="text-[#aa99d5]" />
                            </div>

                            <div className="mt-6 rounded-2xl bg-white/80 p-5">
                                <div className="mb-3 flex items-center gap-2 text-[#8169ce]">
                                    <FaLightbulb size={13} />

                                    <span className="text-xs font-bold uppercase tracking-wide">
                                        AI Insight
                                    </span>
                                </div>

                                <p className="text-sm leading-7 text-[#625b69]">
                                    {aiAdvice}
                                </p>
                            </div>

                            <button
                                onClick={generateAdvice}
                                disabled={aiLoading}
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#302b38] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#423c4c] disabled:opacity-60"
                            >
                                <FaRobot size={13} />

                                {aiLoading
                                    ? "Analyzing progress..."
                                    : "Get New AI Advice"}
                            </button>
                        </div>
                    </div>

                    {/* Learning Insights */}
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {INSIGHTS.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-[26px] border border-[#eeeae4] bg-white p-6"
                                >
                                    <div
                                        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconClass}`}
                                    >
                                        <Icon />
                                    </div>

                                    <p className="text-sm text-[#918b86]">
                                        {item.title}
                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-xs text-[#65a872]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Progress;