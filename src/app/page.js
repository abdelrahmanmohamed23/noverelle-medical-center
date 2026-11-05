import Image from "next/image";
import Button from "@/components/buttons/Button";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  Hospital,
  UserCheck,
  Building2,
  HeartHandshake,
  Clock,
} from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
import OurDepartments from "@/features/departments/components/OurDepartments";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import ServicesSection from "@/features/services/components/ServicesSection";
export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <OurDepartments />
      <DoctorsSection />
      <WhyChooseUs />
      <StatisticsSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}
function Hero() {
  return (
    <div className="relative min-h-[80vh] w-full md:max-h-[60vh] lg:mt-22 mt-21">
      <Image
        priority={true}
        fill
        className="object-cover object-top"
        src="/Noverelle Medical Center at Blue Hour.png"
      />
      <div className="absolute right-0 bottom-0 left-0 flex flex-col items-start gap-4 pb-6 sm:pb-14 pl-6 sm:pl-10 text-white">
        <h1 className="text-3xl font-bold text-shadow-[0_4px_8px_rgba(0,0,0,0.9)] md:text-5xl">
          Advanced Care
          <br /> for a Healthier Tomorrow
        </h1>
        <p className="text-gray-200 text-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          World-class medical care, expert doctors, and a patient-first
          experience – all in one place.
        </p>
        <Button href="/" Icon={ArrowRight}>
          Book Appointment
        </Button>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <FeatureSection
      description="We combine world-class expertise, advanced technology, and a
          patient-first approach to deliver exceptional care."
      title="A Healthier You, A Brighter Tomorrow"
      subtitle="WHY CHOOSE NOVERELLE"
      items={[
        {
          title: "World-Class Expertise",
          description: "Board-certified doctors and specialists",
          Icon: Award,
        },

        {
          title: "Advanced Technology",
          description: "Cutting-edge medical facilities",
          Icon: Hospital,
        },
        {
          title: "Patient-Centered Care",
          description: "Your comfort and well-being come first",
          Icon: Heart,
        },
        {
          title: "International Standards",
          description: "Global quality and safety protocols",
          Icon: Globe,
        },
      ]}
    />
  );
}

function HighlightsSection() {
  return (
    <section className="grid grid-cols-1 gap-10 sm:px-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Expert Doctors",
          description: "Board-certified specialists",
          Icon: UserCheck,
        },
        {
          title: "Modern Facilities",
          description: "World-class medical technology",
          Icon: Building2,
        },
        {
          title: "Personalized Care",
          description: "Treatment tailored to you",
          Icon: HeartHandshake,
        },
        {
          title: "24/7 Support",
          description: "Always here for your health",
          Icon: Clock,
        },
      ].map(({ title, description, Icon }) => (
        <div className="flex items-start gap-4">
          <div className="bg-secondery-background rounded-full p-2">
            <Icon className="text-accent" />
          </div>
          <div>
            <h1 className="font-bold">{title}</h1>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function StatisticsSection() {
  return (
    <section className="relative hidden h-50 lg:block">
      <div className="absolute right-0 h-full w-1/2">
        <Image
          fill
          src="/Noverelle Atrium at Golden Hour.png"
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 flex h-full w-full items-center bg-linear-to-r from-white from-55% to-transparent">
        <div className="flex w-[65%] items-center justify-between pl-6 sm:pl-10">
          {[
            ["500+", "Expert Doctors"],
            ["50+", "Medical Departments"],
            ["200K+", "Happy Patients"],
            ["98%", "Patient Satisfaction"],
          ].map((data) => (
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-accent text-4xl font-bold">{data[0]}</h1>
              <p className="text-gray-500">{data[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="lg:bg-secondery-background relative sm:mx-10 mx-6 flex h-auto items-center rounded-lg px-0 lg:h-60 lg:px-8">
      <div className="flex w-full flex-col items-start gap-4">
        <h1 className="text-4xl font-bold">Ready to Take the Next Step?</h1>
        <p className="md:max-w-1/2 max-w-[75%]  text-gray-500">
          Book your appointment today and experience world-class care at
          Noverelle Medical Center.
        </p>
        <div className="bg-secondery-background relative mt-10 h-60 w-full rounded-lg md:h-80 lg:static lg:mt-0 lg:h-0 lg:w-0">
          <div className="absolute right-0 bottom-0 h-[115%] w-full lg:w-[40%]">
            <Image
              fill
              src="/Smiling Doctor with Blue Lotus Backdrop.png"
              className="object-cover object-top"
            />
          </div>
        </div>
        <Button
          className="self-center text-white lg:self-start"
          href="/"
          Icon={ArrowRight}
        >
          Book Appointment
        </Button>
      </div>
    </section>
  );
}
