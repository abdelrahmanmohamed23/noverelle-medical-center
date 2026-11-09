import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function Button({ className, Icon, children, ...props }) {
  return (
    <Link
      {...props}
      className={twMerge(
        "bg-accent flex justify-center gap-4 rounded-lg px-6 py-4 text-white",
        className,
      )}
    >
      <span>{children}</span>
      {Icon && <Icon aria-hidden />}
    </Link>
  );
}
