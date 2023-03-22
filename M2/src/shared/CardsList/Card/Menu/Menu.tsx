import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../../shared/GenericList';
import {merge} from './../../../../utils/js/merge';

interface ImenuList {
	id:	string;
	text: string;
	onClick?: (id: string) => void;
	className?: string;
	As?: 'a' | 'li' | 'div' | 'button' ;
	href?: string;
}

interface ImenuListProps {
	menuList: ImenuList[];
}


export function Menu({menuList}:ImenuListProps) {
	//console.log(menuList);
	const handleMenuClick =(id:string) => {
		console.log(id);
		
	}	
  return (
		<div className={styles.menu} >
				<Dropdown 
					onClose={()=>{console.log('D closed')}}
					onOpen={()=>{console.log('opened')}}
					/* isOpen={true} */
					button={<button className={styles.menuButton}>
					<svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
						<circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
						<circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
					</svg>
				</button>}
				>
				<ul>
					<GenericList list={menuList.map(merge({onClick: handleMenuClick}))}/>
				</ul>
				</Dropdown>
		</div>	
  );
}
