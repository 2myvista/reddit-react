import React, { useState } from 'react';
import styles from './commentslst.css';
import { log } from 'console';
import { useCommentsData } from '../../hooks/useCommentsData';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentForm } from '../CommentForm/CommentForm';

export interface ICommentsData {
	postId?: string;
	subreddit?: string;
	userNameProp?: string;
	created?: string;
	text?: string;
}


export function CommentsLst({postId, subreddit, userNameProp }:ICommentsData) {
	const commentsList = useCommentsData(postId, subreddit);

	const [isCommentFormOpen, setIsCommentFormOpen] = useState<number>();
	const handleOpen =(index:number) => {
		//console.log(index);
		setIsCommentFormOpen( index);
	}
	
	const list =  commentsList[0]?.map((item, index) => {
		return <div key={item.id}> <p className={styles.userData}> {item.author},  {item.created}  (id:{item.id})</p>
		<div>{renderHTML(parse(item.text))}</div>
		<div onClick={()=>handleOpen(index)}>Комментарии</div>
		{
			isCommentFormOpen===index  && <CommentFormContainer user={userNameProp}/>
		}
		</div>; 
	}); 

	return (
		<div>
			{list}
		</div>
	);
}
