import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Skills from "./Components/Skills/skill"
import Projects from "./Components/Projects/Projects"
import ErrorPage from './Components/ErrorPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>, 
    children: [
      { index: true, element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
    ],
  },
],
{
  basename: process.env.NODE_ENV === "production" ? "/My-Portfolio" : "/"
}
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
