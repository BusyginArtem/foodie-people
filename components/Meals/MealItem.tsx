import Link from "next/link";
import Image from "next/image";
//
import { APP_PATH } from "@/lib/constants";

import type { Meal } from "@/lib/types";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Omit<Meal, "id" | "instructions" | "creator_email">) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-[0.25rem] bg-gradient-to-r from-[#2c1e19] to-[#25200f] text-orange-100 shadow-[0_0_20px_rgba(20,30,30)] transition-all hover:shadow-none">
      <header>
        <div className="relative h-[15rem]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pl-4 pr-4 pt-2">
          <h2 className="text-2xl">{title}</h2>
          <p className="color-[#cfa69b] text-xs italic">by {creator}</p>
        </div>
      </header>
      <div className="flex h-full flex-col justify-between">
        <p className="p-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            className="mt-4 inline-block rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] px-2 py-4 font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] active:from-[#fd4715] active:to-[#f9b241] active:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
            href={`${APP_PATH.MEALS}/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
