import { CHANGE_SORT } from '../constans';
const changeSort = sortBy => {
    return {
        type: CHANGE_SORT,
        sortBy: sortBy
    };
};
export default changeSort;