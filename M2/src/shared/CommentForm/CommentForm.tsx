import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styles from './commentform.css';
import { commentContext } from '../context/commentContext';
import { Console } from 'console';

interface iCommentDataProps {
	user?: string
}

export function CommentForm({user}:iCommentDataProps) {
	//const {value, onChange} = useContext(commentContext);
	const [textData, setTextData] = useState(user+', ');
	
	const textRef = useRef<HTMLTextAreaElement>(null);
	useEffect (()=>{
		textRef.current?.focus();
	},[])

	 function handelChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setTextData(event.target.value);
	} 

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(textData);
	}
	
	return (
	<form className={styles.form} onSubmit={handleSubmit}>
		<textarea ref={textRef} className={styles.input} value={textData} onChange={handelChange}/> 
		<button type="submit" className={styles.button}>Комментировать</button>
	</form>	
  );
}
