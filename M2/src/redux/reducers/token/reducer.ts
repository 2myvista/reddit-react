import { Reducer } from "react";
//import { SET_TOKEN } from "../../actions/token/actions";
import {SetTokenAction, SET_TOKEN} from "../../actions/token/actions"

export type TokenState = {
	token: string
}

//type TokenAction = SetTokenAction
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