export const setUser = (payload, token) => {
  return {
    type: 'SET_USER',
    payload,
    token,
  };
};

export const logout = () => ({
  type: 'LOGOUT',
});
