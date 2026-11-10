import OutlineButton from "../../../components/buttons/OutlineButton";

import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { HOME_DOCTORS } from "../constants/homeDoctors";
import { useId } from "react";
import BookAppointmentButton from "@/components/buttons/BookAppointmentButton";

export default function DoctorsSection() {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className="md:grid-cols-auto grid grid-cols-1 gap-10 px-6 py-10 sm:px-10"
    >
      <div className="flex flex-col gap-2">
        <p className="text-deep-green font-bold">MEET OUR DOCTORS</p>

        <h2 id={headingId} className="text-4xl font-bold">
          Our Expert Doctors
        </h2>

        <p className="font-semibold text-gray-500 md:max-w-[75%]">
          Board-certified specialists dedicated to providing the highest
          standard of care for you and your family.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-2 lg:grid-cols-4">
        {HOME_DOCTORS.map(({ name, specialty, image }, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="relative h-40 w-full">
              <Image
                fill
                className="rounded-lg object-cover object-top"
                src={image}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-gray-500">{specialty}</p>
            </div>
            <BookAppointmentButton />
          </div>
        ))}
      </div>
      <OutlineButton
        href="/"
        className="self-center justify-self-center md:col-start-2 md:row-start-1"
      >
        <span>View All Doctors</span> <ArrowRight aria-hidden />
      </OutlineButton>
    </section>
  );
}
