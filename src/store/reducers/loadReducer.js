import {LOAD} from '../constans'

const loadReducer = (initState = false,action)=>{
        switch (action.type) {
            case LOAD:
                return  action.loading
            default: return initState;
        }
}
export default loadReducer