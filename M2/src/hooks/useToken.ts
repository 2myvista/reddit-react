import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setToken } from "../redux/store/store";
/*
export function useToken() {
	const token = useSelector<RootState,string>(state=>state.token);
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.__token__) {
			dispatch(setToken(window.__token__));
		}
	}, [])

	return [token]
}
*/
 export function useToken() {
	const [token, setToken] = useState('');
	useEffect(() => {
		if (window.__token__) {
			setToken(window.__token__);
		}
	}, [])

	return [token]
} 