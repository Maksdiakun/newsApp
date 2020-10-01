import {
  SEARCH_NEWS,
  CHANGE_SORT,
  GET_NEWS,
  CHANGE_SOURCE,
  GET_SINGLE_NEWS,
} from "../constans";
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
export const getSingleNews = (title, sortBy, search, sources) => (dispatch) => {
  dispatch(loadAction(true));
  return getData(sortBy, search, sources).then(({ data: { articles } }) => {
    const single = articles.find((el) => el.title === title);
    dispatch({
      type: GET_SINGLE_NEWS,
      singleNews: single,
    });
  });
};
