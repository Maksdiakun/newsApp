import React, { useEffect } from "react";
import ComentList from "../CommentList";
import AddComment from "../AddComment";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../../store/actions/commentActions";

const Coments = ({ postId }) => {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadComments(postId));
  }, []);

  const { user } = useSelector((state) => state.user);
  return (
    <div>
      {comments && <ComentList comments={comments} />}
      {user && <AddComment user={user} postId={postId} />}
    </div>
  );
};

export default Coments;
