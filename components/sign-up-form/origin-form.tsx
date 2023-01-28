import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, ChangeEvent } from "react";
import { auth, store } from "../../firebase";
import { FormContext } from "./context/FormContext";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import DismissibleAlert from "../../shared/alerts/dismissible";

const StepTwo = ({ move }: any) => {
  const [error, setError] = useState<{} | String | null | unknown>();
  const [show, setShow] = useState(false);
  // nextjs router
  const router = useRouter();

  const {
    phone_number,
    country_of_origin,
    setPhoneNumber,
    setCountryOfOrigin,
    email,
    password,
    name,
  } = useContext(FormContext);

  const registerUser = async (e: any) => {
    e.preventDefault();
    if (!phone_number || !country_of_origin) {
      setError("Please fill the form correctly");
      setShow(true);
      return;
    }

    try {
      // register the user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // then create the users collection for firebase
      const docRef = doc(store, "/users", `/${user.email}`);
      await setDoc(docRef, {
        Email: email,
        Password: password,
        country_of_origin,
        Telephone: phone_number,
        TradingAccount: 0,
        MainAccount: 0,
        StakingAccount: 0,
        verified: false,
        createAt: user.metadata.creationTime,
        Name: name,
      });
      // redirect users to the there dashboard
      router.push("/dashboard");
    } catch (error: any | unknown) {
      console.error(error.code);
      // check if the email already is use
      if (error.code === "auth/email-already-in-use") {
        setError("Email Already in use");
        setShow(true);
      }
      // check for weak password
      if (error.code === "auth/weak-password") {
        setError("Please Enter A stronger Password");
        setShow(true);
      }
      // check for email validity
      if (error.code === "auth/invalid-email") {
        setError("invalid email address");
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
            <h3 className="text-bg text-4xl font-main font-medium">
              Complete Sign Up
            </h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-8">
            <label
              htmlFor="number"
              className="md:text-sm text-gray-500 font-main"
            >
              Phone Number
            </label>
            <div>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              Country of Origin
            </label>
            <div>
              <select
                value={country_of_origin}
                onChange={(e) => setCountryOfOrigin(e.target.value)}
                className="rounded my-3 font-sec text-base px-2 py-3  bg-gray_bg  5 w-full   focus-within:outline-none"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="togo">Togo</option>
              </select>
            </div>
          </div>
          {/* sign up button */}
          <div className="flex justify-between items-center my-3">
            <button
              className="font-main capitalize text-bg bg-gray_bg rounded py-2 px-3 shadow shadow-gray_bg border border-bg-[1px] items-center"
              onClick={() => move(false)}
            >
              go back
            </button>
            <button
              onClick={registerUser}
              className="font-main bg-bg text-text_main text-white text-[1rem] rounded shadow shadow-bg py-2 px-3"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      <DismissibleAlert message={error} show={show} close={setShow} />
    </>
  );
};

export default StepTwo;
