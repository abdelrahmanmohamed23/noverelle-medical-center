import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex gap-2">
      <div className="relative h-13 w-13">
        <Image src="/Glossy Blue Trifold Leaf Emblem 2.png" fill sizes="52px" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">Noverelle</span>
        <span className="text-sm font-medium">Medical Center</span>
      </div>
    </Link>
  );
}
