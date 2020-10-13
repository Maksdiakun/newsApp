import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";
import { Row, Col } from "react-bootstrap";
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
  return news && news.length > 0 ? (
    <>
      <Row className="news_list justify-content-center">
        {news.map((el) => (
          <Col xs={12} md={6} lg={4} xl={3} key={v4()}>
            <Link
              to={`/news/${encodeURIComponent(el.title)}`}
              className="news_item news_list_item"
            >
              <NewsItem news={el} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  ) : (
    <div>no News</div>
  );
};

export default NewsList;
