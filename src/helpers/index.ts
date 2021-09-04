import { months } from "constants";

export const formatDate = (date: number) => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${months[month]} ${day}, ${year}`;
};
