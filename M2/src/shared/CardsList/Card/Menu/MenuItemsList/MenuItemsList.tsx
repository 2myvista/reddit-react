import React from 'react';
import { HideIcon, ComplainIcon } from '../../../../Icons';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
	postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
	return (
		<ul className={styles.menuItemsList}>
			<li className={styles.menuItem} onClick={()=>console.log(postId)}>
				<HideIcon/>
				<Text size={12} color={EColor.gray99}>Скрыть</Text>
			</li>
			<div className={styles.divider}/>
			<li className={styles.menuItem} onClick={()=>console.log(postId)}>
				<ComplainIcon/>
				<Text size={12} color={EColor.gray99}>Пожаловаться</Text>
			</li>
		</ul>
	);
}
