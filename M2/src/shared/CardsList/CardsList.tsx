import React from 'react';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardsList() {
	return (
	 
		<ul className={styles.cardsList}>
			 <Card />
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

