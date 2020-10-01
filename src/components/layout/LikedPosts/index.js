import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          <div className="buttons_flex">
            <Link to={`/news/` + el.title}>
              <button className="black_btn">Open</button>
            </Link>
            <button
              className="black_btn"
              onClick={(event) => {
                clickHandler(el);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h1 style={{ textAlign: "center" }}>Pease add some posts</h1>
  );
};
export default LikedPosts;
