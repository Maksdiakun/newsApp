import { SEARCH_NEWS } from '../constans';
const searchNews = word => {
    return {
        type: SEARCH_NEWS,
        search: word
    };
};
export default searchNews;