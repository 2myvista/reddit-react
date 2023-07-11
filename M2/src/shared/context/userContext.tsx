import React from 'react';
import { useUserData } from '../../hooks/useUserData';

export interface IUserContextData {
	name?: string;
	iconImg?: string;
}


export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({children}: {children: React.ReactNode}) {

	const {data, loading} = useUserData();
	const valContext = {...data, loading}

    return (
		<userContext.Provider value={valContext}> 
			{children}
		</userContext.Provider>
	)
}