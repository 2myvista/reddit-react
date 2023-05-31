import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/UI/Layout';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList';
import { TestContent } from './shared/CardsList/testCard/TestContent';
import { useToken } from './hooks/useToken';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext'; 
import { createStore} from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { type } from 'os';
//import { rootReducer } from './redux/store/store';
import { rootReducer, setToken } from './redux/store/store';
import { useDispatch } from 'react-redux';


const store =  createStore(rootReducer, composeWithDevTools());

function AppComponent() {

	//const [commentValue, setCommentValue] = useState('');
	const [token] = useToken();
	console.log("token: "+token);

	const upperCase = (str:string):string => {console.log(str); return str.toUpperCase()};
	const exclaim = (str:string):string => `${str}!`;
	const repeat = (str:string):string => `${str} `.repeat(3);
	const pipe = (value:string, ...fns:Function[]) => fns.reduce((acc,fn)=>fn(acc),value);
	console.log(pipe('hello',  upperCase, exclaim,  repeat )); 

	return (
					<UserContextProvider>
						<Layout>
							<Header/>
							<PostsContextProvider>
								<CardsList />
							</PostsContextProvider>
						</Layout>
					</UserContextProvider>
	);
}

export const App = hot(()=><Provider store={store}><AppComponent /></Provider>);
