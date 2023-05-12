import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Console, log } from "console";
import { tokenContext } from "../shared/context/tokenContext";

interface ICommentsData {
	id?: string;
	author?: string;
	created?: string;
	text?: string;
}

export function useCommentsData(id?:string, subreddit?:string) {
	const [comments, setComments] = useState<ICommentsData[]>();
	
	useEffect(() => {
			axios.get(`https://api.reddit.com/r/${subreddit}/comments/${id}`,//{
			)
			.then((resp)=> {
				// избавляемся от лишнего уровня вложенности data
				const currentComments=resp.data[1].data.children.map((el: {data: {}}) => el.data)

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
						created: currentComments[i].created,
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
	//console.log(comments)
	return [comments]
}