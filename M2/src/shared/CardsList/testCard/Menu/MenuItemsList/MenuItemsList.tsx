import React from 'react';
import { Icon, EIcon } from '../../../../UI/Icon';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
	postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
	return (
		<ul className={styles.menuItemsList}>
			<li className={styles.menuItem} onClick={()=>console.log(postId)}>
				<Icon name='avatar' size={16} /* name={EIcon.hide} *//>
				<Text size={12} color={EColor.gray99}>Скрыть</Text>
			</li>
			<div className={styles.divider}/>
			<li className={styles.menuItem} onClick={()=>console.log(postId)}>
				<Icon name='complain' size={12}/>
				<Text size={12} color={EColor.gray99}>Пожаловаться</Text>
			</li>
		</ul>
	);
}
