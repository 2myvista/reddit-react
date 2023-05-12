import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
	posTop: number;
	posLeft: number;
	children: React.ReactNode;  // то, что будем выводить
	//onOpen?: () => void;		// callback на открытие
	onClose?: () => void;		// callback на закрытие
}

const noop =()=>{};

export function Dropdown(props: IDropdownProps) {
//console.log(props.posTop);
//console.log(props.posLeft);

	const ref = useRef<HTMLDivElement>(null);
	useEffect(()=>{
		function handleDropClick(event: MouseEvent) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				props.onClose?.();
			}
		}

		document.addEventListener('click',handleDropClick);
		return ()=> {
			document.removeEventListener('click', handleDropClick);
		}
	},[]);

	const node = document.querySelector('#modal_root');
	if (!node) return null;	

	return ReactDOM.createPortal(
		<div className={styles.container} ref={ref}>
				<div className={styles.listContainer}>
					<div className={styles.list}>
						{props.children}
					</div>
				</div>
		</div>, node
	);
}
