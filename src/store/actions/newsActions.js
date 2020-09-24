import { SEARCH_NEWS, CHANGE_SORT, LOAD_NEWS, GET_NEWS } from "../constans";
import { getData } from "../../fetch";
import loadAction from "./loadAction";



export const getNews = (sortBy, search) => (dispatch) => {
    dispatch(loadAction(true));
 return  getData(sortBy, search)
  .then(({ data: { articles } }) => {
    dispatch({
      type: GET_NEWS,
      payload: articles,
    })    
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
