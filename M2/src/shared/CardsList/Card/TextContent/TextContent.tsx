import React, { useEffect } from 'react';
import styles from './textcontent.css';
import { Post } from '../../../Post';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { RootState, setTitle } from '../../../../redux/store/reducer';

interface ICardProps {
	id: string;
	subreddit: string;
	userNameProp:string;
	published?: number;
	title: string;
	avatar: string;
	permalink: string;
	selftext: string;
}

export function TextContent({id, subreddit, userNameProp, title, published=10, avatar, permalink, selftext }:ICardProps) {
	avatar = avatar? avatar: 'https://cdn.dribbble.com/users/877810/avatars/normal/bca2fa37b3bdbe545749e7903fb89dcd.png';

	const handleClick = (e:any) => {
		console.log(e.target.innerText);
		dispatch(setTitle(e.target.innerText));
		
	}

	const dispatch = useDispatch();

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
				<Link to={`/posts/${id}`} onClick={handleClick} className={styles.postLink}> {title}</Link><span className={styles.id}>{id}</span>	
			</h2>
			
		</div>
  );
}



/* 09.10.23 before change
export function TextContent({id, subreddit, userNameProp, title, published=10, avatar, permalink, selftext }:ICardProps) {
	const [isModalOpened, setIsModalOpened]= useState(false);
	avatar = avatar? avatar: 'https://cdn.dribbble.com/users/877810/avatars/normal/bca2fa37b3bdbe545749e7903fb89dcd.png';
	
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
				<a href="#post-url"  onClick={()=>{
				 setIsModalOpened(true); }} className={styles.postLink}>{title}</a>	
			</h2>
				{isModalOpened &&  (
				<Post userNameProp={userNameProp} subreddit={subreddit} title={title} selftext={selftext} id={id} onClose={()=>{setIsModalOpened(false);}}/>
			)}	
		</div>
  );
}
 */