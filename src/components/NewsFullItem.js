import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../fetch";
import Comments from "./Comments";
import AddComment from "./AddComment";
import {getNews} from "../store/actions/newsActions";
import Spiner from "./spiner";

const NewsFullItem = ({ match: { params } }) => {
  const [like, setLike] = useState(false);
  const [comentId, setCommentId] = useState("");
  const [comments, setComments] = useState(null);

  const {sortBy,search,news,loading} = useSelector((state) => {
      return  state.news
  });
  const user = useSelector(state=> state.user);

  const dispatch=  useDispatch();
    useEffect(() => {
      dispatch(getNews(sortBy, search))
          let liked = localStorage.getItem("liked");
              liked = JSON.parse(liked);
              if (news && liked && news.url in liked) {
                setLike(true);
              }
    }, []);
    useEffect(()=>{
      if(news.length){
        let str = news[params.id].title.slice(0, 22).replace(/\s/g, "");
        str = str + params.id;
        setCommentId(str);
        getComments(str).then((res) => {
          if (res) {
            setComments(Object.values(res));
          }
        });
      }
    },[news])


  const changeHandler = () => {
    setLike((prevState) => !prevState);
    let liked = localStorage.getItem("liked");
    liked = JSON.parse(liked);
    localStorage.removeItem("liked");
    if (!like) {
      liked = {
        ...liked,
        [news.url]: news,
      };
    } else {
      delete liked[news.url];
    }
    localStorage.setItem("liked", JSON.stringify(liked));
  };
  const changeStCallback = useCallback(
    (comment) => {
      comments ? setComments([...comments, comment]) : setComments([comment]);
    },
    [comments]
  );
  if (loading){
    return <Spiner/>
  }
  if (!news[params.id]){
    return <></>
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
