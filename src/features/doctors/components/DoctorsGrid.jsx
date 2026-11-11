
import BookAppointmentButton from "@/components/buttons/BookAppointmentButton";
import Image from "next/image";
export default function DoctorsGrid({doctors}) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-2 lg:grid-cols-4">
      {doctors.map(({ name, department, imageUrl }, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <div className="relative h-40 w-full">
            <Image
              fill
              className="rounded-lg object-cover object-top"
              src={imageUrl}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-500">{department}</p>
          </div>
          <BookAppointmentButton />
        </div>
      ))}
    </div>
  );
}
