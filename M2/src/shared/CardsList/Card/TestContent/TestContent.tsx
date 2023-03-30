import React from 'react';
import styles from './testcontent.css';

import { Dropdown } from '../../../Dropdown';
import { CardsList } from '../../CardsList';
import { GenericList } from '../../../GenericList';
import { generateRandomString } from '../../../../utils/react/generateRandomIndex';
import { merge } from '../../../../utils/js/merge';
import { stopPropagation } from '../../../../utils/react/stopPropagation';
import { preventDefault } from '../../../../utils/react/preventDefault';
import { MyHooks, useIsMounted } from '../../../../../examples/HooksExample';
import { getValue } from '../../../../utils/react/pickFromSyntethicEvent';
import { Break } from '../../../Break';
import { Text } from '../../../Text';
import { EColor } from '../../../Text';

const LIST = [
	{As: 'li' as const, text: 'some text'},
	{As: 'li' as const, text: 'some2 text'},
	{As: 'li' as const, text: 'some3 4text'},
].map((item) => ({...item,id: generateRandomString()}))
//].map(generateId)
//console.log(LIST);

const SECTIONS = [
	{text: 'КомментарииS_1 ', href: 'url1', userId: 23},
	{text: 'ПоделитьсяS2 ', href: 'url2', userId: 23},
	{ text: 'СохранитьS3 ', href: 'url3', userId: 11},
	{ text: 'СохранитьS4 ', href: 'url3', userId: 28},
	{ text: 'СохранитьS5 ', href: 'url5', userId: 23},
	{ text: 'СохранитьS6 ', href: 'url6', userId: 11},
].map((item) => ({...item,id: generateRandomString()}))

export function TestContent() {

	const [list, setList] = React.useState(LIST);

	const handleItemClick = (id: string) => {
		console.log(id);
		setList(list.filter((item)=>item.id!==id));
	}
	const handleSectionClick = (id: string) => {
		console.log(id);
		preventDefault;

		//setList(list.filter((item)=>item.id!==id));
	}
	//const [isVisible, setIsVisible] = React.useState(true);
	const [title, setTitle] = React.useState('');
	const [isVisible] = useIsMounted();

	const handleAdd = () => {
		setList(list.concat({id:generateRandomString(),text: generateRandomString(), As: 'li' as const}))
	}


	return (
		<div style={{padding: 20}}>

		   {/* <button onClick={()=>setIsVisible(!isVisible)}>change me</button>*/}
		   
		   <input type="text" name="a" onChange={getValue(setTitle)}/>
			{isVisible && <MyHooks title={title} id="3322"/>}
		   <br/><br/>

		<Dropdown 
			onClose={()=>{console.log('closed')}}
			onOpen={()=>{console.log('opened')}}
			/* isOpen={true} */
			button={<button>Dropdown testContent button</button>}
		>
		<CardsList />



		{/* <GenericList list={list.map(merge({onClick: handleItemClick}))}/> */}
			{/* <ul>
				<li onClick={console.log}>click</li>
				<li >don't click</li>
			</ul> */}
		</Dropdown>
   
		<ul>
		{/* вызов без атрибутов */}
		{/* <GenericList list={list.map(merge({}))}/> */}
		<GenericList list={list.map(merge({onClick: handleItemClick}))}/>
		</ul>

		<GenericList list={SECTIONS}/>
		   ----
		   <Break size={8} mobileSize={16} top/>
		   {/* <GenericList list={filteredByUserId}/> */}

		   	<Break size={4} mobileSize={16} top/>
			
			<Text As="h1" size={20} mobileSize={28} bold color={EColor.orange}>label1</Text>
			<Break size={4} mobileSize={16} top/>
			
			<Text size={20}>label2</Text>
			<Break size={4} inline/>
			
			<Text size={20} mobileSize={16}>label3</Text>
			<Break size={4} mobileSize={20} top/>
			
			<Text As={'div'} size={20} mobileSize={16}>label4</Text>
			<Break size={4} mobileSize={20} top/>
</div>
	);
}
