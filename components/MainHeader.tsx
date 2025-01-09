import Link from "next/link";
import Image from "next/image";
//
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-[10%]">
      <Link
        href="/"
        className="flex items-center justify-center gap-6 text-orange-100 no-underline md:gap-8"
      >
        <Image
          priority
          src={logoImg}
          width={80}
          height={80}
          alt="A plate food on it"
          className="drop-shadow-black-75 h-14 w-14 object-contain md:h-20 md:w-20"
        />
        <span className="text-base font-bold uppercase tracking-widest md:text-xl lg:text-2xl">
          NextLevel Food
        </span>
      </Link>

      <nav className="hidden md:block">
        <ul className="m-0 flex list-none gap-6 p-0 text-xl">
          <li>
            <Link href="/meals" className="header-link">
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community" className="header-link">
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
