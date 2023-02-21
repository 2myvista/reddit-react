// Generics

const myArray: MyArray<number> = [1,2,3];

interface MyArray<T> {
    [N: number]: T

    map<U>(fn: (el: T, index :number, arr: MyArray<T>)=> U): MyArray<U>
}

let vari = myArray[1];

myArray.map((f:number)=> f+1);
myArray.map((f:number)=> `f + $(f)+1`);
myArray.map<string>((f:number, index:number, arr:MyArray<number>)=> `f + $(f)+1`);


[1,2,3].map((f:number, index :number, arr:number[])=> f+1); // -> [2,3,4]
[1,2,3].map((f:number)=> `f + $(f)+1`); // -> ['f + 1','f + 2','f + 3',]


function identity<T>(arg:T): T {
    return arg
}

let result = identity(12);
let result1 = identity('12');

function getLength<T extends Array<any>>(arr: T): number {
    return arr.length;
}

interface IValueWithType<T> {
    type: string;
    value: T

}

function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg

    }
    
}

const rez2=withType(123);



// встроенные genegic

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

// omit - выкидывает указанные ключи в данном случае останется только type
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: 'sdfj'
}

// pick как omit но наоборот - оставит только type
const picked: Pick<IExample<number>, 'type'> = {
       type: 'sdjak'
}

// partial делает все ключи не обязательными
const partial: Partial<IExample<object>>= {

}
