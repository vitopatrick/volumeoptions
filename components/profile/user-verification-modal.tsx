import { AiFillHome } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import DismissibleAlert from "../../shared/alerts/dismissible";
import { ref, uploadBytes } from "firebase/storage";
import { bucket, store } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";

interface UserModalTypes {
  hide: Boolean;
  setHide: any;
}

const UserModal = ({ hide, setHide }: UserModalTypes) => {
  const [homeAddress, setHomeAddress] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const photoRef = useRef<null | undefined | any>();

  const { user: state }: any = useContext(UserContext);
  const router = useRouter();

  // handle verification
  const submitVerification = async (e: any) => {
    // prevent Browser Default
    e.preventDefault();

    // check if the forms are Empty
    if (!homeAddress || !photoRef.current.files[0]) {
      setError("Please File in the required information");
      setShow(true);
      return;
    }
    debugger;
    try {
      // upload Image
      const imgRef = ref(bucket, `proofImg/${photoRef.current.files[0].name}`);
      await uploadBytes(imgRef, photoRef.current.files[0]);

      // update the document
      const userRef = doc(store, "users", `${state.email}`);
      await updateDoc(userRef, {
        verfied: true,
        address: homeAddress,
      });
      router.push("/account-profile");
    } catch (e: any) {
      setError(e.code);
      setShow(true);
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-card rounded-md  relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-paper text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 font-semibold text-paper text-xl capitalize underline underline-offset-2">
              Please Provide the following for verification
            </h2>
          </div>
          {/* form  */}
          <form>
            {/* enter address */}
            <div>
              <label htmlFor="address" className="font-sec text-sm">
                Home Address
              </label>
              <div className="bg-gray_bg flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className="w-full bg-gray_bg font-sec px-2 focus:outline-none text-bg"
                />
                <AiFillHome className="fill-card" />
              </div>
            </div>
            {/* implement Drag and drop */}
            <div className="mt-8">
              <label
                htmlFor="picture"
                className="font-sec text-sm text-neutral-400 py-2"
              >
                Picture of Workers ID,Driver license or National ID
              </label>
              <div className="rounded">
                <input type="file" name="id" id="id" ref={photoRef} />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={submitVerification}
              className="inline-block w-full mt-6 font-sec py-2 bg-bg text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <DismissibleAlert close={setShow} message={error} show={show} />
      </div>
    </>
  );
};

export default UserModal;
