import OutlineButton from "../../../components/buttons/OutlineButton";

import { HOME_DOCTORS } from "../constants/homeDoctors";

import { ArrowRight } from "lucide-react";

import { useId } from "react";
import DoctorsGrid from "./DoctorsGrid";


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

     <DoctorsGrid doctors={HOME_DOCTORS} Heading="h3"/>
      <OutlineButton
        href="/"
        className="self-center justify-self-center md:col-start-2 md:row-start-1"
      >
        <span>View All Doctors</span> <ArrowRight aria-hidden />
      </OutlineButton>
    </section>
  );
}
