import Link from "next/link";
import Image from "next/image";
//
import logoImg from "@/assets/logo.png";
import { APP_PATH } from "@/lib/constants";

import MainHeaderBackground from "./HeaderBackground";
import MainHeaderNavigation from "./HeaderNavigation";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-[10%]">
        <Link
          href={APP_PATH.HOME}
          className="flex items-center justify-center gap-6 text-orange-100 no-underline md:gap-8"
        >
          <Image
            priority
            src={logoImg}
            width={80}
            height={80}
            alt="A plate food on it"
            className="h-14 w-14 object-contain drop-shadow-black-075 md:h-20 md:w-20"
          />
          <span className="text-base font-bold uppercase tracking-widest md:text-xl lg:text-2xl">
            NextLevel Food
          </span>
        </Link>

        <MainHeaderNavigation />
      </header>
    </>
  );
}
