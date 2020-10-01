import {
  LOAD_ALL_LIKED_POSTS,
  REMOVE_LIKED_POSTS,
  ADD_LIKED_POSTS,
} from "../constans";
import likeServices from "../../services/like-services";

const likehelpers = new likeServices();

export const loadLikedPosts = () => {
  return {
    type: LOAD_ALL_LIKED_POSTS,
    posts: likehelpers.getALlLiked(),
  };
};
export const removeLikedPost = (title) => {
  return {
    type: REMOVE_LIKED_POSTS,
    posts: likehelpers.removeLiked(title),
  };
};
export const addLikedPost = (post) => {
  return {
    type: ADD_LIKED_POSTS,
    posts: likehelpers.addLiked(post),
  };
};
