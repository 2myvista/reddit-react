import { Reducer } from "react";
import {SetTokenAction, SET_TOKEN} from "../../actions/token/actions"

export type TokenState = {
	token: string
}

export const tokenReducer: Reducer<TokenState, SetTokenAction> = (state, action) => {
	switch (action.type) {
		case SET_TOKEN: 
		return {
			...state,
			token: action.token,
		};

		default:
			return state;
	}
}