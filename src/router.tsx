import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./routes/admin/admin.layout";
import DashboardPage from "./routes/admin/pages/dashboard.page";
import DatatablePage from "./routes/admin/pages/datatable.page.tsx";
import PageTemplate from "./routes/admin/pages/pageTemplate.page.tsx";
import AuthLayout from "./routes/auth/auth.layout";
import LoginPage from "./routes/auth/pages/login.page";
import RedirectPage from "./routes/auth/pages/redirect.page.tsx";
import SignupPage from "./routes/auth/pages/signup.page";
import PageNotFoundPage from "./routes/public/404.page";
import EditPage from "./routes/admin/pages/editPage.page.tsx";

export const router = createBrowserRouter([
  {
    path: "*", // Catch-all for undefined routes
    element: <PageNotFoundPage />,
  }, {
		path: "/",
		children: [
			{
				index: true,
				element: <RedirectPage />
			}, {
				path: "",
				element: <AuthLayout />,
				children: [
					{
						path: "login",
						element: <LoginPage />
					}, {
						path: "signup",
						element: <SignupPage />
					}
				]
			}, {
				path: "",
				element: <AdminLayout />,
				children: [
					{
						path: "dashboard",
						element: <DashboardPage />
					}, {
						path: "datatable",
						element: <DatatablePage />
					}, {
						path: "page/:id",
						element: <PageTemplate />
					}, {
						path: "page/:id/edit",
						element: <EditPage />
					}
				]
			}
		]
	}
])