import userActionTypes from "./OLD-actiontypes";

export const login = (payload) => ({
  type: userActionTypes.LOGIN,
  payload,
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});
