import React, { ChangeEvent, FormEvent, useEffect, useId, useRef, useState } from 'react';
import styles from './testcommentform.css';

/* type Props = {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (event: FormEvent) => void;

	user?: string
} */

export function CommentForm() {

	const [value, setVlue] = useState('');
	const [touched, setTouched] = useState(false);
	const [valueError, setValueError] = useState('');
	
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(event);
		setTouched(true);

		setValueError(validateValue())
		// вычисляемая переменная, если она пуста - проверка пройдена
		const isFormValid = !validateValue();
		if (!isFormValid) return;

		alert('форма отправлена')
		
	}

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		console.log(event.target.value);
		setVlue(event.target.value);
		
	}

	/* function handleBlur() {
		setValueTouched(true);
	} */

	function validateValue() {
		if (value.length <= 3) return 'введите более 3-х символов';
		return '';
	}


	const textRef = useRef<HTMLTextAreaElement>(null);
	useEffect (()=>{
		textRef.current?.focus();
	},[])
	
	return (
	<form className={styles.form} onSubmit={handleSubmit}>
		<h3>test comment form</h3>
		<textarea  
			className={styles.input}
			value={value}
			onChange={handleChange}
			
			aria-invalid={valueError? 'true': undefined}/> 
		{ touched && valueError && (<div>{validateValue()}</div>)}

		<button type="submit" className={styles.button} >Комментировать</button>
	</form>	
  );
}
