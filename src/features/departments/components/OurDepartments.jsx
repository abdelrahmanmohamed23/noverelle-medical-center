import FeatureSection from "../../../components/FeatureSection";
import OutlineButton from "../../../components/buttons/OutlineButton";
import { ArrowRight } from "lucide-react";
import { HOME_DEPARTMENTS } from "../constants/homeDepartments";
export default function OurDepartments() {
  return (
    <FeatureSection
      subtitle="OUR DEPARTMENTS"
      title="Comprehensive Care for Every Life Stage"
      description="From routine checkups to advanced treatments, our departments are here to keep you and your family healthy."

      button={
        <OutlineButton
          className="order-3 self-center md:order-0 md:self-end"
          href="/departments"
        >
          <span>View All Departments</span>
          <ArrowRight aria-hidden />
        </OutlineButton>
      }
      items={HOME_DEPARTMENTS}
    />
  );
}
