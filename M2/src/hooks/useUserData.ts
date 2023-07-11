import React, { useEffect, useState } from "react";
import { log } from "console";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducer";
import { useDispatch } from "react-redux";
import { IUserData, MeRequestAsync } from "../redux/actions/me/actions";



export function useUserData() {
	//const [data, setData] = useState<IUserData>({});
	const data = useSelector<RootState, IUserData>(state => state.me.data);
	const loading = useSelector<RootState, boolean>(state => state.me.loading);
	const token = useSelector<RootState,string>(state=>state.token.token);
	const dispatch = useDispatch();
	
	useEffect(() => {
		 if ( !token) {
			return;
		} 
		dispatch<any>(MeRequestAsync());	
	},[token])
	
	return {
		data,
		loading,
	}
}