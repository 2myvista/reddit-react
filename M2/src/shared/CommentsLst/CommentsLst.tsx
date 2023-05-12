import React from 'react';
import styles from './commentslst.css';
import { log } from 'console';
import { useCommentsData } from '../../hooks/useCommentsData';
import parse from "html-react-parser";
//import Remarkable from 'react-remarkable';

interface ICommentsProps {

}

export interface ICommentsData {
	postId?: string;
	subreddit?: string;
	id?: string;
	author?: string;
	created?: string;
	text?: string;
}



export function CommentsLst({postId, subreddit }:ICommentsData) {

	console.log(postId);
	const commentsList = useCommentsData(postId, subreddit);
	console.log(commentsList);
	//const list = 
		
	
		
	const list =  commentsList.map((item:any) => {
		 return <p>{item.author} {item.created}</p>; 
	});

	console.log(list)
	return (
		<div>
			

		</div>
	);
}
