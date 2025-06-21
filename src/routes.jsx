import { createBrowserRouter } from "react-router";
import App from "@/App.jsx";
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
import Register from "@/pages/Register.jsx";
import { redirect } from "react-router";

async function homeLoader() {
    const token = localStorage.getItem("access_token");
    if (!token) {
        return redirect("/login");
    }

    // const url = import.meta.env.VITE_API_URL + "/auth/verify";
    // const res = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // });

    if (!res.ok) {
        return redirect("/login");
    }
}

async function loginLoader() {
    const token = localStorage.getItem("access_token");
    if (token) {
        return redirect("/");
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home, loader: homeLoader },
            { path: "/login", Component: Login, loader: loginLoader },
            { path: "/register", Component: Register },
        ],
    },
]);

export default router;
