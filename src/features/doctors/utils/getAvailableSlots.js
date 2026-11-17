import { parse, subMinutes, addMinutes, format } from "date-fns";

export default function getAvailableSlots(selectedDate, startTime, endTime) {
  const result = [];
  const SESSION_DURATION = 60;
  const startTimeDate = parse(startTime, "HH:mm", selectedDate);
  const endTimeDate = parse(endTime, "HH:mm", selectedDate);

  let currentTime = startTimeDate;
  while (currentTime <= subMinutes(endTimeDate, SESSION_DURATION)) {
    result.push(format(currentTime, "h:mm a"));
    currentTime = addMinutes(currentTime, 60);
  }

  // for (let current = startTime; current !== endTime; current++) {
  //   const next = current % 24;
  //   result.push(next);
  //   current = next;
  // }
  // result.push(endTime);

  return result;
}
