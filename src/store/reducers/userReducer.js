import { CHANGE_STATUS } from "../constans";

const initialState = () => {
  const user = localStorage.getItem("user");
  const parsed = JSON.parse(user);
  console.log(parsed);
  return { user: parsed ? parsed : null };
};
const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default userReducer;
