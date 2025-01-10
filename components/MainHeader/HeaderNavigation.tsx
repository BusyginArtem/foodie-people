import { APP_PATH } from "@/lib/constants";
import HeaderLink from "./HeaderLink";

function MainHeaderNavigation() {
  return (
    <nav className="hidden md:block">
      <ul className="m-0 flex list-none gap-6 p-0 text-xl">
        <li>
          <HeaderLink path={APP_PATH.MEALS}>Browse Meals</HeaderLink>
        </li>
        <li>
          <HeaderLink path={APP_PATH.COMMUNITY}>Foodies Community</HeaderLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeaderNavigation;
