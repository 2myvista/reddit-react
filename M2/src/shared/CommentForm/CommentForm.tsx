import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './commentform.css';
//import { commentContext } from '../context/commentContext';
import { Console } from 'console';
import { useForm } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../redux/store/reducer';
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

 type Props = {
	comment: string;
}

class CommentMobx {
	value ='text from Mobx';
	constructor() {
			makeAutoObservable(this);
	}
	updateValue(newValue: string) {
		this.value = newValue;
	}
}

const commentMobx = new CommentMobx();

export const  CommentForm = observer(()=> {
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
			console.log(errors);
			
			commentMobx.updateValue(data.comment)
			//dispatch(updateComment(data.comment));
	})


 	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		console.log(event.target.value);
		//dispatch(updateComment(event.target.value))
		commentMobx.updateValue(event.target.value)
	}
 	// получить стейт 
	// const value = useSelector<RootState, string>(state=>state.commentText);
	//console.log(value);

	//const dispatch = useDispatch();
	
	return (
	<form className={styles.form} onSubmit={onSubmit}>
		<textarea className={styles.input} {...register("comment", {required: true,  minLength: 20})}
		aria-invalid={errors.comment ? "true" : undefined} 
		placeholder='заполните не менее 20 символов'
		onChange={handleChange}
		value={commentMobx.value}
		/>
		
		{errors.comment?.type === "minLength" && (<div>минимум 20 символов</div>)}
		{errors.comment?.type === "required" && (<div>необходимо заполнить это поле</div>)}
		
		<button type="submit" className={styles.button}>Комментировать</button>
	</form>	
  );
})
