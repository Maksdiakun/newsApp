import { CHANGE_STATUS } from "../constans";

const initialState = {
    user: null
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                user: action.user
            }
        default: return state;
    }
};
export default userReducer;
