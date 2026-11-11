import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";

export default async function Doctor({ params }) {
  const { doctorId } = await params;
  const { name, department, imageUrl } = await prisma.doctor.findUnique({
    where: {
      id: doctorId,
    },
  });
  return (
    <div className="px-6 sm:px-10">
      <div className="relative flex flex-col items-center gap-10 py-10 min-[900px]:flex-row">
        <div className="relative z-1 h-[45vh] w-[75%] min-[900px]:w-1/3 lg:w-1/4">
          <Image
            className="rounded-2xl object-cover object-top"
            fill
            src={imageUrl}
            alt={`Dr. ${name} - ${department} Specialist`}
          />
        </div>
        <div className="z-1 flex flex-col items-start gap-6 self-start min-[900px]:gap-4 min-[900px]:self-center">
          <h1 className="text-5xl font-bold">{name}</h1>
          <div className="bg-secondery-background flex gap-2 rounded-lg px-4 py-2">
            <DynamicIcon name={"heart"} className="text-accent" />
            <p className="font-semibold">{department}</p>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-4 hidden h-full w-[80%] opacity-15 lg:block">
          <Image fill src="/Soft Blue Gradient Wave Abstract.png" />
        </div>
        <DynamicIcon
          name={"heart"}
          className="text-accent absolute right-0 bottom-[15%] hidden h-[20vh] w-[20%] opacity-30 lg:block"
        />
      </div>
    </div>
  );
}
