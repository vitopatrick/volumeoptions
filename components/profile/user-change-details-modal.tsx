import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import DismissibleAlert from "../../shared/alerts/dismissible";
import {
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth, store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";

interface UserChangeDetailsTypes {
  open: Boolean;
  setOpen: any;
}

const UserChangeDetails = ({ open, setOpen }: UserChangeDetailsTypes) => {
  const [isText, setIsText] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const { user }: any = useContext(UserContext);
  const router = useRouter();

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const changeDetails = async (e: any | unknown | Event) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setError("Fill in the form properly");
      setShow(true);
      return;
    }
    try {
      const docRef = doc(store, "/user", `/${user.email}`);

      await updateEmail(user, email);
      await updatePassword(user, password);

      await updateDoc(docRef, {
        Name: fullName,
        Email: email,
        Password: password,
      });

      router.push("/account-profile");
    } catch (error: unknown | any) {
      setError(error.message);
      setShow(true);
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          open
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-card rounded-md shadow-md p-4 relative">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-paper text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 font-semibold text-paper text-xl capitalize underline underline-offset-2">
              Change Details
            </h2>
            <p className="font-sec text-neutral-400 mt-1 text-base">
              fill the form below to change your display details
            </p>
          </div>
          {/* form  */}
          <form>
            {/* enter address */}
            <div className="my-3">
              <label
                htmlFor="fullName"
                className="font-sec text-sm text-neutral-400"
              >
                Full Name
              </label>
              <div className="bg-gray_bg flex py-3 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray_bg text-bg font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-sec text-sm text-neutral-400"
              >
                Email
              </label>
              <div className="bg-gray_bg flex py-3 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray_bg font-sec text-bg px-2 focus:outline-none"
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
              <div className="flex items-center mt-3 bg-gray_bg py-2 rounded">
                <input
                  type={isText ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-gray_bg text-bg outline-none pl-2"
                />
                <div className="pr-4">
                  {/* change type based on state changes */}
                  {isText ? (
                    <BsEye className=" fill-bg" onClick={toggleIsText} />
                  ) : (
                    <BsEyeSlash className=" fill-bg" onClick={toggleIsText} />
                  )}
                </div>
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={changeDetails}
              className="inline-block w-full mt-6 font-sec py-2 bg-bg text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <DismissibleAlert close={setShow} show={show} message={error} />
      </div>
    </>
  );
};

export default UserChangeDetails;
