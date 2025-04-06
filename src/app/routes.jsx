import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
// import { redirect } from "react-router";

async function homeLoader() {
    // console.log("home loader");
    // return redirect("/login");
}

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home, loader: homeLoader },
            { path: "/login", Component: Login },
            { path: "/register", Component: Register },
        ],
    },
]);

export default router;
