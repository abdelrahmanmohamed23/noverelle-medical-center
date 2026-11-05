// TODO:
// - bug : Fix active path matching for nested/sub-pages
import { X, Menu } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import BookAppointmentButton from "../buttons/BookAppointmentButton";
import Copyright from "../Copyright";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";
import { useState, useRef, useEffect } from "react";

export default function Drawer() {
  const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    if (!isDrawerOpen) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isDrawerOpen]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isDrawerOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isDrawerOpen && dialog.open) {
      dialog.close();
    }
  }, [isDrawerOpen]);
  return (
    <>
      <button
        type="button"
        aria-label="Open side navigation menu"
        className="cursor-pointer lg:hidden"
        onClick={openDrawer}

        aria-haspopup="dialog"
        aria-expanded={isDrawerOpen}
        aria-controls="side-navigation-menu"
      >
        <Menu className="h-10 w-10" aria-hidden="true" />
      </button>
      <dialog
        onClose={() => setIsDrawerOpen(false)}
        aria-label="Side navigation menu"
        id="side-navigation-menu"
        inert={!isDrawerOpen}
        ref={dialogRef}

        className="block backdrop:bg-[#00000080]"
      >
        <div
          className="fixed inset-0"
          onClick={closeDrawer}
          aria-hidden="true"
        ></div>
        <div
          className={twMerge(
            "fixed top-0 right-0 left-auto flex h-dvh max-h-none w-[min(85vw,24rem)] translate-x-full flex-col gap-8 overflow-auto rounded-l-4xl bg-white px-4 py-8 transition duration-100 motion-reduce:transition-none",
            isDrawerOpen && "translate-x-0",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close side navigation menu"
              className="cursor-pointer"
            >
              <X className="h-13 w-13 cursor-pointer" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex flex-col">
              {NAV_LINKS.map(({ text, href, Icon }) => (
                <li key={href}>
                  <Link
                    onClick={closeDrawer}
                    aria-current={href === path ? "page" : undefined}
                    href={href}
                    className={twMerge(
                      "flex gap-6 rounded-lg px-2 py-4",
                      href === path && "text-accent bg-secondery-background",
                    )}
                  >
                    <Icon aria-hidden="true" />
                    <p>{text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <BookAppointmentButton />
          <Copyright className="mt-auto self-center text-center" />
        </div>
      </dialog>
    </>
  );
}
