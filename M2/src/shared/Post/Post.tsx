import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { CommentForm } from '../CommentForm';

interface IPost {
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
			<h2>В таблице перечислены горячие клавиши по умолчанию</h2>
			<div className={styles.content}>
				<p>таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</p>
				<p>таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</p>
				<p>таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</p>
				<p>таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</p>
				<p>таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</p>
			</div>
			<CommentForm/>
		</div>
	), node );
}
