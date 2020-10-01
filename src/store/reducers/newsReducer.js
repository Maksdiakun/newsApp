import {
  GET_NEWS,
  SEARCH_NEWS,
  CHANGE_SORT,
  CHANGE_SOURCE,
  LOAD,
  GET_SINGLE_NEWS,
} from "../constans";

const initState = {
  news: [],
  sortBy: "publishedAt",
  search: "all",
  loading: false,
  sources: null,
};
const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case SEARCH_NEWS:
      return {
        ...state,
        search: action.search,
      };
    case GET_SINGLE_NEWS:
      return {
        ...state,
        singleNews: action.singleNews,
        loading: false,
      };
    case CHANGE_SORT:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case CHANGE_SOURCE:
      return {
        ...state,
        sources: action.sources,
      };
    case LOAD:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
export default newsReducer;
