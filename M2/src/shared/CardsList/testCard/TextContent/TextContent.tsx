import React, {useState} from 'react';
import styles from './textcontent.css';
import { Post } from '../../../Post';


interface ICardProps {
	id:string;
	subreddit: string;
	userNameProp:string;
	published?: string;
}

export function TextContent({id, subreddit, userNameProp, published='два дня назад' }:ICardProps) {
	const [isModalOpened, setIsModalOpened]= useState(false);
	return (
	
		<div className={styles.textContent} >
			<div className={styles.metaData} >
				<div className={styles.userLink} >
					<img className={styles.avatar} src="https://cdn.dribbble.com/users/877810/avatars/normal/bca2fa37b3bdbe545749e7903fb89dcd.png" alt="avatar" />
					<a href="#user-url" className={styles.username}>{userNameProp}</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>
					{published}</span>
			</div>
			<h2 className={styles.title}>
				<a href="#post-url" onClick={()=>{ setIsModalOpened(true); }} className={styles.postLink}>{id} таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</a>	
			</h2>
			{isModalOpened && (
				<Post userNameProp={userNameProp} subreddit={subreddit} title='' selftext='' id={id} onClose={()=>{setIsModalOpened(false);}}/>
			)}	
		</div>	
  );
}
