// import React, { useEffect, useState } from "react";
// import {
//   FaBookOpen,
//   FaClock,
//   FaTasks,
//   FaChartLine,
//   FaArrowUp,
// } from "react-icons/fa";

// import Sidebar from "../components/Sidebar";
// import DashboardNavbar from "../components/DashboardNavbar";
// import API from "../services/api";

// const Dashboard = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const [dashboard, setDashboard] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState("");


//   // Fetch dashboard data
//   useEffect(() => {

//     const fetchDashboard = async () => {

//       try {

//         const response = await API.get("/dashboard");

//         setDashboard(response.data);

//       } catch (err) {

//         console.error(err);

//         setError("Unable to load dashboard data.");

//       } finally {

//         setLoading(false);

//       }

//     };

//     fetchDashboard();

//   }, []);


//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">

//         <div className="text-center">

//           <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>

//           <p className="text-sm text-gray-500">
//             Loading your dashboard...
//           </p>

//         </div>

//       </div>
//     );
//   }


//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center max-w-md">

//           <h2 className="text-lg font-semibold text-gray-900 mb-2">
//             Something went wrong
//           </h2>

//           <p className="text-sm text-gray-500">
//             {error}
//           </p>

//         </div>

//       </div>
//     );
//   }


//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//       />


//       {/* Main */}
//       <div className="lg:ml-64">

//         <DashboardNavbar
//           setIsOpen={setIsOpen}
//         />


//         <main className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">

//           {/* Greeting */}
//           <div className="mb-7">

//             <p className="text-sm text-gray-400 mb-1">
//               Welcome back 👋
//             </p>

//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//               Good morning, {dashboard?.user?.name || "Student"}
//             </h1>

//             <p className="text-sm text-gray-500 mt-2">
//               Here's what's happening with your learning today.
//             </p>

//           </div>


//           {/* =================================================
//               STATS
//           ================================================== */}

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6">

//             {/* Courses */}
//             <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">

//               <div className="flex items-start justify-between">

//                 <div>

//                   <p className="text-xs sm:text-sm text-gray-400">
//                     My Courses
//                   </p>

//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
//                     {dashboard?.stats?.courses || 0}
//                   </h2>

//                 </div>

//                 <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
//                   <FaBookOpen />
//                 </div>

//               </div>

//               <div className="flex items-center gap-1 mt-4 text-xs text-green-500">

//                 <FaArrowUp size={9} />

//                 <span>12% this month</span>

//               </div>

//             </div>


//             {/* Study Hours */}
//             <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">

//               <div className="flex items-start justify-between">

//                 <div>

//                   <p className="text-xs sm:text-sm text-gray-400">
//                     Study Hours
//                   </p>

//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
//                     {dashboard?.stats?.studyHours || 0}h
//                   </h2>

//                 </div>

//                 <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
//                   <FaClock />
//                 </div>

//               </div>

//               <div className="flex items-center gap-1 mt-4 text-xs text-green-500">

//                 <FaArrowUp size={9} />

//                 <span>8% this week</span>

//               </div>

//             </div>


//             {/* Tasks */}
//             <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">

//               <div className="flex items-start justify-between">

//                 <div>

//                   <p className="text-xs sm:text-sm text-gray-400">
//                     Completed Tasks
//                   </p>

//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
//                     {dashboard?.stats?.completedTasks || 0}
//                   </h2>

//                 </div>

//                 <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
//                   <FaTasks />
//                 </div>

//               </div>

//               <div className="flex items-center gap-1 mt-4 text-xs text-green-500">

//                 <FaArrowUp size={9} />

//                 <span>15% this month</span>

//               </div>

//             </div>


//             {/* Progress */}
//             <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">

//               <div className="flex items-start justify-between">

//                 <div>

//                   <p className="text-xs sm:text-sm text-gray-400">
//                     Overall Progress
//                   </p>

//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
//                     {dashboard?.stats?.overallProgress || 0}%
//                   </h2>

//                 </div>

//                 <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
//                   <FaChartLine />
//                 </div>

//               </div>

//               <div className="mt-4 w-full h-1.5 bg-gray-100 rounded-full">

//                 <div
//                   className="h-full bg-blue-600 rounded-full"
//                   style={{
//                     width: `${dashboard?.stats?.overallProgress || 0}%`,
//                   }}
//                 />

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               LOWER SECTION
//           ================================================== */}

//           <div className="grid lg:grid-cols-3 gap-5">

//             {/* Weekly Progress */}
//             <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">

//               <div className="flex items-center justify-between mb-7">

//                 <div>

//                   <h2 className="font-bold text-gray-900">
//                     Weekly Progress
//                   </h2>

//                   <p className="text-xs text-gray-400 mt-1">
//                     Your study activity this week
//                   </p>

//                 </div>

//                 <select className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none text-gray-500">

//                   <option>This Week</option>
//                   <option>Last Week</option>

//                 </select>

//               </div>


//               {/* Chart */}
//               <div className="h-56 flex items-end justify-between gap-2 sm:gap-4">

//                 {(
//                   dashboard?.weeklyProgress || [
//                     45,
//                     60,
//                     50,
//                     72,
//                     65,
//                     85,
//                     78,
//                   ]
//                 ).map((value, index) => (

