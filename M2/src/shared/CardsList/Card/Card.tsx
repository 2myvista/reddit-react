import React, { useContext } from 'react';
import styles from './card.css';
import { TextContent } from './TextContent'; 
import { Preview } from './Preview'; 
import { Menu } from './Menu'; 
import { Controls } from './Controls';
import { generateId } from '../../../utils/react/generateRandomIndex';
import moment from 'moment';
moment.locale('ru');
//import { timeDiff } from '../../../utils/js/timeDiff';

interface IPostsItems {
	id:	string;
	subreddit: string;

	author: string;
	title: string;
	image: string;
	permalink: string;
	selftext: string;
	selftext_html?: string;
	avatar: string;
	created: number;
}


export function Card({id='', subreddit='', author='', title='', image='', permalink='', avatar='', created=1, selftext='' }:IPostsItems) {
	
	const dataStr:any= moment(created*1000).fromNow();
	
	const MENULIST = [
		{As: 'li' as const, text: 'Комментарии', href: 'url1'},
		{As: 'li' as const, text: 'Поделиться', href: 'url2'},
		{As: 'li' as const, text: 'Сохранить', href: 'url3'},
	].map(generateId)
		
	return (
		<li className={styles.card}>
			<TextContent subreddit={subreddit} id={id} selftext={selftext}  published={dataStr} title={title} userNameProp={author} avatar={avatar} permalink={permalink} />
			<Preview image={image} />	
			<Menu menuList={MENULIST}/>
			<Controls/>
		</li>
	);
}
