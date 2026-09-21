import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/subjects";
import StudyPlanner from "./pages/StudyPlanner";
import AiBot from "./pages/aiBot";
import Tasks from "./pages/Tasks";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import StudyNotes from "./pages/StudyNotes";



function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/about",
      element: < AboutPage />
    },
    {
      path: "/contact",
      element: < ContactPage />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: < Dashboard />
    }, {
      path: "/subjects",
      element: <Subjects />
    },
    {
      path: "/planner",
      element: < StudyPlanner />
    },
    {
      path: "/aibot",
      element: <AiBot />
    },
    {
      path: "/tasks",
      element: <Tasks />
    },
    {
      path: "/progress",
      element: <Progress />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/notes",
      element: <StudyNotes />
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;