//                   <div
//                     key={index}
//                     className="flex-1 h-full flex flex-col justify-end items-center gap-2"
//                   >

//                     <div className="w-full max-w-10 bg-gray-100 rounded-t-xl relative h-full flex items-end">

//                       <div
//                         className="w-full bg-blue-600 rounded-t-xl transition-all"
//                         style={{
//                           height: `${value}%`,
//                         }}
//                       />

//                     </div>

//                     <span className="text-xs text-gray-400">
//                       {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
//                     </span>

//                   </div>

//                 ))}

//               </div>

//             </div>


//             {/* Overall Progress */}
//             <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">

//               <h2 className="font-bold text-gray-900">
//                 Overall Progress
//               </h2>

//               <p className="text-xs text-gray-400 mt-1">
//                 Your learning journey
//               </p>


//               {/* Circle */}
//               <div className="flex justify-center py-7">

//                 <div
//                   className="w-40 h-40 rounded-full flex items-center justify-center"
//                   style={{
//                     background: `conic-gradient(
//                       #2563eb ${
//                         dashboard?.stats?.overallProgress || 0
//                       }%,
//                       #eff6ff 0
//                     )`,
//                   }}
//                 >

//                   <div className="w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center">

//                     <span className="text-3xl font-bold text-gray-900">
//                       {dashboard?.stats?.overallProgress || 0}%
//                     </span>

//                     <span className="text-xs text-gray-400">
//                       Completed
//                     </span>

//                   </div>

//                 </div>

//               </div>


//               <div className="text-center">

//                 <p className="text-sm font-semibold text-gray-900">
//                   Keep going!
//                 </p>

//                 <p className="text-xs text-gray-400 mt-1">
//                   You're making great progress.

//                 </p>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               RECENT COURSES
//           ================================================== */}

//           <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 mt-5">

//             <div className="flex items-center justify-between mb-5">

//               <div>

//                 <h2 className="font-bold text-gray-900">
//                   Continue Learning
//                 </h2>

//                 <p className="text-xs text-gray-400 mt-1">
//                   Pick up where you left off
//                 </p>

//               </div>

//               <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
//                 View all
//               </button>

//             </div>


//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

//               {(dashboard?.recentCourses || []).map(
//                 (course, index) => (

//                   <div
//                     key={index}
//                     className="border border-gray-100 rounded-xl p-4 hover:border-blue-100 hover:shadow-sm transition"
//                   >

//                     <div className="flex items-center gap-3 mb-4">

//                       <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
//                         <FaBookOpen />
//                       </div>

//                       <div className="min-w-0">

//                         <h3 className="font-semibold text-sm text-gray-900 truncate">
//                           {course.title}
//                         </h3>

//                         <p className="text-xs text-gray-400">
//                           Course
//                         </p>

//                       </div>

//                     </div>


//                     <div className="flex items-center justify-between text-xs mb-2">

//                       <span className="text-gray-400">
//                         Progress
//                       </span>

//                       <span className="font-semibold text-blue-600">
//                         {course.progress}%
//                       </span>

//                     </div>


//                     <div className="w-full h-1.5 bg-gray-100 rounded-full">

//                       <div
//                         className="h-full bg-blue-600 rounded-full"
//                         style={{
//                           width: `${course.progress}%`,
//                         }}
//                       />

//                     </div>

//                   </div>

//                 )
//               )}

//             </div>

//           </div>

//         </main>

//       </div>

//     </div>
//   );
// };

// export default Dashboard;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export default API;

// =================returning=================

// {
//   "user": {
//     "name": "Abdul",
//     "email": "abdul@example.com"
//   },
//   "stats": {
//     "courses": 8,
//     "studyHours": 12.5,
//     "completedTasks": 24,
//     "overallProgress": 78
//   },
//   "weeklyProgress": [
//     45,
//     60,
//     50,
//     72,
//     65,
//     85,
//     78
//   ],
//   "recentCourses": [
//     {
//       "title": "Web Development",
//       "progress": 78
//     },
//     {
//       "title": "JavaScript",
//       "progress": 64
//     },
//     {
//       "title": "Database Management",
//       "progress": 42
//     }
//   ]
// }


// ==========dashboardroute.js===================

// const express = require("express");

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {

//     // Later get this data from MongoDB
//     const dashboardData = {
//       user: {
//         name: "Abdul",
//         email: "abdul@example.com",
//       },

//       stats: {
//         courses: 8,
//         studyHours: 12.5,
//         completedTasks: 24,
//         overallProgress: 78,
//       },

//       weeklyProgress: [
//         45,
//         60,
//         50,
//         72,
//         65,
//         85,
//         78,
//       ],

//       recentCourses: [
//         {
//           title: "Web Development",
//           progress: 78,
//         },
//         {
//           title: "JavaScript",
//           progress: 64,
//         },
//         {
//           title: "Database Management",
//           progress: 42,
//         },
//       ],
//     };

//     res.json(dashboardData);

//   } catch (error) {

//     res.status(500).json({
//       message: "Failed to load dashboard",
//     });

//   }
// });

// module.exports = router;

// ==========================
// const dashboardRoutes = require("./routes/dashboardRoutes");

// app.use("/api/dashboard", dashboardRoutes);

// ==========================
// GET http://localhost:5000/api/dashboard