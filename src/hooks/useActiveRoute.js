import { usePathname } from "next/navigation";
export default function useActiveRoute() {
  const pathname = usePathname();

  return (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };
}
