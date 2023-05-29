import React, { useContext } from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import { Card_ } from './testCard';
//import { TextContent } from './Card/TextContent';
import { TestContent } from './testCard/TestContent';

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
				{/* <Card_ subreddit="travel" id="3" />
				 <Card_ subreddit="travel" id="4" />
				 <Card_ subreddit="travel" id="5" />
				 <Card_ subreddit="travel" id="6" />
				 <Card_ subreddit="travel" id="7" />
				 <Card_ subreddit="travel" id="7" />
				 <Card_ subreddit="travel" id="7" />
				 <Card_ subreddit="travel" id="7" />
				 <Card_ subreddit="travel" id="7" />
				 <Card_ subreddit="travel" id="7" />
				 <Card_ subreddit="travel" id="7" />
				<Card_ subreddit="travel" id="8" /> */}
				{/* <TestContent/> */}
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

