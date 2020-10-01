import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../fetch";
import Comments from "../Comments";
import AddComment from "../AddComment";
import Spiner from "../Spiner";
import { getSingleNews } from "../../store/actions/newsActions";
import {
  addLikedPost,
  removeLikedPost,
  loadLikedPosts,
} from "../../store/actions/likeActions";

const NewsFullItem = ({ match: { params } }) => {
  const [like, setLike] = useState(false);
  const [comentId, setCommentId] = useState("");
  const [comments, setComments] = useState(null);

  const liked = useSelector((state) => state.liked.posts);
  const { user } = useSelector((state) => state.user);
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
    if (singleNews) {
      let str = singleNews.title.slice(0, 22).replace(/\s/g, "");
      str = str + params.id;
      setCommentId(str);
      getComments(str).then((res) => {
        if (res) {
          setComments(Object.values(res));
        }
      });
    }
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
  const changeStCallback = useCallback(
    (comment) => {
      comments ? setComments([...comments, comment]) : setComments([comment]);
    },
    [comments]
  );
  if (loading || !singleNews) {
    return <Spiner />;
  }
  let { author, title, description, url, urlToImage } = singleNews;
  return (
    singleNews && (
      <div>
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
        {comments && <Comments comments={comments} />}
        {user && (
          <AddComment
            user={user}
            comentId={comentId}
            changeSt={changeStCallback}
          />
        )}
      </div>
    )
  );
};
export default NewsFullItem;
