import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem';


const LikedPosts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        let newposts = localStorage.getItem('liked');
        if (newposts) {
            newposts = JSON.parse(newposts);
            setPosts(newposts);
        }
    }, [])
    const clickHandler = ({ url }) => {
        let a = { ...posts };
        delete a[url];
        setPosts(a);
        localStorage.setItem('liked', JSON.stringify(a));
    }
    return (posts && Object.keys(posts).length > 0) ? <div className="liked_list">
        {Object.values(posts).map(el => (
            <div key={el.url} className="news_full liked_news news_item">
                <NewsItem news={el} />
                <p>{el.description}</p>
                <button className="black_btn" onClick={(event) => { clickHandler(el) }} >
                    remove item
            </button>
            </div>

        ))}
    </div>
        : <h1 style={{ textAlign: 'center' }}>
            Pease add some posts
        </h1>


}
export default LikedPosts