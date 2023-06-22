import React, { useContext } from 'react';
import styles from './searchblock.css';
import { UserBlock } from '../UserBlock';
//import { userContext } from '../../context/userContext';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {

	//const {iconImg, name} = useContext(userContext);
	const {data, loading} = useUserData();

	return (
		<div className={styles.searchBlock}>
			search block
			<UserBlock avatarSrc={data.iconImg} userName={data.name} loading={loading}/>
		</div>
	);
}
