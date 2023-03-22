import React from "react";
function pickFromSyntethicEvent<T extends HTMLElement>() {
	// возвращаем ф-цию, которая будет принимать ключ который содержится в ситнетик евенте 
	// возвращает ф-цию, корорая примет callback (onchange)
	// в конце концов это все вернет ф-цию, которая примет наш евент  (react.syntethicEvent)
	// в результате она сделает callback currentTarget и возьмет из него ключ 
	return <K extends keyof T>(key: K) => <E extends ((t: T[K]) => void)>(fn: E) => (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntethicEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntethicEvent<HTMLInputElement>()('checked');

