import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface UserChangeDetailsTypes {
  open: Boolean;
  setOpen: any;
}

const UserChangeDetails = ({ open, setOpen }: UserChangeDetailsTypes) => {
  const [isText, setIsText] = useState(false);

  const toggleIsText = () => {
    setIsText(!isText);
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          open
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-white rounded-md shadow-md p-4 relative">
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
              <div className="bg-neutral-200 flex py-3 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
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
              <div className="bg-neutral-200 flex py-3 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
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
                  className="flex-1 bg-transparent outline-none pl-2"
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
            {/* submit button */}
            <button className="inline-block w-full mt-6 font-sec py-2 bg-paper text-white rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserChangeDetails;
