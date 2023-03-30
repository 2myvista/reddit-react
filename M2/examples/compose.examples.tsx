import * as React from 'react';
import { getValue } from '../src/utils/react/pickFromSyntethicEvent';
import { preventDefault } from '../src/utils/react/preventDefault';
import { stopPropagation } from '../src/utils/react/stopPropagation';

function InputExample({value, onChange}:any) {
	return (
		<input 
			value={value}
			//onChange={preventDefault(stopPropagation(getValue(onChange)))}
			//onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
			onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
		/>
	)
}

function compose<U>(...fns:Function[]) {
	return <E,>(initialValue: any):U =>
		fns.reduceRight((previousValue,fn) => (previousValue), initialValue);
	
}

export function pipe<U>(...fns:Function[]) {
	return <E,>(initialValue: any):U =>
		fns.reduce((previousValue,fn) => (previousValue), initialValue);
	
}

// забирает из объекта свойства
export function pick<K extends string>(prop:K) {
	return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1}) // -> 1

// проверяет на равенство
export function isEqual<T>(left: T) {
	return <E extends T>(right: E) => left === right;
}

// возвращает инвертированное булево значение
export function cond(b:boolean) {
	return !b;
}
const comments = [{id:1, text:'text 1'},{id:22, text:'text 2'}];

const filteredComments = comments.filter(({id})=> id!==22);
// список комментов с id == 22
const filteredComments22 = comments.filter(pipe(pick('id'), isEqual(22)));
// список комментов с id !== 22
const filteredCommentsNot22 = comments.filter(pipe(pick('id'), isEqual(22), cond));

// тоже самое только через параметры
const filterWithId = (id:number) => pipe(pick('id'), isEqual(id), cond);
const filteredCommentsNot22WithFunc = comments.filter(filterWithId(22));

// фильтрация по любому свойству
const createFilterBy =(prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);

// по id == 22
const filterWithIdByPropId = createFilterBy('id');
const filterWithIdByPropId22 =  comments.filter(filterWithIdByPropId(22));

// по value == 22
const filterWithIdByPropValue = createFilterBy('value');
const filterWithIdByPropValue22 =  comments.filter(filterWithIdByPropValue(22));

const getValueNumber = pipe<number> (
	pick('currentTarget'),
	pick('value'),
	parseInt
);