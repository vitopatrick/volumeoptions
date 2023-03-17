import Link from "next/link";
import { ctas } from "./endless-writes";

const Endless = () => {
  return (
    <section className="my-12">
      <div className="w-[90%] mx-auto">
        <div className="font-main font-bold text-xl text-white md:text-4xl mb-6">
          Explore Endless Opportunities with Coins Exchange
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {ctas.map((cta: any) => (
            <Link
              href="/auth/sign-up"
              key={cta.pri}
              className="w-full p-6 bg-card rounded-lg shadow border border-teal-500"
            >
              <h5 className="mb-2 text-xl font-bold text-teal-500 font-main">
                {cta.pri}
              </h5>
              <p className="font-normal text-white font-main">{cta.sec}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endless;
