import {
	CLEAR_CREATE_MEMBER_ERROR,
	CREATE_MEMBER_ERROR,
} from "../actions/types";

const errorReducer = (state = "", action) => {
	switch (action.type) {
		case CREATE_MEMBER_ERROR:
			return action.payload;
		case CLEAR_CREATE_MEMBER_ERROR:
			return "";
		default:
			return state;
	}
};

export default errorReducer;
