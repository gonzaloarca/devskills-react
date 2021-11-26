import _ from "lodash";
import { CREATE_MEMBER, FETCH_MEMBERS } from "../actions/types";

const memberReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_MEMBERS:
			return { ...state, ..._.mapKeys(action.payload, "ssn") };
		case CREATE_MEMBER:
			return { ...state, [action.payload.ssn]: action.payload };
		default:
			return state;
	}
};

export default memberReducer;
