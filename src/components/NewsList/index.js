import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";
import NewsItem from "../NewsItem";
import Spiner from "../Spiner";
import { getNews } from "../../store/actions/newsActions";
import "./news.scss";

const NewsList = () => {
  const dispatch = useDispatch();
  const { sortBy, search, news, loading, sources } = useSelector((state) => {
    return state.news;
  });
  useEffect(() => {
    dispatch(getNews(sortBy, search, sources));
  }, [search, sortBy, sources]);
  if (loading) {
    return <Spiner />;
  }
  return news ? (
    <>
      <div className="news_list">
        {news.map((el) => (
          <Link to={`/news/` + el.title} key={v4()} className="news_item">
            <NewsItem news={el} />
          </Link>
        ))}
      </div>
    </>
  ) : (
    <div>no News</div>
  );
};

export default NewsList;
