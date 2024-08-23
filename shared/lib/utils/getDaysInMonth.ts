export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getWeekDay = (year: number, month: number, day: number): string => {
  const date = new Date(year, month, day);
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return daysOfWeek[date.getDay()];
};
