import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent'; 
import { Preview } from './Preview'; 
import { Menu } from './Menu'; 
import { Controls } from './Controls';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';


export function Card() {

	const userName ='userName';
	const MENULIST = [
		{As: 'li' as const, text: 'Комментарии', href: 'url1'},
		{As: 'li' as const, text: 'Поделиться', href: 'url2'},
		{As: 'li' as const, text: 'Сохранить', href: 'url3'},
	].map((item)=>({...item, id: generateRandomString() }))
		
	return (
			<li className={styles.card}>
		<TextContent  published={7} userNameProp={userName} />
		<Preview/>	
	 	<Menu menuList={MENULIST}/>
		<Controls/>
			</li>
	);
}
