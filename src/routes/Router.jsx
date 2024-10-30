import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import ProjectShowcase from "../pages/ProjectShowcase"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/projects/:projectName',
                element: <ProjectShowcase />,
              },
        ]
    }
])