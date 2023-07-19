import React, { ChangeEvent, FormEvent } from 'react';

import { Console } from 'console';
import { useStore, useSelector,useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../redux/store/reducer';
import { CommentForm } from '../CommentForm';

interface iCommentDataProps {
	user?: string
}

export function CommentFormContainer({user}:iCommentDataProps) {
/*	обычный способ получения состояния из redux
	const store = useStore<RootState>();
	const value = store.getState().commentText;
 */
	const value = useSelector<RootState, string>(state=>state.commentText);
	const dispatch = useDispatch();

	
	function handelChange(event: ChangeEvent<HTMLTextAreaElement>) {
		dispatch(updateComment(event.target.value))
	} 

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(value);
	}
	
	return (
        <CommentForm  />
  );
}
