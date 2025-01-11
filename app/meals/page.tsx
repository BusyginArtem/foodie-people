import { Suspense } from "react";
import Link from "next/link";
//
import { APP_PATH } from "@/lib/constants";
import MealsGrid from "@/components/Meals/MealsGrid";
import MealsLoading from "@/components/Meals/MealsLoading";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="mx-auto my-12 flex w-[90%] max-w-[75rem] flex-col gap-4 text-start text-orange-100">
        <h1 className="mb-2 text-4xl font-bold">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-transparent-fill">
            by you
          </span>
        </h1>

        <p className="text-2xl">
          Choose your favorite recipe and cook it yourself. It easy and fun!
        </p>

        <p>
          <Link
            className="inline-block rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ffc905] px-2 py-2 text-xl font-bold text-white no-underline transition-all hover:from-[#fd4715] hover:to-[#f9b241]"
            href={APP_PATH.MEALS_SHARE}
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className="mx-auto mb-12 mt-20 w-[75%] max-w-[90rem]">
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
