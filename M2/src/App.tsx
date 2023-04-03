import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList';
import { TestContent } from './shared/CardsList/Card/TestContent';

function AppComponent() {
 
	const upperCase = (str:string):string => {console.log(str); return str.toUpperCase()};
	const exclaim = (str:string):string => `${str}!`;
	const repeat = (str:string):string => `${str} `.repeat(3);
	const pipe = (value:string, ...fns:Function[]) => fns.reduce((acc,fn)=>fn(acc),value);
	console.log(pipe('hello',  upperCase, exclaim,  repeat )); 

	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
			</Content>
			<TestContent />
		</Layout>
	);
}

export const App = hot(()=><AppComponent/>);