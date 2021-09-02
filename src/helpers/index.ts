import { months } from "constants";

export const generateActions = (action: string) => {
  action = action.toUpperCase();
  return {
    REQUEST: `${action}_REQUEST`,
    SUCCESS: `${action}_SUCCESS`,
    FAILURE: `${action}_FAILURE`,
  };
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${months[month]} ${day}, ${year}`;
};
