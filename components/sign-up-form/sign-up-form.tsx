import { useState, useContext, ChangeEvent } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import DismissibleAlert from "../../shared/alerts/dismissible";
import { FormContext } from "./context/FormContext";

const SignUpForm = ({ move }: any) => {
  const [isText, setIsText] = useState(false);
  const [error, setError] = useState<{} | string | null | unknown>();
  const [show, setShow] = useState(false);

  const { email, password, setEmail, setPassword } = useContext(FormContext);

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const registerUsers = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please Enter Email and password");
      setShow(true);
      return;
    }
    move(true);
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
              Email/sub Account
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded my-3 font-main text-base px-2 py-3 w-full bg-gray_bg focus-within:outline-none"
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
            <div className="flex items-center mt-3 bg-gray_bg py-1 rounded">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-gray_bg outline-none py-2 pl-2"
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
          <button
            onClick={registerUsers}
            className="font-main bg-bg text-text_main text-white text-[1rem] mt-8 rounded shadow shadow-bg inline-block w-full py-2"
          >
            Next
          </button>
        </form>
      </div>
      <DismissibleAlert message={error} close={setShow} show={show} />
    </>
  );
};

export default SignUpForm;
