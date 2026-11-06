import Button from "./Button";
export default function BookAppointmentButton({ ...props }) {
  return (
    <Button href="/" {...props}>
      Book Appointment
    </Button>
  );
}
