import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { log } from "console";
import { tokenContext } from "../shared/context/tokenContext";

interface IUserData {
	name?: string;
	iconImg?: string;
}

export function useUserData() {
	const [data, setData] = useState<IUserData>({});
	const token = useContext(tokenContext)
	
	useEffect(() => {
		if ( token!== '' && token != 'undefined' ) {
			axios.get('https://oauth.reddit.com/api/v1/me',{
				headers: {Authorization: `bearer ${token}`}
			})
			.then((resp)=> {
				const userData = resp.data;
				setData({ name: userData.name, iconImg: userData.snoovatar_img });
			})
			.catch(
				console.log
				)
		}
	},[token])
	
	return [data]
}