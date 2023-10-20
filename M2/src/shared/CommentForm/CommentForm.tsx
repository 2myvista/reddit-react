import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './commentform.css';
//import { commentContext } from '../context/commentContext';
import { Console } from 'console';
import { useForm } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../redux/store/reducer';

 type Props = {
	comment: string;
}

export function CommentForm() {
	const {
		register,
		setValue,
		handleSubmit,
		setFocus,
		formState: { errors },
	  } = useForm<Props>();
	
	useEffect (()=>{
		setFocus("comment");
	}, [setFocus]);

	const onSubmit = handleSubmit((data) => {
			console.log(data);
			//alert(data.comment);
			console.log(errors);
			
			dispatch(updateComment(data.comment));
	})


 	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		console.log(event.target.value);
		dispatch(updateComment(event.target.value))
	}
 	// получить стейт 
	// const value = useSelector<RootState, string>(state=>state.commentText);
	//console.log(value);

	const dispatch = useDispatch();
	
	return (
	<form className={styles.form} onSubmit={onSubmit}>
		<textarea className={styles.input} {...register("comment", {required: true,  minLength: 6})}
		aria-invalid={errors.comment ? "true" : undefined} 
		placeholder='заполните не менее 6 символов'
		onChange={handleChange}
		/>
		
		{errors.comment?.type === "minLength" && (<div>минимум 6 символов</div>)}
		{errors.comment?.type === "required" && (<div>необходимо заполнить это поле</div>)}
		
		<button type="submit" className={styles.button}>Комментировать</button>
	</form>	
  );
}
