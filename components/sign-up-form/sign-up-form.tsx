import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignUpForm = () => {
  const [isText, setIsText] = useState(false);

  const toggleIsText = () => {
    setIsText(!isText);
  };
  return (
    <>
      <div className="mt-8 w-full md:w-[80%] p-4 mx-auto">
        <form>
          {/* form header */}
          <div>
            <h3 className="text-bg text-4xl font-main font-medium">Sign Up</h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-8">
            <label
              htmlFor="email"
              className="md:text-sm text-gray-500 font-main"
            >
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded my-3 font-main text-base px-2 py-3  bg-gray-200/95 w-full   focus-within:outline-none"
              />
            </div>
          </div>
          {/* password fieldset */}
          <div className="mt-4 flex flex-col">
            <label
              htmlFor="password"
              className="md:text-sm text-gray-500 font-main"
            >
              Password
            </label>
            <div className="flex items-center mt-3 bg-gray-200/95 py-2 rounded">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                className="flex-1 bg-transparent outline-none py-2 pl-2"
              />
              <div className="pr-4">
                {/* change type based on state changes */}
                {isText ? (
                  <BsEye onClick={toggleIsText} />
                ) : (
                  <BsEyeSlash onClick={toggleIsText} />
                )}
              </div>
            </div>
          </div>
          {/* sign up button */}
          <button className="font-main bg-green text-white text-[1rem] mt-8 rounded shadow inline-block w-full py-2">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
