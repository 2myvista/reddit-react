import React from 'react';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';
import styles from './header.css';
import { UserBlock } from './UserBlock';
export function Header() {
  return (
	<header className={styles.header} >
		<SearchBlock/>
		<ThreadTitle/>
		<SortBlock/>
		<UserBlock/>
	</header>

  );
}
