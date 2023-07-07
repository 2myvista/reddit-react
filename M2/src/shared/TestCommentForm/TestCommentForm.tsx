import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './testcommentform.css';

/* type Props = {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (event: FormEvent) => void;

	user?: string
} */

export function CommentForm() {

	const [value, setVlue] = useState('');
	const [valueTouched, setValueTouched] = useState(false);
	const [valueError, setValueError] = useState('');

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(event);
		
	}

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		console.log(event.target.value);
		setVlue(event.target.value);
		
	}

	const textRef = useRef<HTMLTextAreaElement>(null);
	useEffect (()=>{
		textRef.current?.focus();
	},[])
	
	return (
	<form className={styles.form} onSubmit={handleSubmit}>
		<h3>test comment form</h3>
		<textarea ref={textRef} className={styles.input} value={value} onChange={handleChange} aria-invalid={valueError? 'true': undefined}/> 
		<button type="submit" className={styles.button}>Комментировать</button>
	</form>	
  );
}
