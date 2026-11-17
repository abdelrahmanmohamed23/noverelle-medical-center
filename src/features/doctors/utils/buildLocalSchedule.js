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

export default function buildLocalSchedule({ availabilities, appointments }) {
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
          localSchedule.push(new Date(currentTime));
        }

        currentTime = addMinutes(currentTime, 60, { in: utc });
      }
    }
  }

  return localSchedule;
}
