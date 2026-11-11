import BookAppointmentButton from "@/components/buttons/BookAppointmentButton";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
export default function DoctorsGrid({ doctors, className, Heading = "h2" }) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-2 lg:grid-cols-4",
        className,
      )}
    >
      {doctors.map(({ id, name, department, imageUrl }, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <div className="relative h-40 w-full">
            <Image
              alt={`Dr. ${name} - ${department} Specialist`}
              fill
              className="rounded-lg object-cover object-top"
              src={imageUrl}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <Heading className="text-lg font-bold">Dr. {name}</Heading>
            <p className="text-gray-500">{department}</p>
          </div>
          <BookAppointmentButton href={`/doctors/${id}`} />
        </div>
      ))}
    </div>
  );
}
