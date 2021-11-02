import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export default rootReducer;