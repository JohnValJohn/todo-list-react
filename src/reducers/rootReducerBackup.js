import { combineReducers } from "redux";
import myReducer from "./todoItemsReducer";

const rootReducer = combineReducers({
  myReducer
});

export default rootReducer;
