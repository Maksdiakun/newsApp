import React, { useEffect, useState } from 'react';
import { getCategoryPosT } from '../../fetch';
import './SideBar.scss';
import { v4 } from "uuid";
import NewsItem from '../NewsItem/index'

const SideBar = ({ user }) => {
    const { photoURL } = user;
    const [statePosts, setPosts] = useState([]);
    useEffect(() => {
        getCategoryPosT(photoURL)
            .then(({ articles }) => {
                let arr = [];
                for (var i = 0; i < 3; i++) {
                    arr[i] = articles[Math.floor(Math.random() * articles.length)]
                }
                setPosts([
                    ...arr
                ]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (statePosts[0]) ? (
        <div className="side_bar">
            <h4>Random news</h4>
            <ul>
                {statePosts.map((el) => {
                    return <li key={v4()} className="news_item">
                        <NewsItem news={el} />
                        <a href={el.url}>Read Full</a>
                    </li>
                })}
            </ul>
        </div>
    ) : (
            <></>
        )
};
export default SideBar