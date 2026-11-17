import { addDays, getDay, startOfDay } from "date-fns";
export default function getNearestAvailableDate(workingDays) {
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const checkDate = addDays(today, i);
    const dayNumber = getDay(checkDate);
    if (workingDays.includes(dayNumber)) {
      return startOfDay(checkDate);
    }
  }
}
