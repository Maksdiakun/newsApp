import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spiner from "../Spiner";
import { getSingleNews } from "../../store/actions/newsActions";
import Comments from "../Coments";

import {
  addLikedPost,
  removeLikedPost,
  loadLikedPosts,
} from "../../store/actions/likeActions";

const NewsFullItem = ({ match: { params } }) => {
  const [like, setLike] = useState(false);
  const liked = useSelector((state) => state.liked.posts);
  const { loading, singleNews, sortBy, search, sources } = useSelector(
    (state) => {
      return state.news;
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLikedPosts());
    dispatch(getSingleNews(params.id, sortBy, search, sources));
  }, []);

  useEffect(() => {
    if (liked && singleNews && singleNews.title in liked) {
      setLike(true);
    }
  }, [liked, singleNews]);

  const changeHandler = () => {
    setLike((prevState) => !prevState);
    if (!like) {
      dispatch(addLikedPost(singleNews));
    } else {
      dispatch(removeLikedPost(singleNews.title));
    }
  };
  if (loading || !singleNews) {
    return <Spiner />;
  }
  let { author, title, description, url, urlToImage } = singleNews;
  return (
    singleNews && (
      <div className="container">
        <div className="news_full">
          <div className="news_full_img">
            <img src={urlToImage} alt="" />
          </div>
          <p>{author}</p>
          <label className="like_label">
            <img
              src={`https://img.icons8.com/${
                like
                  ? "material/24/000000/filled-like--v1.png"
                  : "material-outlined/24/000000/filled-like.png"
              }`}
            />
            <input type="checkbox" checked={like} onChange={changeHandler} />
          </label>
          <p>{title}</p>
          <p>{description}</p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              style={{ color: "blue" }}
            >
              Read full
            </a>
          </p>
        </div>
        <Comments postId={title} />
      </div>
    )
  );
};
export default NewsFullItem;
