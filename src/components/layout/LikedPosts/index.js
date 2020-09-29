import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadLikedPosts,
  removeLikedPost,
} from "../../../store/actions/likeActions";
import NewsItem from "../../NewsItem";

const LikedPosts = () => {
  const posts = useSelector((state) => {
    return state.liked.posts;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLikedPosts());
  }, []);
  const clickHandler = ({ title }) => {
    dispatch(removeLikedPost(title));
  };
  return posts && Object.keys(posts).length ? (
    <div className="liked_list">
      {Object.values(posts).map((el) => (
        <div className="news_full liked_news news_item" key={el.title}>
          <NewsItem news={el} />
          <p>{el.description}</p>
          <button
            className="black_btn"
            onClick={(event) => {
              clickHandler(el);
            }}
          >
            remove item
          </button>
        </div>
      ))}
    </div>
  ) : (
    <h1 style={{ textAlign: "center" }}>Pease add some posts</h1>
  );
};
export default LikedPosts;
