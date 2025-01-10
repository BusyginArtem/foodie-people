import { APP_PATH } from "@/lib/constants";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className="mx-auto my-12 flex w-[90%] max-w-[75rem] flex-col gap-14 text-center text-orange-100">
        <h1 className="mb-8 text-4xl font-bold">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-transparent-fill">
            by you
          </span>
        </h1>

        <p className="">
          Choose your favorite recipe and cook it yourself. It easy and fun!
        </p>

        <p>
          <Link
            className="text-lg inline-block rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ffc905] px-2 py-4 font-bold text-white no-underline transition-all hover:from-[#fd4715] hover:to-[#f9b241]"
            href={APP_PATH.MEALS_SHARE}
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className=""></main>
    </>
  );
}
