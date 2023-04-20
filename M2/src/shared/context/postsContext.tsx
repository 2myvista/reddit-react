import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostsContextData {
	postsData?: any;
}


export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({children}: {children: React.ReactNode}) {
	const [ postsData ] = usePostsData();

	return (
		<postsContext.Provider value={postsData}>
			{children}
		</postsContext.Provider>
	)

}