import FeatureSection from "../../../components/FeatureSection";
import OutlineButton from "../../../components/buttons/OutlineButton";
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
export default function OurDepartments() {
  return (
    <FeatureSection
      subtitle="OUR DEPARTMENTS"
      title="Comprehensive Care for Every Life Stage"
      description="From routine checkups to advanced treatments, our departments are here to keep you and your family healthy."
      link={{
        text: "View All Departments",
        href: "/departments",
      }}
      button={
        <OutlineButton
          className="order-3 self-center md:order-0 md:self-end"
          href="/departments"
        >
          <p>View All Departments</p>
          <ArrowRight />
        </OutlineButton>
      }
      items={[
        {
          title: "Cardiology",
          description: "Heart care for a healthier you",
          Icon: HeartPulse,
        },
        {
          title: "Neurology",
          description: "Expert care for brain and nervous system",
          Icon: Brain,
        },
        {
          title: "Orthopedics",
          description: "Move better, live stronger",
          Icon: Bone,
        },
        {
          title: "Pediatrics",
          description: "Compassionate care for little ones",
          Icon: Baby,
        },
        {
          title: "Oncology",
          description: "Advanced cancer care",
          Icon: ShieldPlus,
        },
        {
          title: "Dermatology",
          description: "Healthy skin, brighter you",
          Icon: Sparkles,
        },
        {
          title: "Gynecology",
          description: "Women's health, every stage",
          Icon: UserCheck,
        },
        {
          title: "General Medicine",
          description: "Comprehensive primary care",
          Icon: Stethoscope,
        },
      ]}
    />
  );
}
