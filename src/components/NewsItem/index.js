import React from "react";
import moment from "moment";
import "./newsItem.scss";
const NewsItem = ({
  news: { author, urlToImage, title, publishedAt: date },
}) => {
  const time = moment(date, "YYYY-MM-DD").fromNow();
  const defaultImg = "https://erasmusplus.org.ge/files/news/news-1.jpg";
  return (
    <>
      <div className="news_item_img">
        <img src={urlToImage ? urlToImage : defaultImg} alt="" />
      </div>
      <div>
        <p className="news_item_title">{title}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="news_item_author">{author}</p>
          <p> {time}</p>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
