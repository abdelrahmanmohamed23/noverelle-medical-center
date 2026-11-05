import OutlineButton from "../../../components/buttons/OutlineButton";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/buttons/Button";
import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  Hospital,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  ShieldPlus,
  Sparkles,
  UserCheck,
  Stethoscope,
  Building2,
  HeartHandshake,
  Clock,
} from "lucide-react";

export default function DoctorsSection() {
  return (
    <section className="md:grid-cols-auto grid grid-cols-1 gap-10 sm:px-10 px-6 py-10">
      <div className="flex flex-col gap-2">
        <p className="text-deep-green font-bold">MEET OUR DOCTORS</p>

        <h1 className="text-4xl font-bold">Our Expert Doctors</h1>

        <p className="font-semibold text-gray-500 md:max-w-[75%]">
          Board-certified specialists dedicated to providing the highest
          standard of care for you and your family.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-2 lg:grid-cols-4">
        {[
          {
            name: "Dr. Ahmed Hassan",
            specialty: "Cardiologist",
            image:
              "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "Dr. Sara Mohamed",
            specialty: "Neurologist",
            image:
              "https://images.unsplash.com/photo-1594824813575-f7614d101032?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "Dr. Kareem Ali",
            specialty: "Orthopedic Surgeon",
            image:
              "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "Dr. Laila Nabil",
            specialty: "Pediatrician",
            image:
              "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
          },
        ].map(({ name, specialty, image }) => (
          <div className="flex flex-col gap-4">
            <div className="relative h-40 w-full">
              <Image
                fill
                className="rounded-lg object-cover object-top"
                src={image}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">{name}</h1>
              <p className="text-gray-500">{specialty}</p>
            </div>
            <Button href="/">Book Appointment</Button>
          </div>
        ))}
      </div>
      <OutlineButton
        href="/"
        className="self-center justify-self-center md:col-start-2 md:row-start-1"
      >
        <p>View All Doctors</p> <ArrowRight />
      </OutlineButton>
    </section>
  );
}