import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../../shared/GenericList';
import {merge} from './../../../../utils/js/merge';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { Text, EColor } from '../../../Text';
import {MenuItemsList} from './MenuItemsList';

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
					/* onClose={()=>{console.log('D closed')}}
					onOpen={()=>{console.log('opened')}}
					isOpen={true} */
					button={<button className={styles.menuButton}>
						<MenuIcon/>
				</button>}
				>
					<div className={styles.dropdown}>
					<MenuItemsList postId="12345"/>
						<button className={styles.closeButton}>
							<Text mobileSize={12} size={14} color={EColor.gray66}>
								CloseButton
							</Text>
						</button>
					</div>
				{/* <ul>
					<GenericList list={menuList.map(merge({onClick: handleMenuClick}))}/>
				</ul> */}
				</Dropdown>
		</div>	
  );
}
