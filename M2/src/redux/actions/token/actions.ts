import { ActionCreator } from "redux";

export const SET_TOKEN = 'SET_TOKEN';

export type SetTokenAction = {
	type: typeof SET_TOKEN,
	token: string,
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
	type: SET_TOKEN,
	token,
});