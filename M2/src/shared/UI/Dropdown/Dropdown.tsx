import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
	button: React.ReactNode;    // то, на что будем нажимать
	children: React.ReactNode;  // то, что будем выводить
	isOpen?: boolean;			// для контроля начального состояния  открыт либо закрыт список
	onOpen?: () => void;		// callback на открытие
	onClose?: () => void;		// callback на закрытие
}

const noop =()=>{};

export function Dropdown({button, children, isOpen, onOpen = noop, onClose = noop}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

	React.useEffect(()=>setIsDropdownOpen(isOpen),[isOpen]);
	React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen]);

	
	const handleOpen = ()=>{
		if (isOpen === undefined) {
			setIsDropdownOpen(!isDropdownOpen)
		}
	}
	return (
		<div className={styles.container} >
			{/* handler на переключение объекта */}
			<div onClick={handleOpen}>
				{ button }
			</div>
			{isDropdownOpen && (
				<div className={styles.listContainer}>
					<div className={styles.list} onClick={()=> setIsDropdownOpen(false)}>
						{children}
					</div>
				</div>
			)}
		</div>

	);
}
