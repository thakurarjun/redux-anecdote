const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SETTING_NOTIFICATION":
      return action.message;
    case "REMOVE_NOTIFICATION":
      return "";
    default:
      return state;
  }
};
export const setNotification = (message) => {
  return async (dispatch) => {
    await dispatch({
      type: "SETTING_NOTIFICATION",
      message,
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        message: null,
      });
    }, 5000);
  };
};
export default notificationReducer;
