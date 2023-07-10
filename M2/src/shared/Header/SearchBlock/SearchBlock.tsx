import React, { useContext } from 'react';
import styles from './searchblock.css';
import { useStore, useSelector,useDispatch } from 'react-redux';
import { UserBlock } from '../UserBlock';
import { userContext } from '../../context/userContext';
import { RootState } from '../../../redux/store/reducer';
//import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {

	const {iconImg, name} = useContext(userContext);

	const store = useStore<RootState>();
	
	const loading = store.getState().me.loading;

	console.log('searchblock:',loading);
	
	
	//const {data, loading} = useUserData();

	return (
		<div className={styles.searchBlock}>
			search block
			<UserBlock avatarSrc={iconImg} userName={name}  loading={loading}/>
			{/* <UserBlock avatarSrc={data.iconImg} userName={data.name} loading={loading}/> */}
		</div>
	);
}
