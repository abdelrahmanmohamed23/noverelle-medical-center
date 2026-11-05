import OutlineButton from "../../../components/buttons/OutlineButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../../../components/buttons/Button";
export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-6 sm:px-10 px-6 py-10">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-2">
          <p className="text-deep-green font-bold">Our Services</p>
          <h1 className="text-4xl font-bold">
            Comprehensive Services for Your Health
          </h1>
          <p className="font-semibold text-gray-500 sm:max-w-[75%] lg:max-w-full">
            From preventive care to advanced treatments, we offer a full range
            of medical services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Health Checkups",
            description: "Stay healthy with comprehensive checkups",
            image:
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Diagnostics",
            description: "Accurate results, faster answers",
            image:
              "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Surgery",
            description: "Advanced surgical care with modern technology",
            image:
              "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Physical Therapy",
            description: "Personalized rehabilitation for a stronger you",
            image:
              "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
          },
        ].map(({ title, description, image }) => (
          <div className="flex flex-col gap-4">
            <div className="relative h-40 w-full">
              <Image
                fill
                className="rounded-lg object-cover object-top"
                src={image}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">{title}</h1>
              <p className="text-gray-500">{description}</p>
            </div>
            <Button className="mt-auto" href="/">
              Book Appointment
            </Button>
          </div>
        ))}
      </div>
      <OutlineButton href="/" className="self-center">
        <p>View All Services</p> <ArrowRight />
      </OutlineButton>
    </section>
  );
}
