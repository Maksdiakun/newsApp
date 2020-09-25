import { GET_NEWS, SEARCH_NEWS, CHANGE_SORT ,LOAD} from "../constans";

const initState= {
  news : [],
  sortBy:'publishedAt',
  search : 'all',
  loading : false
}
const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
          news : action.payload,
          loading: false
      } 
      case SEARCH_NEWS:
        return {
          ...state,
          search: action.search,
        };
        case CHANGE_SORT: 
        return {
          ...state,
          sortBy: action.sortBy,
        };
        case LOAD:
          return  {
            ...state,
           loading :  action.loading
          }
    default:
      return initState;
  }
};
export default newsReducer;

