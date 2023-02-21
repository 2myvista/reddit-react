// home Task
// 1
const str1 = 'hey';
const str2 = 'world';

function concat(a:string, b: string): string {
    return a + ' ' + b;
    
}

const c = concat( str1, str2);
const rez = str1.toString() + ' ' + str2.toString();


// 2

interface MyHometaskInterface {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData: [{
            howIDoIt: string,
            simeArray: (string | number)[];
        }
    ]
}

const MyHometask:MyHometaskInterface = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}


// 3

const myArray: MyArray<number> = [1,2,3];

interface MyArray<T> {
    [N: number]: T;

    map<U>(fn: (el: T, index :number, arr: MyArray<T>)=> U): MyArray<U>
    reduce<U>(fn:(accumulator: T, value: T, arr: MyArray<T>)=>U): MyArray<U>
}


myArray.map((f:number)=> f+1);
myArray.map((f:number)=> `f + $(f)+1`);
myArray.map<string>((f:number, index:number, arr:MyArray<number>)=> `f + $(f)+1`);


[1,2,3].map((f:number, index :number, arr:number[])=> f+1); // -> [2,3,4]
[1,2,3].map((f:number)=> `f + $(f)+1`); // -> ['f + 1','f + 2','f + 3',]
const initialValue = 0;

[1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6


// 4

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: MyPartial_<IHomeTask> = {
    externalData: {
       // basis: 2,
        value: 'win'
    }
}

type MyPartial_<T> = {

    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]

}
