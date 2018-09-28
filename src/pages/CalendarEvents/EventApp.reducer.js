const DEFAULT_STATE = {
  loading: true,
  isError: false
};

const EventAppReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return type;
  }
};

export default EventAppReducer;
