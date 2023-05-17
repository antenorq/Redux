import { combineReducers } from "redux";

import userReducer from "./user/slice";
import cartReducer from "./cart/reducer";
// OLD-WITHOUT-TOOLKIT import userReducer from "./user/reducer";
// OLD-WITHOUT-TOOLKIT import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
