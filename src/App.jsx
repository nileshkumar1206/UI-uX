import Home from "./components/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Work from "./components/WorkPage/Work";
import Contact from "./components/ContactPage/Contact";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Work',
    element: <Work />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
])


function App() {

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
