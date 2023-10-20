import React from 'react';
import { Outlet } from "react-router-dom";
import { CardsList } from '../../../CardsList';

export function LayoutCardsList()  {
	return (
		<main className='container-list'>
			<CardsList/>
			<Outlet/>
		</main>
	)
};


