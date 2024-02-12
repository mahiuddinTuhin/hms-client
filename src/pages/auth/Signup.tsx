import { FC } from "react";
import { NavLink } from "react-router-dom";
import SignupForm from "./SignupForm";

const Signup: FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-12">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Create patient account
          </h1>
          <p className="mt-2 text-gray-500">create account below</p>
        </div>
        <div className="mt-5">
          <>
            <SignupForm />
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                login here
              </NavLink>
              .
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Signup;
