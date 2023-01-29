import Link from "next/link";
import { ctas } from "./endless-writes";

const Endless = () => {
  return (
    <section className="h-screen">
      <div className="w-[90%] mx-auto">
        <div className="font-main font-medium text-xl md:text-4xl mb-6">
          Explore Endless Opportunities with Volume exchange
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {ctas.map((cta: any) => (
            <Link
              href="/auth/sign-up"
              key={cta.pri}
              className="w-full p-6 bg-card rounded-lg shadow border border-success_light"
            >
              <h5 className="mb-2 text-xl font-medium text-success_light font-main">
                {cta.pri}
              </h5>
              <p className="font-normal text-gray_bg font-main">{cta.sec}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endless;
