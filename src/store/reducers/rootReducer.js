import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import likeReducer from "./likeReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
  liked: likeReducer,
});

export default rootReducer;
