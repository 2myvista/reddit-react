import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent'; 
import { Preview } from './Preview'; 
import { Menu } from './Menu'; 
import { Controls } from '../../UI/Controls';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';
import { timeDiff } from '../../../utils/js/timeDiff';
import moment from 'moment';
moment.locale('ru');


export function Card_() {
	const dataStr:any= timeDiff(1681815326000);
	console.log(dataStr);
	
	const userName ='userName';
	const MENULIST = [
		{As: 'li' as const, text: 'Комментарии', href: 'url1'},
		{As: 'li' as const, text: 'Поделиться', href: 'url2'},
		{As: 'li' as const, text: 'Сохранить', href: 'url3'},
	].map((item)=>({...item, id: generateRandomString() }))
		
	return (
			<li className={styles.card}>
				
		<TextContent published={moment(1682330917605).fromNow()} userNameProp={userName} />
		<Preview/>	
	 	<Menu menuList={MENULIST}/>
		<Controls/>
			</li>
	);
}
