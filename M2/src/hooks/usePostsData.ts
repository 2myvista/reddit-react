import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { log } from "console";
import { tokenContext } from "../shared/context/tokenContext";

interface IPostsData {
	postsData?: any;
}

interface IPostsItems {
	id:	string;
	author: string;
	title: string;
	permalink: string;
	selftext?: string;
	selftext_html?: string;
}

interface IPostsProps {
	[name: string]: IPostsItems;
	
}

export function usePostsData() {
	const [data, setData] = useState<IPostsData>({});
	const token = useContext(tokenContext)
	

	useEffect(() => {
		console.log(token);
		
		if ( token!== '' && token != 'undefined' ) {
		axios.get('https://oauth.reddit.com/best.json?sr_detail=true',{
			headers: {Authorization: `bearer ${token}`}
		})
		.then((resp)=> {
			const data = resp.data.data.children;
			//console.log(data);
			
			setData({ postsData: data });
		})
		.catch(
			console.log
			)
		}
	},[token])
	
	return [data]
}