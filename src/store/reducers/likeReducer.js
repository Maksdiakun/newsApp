import {
  LOAD_ALL_LIKED_POSTS,
  REMOVE_LIKED_POSTS,
  ADD_LIKED_POSTS,
} from "../constans";

const initState = {
  posts: null,
};

const likeReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_ALL_LIKED_POSTS:
      return { ...state, posts: { ...action.posts } };
    case ADD_LIKED_POSTS:
      return { ...state, posts: { ...action.posts } };
    case REMOVE_LIKED_POSTS:
      return { ...state, posts: { ...action.posts } };
    default:
      return state;
  }
};

export default likeReducer;
