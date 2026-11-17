import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function Button({
  className,
  Icon,
  href,
  children,
  type = "button",
  ...props
}) {
  const isLink = href !== undefined && href !== null;
  const Component = isLink ? Link : "button";
  return (
    <Component
      {...props}
      {...(isLink ? { href } : { type })}
      className={twMerge(
        "bg-accent flex justify-center gap-4 rounded-lg px-6 py-4 text-white cursor-pointer",
        className,
      )}
    >
      <span>{children}</span>
      {Icon && <Icon aria-hidden />}
    </Component>
  );
}
