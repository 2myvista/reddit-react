import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
	//user: string;
	token: string;
	commentText: string;
}

const initialState: RootState = {
	//user: 'user',
	commentText: 'hello, world',
	token: '',
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
	type: UPDATE_COMMENT,
	text,
});

export const setToken: ActionCreator<AnyAction> = (token) => ({
	type: SET_TOKEN,
	payload: token,
}); 

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return {
				...state,
				commentText: action.text,
			};
		 case SET_TOKEN:
			return {
				...state,
				token: action.payload,
			}; 
		default:
			return state;
	}
}
