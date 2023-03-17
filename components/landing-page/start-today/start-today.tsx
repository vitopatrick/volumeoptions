import Link from "next/link";

const StartToday = () => {
  return (
    <section className="my-16">
      <div className="w-[90%] mx-auto">
        <div className="md:grid grid-cols-2">
          <div>
            <img src="/number-one.svg" alt="wallet" />
          </div>
          <div className="my-2 md:my-0">
            <h4 className="text-xl md:text-4xl font-main font-bold capitalize mb-2 text-teal-500">
              Create your cryptocurrency portfolio with the best
            </h4>
            <p className="capitalize font-main leading-relaxed my-8 text-neutral-300">
              seize and maximize the opportunities and potentials of crypto
              today by joining Coins Exchange
            </p>
            <Link
              href="/auth/sign-up"
              className="rounded px-6 py-3 bg-teal-500 text-card font-main font-medium"
            >
              Get Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartToday;
