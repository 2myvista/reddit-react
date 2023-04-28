import React from 'react';
import styles from './textcontent.css';


interface ICardProps {
	userNameProp:string;
	published?: number;
	title?: string;
	avatar: string;
	permalink: string;
}

export function TextContent({userNameProp, title, published=10, avatar, permalink }:ICardProps) {
	//console.log(avatar);
	
	avatar = avatar? avatar: 'https://cdn.dribbble.com/users/877810/avatars/normal/bca2fa37b3bdbe545749e7903fb89dcd.png';
	const url = 'https://www.reddit.com'+ permalink;
  return (
		<div className={styles.textContent} >
			<div className={styles.metaData} >
				<div className={styles.userLink} >
					<img className={styles.avatar} src={avatar} alt="avatar" />
					<a href="#user-url" className={styles.username}>{userNameProp}</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>
					{published}</span>
			</div>
			<h2 className={styles.title}>
				<a target="_blank" href={url} className={styles.postLink}>{title}</a>	
			</h2>	
		</div>
  );
}
