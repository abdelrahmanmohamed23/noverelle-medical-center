"use server";
import { utc, UTCDate } from "@date-fns/utc";
import {
  addDays,
  addMinutes,
  format,
  parse,
  startOfDay,
  subHours,
  subMinutes,
} from "date-fns";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function bookAppointment(fromData) {
  const { name, email, scheduledAt, doctorId } = Object.fromEntries(fromData);
  const { availabilities, appointments } = await prisma.doctor.findUnique({
    where: {
      id: doctorId,
    },
    include: {
      availabilities: true,
      appointments: {
        where: {
          status: "CONFIRMED",
        },
      },
    },
  });
  const appointmentsSet = new Set(
    appointments.map(({ scheduledAt }) => {
      return scheduledAt.getTime();
    }),
  );

  const MAX_BOOKING_DAYS_AHEAD = 60;
  const SESSION_DURATION = 60;
  const localSchedule = [];
  const availabilityMap = new Map(
    availabilities.map((item) => [
      item.dayOfWeek,
      { startTime: item.startTime, endTime: item.endTime },
    ]),
  );
  const today = new UTCDate(new Date().toISOString());

  for (let addedDays = 0; addedDays < MAX_BOOKING_DAYS_AHEAD; addedDays++) {
    const currentDay = addDays(today, addedDays, { in: utc });
    const dayOfWeek = currentDay.getUTCDay();

    if (availabilityMap.has(dayOfWeek)) {
      const startTimeDate = parse(
        availabilityMap.get(dayOfWeek).startTime,
        "HH:mm",
        currentDay,
        { in: utc },
      );
      const endTimeDate = parse(
        availabilityMap.get(dayOfWeek).endTime,
        "HH:mm",
        currentDay,
        { in: utc },
      );
      let currentTime = startTimeDate;
      while (
        currentTime <= subMinutes(endTimeDate, SESSION_DURATION, { in: utc })
      ) {
        if (!appointmentsSet.has(currentTime.getTime())) {
          localSchedule.push(currentTime);
        }

        currentTime = addMinutes(currentTime, 60, { in: utc });
      }
    }
  }
  let appointmentId;
  if (
    localSchedule.some((date) => date.getTime() === Date.parse(scheduledAt))
  ) {
    try {
      const { id } = await prisma.appointment.create({
        data: {
          patientEmail: email,
          scheduledAt,
          bookingType: "DOCTOR",
          doctorId: doctorId,
        },
      });
      appointmentId = id;

    } catch (error) {
      console.log(error);
    }
  }
  redirect(`/appointments/${appointmentId}/verify`);
}
