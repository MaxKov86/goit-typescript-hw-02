/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = "Monday",
  Tuesday = "Thusday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const WeekendOrWork = {
  [Day.Monday]: true,
  [Day.Tuesday]: true,
  [Day.Wednesday]: true,
  [Day.Thursday]: true,
  [Day.Friday]: true,
  [Day.Saturday]: false,
  [Day.Sunday]: false,
};

const isWeekend = (day: Day): boolean => {
  return WeekendOrWork[day];
};
console.log(isWeekend(Day.Monday));
