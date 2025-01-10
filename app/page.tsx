import ImageSlideshow from "@/components/MainPageSlider/SlideShow";
import { APP_PATH } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mx-auto my-12 flex w-[90%] max-w-[75rem] gap-12">
        <div className="h-[25rem] w-[40rem]">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-2xl text-orange-100">
            <h1 className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-[2rem] font-bold uppercase tracking-wide text-transparent-fill">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-2xl">
            <Link
              href={APP_PATH.COMMUNITY}
              className="main-page-link main-page-link__community"
            >
              Join the Community
            </Link>
            <Link
              href={APP_PATH.MEALS}
              className="main-page-link main-page-link__meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto mb-12 mt-20 flex w-[90%] max-w-[75rem] flex-col gap-12">
        <section className="main-page-section">
          <h2 className="text-3xl">How it works</h2>
          <div className="flex flex-col gap-4">
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>

            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </section>

        <section className="main-page-section">
          <h2 className="text-3xl">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers. NextLevel Food is a place to
            discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
