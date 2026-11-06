"use client";
import BookAppointmentButton from "../buttons/BookAppointmentButton";
import Link from "next/link";
import Button from "../buttons/Button";
import { twMerge } from "tailwind-merge";

import SideNav from "./SideNav";
import Logo from "../Logo";

import { NAV_LINKS } from "@/constants/navigation";
import useActiveRoute from "@/hooks/useActiveRoute";
export default function Header() {
  const getActiveRoute = useActiveRoute();

  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm sm:px-10">
      <Logo />
      <nav className="hidden lg:block" aria-label="Main Navigation">
        <ul className="flex gap-8">
          {NAV_LINKS.map(({ text, href }) => {
            const isActive = getActiveRoute(href);
            return (
              <li key={href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={twMerge(
                    "font-medium",
                    isActive &&
                      "text-accent underline decoration-2 underline-offset-10",
                  )}
                  href={href}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <BookAppointmentButton className="hidden lg:flex" />
      <SideNav />
    </header>
  );
}
