export const getTimeFromInteger = i => {
  if (i === 0 || i === 24) {
    return "";
  }
  if (i < 12) {
    return i + "am";
  }
  if (i > 12 && i < 24) {
    return (i % 12) + "pm";
  }

  if (i === 12) {
    return "12pm";
  }
};

export const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};
