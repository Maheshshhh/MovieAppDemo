import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE } from "./action";

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return { ...state, ...action.payload };
      case REMOVE_FROM_FAVORITE:
        const deletedArray = state.filter((item, index)=>{
          return { ...state, ...action.payload };
        })
      return index !== action.payload 
    default:
      return deletedArray;
  }
};

 export default reducers;
