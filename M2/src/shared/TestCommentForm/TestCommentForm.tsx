import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './testcommentform.css';

type Props = {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (event: FormEvent) => void;

	user?: string
}

export function TestCommentForm({value, user, onChange, onSubmit }: Props) {

	const textRef = useRef<HTMLTextAreaElement>(null);
	useEffect (()=>{
		textRef.current?.focus();
	},[])
	
	return (
	<form className={styles.form} onSubmit={onSubmit}>
		<textarea ref={textRef} className={styles.input} value={value} onChange={onChange}/> 
		<button type="submit" className={styles.button}>Комментировать</button>
	</form>	
  );
}