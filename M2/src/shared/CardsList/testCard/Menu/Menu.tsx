import React, { useEffect, useRef, useState } from 'react';
import styles from './menu.css';
import { Dropdown } from '../Dropdown';
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
	const curPosition = refs.current?.getBoundingClientRect();

	
	//const modalRootPosition = modal_root.current?.getBoundingClientRect();
	const [dropDownPosition, setDropDownPosition] = useState({top: 0, right:0} )


	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

	React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen]);

	const handleMenuClick =(id:string) => {
		console.log(id);
		
	}
	const handleOpen = (e:any)=>{
		setIsDropdownOpen(!isDropdownOpen);
		console.log(document.getElementById('modal_root')?.getBoundingClientRect());
		//const [modalRootPosY, setModalRootPosY] = useState(0); 

		let modalRootPosY = document.getElementById('modal_root')?.getBoundingClientRect().y;
		modalRootPosY = Number(modalRootPosY)+window.pageYOffset;
		//console.log('modalRootPosY: ' + modalRootPosY);
		console.log('YOffset: ' + window.pageYOffset);
		
		/* console.log(e);
		console.log(e.view.screen); */
		console.log('curPosition?.y (' + curPosition?.y +') - modalRootPosY ('+modalRootPosY+')');
		
		//console.log('curPosition.x: '+ curPosition?.x+' curPosition.y: '+ curPosition?.y+' e.pageX '+e.pageX + ' - e.pageY '+ e.pageY + ' - e.screenX '+ e.screenX+ ' - e.screenY '+ e.screenY);
		const posTop  = Number(curPosition?.y) - modalRootPosY;
		console.log('posTop ' + posTop);
		//posTop  = Number(curPosition?.top);
		//let posLeft =0;
		const posRight   = e.screenX;
		//const posRight   = e.pageX-160;
		//posRight   = Number(curPosition?.x);
		//console.log(posRight);
		
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
					<div className={styles.dropdown}   style={{
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
