import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList';
import { GenericList } from './shared/GenericList';
import { MyList } from './shared/CardsList';
import { MyHooks, useIsMounted } from './HooksExample';
import { getValue } from './utils/react/pickFromSyntethicEvent';
import {  generateRandomString, generateId  } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';
import { Dropdown } from './shared/Dropdown';
import { stopPropagation } from './utils/react/stopPropagation';
import { preventDefault } from './utils/react/preventDefault';
//import { pipe, isEqual, pick, cond } from './shared/compose.examples';

// ******************************

function compose<U>(...fns:Function[]) {
	return <E,>(initialValue: any):U =>
		fns.reduceRight((previousValue,fn) => (previousValue), initialValue);
	
}

/* function pipe<U>(...fns:Function[]) {
	//	console.log('12.');
		
		return <E,>(initialValue: any):U =>
			fns.reduce((previousValue,fn) => (previousValue), initialValue);
		
	} */
	
	// забирает из объекта свойства
 function pick<K extends string>(prop:K) {
		return <O extends Record<K, any>>(obj: O) => obj[prop]
	}
	
	const some = pick('value')({value: 1}) // -> 1
	
	// проверяет на равенство
 function isEqual<T>(left: T) {
		return <E extends T>(right: E) => left === right;
	}
	
	// возвращает инвертированное булево значение
 function cond(b:boolean) {
		return !b;
	}
	
// ******************************

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





function AppComponent() {
 
	const upperCase = (str:string):string => {console.log(str); return str.toUpperCase()};
	const exclaim = (str:string):string => `${str}!`;
	const repeat = (str:string):string => `${str} `.repeat(3);
	
	const pipe = (value:string, ...fns:Function[]) => fns.reduce((acc,fn)=>fn(acc),value);

	console.log(pipe('hello',  upperCase, exclaim,  repeat )); 

	const [list, setList] = React.useState(LIST)

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
		<Layout>
		   <Header />
		   <Content>
			<CardsList />
		   {/* <button onClick={()=>setIsVisible(!isVisible)}>change me</button>*/}
		   
			<input type="text" name="a" onChange={getValue(setTitle)}/>
			{isVisible && <MyHooks title={title} id="3322"/>}
		   <br/><br/>
		   </Content>
		   <div style={{padding: 20}}>
				<Dropdown 
					onClose={()=>{console.log('closed')}}
					onOpen={()=>{console.log('opened')}}
					/* isOpen={true} */
					button={<button>Dropdown button</button>}
				>
				<CardsList />
				{/* <GenericList list={list.map(merge({onClick: handleItemClick}))}/> */}
					{/* <ul>
						<li onClick={console.log}>click</li>
						<li >don't click</li>
					</ul> */}
				</Dropdown>
		   </div>
		   
		   {/* <button onClick={handleAdd}>add me</button> */}
		   <ul>
			 {/* вызов без атрибутов */}
		   {/* <GenericList list={list.map(merge({}))}/> */}
		   <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
		   </ul>
		   <GenericList list={SECTIONS}/>
		   <br/><br/>
		   {/* <GenericList list={filteredByUserId}/> */}
		   <br/><br/>
		</Layout>
	);
}

export const App = hot(()=><AppComponent/>);