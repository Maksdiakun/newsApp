import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
});

export default rootReducer;
