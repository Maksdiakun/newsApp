import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../fetch";
import Comments from "../Comments";
import AddComment from "../AddComment";
import Spiner from "../Spiner";
import { getNews } from "../../store/actions/newsActions";
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
  const { sortBy, search, news, loading, sources } = useSelector((state) => {
    return state.news;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews(sortBy, search, sources));
    dispatch(loadLikedPosts());
  }, []);

  useEffect(() => {
    if (news.length) {
      let str = news[params.id].title.slice(0, 22).replace(/\s/g, "");
      str = str + params.id;
      setCommentId(str);
      getComments(str).then((res) => {
        if (res) {
          setComments(Object.values(res));
        }
      });
      if (liked && news[params.id].title in liked) {
        setLike(true);
      }
    }
  }, [news]);

  const changeHandler = () => {
    setLike((prevState) => !prevState);
    if (!like) {
      dispatch(addLikedPost(news[params.id]));
    } else {
      dispatch(removeLikedPost(news[params.id].title));
    }
  };
  const changeStCallback = useCallback(
    (comment) => {
      comments ? setComments([...comments, comment]) : setComments([comment]);
    },
    [comments]
  );
  if (loading || !news[params.id]) {
    return <Spiner />;
  }
  let { author, title, description, url, urlToImage } = news[params.id];
  return (
    news[params.id] && (
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
