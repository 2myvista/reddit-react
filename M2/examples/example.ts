/*
const str = 'string';
const num = 2;
const nan = NaN;
const obj = {};
const arr = [];
const nul = null;
const sym = Symbol();
const und = undefined;
const _void = void 0;
const bool = true;
const fn = ()=>{};


function sumTS(arr:number[]) {
    return arr.reduce((a:number, v:number)=>a + v);
}
 
sumTS([88]);

// 'some' + 2 // -> 'some2'
// 'some' - 2 // -> NaN
// '2' = 2 // -> '22'
// '2' - 2 // -> NaN

const tsString = 'str';
const tsNumber = 2;

const res = tsString + tsNumber;

const res2 = parseInt(tsString) - tsNumber;

if (typeof tsString === 'number') {
    const res21= tsString - tsNumber; 
}

// union type
const strOrNumber: string | number = 2;

type strOrNumber = string | number;

const strOrNumber1: strOrNumber = 2;

type AllJsSimpleTypes = string | number | [] | object | null | boolean | void | symbol;

// array

const tsArray: number[] = [1,2,3,4];

const tsArrayGeneric: Array<number> = []; 

const unionArray: (string | number)[] = [1,2,3,'4'];
const unionArray2: Array<string | number> = [1,2,3,'4'];

// tuple фиксированный массив
const myTuple: [number, string] = [1,'3'];

const val = tsArray[1000];
const val1 = myTuple[1000];
const [val3,val4] = myTuple;

//const [state, setState] = useState(); //пример фиксированного массива

type StrageTsTypes = any | unknown | never;

 // object

type MyObjecType = {a: number, b: string};

const myObj: MyObjecType = {a: 1, b: '2'}

interface MyFirstInterface {
    readonly a: number;
    b: string;
    c ?: number[];
}

const myObj2: MyFirstInterface = {
    a: 2,
    b: '123',
   // c: [1]
}
if (myObj2.c) {
    const value = myObj2.c;
}

myObj2.a=5;

interface IndexInterface {
    [n: string]:string | number
}

const apiAnswer: IndexInterface = {key: 'ahsdg', key1: 'fkl;', key3: 'tyuio'};

const vals = apiAnswer.randomkey;
 
enum Methods {
    add = 0,
    sub = 1,
}

function calc(method: Methods, left: number, right:number):number {
    switch(method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
      //  case ''
    }
}

const sum = calc(Methods.add,2,2); //4

// стрелочные функции

type TypeFn =() => number;

const ArrowFn:TypeFn = () => 2;
const ArrowFn1:FnInterface = (value) => 2;


interface FnInterface {
    (a:number):void;
}


type StrageTsTypes1 = any | unknown | never;

const some: any ='2';

some.reduce();


const un: unknown = '2';

un.reduce();

function neverFn ():never {
    throw new Error('exception');
}

const someV = neverFn();


*/