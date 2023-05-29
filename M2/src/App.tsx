import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/UI/Layout';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList';
import { TestContent } from './shared/CardsList/testCard/TestContent';
import { useToken } from './hooks/useToken';
//import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext'; 
import { createStore} from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { type } from 'os';
import { rootReducer, setToken } from './redux/store/store';
import { useDispatch } from 'react-redux';


const store =  createStore(rootReducer, composeWithDevTools());

function AppComponent() {

	//const [commentValue, setCommentValue] = useState('');
	//const TokenProvider = tokenContext.Provider;

	const [token] = useToken();
	//console.log("token: "+token);
	const dispatch = useDispatch();

	useEffect (()=>{
		if(token) {
			dispatch(setToken(token))
		}
	}, [token])

	const upperCase = (str:string):string => {console.log(str); return str.toUpperCase()};
	const exclaim = (str:string):string => `${str}!`;
	const repeat = (str:string):string => `${str} `.repeat(3);
	const pipe = (value:string, ...fns:Function[]) => fns.reduce((acc,fn)=>fn(acc),value);
	console.log(pipe('hello',  upperCase, exclaim,  repeat )); 

	return (
		<Provider store={store}>
				{/* <TokenProvider value={token}> */}
					<UserContextProvider>
						<Layout>
							<Header/>
							<PostsContextProvider>
								<CardsList />
							</PostsContextProvider>
						</Layout>
					</UserContextProvider>
				{/* </TokenProvider> */}
		</Provider>
	);
}

export const App = hot(()=><AppComponent/>);
