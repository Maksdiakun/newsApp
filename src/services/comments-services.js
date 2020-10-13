const postId = "TONIGHT,anevent30y0";
const starCountRef = firebase.database().ref(`/comments/${postId}`);
starCountRef.on("value", function (snapshot) {
  const a = Object.values(snapshot.val());
  setComments(a);
});
