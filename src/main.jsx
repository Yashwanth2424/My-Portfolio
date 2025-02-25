import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Skills from "./Components/Skills/skill"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
