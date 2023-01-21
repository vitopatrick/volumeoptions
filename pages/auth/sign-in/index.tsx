import AuthNav from "../../../components/auth-nav/AuthNav";
import LoginForm from "../../../components/login-form/login-form";

const SignIn = () => {
  return (
    <>
      <div className="w-screen h-screen">
        {/* parent div */}
        <div className="flex justify-between h-screen relative">
          {/* CTA write Ups */}
          <div className="flex-1 p-6 flex-col font-semibold text-white bg-green hidden md:flex justify-center items-start font-main">
            <h1 className="text-2xl text-gray-200/90">
              Don't Get lost looking for the next crypto Gem
            </h1>
            <h1 className="text-6xl my-3 underline">log in now</h1>
          </div>
          {/* Form Elements */}
          <div className="flex-1">
            <AuthNav
              cta="Don't have an account"
              path="sign-up"
              urlName={"sign up now"}
            />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
