import axios, { Axios } from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/reducer';
import { Icon } from '../UI/Icon';
type token = {
	token:string
}
export function CardsList() {
	const token = useSelector<RootState,string>(state=>state.token.token);
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorLoading, setErrorLoading] = useState('');
	const [nextAfter, setNextAfter] = useState('');
	const [loadCounter, setLoadCounter] = useState(0);
	const [loadButton, setLoadButton] = useState(false);
	const [needButton, setNeedButton] = useState(true);
	const bottomOfList = useRef<HTMLDivElement>(null);
	const risingUrl = 'https://oauth.reddit.com/rising/';
	const bestUrl = 'https://oauth.reddit.com/r/popular/best.json';
	const handleOpen = ()=>{
		setLoadButton(false);
		setLoadCounter(0);
	}

	async function load() {
		setLoadCounter(0);
		setLoading(true);
		setErrorLoading('');
		try {
			if (token && token.length > 0 && token != "undefined") {
				const {data: {data: {after, children}}} = await axios.get(bestUrl,{
					headers: {Authorization: `bearer ${token}`},
					params: {
						limit:10,
						sr_detail:1,
						after: nextAfter,
					}
				});
				setNextAfter(after);
				// обращаемся к предыдущему состоянию стейта и добавляем туда вновь подгруженные данные
				setPosts(prevChildren => prevChildren.concat(...children));
			}
		}
		catch (error) {
			console.error(error);
			setErrorLoading(String(error));
		}
		setLoading(false);
	}


	useEffect(()=>{
		const observer = new IntersectionObserver((entries)=>{
			// для того, чтобы в IntersectionObserver(асинхронно наблюдает за пересечением элемента (target) с его родителем (root) или областью просмотра (viewport))
			// не вызывался callback при его создании
			// entries - список всех наблюдаемых элементов, у которых(у каждого из них) можно посмотрить попадает или не попадает он(элемент) в область видимости
			// и мы наблюдаем только за одним элементом и если он видим isIntersecting = true, вызываем загрузку
			if (entries[0].isIntersecting) {
				if(needButton) {
					if (loadCounter < 3) {
						load();
						setLoadCounter(loadCounter+1);
					}
					else {
						setLoadButton(true);
					}
				}
				else {
					load();
				}
			}
		}, {rootMargin: '10px'},
		);
		if (bottomOfList.current) 	{
			observer.observe(bottomOfList.current)
		}
		return () => {
			if (bottomOfList.current) 	{
				observer.unobserve(bottomOfList.current)
			}	
		}
	},[bottomOfList.current, nextAfter, token, loadButton])
	return (<>
		<ul className={styles.cardsList}>
			{posts.length === 0 && !loading && !errorLoading && (
				<div role="alert">данных нет...	</div>
			)}
			{posts.map(post =>(
				<Card
					subreddit={post.data.subreddit}
					key={post.data.id}
					id={post.data.id}
					author={post.data.author}
					image={post.data.thumbnail}
					title={post.data.title}
					avatar=''
					created={post.data.created}
					permalink={post.data.permalink}
					selftext={post.data.selftext_html?post.data.selftext_html:' '}
				/>
				//console.log(posts);
			))}
			<div ref={bottomOfList}/>
			{loading && <div style={{ textAlign: 'center' }}><Icon name='loading' size={50}/></div>}
			{errorLoading && (
				<div role="alert">{errorLoading}</div>
			)
				}
			</ul>
			{loadButton && <button className={styles.moreBtn}  onClick={handleOpen}>загрузить еще...</button>}</>
	);
}
/* import React, { useContext } from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import { testCard } from './testCard';
import { postsContext } from '../context/postsContext';
export function CardsList() {
	const {postsData} = useContext(postsContext);
	//console.log(postsData);
 
	return (
		<ul className={styles.cardsList}>
		{postsData && postsData.map(
			(item:any)=>(
				<Card subreddit={item.data.subreddit} key={item.data.id} id={item.data.id} author={item.data.author} image={item.data.thumbnail} title={item.data.title} avatar={item.data.sr_detail.icon_img} created={item.data.created} permalink={item.data.permalink} selftext={item.data.selftext_html?item.data.selftext_html:' '} />
		)
		)}
		{!postsData && (
			<div>
				<Card_ author="userName1" subreddit="travel" title='title of post 1' id="1" selfText='Im /ncurious about other peoples experiences in hostels. Especially the ones which are a little out of 10 times its amazing, but there is always that odd one out. ll right, Ill go first. I was once staying at a hostel in Berlin, during covid. Because of covid, Germany closed all of the hostels, and all travelers of other hostels were rebooked into a hotel, which happened to have dorm rooms. So there was this Swedish guy, who was there already for 5 months, who liked to drink his home made liquer and go out every night. This one night he came back at around 4 o clock. He entered to room, grabbed my feet for a few seconds, and then went to bed. Needles to say, I didnt sleep for the rest of the nigh '/>
				<Card_ author="userName2" subreddit="travel" id="2"  title='title of post 2' selfText='Im /ncurious about other peoples experiences in hostels. Especially the ones which are a little out of 10 times its amazing, but there is always that odd one out. ll right, Ill go first. I was once staying at a hostel in Berlin, during covid. Because of covid, Germany closed all of the hostels, and all travelers of other hostels were rebooked into a hotel, which happened to have dorm rooms. So there was this Swedish guy, who was there already for 5 months, who liked to drink his home made liquer and go out every night. This one night he came back at around 4 o clock. He entered to room, grabbed my feet for a few seconds, and then went to bed. Needles to say, I didnt sleep for the rest of the nigh '/>
			</div>
		)}   
		</ul> 
	);
}
//
interface IItems {
	value: string;
	id:	string;
	onClick: (id: string) => void;
}
interface IMyListProps {
	list: IItems[];
	
}
export function MyList({list}:IMyListProps) {
	return (
		<ul>
			{list.map((item)=>(
				<li onClick={()=>item.onClick(item.id)} key={item.id}>{item.value}</li>
			))
			} 
		</ul>
	)
}
 */