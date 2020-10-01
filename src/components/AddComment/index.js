import React, { useState } from "react";
import { postComment } from "../../fetch";

const AddComment = ({ user, news, changeSt, comentId }) => {
  const [comment, setComment] = useState("");
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
    postComment(comentId, obj).then(() => {
      changeSt(obj);
      setComment("");
    });
  };
  return (
    <div>
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
