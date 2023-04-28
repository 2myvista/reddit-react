import React from 'react';
import styles from './genericlist.css';

interface IItem {
	id:	string;
	text: string;
	onClick?: (id: string) => void;
	className?: string;
	As?: 'a' | 'li' | 'div' | 'button' ;
	href?: string;
}

interface IGenericListProps {
	list: IItem[];
	
}
const noop = ()=> {};

export function GenericList({list}: IGenericListProps) {
	/* {list.map(
		(item)=>(console.log(item.text)
	)
	)} */
	
	return (
		<>
			{list.map(({As = 'div', text, onClick = noop, className, id, href})=> (
				<As
					className={className}
					onClick={() => onClick(id)}
					// если не указать noop - функцию, которая ничего не делает и ничего не возвращает, некая заглушка
					//onClick={() => {if(onClick) {onClick(id)}}}
					key={id}
					href={href}
				>
					{text}
				</As>
			))}
		</>
	);
}
