export const increment = () => {
  return { type: "INCR" }
}
export const decrement = () => ({ type: "DECR" })
export const dummy = () => ({ type: "DUMMY" })
export const double = () => ({ type: "DOUBLE" })
export const addUser = (name, email) => ({
  type: "ADD_USER",
  user: { name, email }
})
export const FetchUserSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  users
});
export const FetchUserStarted = () => ({
  type: "FETCH_USERS_STARTED",
});

export const FetchUsers = () => (dispatch) => {
  dispatch(FetchUserStarted());
  setTimeout(function() {
    const users = [
      { name: "TTN", email: "ttn@ttn.com" },
      { name: "Shreya", email: "shreya@ttn.com" },
      { name: "Abhishek", email: "abhishek@ttn.com" },
    ];
    dispatch(FetchUserSuccess(users))
  }, 5000);

}