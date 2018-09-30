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

export const normalizeEventData = data => {
  const normalizedData = {};
  data.map(obj => {
    const startDateObj = new Date(obj.startTime);
    const endDateObj = new Date(obj.endTime);
    const date = startDateObj.toLocaleDateString();
    const startTime = startDateObj.toLocaleTimeString();
    const endTime = endDateObj.toLocaleTimeString();
    const objToPush = {
      startTime,
      endTime,
      date,
      id: obj.id,
      name: obj.title
    };
    if (normalizedData[date] === undefined) {
      normalizedData[date] = {};
    }
    normalizedData[date][obj.id] = objToPush;
    return obj;
  });
  return normalizedData;
};
