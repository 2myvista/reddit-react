import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';

//import { CommentsContextProvider } from '../context/commentsContext'
//import { CommentForm } from '../CommentForm';
import { CommentsLst } from '../CommentsLst';
import { CommentFormContainer } from '../CommentFormContainer';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



interface IPost {
	//id?: string;
	subreddit?: string;
	title?: string;
	selftext?: string;
	userNameProp?: string;
	onClose?:() => void;
}

export function Post(props: IPost) {
	const params = useParams();
	const postId=params.id;
	const ref = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	function handleKeyboardPress (event: KeyboardEvent) {
		if (event.code === 'Escape') {
			navigate('/posts');
		}
	}
	
	function handleClick(event: MouseEvent) {
		if (event.target instanceof Node && !ref.current?.contains(event.target)) {
			navigate('/posts');
		}
	}

	useEffect(()=>{
		document.addEventListener('click',handleClick);
		document.addEventListener('keydown',handleKeyboardPress);
		return ()=> {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('keydown',handleKeyboardPress);
		}
	},[]);

	const node = document.querySelector('#modal_root');
	if (!node) return null;


	return ReactDOM.createPortal( (
		<div className={styles.modal} ref={ref}>
			<h2>{props.title} (id: {postId})</h2>
			<div className={styles.content}>
				{/* {renderHTML(parse(props.selftext))} */}
				<hr/>
				<CommentsLst postId={postId} subreddit={props.subreddit} userNameProp={props.userNameProp}/>  
			</div>
			 <CommentFormContainer user={props.userNameProp}/> 
		</div>
	), node );
}
