import { SEARCH_NEWS } from "../constans";

const initialState = {
    search: 'all'
};
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_NEWS: return {
            ...state,
            search: action.search
        }
        default: return state;
    }
};
export default searchReducer;
