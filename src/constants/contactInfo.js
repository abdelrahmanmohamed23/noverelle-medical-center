import { MapPin, Phone, Mail } from "lucide-react";
export const CONTACT_INFO = [
  {
    text: "123 Health Avenue,\n Cairo, Egypt",
    href: "https://www.google.com/maps/place/46%C2%B019'44.7%22S+45%C2%B034'28.5%22E/@-46.329072,45.5720031,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-46.329072!4d45.574578?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
    Icon: MapPin,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label":
      "Noverelle Medical Center Address: 123 Health Avenue, Cairo, Egypt",
  },
  {
    text: "+20 2 1234 5678",
    href: "tel:+20212345678",
    Icon: Phone,
    "aria-label": "Noverelle Medical Center Phone Number: +20 2 1234 5678",
  },
  {
    text: "info@noverelle.com",
    href: "mailto:info@noverelle.com",
    Icon: Mail,
    "aria-label": "Noverelle Medical Center Email Address: info@noverelle.com",
  },
];
