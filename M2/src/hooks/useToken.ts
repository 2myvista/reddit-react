import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/actions/token/actions";
import { RootState } from "../redux/store/reducer";

 export function useToken() {
	const token = useSelector<RootState,string>(state=>state.token);
	const dispatch = useDispatch();
	console.log(token);
	
	 useEffect(() => {
		if (window.__token__) {
			dispatch(setToken(window.__token__));
		}
	}, []) 
//console.log(token);

	return [token]
} 