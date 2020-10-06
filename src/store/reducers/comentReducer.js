import { LOAD_COMMENTS, ADD_COMMENTS } from "../constans";

const initState = [];

const comentReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { ...state, comments: [...action.comments] };
    case ADD_COMMENTS:
      return { ...state };
    default:
      return state;
  }
};

export default comentReducer;
