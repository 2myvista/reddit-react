import React, { useContext } from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import { Card_ } from './testCard';
//import { TextContent } from './Card/TextContent';
import { TestContent } from './testCard/TestContent';

import { postsContext } from '../context/postsContext';

export function CardsList() {
	const {postsData} = useContext(postsContext);
	//console.log(postsData);
 
	return (
		<ul className={styles.cardsList}>
		{postsData && postsData.map(
			(item:any)=>(
				<Card key={item.data.id} id={item.data.id} author={item.data.author} image={item.data.thumbnail} title={item.data.title} avatar={item.data.sr_detail.icon_img} created={item.data.created} permalink={item.data.permalink} />
		)
		)}
		{!postsData && (
			<div>
				<Card_ />
				{/* <TestContent/> */}
			</div>
		)}   
		</ul> 
	);
}
//
interface IItems {
	value: string;
	id:	string;
	onClick: (id: string) => void;
}

interface IMyListProps {
	list: IItems[];
	
}

export function MyList({list}:IMyListProps) {
	return (
		<ul>
			{list.map((item)=>(
				<li onClick={()=>item.onClick(item.id)} key={item.id}>{item.value}</li>
			))
			} 
		</ul>
	)
}

