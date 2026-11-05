import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function OutlineButton({className,  href, children, ...props }) {
  const Component = href ? Link : "button";
  return (
    <Component
      href={href}
      className={twMerge("border border-accent rounded-lg py-2 px-4 text-accent flex gap-2", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
