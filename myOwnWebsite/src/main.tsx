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
import ContactMe from './routes/ContactMe';
import Blog from './routes/Blog';
import Home from './routes/Home';
import ProjectsHistory from './routes/Projects';
import { ThemeProvider } from './ThemeContext';

const router = createBrowserRouter(
  [{
    path: "/resume",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: "AboutMe",
        element: <AboutMe />,
      },
      {
        path: "Skills",
        element: <Blog />,
      },
      {
        path: "Projects",
        element: <ProjectsHistory />,
      },
      {
        path: "Contact",
        element: <ContactMe />,
      },
    ],
  }]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  </React.StrictMode>,
)

