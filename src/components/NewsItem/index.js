import React from 'react';


const NewsItem = ({ news: { author, urlToImage, title, publishedAt: date } }) => {
    date = date.slice(0, 10);
    const defaultImg = 'https://erasmusplus.org.ge/files/news/news-1.jpg';
    return <>
        <div className="news_item_img">
            <img src={urlToImage ? urlToImage : defaultImg} alt="" />
        </div>
        <div>
            <p className="news_item_title">{title}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className="news_item_author">{author}</p>
                <p> {date}</p>
            </div>
        </div>
    </>
};

export default NewsItem;