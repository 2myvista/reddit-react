import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './testpost.css';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';

import { CommentsLst } from '../CommentsLst';
import { TestCommentFormContainer } from '../CommentFormContainer';

//import { CommentsContextProvider } from '../context/commentsContext'

interface IPost {
	id: string;
	subreddit: string;
	title: string;
	selftext: string;
	userNameProp: string;
	onClose?:() => void;
}

export function TestPost(props: IPost) {
	const ref = useRef<HTMLDivElement>(null);

	function handleClick(event: MouseEvent) {
		
		if (event.target instanceof Node && !ref.current?.contains(event.target)) {
			props.onClose?.();
		}
	}

	useEffect(()=>{
		document.addEventListener('click',handleClick);
		return ()=> {
			document.removeEventListener('click', handleClick);
		}
	},[]);

	const node = document.querySelector('#modal_root');
	if (!node) return null;


	return ReactDOM.createPortal( (
		<div className={styles.modal} ref={ref}>
			<h2>{props.title} (id: {props.id})</h2>
			<div className={styles.content}>
				{renderHTML(parse(props.selftext))}
				<hr/>
				<CommentsLst postId={props.id} subreddit={props.subreddit}/>  
			</div>
			<TestCommentFormContainer user={props.userNameProp}/>
		</div>
	), node );
}
