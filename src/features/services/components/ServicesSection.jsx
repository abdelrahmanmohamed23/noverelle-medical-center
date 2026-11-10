import OutlineButton from "../../../components/buttons/OutlineButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { HOME_SERVICES } from "../constants/homeServices";
import BookAppointmentButton from "@/components/buttons/BookAppointmentButton";
import { useId } from "react";
export default function ServicesSection() {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className="flex flex-col gap-6 px-6 py-10 sm:px-10"
    >
      <div className="flex flex-col items-start gap-2">
        <p className="text-deep-green font-bold">Our Services</p>
        <h2 id={headingId} className="text-4xl font-bold">
          Comprehensive Services for Your Health
        </h2>
        <p className="font-semibold text-gray-500 sm:max-w-[75%] lg:max-w-full">
          From preventive care to advanced treatments, we offer a full range of
          medical services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {HOME_SERVICES.map(({ title, description, image }, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="relative h-40 w-full">
              <Image
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="rounded-lg object-cover object-top"
                src={image}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-gray-500">{description}</p>
            </div>
            <BookAppointmentButton className="mt-auto" />
          </div>
        ))}
      </div>
      <OutlineButton href="/" className="self-center">
        <span>View All Services</span> <ArrowRight aria-hidden />
      </OutlineButton>
    </section>
  );
}
