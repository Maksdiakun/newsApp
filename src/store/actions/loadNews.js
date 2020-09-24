import { LOAD_NEWS } from '../constans';
const loadNews = payload => {
    return {
        type: LOAD_NEWS,
        payload: payload
    };
};
export default loadNews;