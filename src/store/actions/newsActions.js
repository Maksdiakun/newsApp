import { SEARCH_NEWS, CHANGE_SORT, GET_NEWS, CHANGE_SOURCE } from "../constans";
import { getData } from "../../fetch";
import loadAction from "./loadAction";

export const getNews = (sortBy, search, sources) => (dispatch) => {
  dispatch(loadAction(true));
  return getData(sortBy, search, sources).then(({ data: { articles } }) => {
    dispatch({
      type: GET_NEWS,
      payload: articles,
    });
  });
};
export const searchNews = (word) => {
  return {
    type: SEARCH_NEWS,
    search: word,
  };
};

export const changeSort = (sortBy) => {
  return {
    type: CHANGE_SORT,
    sortBy: sortBy,
  };
};

export const changeSource = (sources) => {
  return {
    type: CHANGE_SOURCE,
    sources,
  };
};
