import { AiFillHome } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

interface UserModalTypes {
  hide: Boolean;
  setHide: any;
}

const UserModal = ({ hide, setHide }: UserModalTypes) => {
  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-white rounded-md  relative shadow-md p-4">
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
              <label
                htmlFor="address"
                className="font-sec text-sm text-neutral-400"
              >
                Home Address
              </label>
              <div className="bg-neutral-200 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
                />
                <AiFillHome className="fill-neutral-500" />
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
              <div className="w-full h-[100px] border-neutral-200 border-dashed border-2 rounded"></div>
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

export default UserModal;
