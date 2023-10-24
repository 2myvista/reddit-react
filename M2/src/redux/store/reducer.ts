import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./../../redux/actions/me/actions";
import { SET_TOKEN, SetTokenAction } from './../actions/token/actions';
import { type } from "os";
import { MeState, meReducer } from "../reducers/me/reducer";
import { TokenState, tokenReducer } from "../reducers/token/reducer";


export type RootState = {
	token: TokenState;
	commentText: string;
	titleText: string;
	me: MeState;
}

const initialState: RootState = {
	commentText: 'hello, react',
	titleText: '',
	token: {
		token:'',
	},
	me: {
		loading: false,
		error: '',
		data: {},
	}
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
	type: typeof UPDATE_COMMENT;
	text: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
	type: UPDATE_COMMENT,
	text,
});

const SET_TITLE = 'SET_TITLE';
type SetTitleAction = {
	type: typeof SET_TITLE;
	text: string;
}
export const setTitle: ActionCreator<SetTitleAction> = (text) => ({
	type: SET_TITLE,
	text,
});

type MyAction = UpdateCommentAction
| SetTokenAction
| MeRequestAction
| MeRequestSuccessAction
| MeRequestErrorAction
| SetTitleAction;

export const rootReducer: Reducer<any, MyAction> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return {
				...state,
				commentText: action.text,
			};
		case SET_TITLE:
			return {
				...state,
				titleText: action.text,
			};
		case SET_TOKEN:
			return {
				...state,
				token: tokenReducer(state.token, action),
			};
		case ME_REQUEST:
		case ME_REQUEST_SUCCESS:
		case ME_REQUEST_ERROR:
			// передавай корневой редьюсер, возвращай стейт который обрабатывает meReducer
			// это композиция редьюсеров, которой мы можем делегировать другим редьюсерам обработку и управление частями стейта
			return {
				...state,
				me: meReducer(state.me, action),
			}
		default:
			return state;
	}
}
