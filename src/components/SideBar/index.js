import React, { useEffect, useState } from "react";
import { getCategoryPosT } from "../../fetch";
import "./SideBar.scss";
import { v4 } from "uuid";
import NewsItem from "../NewsItem/index";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const SideBar = ({ user }) => {
  const { photoURL } = user;
  const [statePosts, setPosts] = useState([]);
  useEffect(() => {
    getCategoryPosT(photoURL)
      .then(({ articles }) => {
        let arr = [];
        for (var i = 0; i < 7; i++) {
          arr[i] = articles[Math.floor(Math.random() * articles.length)];
        }
        setPosts([...arr]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [photoURL]);
  return statePosts[0] ? (
    <Carousel fade={true} indicators={true} controls={false}>
      {statePosts.map((el) => {
        return (
          <Carousel.Item key={v4()}>
            <Link to={encodeURIComponent(el.title)} className="slider_item ">
              <img src={el.urlToImage} alt="" />
              <h4>{el.title}</h4>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  ) : (
    <></>
  );
};
export default SideBar;
