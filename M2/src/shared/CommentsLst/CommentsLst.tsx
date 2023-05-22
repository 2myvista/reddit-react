import React, { useState } from 'react';
import styles from './commentslst.css';
import { log } from 'console';
import { useCommentsData } from '../../hooks/useCommentsData';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';
import { CommentForm } from '../CommentForm/CommentForm';

export interface ICommentsData {
	postId?: string;
	subreddit?: string;
	//id: string;
	author?: string;
	created?: string;
	text?: string;
}


export function CommentsLst({postId, subreddit }:ICommentsData) {
	const commentsList = useCommentsData(postId, subreddit);

	const [isCommentFormOpen, setIsCommentFormOpen] = useState<number>();
	const handleOpen =(index:number) => {
		console.log(index);
		setIsCommentFormOpen( index);
		//setIsCommentFormOpen(!isCommentFormOpen);
	}
	
	const list =  commentsList[0]?.map((item, index) => {
		return <div key={item.id}> <p className={styles.userData}>{item.id} {item.author},  {item.created}</p>
		<div>{renderHTML(parse(item.text))}</div>
		<div onClick={()=>handleOpen(index)}>Комментарии</div>
		{
			isCommentFormOpen===index  && <CommentForm user={item.author}/>
		}
		</div>; 
	}); 

	return (
		<div>
			{list}
		</div>
	);
}
