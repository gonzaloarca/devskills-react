import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import memberReducer from "./memberReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
	form: formReducer,
	members: memberReducer,
	createError: errorReducer,
});
