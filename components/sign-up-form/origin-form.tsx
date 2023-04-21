import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { auth, store } from "../../firebase";
import { FormContext } from "./context/FormContext";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const StepTwo = ({ move }: any) => {
  // nextJs router
  const router = useRouter();

  const {
    phone_number,
    country_of_origin,
    setPhoneNumber,
    email,
    password,
    name,
  } = useContext(FormContext);

  const registerUser = async (e: any) => {
    e.preventDefault();
    if (!phone_number) {
      toast("Fill the form properly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }

    try {
      // register the user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // send the welcome email
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        email,
        name,
      });

      let requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch("/api/welcome", requestOptions);
      const text = await res.text();
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
        btc: 0,
        eth: 0,
        usdt: 0,
        tron: 0,
      });

      // redirect users to the there dashboard
      router.push("/dashboard");
    } catch (error: any | unknown) {
      switch (error.code) {
        case "auth/email-already-in-use":
          return toast("Email already is in use", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
        case "auth/weak-password":
          return toast("Password is weak", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
        case "auth/invalid-email":
          return toast("Invalid Email Address", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
      }
    }
  };

  return (
    <>
      <div className="mt-8 w-full md:w-[80%] font-main p-6 md:p-4 mx-auto">
        <form>
          {/* form header */}
          <div>
            <h3 className="md:text-bg text-4xl font-bold text-white">
              Complete Sign Up
            </h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-8">
            <label
              htmlFor="number"
              className="md:text-sm text-white md:text-bg"
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
                className="rounded text-base mt-2 px-2 py-3 w-full bg-neutral-300 outline-none"
              />
            </div>
          </div>
          {/* sign up button */}
          <div className="flex justify-between items-center my-3">
            <button
              className="font-main capitalize text-bg bg-neutral-300 rounded py-2 px-3  border border-card md:border-bg items-center"
              onClick={() => move(false)}
            >
              go back
            </button>
            <button
              onClick={registerUser}
              className="font-main bg-card md:bg-bg text-text_main text-white text-[1rem] rounded shadow py-2 px-3"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepTwo;
