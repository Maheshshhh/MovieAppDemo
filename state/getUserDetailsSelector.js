export const getUserDetailsSelector = state => {
  const currentUser = state.userDetails.users.find(
    user => user.email === state.userDetails.currentUser,
  );
  return{
    userName : currentUser?.userName || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
  }
};
