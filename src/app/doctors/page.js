import DoctorsGrid from "@/features/doctors/components/DoctorsGrid";

import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Our Expert Doctors",
  description:
    "Discover expert doctors, advanced medical facilities, and patient-centered healthcare at Noverelle Medical Center.",
};
export default async function Doctors() {
  const doctors = await prisma.doctor.findMany();

  return (
    <div className="px-6 sm:px-10">
      <div className="flex flex-col gap-4 py-6">
        <h1 className="text-5xl font-bold">Our Expert Doctors</h1>
        <p className="text-gray-500 md:max-w-[80%] lg:max-w-[60%]">
          Dedicated to providing compassionate, world-class healthcare. Browse
          our experienced doctors across various departments and book your
          appointment with ease.
        </p>
      </div>
      <DoctorsGrid className="py-6" doctors={doctors} />
    </div>
  );
}
