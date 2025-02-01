import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/rootlayout/RootLayout";
import DashboardLayout from "./layouts/dashboardlayout/DashboardLayout";

import HomePage from "./routes/homepage/HomePage";
import DashboardPage from "./routes/dashboardpage/DashboardPage";
import ChatPage from "./routes/chatpage/ChatPage";
import SignInPage from "./routes/signinpage/SignInPage";
import SignUpPage from "./routes/signuppage/SignUpPage";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: "/dashboard",
                element: <DashboardPage />,
              },
              {
                path: "/dashboard/chats/:id",
                element: <ChatPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
