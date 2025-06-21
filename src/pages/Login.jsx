import { NavLink, useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import googleIcon from "../assets/google.png";

function Login() {
	// useNavigate is a hook that returns a function that lets you navigate programmatically
	// in a React components.
	//
	// redirect is a function that lets you redirect the user to a different route
	// but just can ust in loaders or actions, not in React components.
	const navigate = useNavigate();

	const handleLogin = async (formData) => {
		const email = formData.get("email");
		const password = formData.get("password");
		const data = {
			email,
			password,
		};

		const url = import.meta.env.VITE_API_URL + "/auth/login";
		try {
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// need to set this if you want backend can set cookies to frontend
				// and also if you want frontend can set cookies to backend
				credentials: "include",
				body: JSON.stringify(data),
			});

			// Check if the response is ok (status in the range 200-299)
			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			const response = await res.json();
			localStorage.setItem("access_token", response.token);

			navigate("/");
		} catch (error) {
			console.log("Error:", error);
		}
	};

	const handleLoginWithGoogle = useGoogleLogin({
		onSuccess: async (codeResponse) => {
			const url =
				import.meta.env.VITE_API_URL +
				`/oauth/google/callback?code=${codeResponse.code}&redirectUrl=${import.meta.env.VITE_OAUTH_REDIRECT_URL}`;

			try {
				const res = await fetch(url, {
					method: "GET",
					credentials: "include",
				});

				if (!res.ok) {
					throw new Error("Network response was not ok");
				}

				const response = await res.json();
				localStorage.setItem("access_token", response.token);

				navigate("/");
			} catch (error) {
				console.log("Error:", error);
			}
		},
		flow: "auth-code",
	});

	return (
		<div className="flex flex-col justify-center items-start h-screen w-[360px] gap-2 mx-auto">
			<h3 className="text-5xl font-bold">Welcome back</h3>
			<p className="text-gray-400 mb-4">Please enter your details</p>

			<form
				action={handleLogin}
				className="flex flex-col justify-center items-start gap-6 w-full"
			>
				<label className="label-input">
					<span>Email</span>
					<input type="text" name="email" />
				</label>
				<label className="label-input">
					<span>Password</span>
					<input type="password" name="password" />
				</label>
				<button
					className="flex justify-center items-center w-full bg-amber-600 py-2 rounded-[8px] text-white cursor-pointer"
					type="submit"
				>
					Sign In
				</button>
			</form>

			<button
				className="flex justify-center items-center w-full py-2
				rounded-[8px] cursor-pointer mt-6 text-black border-[1px] border-gray-300"
				onClick={handleLoginWithGoogle}
			>
				<img src={googleIcon} alt="google icon" className="w-5 mr-3" />
				Sign in with Google
			</button>

			<div className="flex justify-center items-center w-full mt-4">
				<span className="text-gray-400 mr-2">Don't have an account?</span>
				<NavLink to="/register" className="text-amber-600 underline">
					Sign up
				</NavLink>
			</div>
		</div>
	);
}

export default Login;
