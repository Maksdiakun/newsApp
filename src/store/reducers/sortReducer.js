import { CHANGE_SORT } from "../constans";

const initialState = {
    sortBy: 'publishedAt'
};
const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORT:
            return {
                ...state,
                sortBy: action.sortBy
            }
        default: return state;
    }
};
export default sortReducer;
