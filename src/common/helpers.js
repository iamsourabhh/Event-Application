export const getTimeFromInteger = i => {
  if (i === 0 || i === 24) {
    return "";
  }
  if (i < 12) {
    return i + " AM";
  }
  if (i > 12 && i < 24) {
    return (i % 12) + " PM";
  }

  if (i === 12) {
    return "12 PM";
  }
};
