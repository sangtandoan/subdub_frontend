import { NavLink } from "react-router";

function Register() {
    return (
        <div className="flex flex-col justify-center items-center w-[360px] h-screen gap-2 m-auto">
            <h1 className="self-center font-bold text-5xl">Sign up</h1>
            <p className="self-center">
                <span className="text-gray-500">Already have an account? </span>
                <NavLink className="underline" to="/login">
                    Login
                </NavLink>
            </p>
            <form
                action=""
                className="flex flex-col justify-center items-center gap-5 w-full mt-6 text-[14px]"
            >
                <label className="label-input">
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label className="label-input">
                    <span>Password</span>
                    <input type="password" />
                </label>
                <label className="label-input">
                    <span>Confirm Password</span>
                    <input type="password" />
                </label>
                <button
                    className="bg-black text-white w-full py-2 rounded-[8px]"
                    type="submit"
                >
                    Join
                </button>
            </form>
        </div>
    );
}

export default Register;
