import AuthNav from "../../../components/auth-nav/AuthNav";
import SignUpForm from "../../../components/sign-up-form/sign-up-form";

const SignUp = () => {
  return (
    <>
      {/* page Wrapper class */}
      <div className="w-screen h-screen">
        {/* parent div container */}
        <div className="flex justify-between h-screen relative">
          {/* CTA Markups */}
          <div className="flex-1 p-6 text-white bg-green hidden md:flex flex-col justify-center items-start font-semibold font-main">
            <h1 className="text-2xl text-gray-200/90">Still having doubts?</h1>
            <h4 className="text-6xl my-3 underline">Get Started for Free</h4>
          </div>
          {/* Sign Up forms */}
          <div className="flex-1">
            <AuthNav
              cta="Already Have An Account ?"
              path="sign-in"
              urlName={"Sign in today"}
            />
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
