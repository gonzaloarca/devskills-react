import membersApi from "../apis/membersApi";
import { CREATE_MEMBER, CREATE_MEMBER_ERROR, FETCH_MEMBERS } from "./types";

export const fetchMembers = () => async (dispatch) => {
	const res = await membersApi.get("/members");

	dispatch({ type: FETCH_MEMBERS, payload: res.data });
};

export const createMember = (formValues) => async (dispatch) => {
	try {
		await membersApi.post("/members", formValues);

		dispatch({ type: CREATE_MEMBER, payload: formValues });
	} catch (e) {
		const res = e.response;

		switch (res.status) {
			case 400:
				console.log(typeof res.data.message);
				dispatch({ type: CREATE_MEMBER_ERROR, payload: res.data.message });
				return;
			default:
				dispatch({
					type: CREATE_MEMBER_ERROR,
					payload: "An unknown error ocurred",
				});
				return;
		}
	}
};

export const clearCreateError = () => async (dispatch) => {
	dispatch({ type: CREATE_MEMBER_ERROR, payload: "" });
};
