import React from 'react';
import styles from './textcontent.css';

interface ICardProps {
	userNameProp:string;
	published?: number;
}

export function TextContent({userNameProp, published=10}:ICardProps) {
  return (
		<div className={styles.textContent} >
			<div className={styles.metaData} >
				<div className={styles.userLink} >
					<img className={styles.avatar} src="https://cdn.dribbble.com/users/877810/avatars/normal/bca2fa37b3bdbe545749e7903fb89dcd.png" alt="avatar" />
					<a href="#user-url" className={styles.username}>{userNameProp}</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>
					{published} часа before</span>
			</div>
			<h2 className={styles.title}>
				<a href="#post-url" className={styles.postLink}> таблице перечислены горячие клавиши по умолчанию, клавиши расширений, и перенастроенные.</a>	
			</h2>	
		</div>	
  );
}
