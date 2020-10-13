import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import {
  loadLikedPosts,
  removeLikedPost,
} from "../../../store/actions/likeActions";
import NewsItem from "../../NewsItem";
import "./liked_posts.scss";

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
    <div className="liked_list container row">
      {Object.values(posts).map((el) => (
        <Col key={el.title} lg={4} md={6} xs={12} className="liked_news">
          <div className="news_full  news_item">
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
        </Col>
      ))}
    </div>
  ) : (
    <h1 style={{ textAlign: "center" }}>Pease add some posts</h1>
  );
};
export default LikedPosts;
