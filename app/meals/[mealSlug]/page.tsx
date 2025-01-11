import Image from "next/image";
//
import { getMeal } from "@/lib/meals";
import type { MealId } from "@/lib/types";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ mealSlug: string }>;
};

export default async function MealPage({ params }: Props) {
  const mealSlug = (await params).mealSlug as MealId;

  const meal = await getMeal({ slug: mealSlug });

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className="m-auto flex max-w-[80rem] gap-12 px-8 py-4">
        <div className="relative h-[20rem] w-[30rem]">
          <Image
            src={meal?.image}
            alt={meal.title}
            fill
            className="animate-fade-slide-in-from-left rounded-lg object-cover shadow-black-05"
          />
        </div>

        <div className="animate-fade-slide-in-from-right flex max-w-[40rem] flex-col gap-4 p-[0.5rem,1rem,0,1rem] text-orange-100">
          <h1 className="text-6xl uppercase shadow-black-05">{meal.title}</h1>

          <p className="text-2xl italic text-[#cfa69b]">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="active::text-shadow bg-gradient-to-r from-[#f9572a] to-[#ff8a05] text-transparent-fill hover:text-shadow"
            >
              {meal.creator}
            </a>
          </p>

          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main className="">
        <p
          className="animate-fade-slide-in-from-bottom mx-8 my-auto max-w-[60rem] rounded-lg bg-[#6e6464] p-8 text-xl text-[#13120f] shadow-black-05"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </main>
    </>
  );
}
