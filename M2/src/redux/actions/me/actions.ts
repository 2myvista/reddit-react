import { Action, ActionCreator } from "redux";
import { RootState } from "../../store/reducer";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { log } from "console";

/* ********ME_REQUEST********* */
export const ME_REQUEST = 'ME_REQUEST';

export type MeRequestAction = {
	type: typeof ME_REQUEST;
}

export const MeRequest: ActionCreator<MeRequestAction> = () => ({
	type: ME_REQUEST,
});

/* ********ME_REQUEST_SUCCESS********* */
export interface IUserData {
	name?: string;
	iconImg?: string;
	//data: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export type MeRequestSuccessAction = {
	type: typeof ME_REQUEST_SUCCESS;
	data: IUserData;
}

export const MeRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
	type: ME_REQUEST_SUCCESS,
	data,
});

/* ********ME_REQUEST_ERROR********* */
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type MeRequestErrorAction = {
	type: typeof ME_REQUEST_ERROR;
	error: string;
}

export const MeRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
	type: ME_REQUEST_ERROR,
	error,
});

export const MeRequestAsync = ():ThunkAction<void,RootState, unknown, Action<string>> => (dispatch, getState)=> {
	const token = getState().token.token;
	if (token && token !== 'undefined') {
		dispatch(MeRequest());
		axios.get('https://oauth.reddit.com/api/v1/me',{
			headers: {Authorization: `bearer ${getState().token.token}`}
		})
		.then((resp)=> {
			const userData = resp.data;
			dispatch(MeRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));
		})
		.catch((error) => {
			//console.log(error);
			dispatch(MeRequestError(String(error)));
		});
	}
}


