 import {LOAD} from '../constans';

 const loadAction = (loading) => (
     {
      type: LOAD,
      loading
     }
 );

  export default loadAction;