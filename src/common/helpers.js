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
      name: obj.title,
      level: 1
    };
    if (normalizedData[date] === undefined) {
      normalizedData[date] = {};
    }
    normalizedData[date][obj.id] = objToPush;
    return obj;
  });
  return normalizedData;
};

// export const checkConflicts = events => {
//   Object.keys(events).map(eventId => {
//     Object.keys(events).map(eId => {
//       if (eId !== eventId) {
//         const e1 = events[eId];
//         const e2 = events[eventId];
//         // console.log("e1.startTime < e2.startTime", eventId, eId);
//         // console.log(e1.startTime, e2.startTime);
//         // console.log(e1.startTime < e2.startTime);
//         // console.log("--------------------------------------------");

//         // console.log("e1.endTime > e2.startTime", eventId, eId);
//         // console.log(e1.endTime, e2.startTime);
//         // console.log(e1.endTime > e2.startTime);
//         // console.log("--------------------------------------------");

//         if (e1.startTime < e2.startTime && e1.endTime > e2.startTime) {
//           events[eId].level = events[eventId].level + 1;
//           console.log("conflict", eventId, eId);
//         }
//       }
//     });
//   });
//   return events;
// };

export const checkConflicts = objects => {
  const sortedArrayOfEvents = sortObjectByValueOfKey(objects);
  let conflictIdsArray = [];

  for (let index = 0; index < sortedArrayOfEvents.length; index++) {
    let conflictLevel = 1;
    conflictIdsArray = [];
    for (let idx = index + 1; idx < sortedArrayOfEvents.length; idx++) {
      if (
        isConflict(sortedArrayOfEvents[index], sortedArrayOfEvents[idx]) &&
        conflictIdsArray.indexOf(sortedArrayOfEvents[idx].id) === -1 &&
        sortedArrayOfEvents[index].id !== sortedArrayOfEvents[idx].id
      ) {
        console.log("conflict");
        if (conflictLevel === 1) {
          conflictIdsArray.push(sortedArrayOfEvents[index].id);
        }
        conflictIdsArray.push(sortedArrayOfEvents[idx].id);

        conflictLevel++;
      } else {
        index = idx;
        // break;
      }
    }
    console.log(conflictIdsArray);
    if (conflictIdsArray.length === 0) {
      objects[sortedArrayOfEvents[index].id].level = 1;
      objects[sortedArrayOfEvents[index].id].left = 1;
      console.log(objects[sortedArrayOfEvents[index].id].name, 1, 1);
    }
    conflictIdsArray.map((id, iddx) => {
      objects[id].level = conflictLevel;
      objects[id].left = iddx + 1;
      console.log(objects[id].name, iddx + 1, conflictLevel);
      return null;
    });
  }
  return objects;
};

const isConflict = (e1, e2) => {
  return e1.startTime <= e2.startTime && e1.endTime > e2.startTime;
};
export const sortObjectByValueOfKey = objects => {
  const object = Object.values(objects);
  for (var i = 1; i < object.length; i++) {
    var temp = object[i];
    for (
      var j = i - 1;
      j >= 0 && temp["startTime"] < object[j]["startTime"];
      j--
    )
      object[j + 1] = object[j];
    object[j + 1] = temp;
  }
  return object;
};
