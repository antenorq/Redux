import userActionTypes from "./actiontypes";

export const login = (payload) => ({
  type: userActionTypes.LOGIN,
  payload,
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});
