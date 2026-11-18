import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../Pages/HomePage";
import { PostDetailPage } from "../Pages/PostDetailPage/PostDetailPage";
import { UserDetailPage } from "../Pages/UserDetailPage/UserDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/posts/:id",
        element: <PostDetailPage />,
      },
      {
        path: "/users/:id",
        element: <UserDetailPage />
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
