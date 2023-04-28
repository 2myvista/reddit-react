import React, {useState} from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { CardsList } from './shared/CardsList';
import { TestContent } from './shared/CardsList/testCard/TestContent';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext'; 
import { commentContext } from './shared/context/commentContext';

function AppComponent() {

	const [commentValue, setCommentValue] = useState('');
	const CommentProvider = commentContext.Provider;

	const [token] = useToken();
	console.log("token: "+token);

	const upperCase = (str:string):string => {console.log(str); return str.toUpperCase()};
	const exclaim = (str:string):string => `${str}!`;
	const repeat = (str:string):string => `${str} `.repeat(3);
	const pipe = (value:string, ...fns:Function[]) => fns.reduce((acc,fn)=>fn(acc),value);
	console.log(pipe('hello',  upperCase, exclaim,  repeat )); 

	return (
		<CommentProvider value={{
			value: commentValue, onChange: setCommentValue
		}}>
		<tokenContext.Provider value={token}>
			<UserContextProvider>
				<Layout>
					<Header/>
					{/* <Content> */}
					<PostsContextProvider>
						<CardsList />
					</PostsContextProvider>
					{/* </Content> */}
					{/* <TestContent /> */}
				</Layout>
			</UserContextProvider>
		</tokenContext.Provider>
		</CommentProvider>
	);
}

export const App = hot(()=><AppComponent/>);