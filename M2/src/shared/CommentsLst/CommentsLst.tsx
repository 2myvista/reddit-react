import React from 'react';
import styles from './commentslst.css';
import { log } from 'console';
import { useCommentsData } from '../../hooks/useCommentsData';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';

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
	console.log(commentsList[0]);
	//const list = 
		
	
		
	const list =  commentsList[0]?.map((item) => {
		return <div key={item.id}> <p className={styles.userData}>{item.author},  {item.created}</p>
		<div>{renderHTML(parse(item.text))}</div></div>; 
	}); 

	console.log(list)
	return (
		<div>
			
	{list}

		</div>
	);
}
