import { useId } from "react";

export default function FeatureSection({
  subtitle,
  title,
  description,
  button,
  items,
}) {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className="bg-secondery-background flex flex-col gap-8 px-6 py-10 sm:px-10"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-deep-green font-bold">{subtitle}</p>
        <h2 id={headingId} className="text-center text-4xl font-bold">
          {title}
        </h2>
        <p className="text-center font-semibold text-gray-500 sm:max-w-[75%] lg:max-w-1/2">
          {description}
        </p>
      </div>
      {button && button}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, description, Icon }, index) => (
          <div
            className="bg-background flex flex-col items-start gap-1 rounded-lg px-4 py-4"
            key={index}
          >
            <div className="bg-secondery-background rounded-full p-2">
              <Icon className="text-accent" aria-hidden />
            </div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
