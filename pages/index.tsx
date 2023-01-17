import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/auth/sign-in" className="text-3xl underline font-main">
          Login
        </Link>
      </div>
      <div className="my-3">
        <Link
          href="/auth/sign-up"
          className="text-3xl underline font-main mt-3"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
