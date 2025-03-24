import googleIcon from "../assets/google.png";

function Login() {
	return (
		<div className="flex flex-col justify-center items-start h-screen w-[360px] gap-2 mx-auto">
			<h3 className="text-5xl font-bold">Welcome back</h3>
			<p className="text-gray-400 mb-4">Please enter your details</p>

			<form
				action=""
				className="flex flex-col justify-center items-start gap-6 w-full"
			>
				<label className="label-input">
					<span className="font-bold">Email</span>
					<input type="text" name="email" />
				</label>
				<label className="label-input">
					<span className="font-bold">Password</span>
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
			>
				<img src={googleIcon} alt="google icon" className="w-5 mr-3" />
				Sign in with Google
			</button>

			<div className="flex justify-center items-center w-full mt-4">
				<span className="text-gray-400 mr-2">Don't have an account?</span>
				<a href="/register" className="text-amber-600 underline">
					Sign up
				</a>
			</div>
		</div>
	);
}

export default Login;
