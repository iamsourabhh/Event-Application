export const getTimeFromInteger = i => {
  if (i === 0 || i === 24) {
    return "";
  }
  if (i < 12) {
    return i + "am";
  }
  if (i >= 12 && i < 24) {
    return i + "pm";
  }
};
