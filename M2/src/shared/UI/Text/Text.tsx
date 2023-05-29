/*
font-size: 28px;
line-height: 33px;

font-size: 20px;
line-height: 23px;

font-size: 16px;
line-height: 19px;

font-size: 14px;
line-height:16px;

font-size: 12px;
line-height: 14px;

font-size: 10px;
line-height: 12px;

*/

import React from 'react';
import styles from './text.css';
import classnames from "classnames";

export enum EColor {
	black  = 'black',
	orange = 'orange',
	green  = 'green',
	white  = 'white',
	grayF4 = 'grayF4',
	grayF3 = 'grayF3',
	grayD9 = 'grayD9',
	grayC4 = 'grayC4',
	gray99 = 'gray99',
	gray66 = 'gray66',
}

type Tsizes = 28 | 20| 16 | 14 | 12 | 10;

interface ITextProps {
	As ?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
	children?: React.ReactNode;
	size: Tsizes;
	mobileSize?: Tsizes;
	tabletSize?: Tsizes;
	desktopSize?: Tsizes;
	color?: EColor;
	bold?: boolean;
}

export function Text( props: ITextProps) {

	const { As = 'span', color = EColor.black, children, size, mobileSize, tabletSize, desktopSize, bold=false } = props;

	const classes = classnames(
		styles[`s${size}`], 
			{[styles[`m${mobileSize}`]]: mobileSize},
			{[styles[`t${tabletSize}`]]: tabletSize},
			{[styles[`d${desktopSize}`]]: desktopSize},
			styles[color],
			{[styles.bold]: bold}
	);

	return (
		<As className={classes}>
			{children}
		</As>
	);
}
