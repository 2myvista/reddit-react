import React, { useEffect, useState } from 'react';
import styles from './commentslst.css';
import { log } from 'console';
import { useCommentsData } from '../../hooks/useCommentsData';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentForm } from '../CommentForm/CommentForm';
import { Icon } from '../UI/Icon/Icon';

export interface ICommentsData {
	postId?: string;
	subreddit?: string;
	userNameProp?: string;
	created?: string;
	text?: string;
}


export function CommentsLst({postId, subreddit, userNameProp }:ICommentsData) {
	const commentsList = useCommentsData(postId, subreddit);
	const [commentLoading, setCommentLoading] = useState(true);
	console.log(commentsList);

	useEffect (()=>{
		if (commentsList?.length) {
			setCommentLoading(false);
		}
	}, [commentsList]);

	const [isCommentFormOpen, setIsCommentFormOpen] = useState<number>();
	const handleOpen =(index:number) => {
		//console.log(index);
		setIsCommentFormOpen( index);
	}
	
	const list =  commentsList?.map((item, index) => {
		return <div key={item.id}> <p className={styles.userData}> {item.author},  {item.created}  (id:{item.id})</p>
		<div>{renderHTML(parse(item.text))}</div>
		<label onClick={()=>handleOpen(index)}>Комментировать</label>
		{
			isCommentFormOpen===index  && <CommentFormContainer user={userNameProp}/>
		}
		</div>; 
	}); 

	return (
		<div>
			{commentLoading && <div style={{ textAlign: 'center' }}><Icon name='loading' size={30}/></div>}
			{list}
		</div>
	);
}
