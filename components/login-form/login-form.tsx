// @ts-ignore
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import DismissibleAlert from "../../shared/alerts/dismissible";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [isText, setIsText] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{} | null | String | unknown>();
  const [show, setShow] = useState(false);

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const router = useRouter();

  const loginUser = async (event: any) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      // check if the email is a valid email address
      if (error.code === "auth/invalid-email") {
        setError("Invalid Mail Please use a valid email address ");
        setShow(true);
      }
      // check for internal error
      if (error.code === "auth/internal-error") {
        setError(
          "Server Error,please Refresh browser or Tab or verify email address"
        );
        setShow(true);
      }
      // check for wrong password
      if (error.code === "auth/wrong-password") {
        setError("Password is incorrect");
        setShow(true);
      }
      // check if user exist
      if (error.code === "auth/user-not-found") {
        setError("User does not exist");
        setShow(true);
      }
      // check if user exist
      if (error.code === "auth/network-request-failed") {
        setError("Poor Internet connection");
        setShow(true);
      }
    }
  };

  return (
    <>
      <div className="mt-8 w-full md:w-[80%] p-4 mx-auto">
        <form>
          {/* form header */}
          <div>
            <h3 className="text-bg text-4xl font-main font-medium">Log In</h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-8">
            <label htmlFor="email" className="md:text-sm font-main">
              Email/Sub-Account
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded my-3 font-main text-base px-2 py-3  bg-gray_bg w-full   focus-within:outline-none"
              />
            </div>
          </div>
          {/* password fieldset */}
          <div className="mt-4 flex flex-col">
            <label htmlFor="password" className="md:text-sm font-main">
              Password
            </label>
            <div className="flex items-center mt-3 bg-gray_bg py-2 rounded">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-gray_bg outline-none py-1 pl-2"
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
          {/* login button */}
          <button
            onClick={loginUser}
            className="font-main bg-bg text-text_main text-[1rem] mt-8 rounded shadow inline-block w-full py-2"
          >
            Log in
          </button>
          <div className="flex justify-end my-4">
            <Link
              href="/auth/forgot-password"
              className="justify-end text-sm font-main text-gray-500"
            >
              forgot password
            </Link>
          </div>
        </form>
      </div>
      <DismissibleAlert message={error} show={show} close={setShow} />
    </>
  );
};

export default LoginForm;
