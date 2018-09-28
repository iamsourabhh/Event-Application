const DEFAULT_STATE = {
  loading: true,
  isError: false
};

const CalendarEventReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return type;
  }
};

export default CalendarEventReducer;
