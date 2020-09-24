import { LOAD_NEWS } from '../constans'

const newsReducer = (news = null, { type, payload }) => {
    switch (type) {
        case LOAD_NEWS: return payload;
        default: return news;
    }
};
export default newsReducer;