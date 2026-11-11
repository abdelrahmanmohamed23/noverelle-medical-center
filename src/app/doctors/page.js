import DoctorsGrid from "@/features/doctors/components/DoctorsGrid";
import { HOME_DOCTORS } from "@/features/doctors/constants/homeDoctors";
import { prisma } from "@/lib/prisma";

export default async function Doctors() {
  const doctors = await prisma.doctor.findMany();
  console.log(doctors)
  return <DoctorsGrid doctors={doctors} />;
}
