import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import styles from './commentform.css';
import { commentContext } from '../context/commentContext';

export function CommentForm() {
	const {value, onChange} = useContext(commentContext);
	
	function handelChange(event: ChangeEvent<HTMLTextAreaElement>) {
		onChange(event.target.value);
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(value);
	}
	
	return (
	<form className={styles.form} onSubmit={handleSubmit}>
		<textarea className={styles.input} value={value} onChange={handelChange}/>
		<button type="submit" className={styles.button}>Комментировать</button>
	</form>	
  );
}
