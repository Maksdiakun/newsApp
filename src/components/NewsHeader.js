import React from 'react';

import NewsSearch from './NewsSearch';
import NewsSort from './NewsSort';

const NewsHeader = () => {
    return (
        <div className="news_header">
            <NewsSearch />
            <NewsSort />
        </div>
    )
};
export default NewsHeader;