import React from 'react';
import { Break } from '../../UI/Break';
import { EColor, Text } from '../../UI/Text';
import styles from './userblock.css';
import { Icon } from '../../UI/Icon';

interface IUserBlockProps {
	avatarSrc?: string;
	userName?: string;
}

export function UserBlock({avatarSrc, userName}:IUserBlockProps) {
  return (
	<a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`} className={styles.userBox}>
		<div className={styles.avatarBox}>
			{avatarSrc ? 
			<img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
			:
			<Icon name='avatar' size={50}/>
			}
		</div>

		<div className={styles.username}>
			<Break size={12}/>
			<Text size={14} color={userName? EColor.black : EColor.gray99}>{userName || 'Аноним'}</Text>
		</div>
	</a>
  );
}
