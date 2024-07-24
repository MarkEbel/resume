import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './css/index.css'
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import AboutMe from './routes/AboutMe';
import Blog from './routes/Blog';
import SalaryHistory from './routes/SalaryHistory';

const router = createBrowserRouter(
  [{
    path: "/resume",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "AboutMe",
        element: <AboutMe />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Salary",
        element: <SalaryHistory />,
      },
    ],
  }]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
