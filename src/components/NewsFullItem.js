import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { getData } from "../fetch"
import Comments from './Comments';
import AddComment from './AddComment'
import { getComments } from '../fetch';

const NewsFullItem = ({ match: { params }, sortBy, search, user }) => {
    const [news, setNews] = useState(null);
    const [like, setLike] = useState(false);
    const [comentId, setCommentId] = useState('')
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getData(sortBy, search)
            .then(({ data: { articles } }) => {
                setNews(articles[params.id])
                return articles
            })
            .then((articles) => {
                let str = articles[params.id].title
                    .slice(0, 22)
                    .replace(/\s/g, '');
                str = str + params.id;
                setCommentId(str);
                getComments(str)
                    .then((res) => {
                        if (res) {
                            setComments(Object.values(res));
                        }
                    })
            })
    }, []);
    useEffect(() => {
        let liked = localStorage.getItem('liked');
        liked = JSON.parse(liked);
        if (news && liked && news.url in liked) {
            setLike(true);
        }
    }, [news]);

    const changeHandler = () => {
        setLike(prevState => (!prevState));
        let liked = localStorage.getItem('liked');
        liked = JSON.parse(liked);
        localStorage.removeItem('liked');
        if (!like) {
            liked = {
                ...liked,
                [news.url]: news,
            }
        } else {
            delete liked[news.url];
        }
        localStorage.setItem('liked', JSON.stringify(liked));
    }
    const changeSt = (coment) => {
        comments ? (
            setComments([...comments, coment])
        ) : (
                setComments([coment])
            )
    }
    const changeStCallback = useCallback(
        (comment) => {
            comments ? (
                setComments([...comments, comment])
            ) : (
                    setComments([comment])
                )
        },
        [comments],
    );
    let { author, title, description, url, urlToImage } = news ? news : '';
    return news && (
        <div>
            <div className="news_full">
                <div className="news_full_img">
                    <img src={urlToImage} alt="" />
                </div>
                <p>
                    {author}
                </p>
                <label className="like_label">
                    <img src={`https://img.icons8.com/${like ? 'material/24/000000/filled-like--v1.png' : 'material-outlined/24/000000/filled-like.png'}`} />
                    <input type="checkbox" checked={like} onChange={changeHandler} />
                </label>
                <p>
                    {title}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href={url} style={{ color: "blue" }}>
                        Read full
                    </a>
                </p>
            </div>
            {comments && <Comments comments={comments} />}
            {user && <AddComment user={user} comentId={comentId} changeSt={changeStCallback} />}

        </div>
    )
};
const mapsStateToProps = state => (
    {
        sortBy: state.sortBy.sortBy,
        search: state.search.search,
        user: state.user.user
    }
)
export default connect(mapsStateToProps)(NewsFullItem);