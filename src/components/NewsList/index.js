import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 } from "uuid";
import NewsItem from "../NewsItem";
import { getData } from "../../fetch";
import loadNewsAction from "../../store/actions/loadNews";
import './news.scss'

const NewsList = ({ news, sortBy: { sortBy }, search: { search }, loadNews }) => {
  useEffect(() => {
    getData().then(res => {
      loadNews(res.data.articles);
    });
  }, []);
  useEffect(() => {
    getData(sortBy, search).then(res => {
      loadNews(res.data.articles);
    });
  }, [sortBy, loadNews, search]);
  return news ? (
    <>
      <div className="news_list">
        {news.map((el, index) => (
          <Link to={`/news/` + index} key={v4()} className="news_item">
            <NewsItem news={el} />
          </Link>
        ))}
      </div>
    </>
  ) : (
      <div>no News</div>
    );
};
const mapStateToProps = state => {
  return {
    news: state.news,
    sortBy: state.sortBy,
    search: state.search,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNews: news => dispatch(loadNewsAction(news))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
