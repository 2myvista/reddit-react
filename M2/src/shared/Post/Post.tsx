import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { CommentForm } from '../CommentForm';
import parse from "html-react-parser";
import renderHTML from 'react-render-html';

//import { CommentsContextProvider } from '../context/commentsContext'
import { CommentsLst } from '../CommentsLst';



interface IPost {
	id: string;
	subreddit: string;
	title: string;
	selftext: string;
	onClose?:() => void;
}

export function Post(props: IPost) {
	
	const ref = useRef<HTMLDivElement>(null);

	function handleClick(event: MouseEvent) {
		console.log(props);
		
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
			<h2>{props.id}  {props.title}</h2>
			<div className={styles.content}>
			{renderHTML(parse(props.selftext))}
					{/* {parse(props.selftext)} */}
				
				<CommentsLst postId={props.id} subreddit={props.subreddit}/>  
			</div>
			

			
			<CommentForm/>
		</div>
	), node );
}
