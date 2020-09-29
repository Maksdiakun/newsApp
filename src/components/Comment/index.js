import React from "react";

const Comment = ({ el: { date, text, author } }) => {
    const names = author.split('/');
    return <li >
        <div>
            <div>
                <p>{names[0]}</p>
                <p>{names[1]}</p>
            </div>
            <p>{date}</p>
        </div>
        <p>{text}</p>
    </li>
};
export default Comment;