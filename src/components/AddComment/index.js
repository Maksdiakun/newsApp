import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../store/actions/commentActions";

const AddComment = ({ user, postId }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const currentdate = new Date();
    const datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      " at " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const obj = {
      text: comment,
      date: datetime,
      author: user.displayName,
    };
    dispatch(addComments(obj, postId));
    setComment("");
  };
  return (
    <div className="add_comment">
      <form action="" onSubmit={submitHandler} className="coment_form">
        <textarea
          name="comment"
          rows="10"
          value={comment}
          onChange={changeHandler}
        ></textarea>
        <button className="black_btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddComment;
