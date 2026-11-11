import Button from "./Button";
export default function BookAppointmentButton({ href = "/", ...props }) {
  return (
    <Button href={href} {...props}>
      Book Appointment
    </Button>
  );
}
