import Link from "next/link";

const StartToday = () => {
  return (
    <section className="h-screen">
      <div className="w-[90%] mx-auto">
        <div className="md:grid grid-cols-2">
          <div>
            <img src="/number-one.svg" alt="wallet" />
          </div>
          <div className="my-2 md:my-0">
            <h4 className="text-4xl font-main font-medium capitalize mb-2 text-success_light">
              Create your cryptocurrency portfolio with the best
            </h4>
            <p className="capitalize font-main leading-relaxed my-8">
              seize and maximize the opportunities and potentials of crypto
              today by joining volume exchange
            </p>
            <Link
              href="/auth/sign-up"
              className="rounded px-6 py-3 bg-success_light text-card font-main font-medium"
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
