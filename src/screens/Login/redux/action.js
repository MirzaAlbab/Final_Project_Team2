export const setUser = payload => {
  return {
    type: 'SET_USER',
    payload,
  };
};

export const logout = payload => ({
  type: 'LOGOUT',
  payload,
});
