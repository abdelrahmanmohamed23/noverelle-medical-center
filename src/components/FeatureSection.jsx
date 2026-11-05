import Link from "next/link";

export default function FeatureSection({
  subtitle,
  title,
  description,
  button,
  items,
}) {
  return (
    <section className="bg-secondery-background py-10 sm:px-10 px-6 flex flex-col gap-8">
      <div className=" flex flex-col gap-2 items-center">
        <p className="text-deep-green font-bold">{subtitle}</p>
        <h1 className="font-bold text-4xl  text-center">{title}</h1>
        <p className="font-semibold text-gray-500 lg:max-w-1/2 sm:max-w-[75%] text-center">
          {description}
        </p>
      </div>
      {button && button}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {items.map(({ title, description, Icon }) => (
          <div className="bg-background py-4 px-4 rounded-lg flex flex-col gap-1 items-start">
            <div className="p-2 bg-secondery-background rounded-full">
              <Icon className="text-accent" />
            </div>
            <h1 className="font-bold ">{title}</h1>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
