import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "./MainPage"
import DefaultLayout from "@/layouts/DefaultLayout"

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
