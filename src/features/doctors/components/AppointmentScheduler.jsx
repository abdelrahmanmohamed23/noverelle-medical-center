"use client";
import Button from "@/components/buttons/Button";
import { Calendar, Clock, Mail, User } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format, getDay, min, parse, startOfDay } from "date-fns";
import getAvailableSlots from "../utils/getAvailableSlots";

import { useState } from "react";
import getNearestAvailableDate from "../utils/getNearestAvailableDate";
import { twMerge } from "tailwind-merge";
import buildLocalSchedule from "../utils/buildLocalSchedule";
import bookAppointment from "../../appointments/actions/bookAppointment";
export default function AppointmentScheduler({
  doctorId,
  availabilities,
  appointments,
}) {
  const localSchedule = buildLocalSchedule({ availabilities, appointments });

  const scheduleMap = Object.fromEntries(
    availabilities.map((item) => [
      item.dayOfWeek,
      {
        startTime: item.startTime,
        endTime: item.endTime,
      },
    ]),
  );

  const availableDays = Object.keys(scheduleMap).map((item) => Number(item));
  const [selectedDate, setSelectedDate] = useState(
    getNearestAvailableDate(availableDays),
  );
  console.log(selectedDate);
  console.log(localSchedule);
  console.log(
    localSchedule.filter((date) => date.getTime() === selectedDate.getTime()),
  );
  const [selectedSlot, setSelectedSlot] = useState(
    format(
      min(
        localSchedule.filter(
          (date) => startOfDay(date).getTime() === selectedDate.getTime(),
        ),
      ),
      "hh:mm a",
    ),
  );

  const availableSlots = getAvailableSlots(
    selectedDate,
    scheduleMap[getDay(selectedDate)].startTime,
    scheduleMap[getDay(selectedDate)].endTime,
  );
  function handleDateSelect(value) {
    if (!value) return;
    setSelectedDate(value);
    setSelectedSlot(
      format(
        min(
          localSchedule.filter(
            (date) => startOfDay(date).getTime() === value.getTime(),
          ),
        ),
        "hh:mm a",
      ),
    );
  }
  function prepareScheduledAt() {
    return parse(selectedSlot, "hh:mm a", selectedDate).toISOString();
  }

  return (
    <form
      action={bookAppointment}
      className="grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-6 rounded-2xl border border-gray-200 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="col-span-3 flex items-center gap-4">
        <div className="bg-secondery-background text-accent w-fit rounded-lg p-2">
          <Calendar className="h-8 w-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Book an Appointment</h2>
          <p className="text-gray-500">
            Fill in your details, then choose a date and time for your visit.
          </p>
        </div>
      </div>
      <input type="hidden" name="scheduledAt" value={prepareScheduledAt()} />
      <input type="hidden" name="doctorId" value={doctorId} />
      <DayPicker
        className="row-span-2 flex justify-center rounded-lg border border-gray-100 p-4"
        mode="single"
        style={{
          "--rdp-accent-color": "#0251cc",
        }}
        selected={selectedDate}
        onSelect={handleDateSelect}
        disabled={[
          //   { before: new Date() },
          //   (date) => !availableDays.includes(date.getDay()),
          (date) =>
            !localSchedule.some(
              (localDate) => startOfDay(localDate).getTime() === date.getTime(),
            ),
        ]}
      />
      <TimeSlotPicker
        selectedDate={selectedDate}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
        availableSlots={availableSlots}
        localSchedule={localSchedule}
      />
      <UserDetailsSection />
      <Button type="submit" className="col-start-3 row-start-3">
        Continue to Verify
      </Button>
    </form>
  );
}

function TimeSlotPicker({
  selectedDate,
  selectedSlot,
  setSelectedSlot,
  availableSlots,
  localSchedule,
}) {
  return (
    <div className="row-span-2 flex flex-col gap-4 rounded-lg border border-gray-100 p-4">
      <div className="flex items-center gap-4">
        <div className="bg-secondery-background text-accent w-fit rounded-lg p-2">
          <Clock />
        </div>
        <div>
          <h2 className="text-lg font-bold">Available Times</h2>
          <p className="text-gray-500">
            {format(selectedDate, "EEE, MMM d, yyyy")}
          </p>
        </div>
      </div>
      <fieldset className="grid grid-cols-2 gap-x-4 gap-y-2">
        {localSchedule
          .filter(
            (date) => startOfDay(date).getTime() === selectedDate.getTime(),
          )
          .map((date) => {
            const slot = format(date, "hh:mm a");
            return (
              <label
                key={slot}
                className={twMerge(
                  "focus-within flex cursor-pointer justify-center rounded-lg border border-gray-200 px-6 py-2 select-none focus-within:ring-2",
                  selectedSlot === slot && "bg-accent text-white",
                )}
              >
                <input
                  className="sr-only"
                  type="radio"
                  onChange={() => {
                    setSelectedSlot(slot);
                  }}
                />
                <span> {slot}</span>
              </label>
            );
          })}
      </fieldset>
    </div>
  );
}
function UserDetailsSection() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-100 p-4">
      <div className="flex items-center gap-4">
        <div className="bg-secondery-background text-accent w-fit rounded-lg p-2">
          <User />
        </div>
        <div>
          <h2 className="text-lg font-bold">Your Details</h2>
          <p className="text-gray-500">
            We’ll use this information to confirm your appointment.
          </p>
        </div>
      </div>

      <Input placeholder="Full Name" name="name" Icon={User} />
      <Input placeholder="Email Address" name="email" Icon={Mail} />
    </div>
  );
}
function Input({ Icon, ...props }) {
  return (
    <div className="relative flex items-center">
      <input
        className="z-1 w-full rounded-lg border border-gray-200 py-2 pr-4 pl-12"
        {...props}
      />
      <Icon className="absolute left-4 text-gray-500" />
    </div>
  );
}
