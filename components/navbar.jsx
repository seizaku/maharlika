"use client";

import { usePathname } from "next/navigation";
import { links } from "@/data/nav-links";
import Link from "next/link";
import { Button } from "@/components/ui/button2";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { ModeToggle } from "@/components/toggle-mode";
import { LogoSvg } from "@/components/svg/logo";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const [isNavOpen, setNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        `${
          scrollY >= 400 && `backdrop-blur-md`
        } fixed z-50 flex h-20 w-full items-center justify-between px-2 md:px-6 lg:top-0 xl:px-44`,
        isNavOpen && `h-screen items-start bg-background/80 pt-[20px]`,
      )}
    >
      <LogoSvg className={"mx-0 ml-4 h-12 w-12 "} width={48} height={48} />
      <nav>
        <ul
          className={cn(
            `flex justify-center gap-8 lg:static lg:flex-row xl:ml-20`,
            isNavOpen ? `fixed left-8 top-24 flex-col` : `hidden lg:flex`,
          )}
        >
          {links.map(({ title, href }, index) => (
            <li key={index} className="pl-0 xl:pl-8">
              <Link
                className={cn(
                  `ease pb-1 transition-all duration-75 hover:border-b-2 hover:border-foreground hover:font-medium`,
                  pathname == href &&
                    "border-b-2 border-foreground font-medium",
                )}
                href={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button
          className={cn(
            `hidden items-center md:block`,
            isNavOpen && `fixed inset-x-6 bottom-12 block`,
          )}
          variant={isNavOpen ? "default" : "default"}
          size="lg"
        >
          Sign in
        </Button>
        <Button
          onClick={() => setNavOpen((prev) => !prev)}
          className="lg:hidden"
          variant="link"
        >
          {isNavOpen ? (
            <HiOutlineX className="h-8 w-8 rotate-180 text-foreground transition-all duration-100 ease-in-out animate-in repeat-1" />
          ) : (
            <HiOutlineMenuAlt4 className="h-8 w-8 rotate-180 text-foreground transition-all duration-100 ease-in-out animate-in repeat-1" />
          )}
        </Button>
      </div>
    </header>
  );
};
