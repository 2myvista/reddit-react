
import preventDefault from "./utils/react/preventDefault";
import stopPropagation from "./utils/react/stopPropagation";
import { getValue }  from "./utils/react/pickFromSyntethicEvent";
import { getChecked }  from "./utils/react/pickFromSyntethicEvent";

// каррирование вычисление аргументов функции по мере того как мы ее (функцию) вызываем

import { Children } from "react";

//add(1)(1) // ->2

// function add(leftSide:number) {
//     return (rightSide:number)=> leftSide + rightSide;
// }

const add = (leftSide:number) => (rightSide:number) => leftSide + rightSide;

const addOne = add(1);
const addSix = add(6);

addOne(5) // 

window.addEventListener('resize', ()=> {});

function addEventListenerWithDispose(element: any, name: string, handler) {
    element.addEventListener(name, handler);
    return () => element.removeEventListener(name, handler);
}

const dispose = addEventListenerWithDispose(window, 'resize', ()=> {
    console.log('resize');
    dispose();
})

/// --- ///

const withIdKey = withKey('id');
const withIndexKey = withKey();

interface IBlockProps {
	title: string;
	id:string;
}

function Feed(props:{ blocks: IBlockProps[]}) {
	return (
		// { <div>
		// 	{ props.blocks.map((block:IBlockProps)=>
		// 		<Block key= {block.id} {...block} />
		// 	)}
		// </div> }
		// вместо этого можно написать
		// делаем  map вызывая withIdKey и внтри ее вызываем ф-цию Block
		// ф-ция  withIdKey, созданная из ф-ции  withKey, автоматически возьмет key из пропов и передаст его в jsx компонент -
		// таким образом мы про ключи не забудем
		// {props.blocks.map(withIdKey(Block))}
		// <Block title="123"/>
		// в результате транспиляции он превратится в 
		// {React.createElement(Block, {title: "123"}, [])} 

	);
}

function Block(props:IBlockProps) {
	return (
		<div>{props.title}</div>
	)
	
}

 // это функция высшего порядка, она принимает в себя строковый ключ и возвращает ф-цию,
 // которая принимает react компонент withIdKey, который получился из withKey, 
 // которая также является функцией высшего порядка,
 // которая в свою очередь явл ф-цией высшего порядка , т.е react компонент функциональный, возвращающий 3-ю ф-цию
 // внутри которой мы создаем элемент (createElement)
function withKey(key?:string) {
	return <E, T extends React.ComponentType<E>>(component: T) => 
	(props: E, index: number) =>
	React.createElement(
		component,
		 {...props, key: key? props[key as keyof E] : index },
		[],
	)
}
 ///

 function Input({onChange, value}: {onChange (value: string) => void, value: string}) {
	return (
		<input value={value} onChange={getValue(onChange)} />
	)
 }
 
 function Checkbox(props:{onChange:(value: string) => void, value: string}) {
	return (
		<input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
	)
 }



interface InputProps {
	onChange: (value: string) => void;
	value: string;
}

function Input({value, onChange}:InputProps) {
	return (
		<input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
	)
	
}

function NotStandartLink(props: any) {
	// const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
	// 	e.stopPropagation;
	// 	e.preventDefault;
	// 	props.onClick();
	// }

	// return (
	// 	<a onClick={handleClick}>Hello</a>
	// )
	
	return (
		<a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
	);
}


