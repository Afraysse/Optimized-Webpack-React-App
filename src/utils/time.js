import { format } from "date-fns";

const DATETIME = "MM/DD/YYYY h:mma";
const DATETIME_WITH_WEEKDAY = "dddd, MMMM Do YYYY, h:mm:ss a";

export const toReadableDate = date => format(date, DATETIME);

export const toWeekdayDateTime = date => format(date, DATETIME_WITH_WEEKDAY);
