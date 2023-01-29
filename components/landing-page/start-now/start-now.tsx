import Link from "next/link";

const StartRow = () => {
  return (
    <section className="bg-card py-8 flex items-center justify-center flex-col h-screen">
      <div className="font-main font-semibold text-4xl my-4">
        Start earning today
      </div>
      <Link
        href="/auth/sign-up"
        className="bg-success_light px-6 py-3 rounded font-main text-card font-medium"
      >
        Sign Up Now
      </Link>
    </section>
  );
};

export default StartRow;
