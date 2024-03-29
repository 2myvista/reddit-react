import React, { useContext } from 'react';
import styles from './content.css';


interface IContentProps {
	children?: React.ReactNode;
}

export function Content({children}: IContentProps) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
