import Link from "next/link";
import { Clock } from "lucide-react";
import Copyright from "./Copyright";
import Logo from "./Logo";
import { useId } from "react";
import { MAIN_LINKS } from "@/constants/mainLinks";
import { SERVICES_LINKS } from "@/constants/servicesLinks";
import { SOCIAL_LINKS } from "@/constants/socialLinks";
import { FOOTER_BOTTOM_LINKS } from "@/constants/footerBottomLinks";
import { CONTACT_INFO } from "@/constants/contactInfo";
export default function Footer() {
  return (
    <footer className="px-6 sm:px-10">
      <div className="grid grid-cols-2 justify-between gap-x-8 gap-y-8 py-10 md:gap-x-0 lg:grid-flow-col lg:grid-cols-none">
        <FooterBrand />
        <FooterNav title="Quick Links" links={MAIN_LINKS} />
        <FooterNav title="Our Services" links={SERVICES_LINKS} />
        <ContactUs />
      </div>
      <FooterBottom />
    </footer>
  );
}
function FooterBrand() {
  return (
    <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
      <Logo />
      <p className="text-gray-500">
        Advanced care. Healthier lives.
        <br /> Stronger tomorrows.
      </p>
      <nav className="flex gap-4" aria-label="Social links">
        {SOCIAL_LINKS.map(({ href, viewBox, path, ariaLabel }, index) => (
          <Link
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            aria-label={ariaLabel}
            className="bg-secondery-background rounded-full p-2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox={viewBox}
              className="h-4 w-4"
            >
              <path d={path} />
            </svg>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function FooterNav({ title, links }) {
  const headingId = useId();
  return (
    <nav aria-labelledby={headingId} className="flex flex-col gap-2">
      <h2 id={headingId} className="font-bold">
        {title}
      </h2>
      {links.map(({ text, href }, index) => (
        <Link key={index} className="text-gray-500" href={href}>
          {text}
        </Link>
      ))}
    </nav>
  );
}

function ContactUs() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="col-span-2 flex flex-col gap-2 min-[1200px]:pr-12 sm:col-span-1"
    >
      <h2 id={headingId} className="font-bold">
        Contact Us
      </h2>
      <div className="flex flex-col gap-6">
        <address className="flex flex-col gap-6 not-italic">
          {CONTACT_INFO.map(({ text, Icon, ...props }, index) => {
            return (
              <Link key={index} className="flex items-center gap-4" {...props}>
                <Icon aria-hidden="true" className="text-accent" />
                <span className="whitespace-pre-line text-gray-500">
                  {text}
                </span>
              </Link>
            );
          })}
        </address>
        <p className="flex items-center gap-4">
          <Clock aria-hidden="true" className="text-accent" />
          <span className="whitespace-pre-line text-gray-500">
            24/7 Emergency Care
          </span>
        </p>
      </div>
    </section>
  );
}

function FooterBottom() {
  return (
    <div>
      <div className="h-[0.1px] bg-black opacity-10"></div>
      <div className="flex flex-col-reverse items-center justify-center gap-4 py-6 lg:flex-row lg:justify-between">
        <Copyright />
        <nav className="flex gap-8" aria-label="Legal and sitemap">
          {FOOTER_BOTTOM_LINKS.map(({ text, href }, index) => (
            <Link key={index} href={href}>
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
