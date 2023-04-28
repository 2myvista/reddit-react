import React, { useEffect, useRef, useState } from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../UI/Dropdown';
import { GenericList } from '../../../UI/GenericList';
import {merge} from './../../../../utils/js/merge';
import { MenuIcon } from '../../../UI/Icon/MenuIcon';
import { Text, EColor } from '../../../Text';
import {MenuItemsList} from './MenuItemsList';

interface ImenuList {
	id:	string;
	text: string;
	onClick?: (id: string) => void;
	className?: string;
	As?: 'a' | 'li' | 'div' | 'button' ;
	href?: string;
//	isOpen?: boolean;
}

interface ImenuListProps {
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	menuList: ImenuList[];
}

const noop =()=>{};

export function Menu({isOpen, menuList, onOpen=noop, onClose=noop}:ImenuListProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

	React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen]);

	const handleMenuClick =(id:string) => {
		console.log(id);
		
	}
	const handleOpen = ()=>{
			setIsDropdownOpen(!isDropdownOpen)
	}	
  return (
		<div className={styles.menu} >
			<div onClick={handleOpen}>
				{ <button className={styles.menuButton}>
						<MenuIcon/>
				</button> }
			</div> 
			{isDropdownOpen && (<div>
				<Dropdown onClose={()=>{setIsDropdownOpen(!isDropdownOpen);}}>
					<div className={styles.dropdown}>
					<MenuItemsList postId="12345"/>
						<button className={styles.closeButton} onClick={handleOpen}>
							<Text mobileSize={12} size={14} color={EColor.gray66}>Закрыть</Text>
						</button>
					</div>
				 </Dropdown>
				</div>)}
		</div>	
  );
}
