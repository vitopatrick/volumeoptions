import Link from "next/link";

const StartRow = () => {
  return (
    <section className="bg-card py-8 flex items-center justify-center flex-col">
      <div className="font-main font-semibold text-3xl text-teal-500 md:text-4xl my-4 capitalize">
        Start Your Crypto Journey Now!
      </div>
      <div className="font-main font-semibold text-md text-neutral-400 my-4 capitalize text-center px-3">
        With the volume exchange website, trading has never been easier.
      </div>
      <Link
        href="/auth/sign-up"
        className="bg-teal-500 px-6 py-3 rounded font-main text-card font-bold"
      >
        Sign Up Now
      </Link>
    </section>
  );
};

export default StartRow;
