import Image from "next/image";

import { ArrowRight } from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
import OurDepartments from "@/features/departments/components/OurDepartments";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import ServicesSection from "@/features/services/components/ServicesSection";
import BookAppointmentButton from "@/components/buttons/BookAppointmentButton";
import { CORE_FEATURES } from "@/constants/coreFeatures";
import { HIGHLIGHTS } from "@/constants/highlights";
import { STATS } from "@/constants/stats";
export const metadata = {
  title: "Noverelle Medical Center | Expert Medical Care",
  description:
    "Discover expert doctors, advanced medical facilities, and patient-centered healthcare at Noverelle Medical Center.",
};
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
    <div className="relative h-[80vh] w-full">
      <Image
        priority={true}
        fill
        className="object-cover object-top"
        src="/Noverelle Medical Center at Blue Hour.png"
        sizes="100vw"
      />
      <div className="absolute right-0 bottom-0 left-0 flex flex-col items-start gap-4 pb-6 pl-6 text-white sm:pb-14 sm:pl-10">
        <h1 className="text-5xl font-bold whitespace-pre-line text-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          Advanced Care {"\n"} for a Healthier Tomorrow
        </h1>
        <p className="max-w-[80%] text-gray-200 text-shadow-[0_2px_4px_rgba(0,0,0,1),0_6px_12px_rgba(0,0,0,1),0_12px_24px_rgba(0,0,0,1),0_24px_50px_rgba(0,0,0,1)] sm:max-w-[70%]">
          World-class medical care, expert doctors, and a patient-first
          experience – all in one place.
        </p>
        <BookAppointmentButton Icon={ArrowRight} />
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
      items={CORE_FEATURES}
    />
  );
}

function HighlightsSection() {
  return (
    <div className="grid grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
      {HIGHLIGHTS.map(({ title, description, Icon }, index) => (
        <div className="flex items-start gap-4" key={index}>
          <div className="bg-secondery-background rounded-full p-2">
            <Icon className="text-accent" aria-hidden />
          </div>
          <div>
            <h2 className="font-bold">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatisticsSection() {
  return (
    <div className="relative hidden h-50 lg:block">
      <div className="absolute right-0 h-full w-1/2">
        <Image
          fill
          src="/Noverelle Atrium at Golden Hour.png"
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="absolute left-0 flex h-full w-full items-center bg-linear-to-r from-white from-55% to-transparent">
        <div className="flex w-[65%] items-center justify-between pl-6 sm:pl-10">
          {STATS.map(([value, label], index) => (
            <div className="flex flex-col items-center gap-1" key={index}>
              <strong className="text-accent text-4xl font-bold">
                {value}
              </strong>
              <p className="text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="lg:bg-secondery-background relative mx-6 flex h-auto items-center rounded-lg px-0 sm:mx-10 lg:h-60 lg:px-8">
      <div className="flex w-full flex-col items-start gap-4">
        <h2 className="text-4xl font-bold">Ready to Take the Next Step?</h2>
        <p className="max-w-[75%] text-gray-500 md:max-w-1/2">
          Book your appointment today and experience world-class care at
          Noverelle Medical Center.
        </p>
        <div className="bg-secondery-background relative mt-10 h-60 w-full rounded-lg md:h-80 lg:static lg:mt-0 lg:h-0 lg:w-0">
          <div className="absolute right-0 bottom-0 h-[115%] w-full lg:w-[40%]">
            <Image
              fill
              src="/Smiling Doctor with Blue Lotus Backdrop.png"
              className="object-cover object-top"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>

        <BookAppointmentButton
          Icon={ArrowRight}
          className="self-center lg:self-start"
        />
      </div>
    </div>
  );
}
