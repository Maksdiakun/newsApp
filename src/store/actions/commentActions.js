import firebase from "firebase";
import { LOAD_COMMENTS, ADD_COMMENTS } from "../constans";

export const loadComments = (postId) => (dispatch) => {
  const starCountRef = firebase.database().ref(`/comments/${postId}`);
  starCountRef.on("value", function (snapshot) {
    const val = snapshot.val();
    let comments;
    if (val) {
      comments = Object.values(snapshot.val());
    } else {
      comments = [];
    }
    dispatch({ type: LOAD_COMMENTS, comments: comments });
  });
};

export const addComments = (coment, postId) => {
  var newPostKey = firebase.database().ref(`/comments/${postId}/`).push().key;
  firebase.database().ref(`/comments/${postId}/${newPostKey}`).update(coment);
  return { type: ADD_COMMENTS, payload: coment };
};
