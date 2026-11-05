"use client";
// TODO:
// - bug : Fix active path matching for nested/sub-pages
import { Menu } from "lucide-react";
import Link from "next/link";
import Button from "../buttons/Button";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import SideNav from "./SideNav";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";
export default function Header() {
  const path = usePathname();

  return (
    <header className="fixed  z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm sm:px-10">
      <Logo />
      <nav className="hidden lg:block" aria-label="Main Navigation">
        <ul className="flex gap-8">
          {NAV_LINKS.map(({ text, href }) => (
            <li key={href}>
              <Link
                className={twMerge(
                  "font-medium",
                  href === path &&
                    "text-accent underline decoration-2 underline-offset-10",
                )}
                href={href}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button href="/" className="hidden lg:flex">
        Book Appointment
      </Button>

      <SideNav />
    </header>
  );
}
