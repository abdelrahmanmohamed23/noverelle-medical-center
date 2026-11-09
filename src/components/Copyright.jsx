
import { twMerge } from "tailwind-merge";

export default function Copyright({ className }) {
  return (
    <p className={twMerge("text-gray-500", className)}>
      © {new Date().getFullYear()} Noverelle Medical Center. All rights
      reserved.
    </p>
  );
}
