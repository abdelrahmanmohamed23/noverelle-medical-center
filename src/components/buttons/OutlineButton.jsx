import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function OutlineButton({
  className,
  href,
  children,
  type = "button",
  ...props
}) {
  const isLink = href !== undefined && href !== null;
  const Component = isLink ? Link : "button";
  return (
    <Component
      {...(isLink ? { href } : { type })}
  
      className={twMerge(
        "border-accent text-accent flex gap-2 rounded-lg border px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
