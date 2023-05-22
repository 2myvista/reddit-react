import React, { useEffect, useRef, useState } from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../UI/Dropdown';
import { GenericList } from '../../../UI/GenericList';
import {merge} from './../../../../utils/js/merge';
import { MenuIcon } from '../../../UI/Icon/MenuIcon';
import { Text, EColor } from '../../../Text';
import {MenuItemsList} from './MenuItemsList';
import { log } from 'console';

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

export function Menu({isOpen=false, menuList, onOpen=noop, onClose=noop}:ImenuListProps) {
	const refs = useRef<HTMLButtonElement>(null);
	//const curPosition = refs.current?.getBoundingClientRect();

	
	//const modalRootPosition = modal_root.current?.getBoundingClientRect();
	const [dropDownPosition, setDropDownPosition] = useState({top: 0, right:0} )


	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

	React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen]);

	const handleMenuClick =(id:string) => {
		console.log(id);
		
	}
	const handleOpen = (e:any)=>{
		setIsDropdownOpen(!isDropdownOpen);
		const modalRootPosY = Number(document.getElementById('modal_root')?.getBoundingClientRect().y);
		const posTop  = Number(e.target.getBoundingClientRect().y) - modalRootPosY;
		const posRight   = Number(e.target.getBoundingClientRect().x)-146;
		
		setDropDownPosition({top: posTop, right: posRight})
	}	
  return (
		<div className={styles.menu}>
			<div id="99" onClick={handleOpen}>
				{ <button className={styles.menuButton} ref={refs}>
						<MenuIcon/>
				</button> }
			</div> 
			{isDropdownOpen && (
				<Dropdown posTop={dropDownPosition.right}  posLeft={dropDownPosition.top}   onClose={()=>{setIsDropdownOpen(!isDropdownOpen);}}>
					<div className={styles.dropdown} style={{
						top: dropDownPosition.top,
						left: dropDownPosition.right,
						position: 'absolute',
						width: 'fit-content'
		  }}>
					<MenuItemsList postId="12345"/>
						<button className={styles.closeButton} onClick={handleOpen}>
							<Text mobileSize={12} size={14} color={EColor.gray66}>Закрыть</Text>
						</button>
					</div>
				 </Dropdown>
				)}
		</div>	
  );
}
