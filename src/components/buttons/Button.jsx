import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function Button({ className, Icon, children, ...props }) {
  return (
    <Link
      {...props}
      className={twMerge(
        "bg-accent flex gap-4 justify-center  py-4 px-6 rounded-lg",
        className,
      )}
    >
      <p className="text-white"> {children}</p>
      {Icon && <Icon />}
    </Link>
  );
}
