import React, { useContext, useEffect, useState } from "react";
import { RootState } from "../redux/store/reducer";
import axios from "axios";
import { Console, log } from "console";
import parse from "html-react-parser";
import moment from 'moment';
import { useSelector } from "react-redux";
moment.locale('ru');

interface ICommentsData {
	id?: string;
	author?: string;
	created?: any;
	text?: any;
}

export function useCommentsData(id?:string, subreddit?:string) {
		const [comments, setComments] = useState<ICommentsData[]>();
	const token = useSelector<RootState, string>(state => state.token.token);
	useEffect(() => {

			axios.get(`https://oauth.reddit.com/comments/${id}`,{
				headers: {Authorization: `bearer ${token}`}
			})
			.then((resp)=> {
				// избавляемся от лишнего уровня вложенности data
				// знак вопроса означает: выполнять если ответ пришел без ошибки
				const currentComments=resp.data[1].data?.children.map((el: {data: {}}) => el.data)

				/* const list =  [
					{data: {name: 'Sam', email: 'somewhere@gmail.com'}},
				
					{data: {name: 'Ash', email: 'something@gmail.com'}}
				]
				console.log(list);
				const list1= list.map((el: {data: {}}) => el.data)  */ 

				//console.log(currentComments);
				const commentsData:ICommentsData[]=[];
				for (let i = 0; i < (currentComments.length - 1); i++) {
					commentsData.push({
						id: currentComments[i].id,
						author: currentComments[i].author,
						created: moment(currentComments[i].created*1000).fromNow(),
						text: currentComments[i].body_html,
					})
				};
				setComments(  commentsData );
			})
			.catch ((err) => {
				console.log(err)
			})
	},[]
	)
	return [comments]
}