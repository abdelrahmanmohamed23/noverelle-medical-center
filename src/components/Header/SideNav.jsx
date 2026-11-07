import { X, Menu } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import BookAppointmentButton from "../buttons/BookAppointmentButton";
import Copyright from "../Copyright";
import Logo from "../Logo";

import { MAIN_LINKS } from "@/constants/mainLinks";
import { useState, useRef, useEffect } from "react";
import useActiveRoute from "@/hooks/useActiveRoute";
export default function SideNav() {
  const getActiveRoute = useActiveRoute();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };
  const openSideNav = () => {
    setIsSideNavOpen(true);
  };

  useEffect(() => {
    if (!isSideNavOpen) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isSideNavOpen]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isSideNavOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isSideNavOpen && dialog.open) {
      dialog.close();
    }
  }, [isSideNavOpen]);
  return (
    <>
      <button
        type="button"
        aria-label="Open side navigation menu"
        className="cursor-pointer lg:hidden"
        onClick={openSideNav}

        aria-haspopup="dialog"
        aria-expanded={isSideNavOpen}
        aria-controls="side-navigation-menu"
      >
        <Menu className="h-10 w-10" aria-hidden="true" />
      </button>
      <dialog
        onClose={() => setIsSideNavOpen(false)}
        aria-label="Side navigation menu"
        id="side-navigation-menu"
        inert={!isSideNavOpen}
        ref={dialogRef}

        className="block backdrop:bg-[#00000080]"
      >
        <div
          className="fixed inset-0"
          onClick={closeSideNav}
          aria-hidden="true"
        ></div>
        <div
          className={twMerge(
            "fixed top-0 right-0 left-auto flex h-dvh max-h-none w-[min(85vw,24rem)] translate-x-full flex-col gap-8 overflow-auto rounded-l-4xl bg-white px-4 py-8 transition duration-100 motion-reduce:transition-none",
            isSideNavOpen && "translate-x-0",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={closeSideNav}
              aria-label="Close side navigation menu"
              className="cursor-pointer"
            >
              <X className="h-13 w-13 cursor-pointer" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Side navigation">
            <ul className="flex flex-col">
              {MAIN_LINKS.map(({ text, href, Icon }) => {
                const isActive = getActiveRoute(href);

                return (
                  <li key={href}>
                    <Link
                      onClick={closeSideNav}
                      aria-current={isActive ? "page" : undefined}
                      href={href}
                      className={twMerge(
                        "flex gap-6 rounded-lg px-2 py-4",
                        isActive && "text-accent bg-secondery-background",
                      )}
                    >
                      <Icon aria-hidden="true" />
                      <span>{text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <BookAppointmentButton />
          <Copyright className="mt-auto self-center text-center" />
        </div>
      </dialog>
    </>
  );
}
