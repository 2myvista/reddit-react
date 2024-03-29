import { assoc } from "../js/assoc";

export const generateRandomString = () =>{ return Math.random().toString(36).substring(2,15);}

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
// export const generateId = <O extends object>(obj: O) => {
//     console.log(obj);
    
//     return assignId(obj)
// };