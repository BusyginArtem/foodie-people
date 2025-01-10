"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
//
import { cn } from "@/lib/utils";
import { NavLinksType } from "@/lib/types";

type Props = {
  path: NavLinksType;
  children: ReactNode;
};

function HeaderLink({ path, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn("main-header-link", {
        "main-header-link__active": pathname.startsWith(path),
      })}
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
