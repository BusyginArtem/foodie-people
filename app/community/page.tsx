import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

const liStyles = "flex flex-col items-center gap-8";
const liImgStyles = "w-[8rem] h-[8rem] object-contain";
const liPStyles = "text-2xl font-bold m-0";

export default function CommunityPage() {
  return (
    <>
      <header className="mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] text-center text-orange-100">
        <h1 className="mb-5 text-4xl font-bold">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-transparent-fill">
            Food
          </span>
        </h1>
        <p className="text-2xl font-normal">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="mx-auto w-[90%] max-w-[40rem] text-center text-orange-100">
        <h2 className="mb-8 text-4xl">Community Perks</h2>

        <ul className="mx-12 my-0 list-none p-0">
          <li className={liStyles}>
            <Image
              className={liImgStyles}
              src={mealIcon}
              alt="A delicious meal"
            />
            <p className={liPStyles}>Share & discover recipes</p>
          </li>
          <li className={liStyles}>
            <Image
              className={liImgStyles}
              src={communityIcon}
              alt="A crowd of people, cooking"
            />
            <p className={liPStyles}>Find new friends & like-minded people</p>
          </li>
          <li className={liStyles}>
            <Image
              className={liImgStyles}
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className={liPStyles}>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
