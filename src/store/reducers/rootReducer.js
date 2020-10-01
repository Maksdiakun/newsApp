import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import likeReducer from "./likeReducer";
import comentReducer from "./comentReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
  liked: likeReducer,
  comments: comentReducer,
});

export default rootReducer;
