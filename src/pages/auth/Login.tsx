import { FC, FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
import verifyJwt from "../../utils/jwt/verifyJwt";
import toastError from "../../utils/toastError/toastError";

const Login: FC = () => {
  const [email, setEmail] = useState("Adm220124001");
  const [password, setPassword] = useState("P@ss0rd!");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { error, isError }] = useLoginMutation();
  toastError(isError, error);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const toastId = toast.warning("Logging in..", { duration: 2000 });
    e.preventDefault();
    try {
      const res = await login({ id: email, password }).unwrap();

      const token = res.data.accessToken;
      const user = verifyJwt(token) as TUser;
      dispatch(setUser({ user, userToken: token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/`);
      // navigate(`/${user?.role}/dashboard`);
    } catch (error) {
      // toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-12">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-gray-500">
            Sign in below to access your account
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="relative mt-6">
              <input
                name="email"
                id="email"
                defaultValue={email}
                placeholder="Email Address or Id"
                className="peer mt-3 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none pl-1"
                onBlur={(e) => setEmail(e.target.value)}
              />
              <label
                // for="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                defaultValue={password}
                placeholder="Password"
                className="peer peer mt-3 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                onBlur={(e) => setPassword(e.target.value)}
              />
              <label
                // for="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Login
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don&#x27;t have an account yet?{" "}
              <NavLink
                to="/signup"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Sign up
              </NavLink>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
