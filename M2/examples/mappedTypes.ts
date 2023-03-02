
//type cacting
/*
const mis =[] as Array<number>;
mis.push(1);
//mis.push('1');

let vale = {
    "value": 33,
    "boolvalue": true,
    "password": {
        
        "check": true,
        "rules": [
            {
                "type": 'required',
                "prompt": 'Введите пароль'
            },
            {
                "type": 'minLength[8]',
                prompt: 'Минимальное количество символов 8'
            }
        ]
    },
    "name": {
        "value": 44,
        "check": false
    }
};

vale.value=6
type TMyvale = typeof vale;

const typedVale: MyReadonly<TMyvale> = vale;      // переопределение типов объектов это работает только с внешними ключами
typedVale.value = false;        // 

type TvaleKeys = keyof TMyvale;
type TpasswordType = TMyvale['password'];



typedVale.password.check = false;

type MyReadonly<T> = {
    // mapped types
    readonly [N in keyof T]: T[N]  // объект у которого любой ключ может быть чем угодно
}


// const some: MyReadonly<TMyvale> = {
//    boolvalue: false
//
//} 

type MyPartial<T> = {
    // перебираем все ключи переданного типа T и делает их необязательными (знак вопроса ?)
    [N in keyof T]?: T[N];
}

//pick - забиpaет из объекта строковые ключи которые мы указали
type MyPick<T, K extends keyof T> = {
    // цикл по выбранным ключам
    [N in K]: T[N];

}


type picked = MyPick<TMyvale, 'password' | 'name'>
type picked1 = MyPick<TMyvale, 'password' | 'ashdfasjk'>


type MyReadonlyDeep<T> = {
    // берем каждый ключ от типа T 
    // спрашиваем значение которое ты взял расширяет объект
    // (имеется в виду яввляется ли это подтипом object)? если да,
    // то снова сделай MyReadonlyDeep уже следующего уровня вложенности
    // т.е присвой всем элементавм объекта значение "чтение только readonly"
    // т.е получается рекурсия
    readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

const TvaleKeysDeep: MyReadonlyDeep<TMyvale> = vale;

      // теперь использвание MyReadonlyDeep 
TvaleKeysDeep.password.check = false;                    //запрещает переопределение типов объектов 


type TsomeType = MyReadonlyDeep<TMyvale>;

// type unference  - вычисление аргумента generic
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type tTest = RemoveReadonly<TsomeType>


// *******************************************

function greaterThenZero(a : number, b:string ) {
    return a > 0;
}

type FnReturnType<T> = T extends ((... args: any[])=> infer R) ? R : never; 
type FnParameters<T> = T extends ((... args: infer R)=> any) ? R : never; 

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TArgsType = FnParameters<typeof greaterThenZero>;

// встроенные ф-ции typescript
type TReturnType1 = ReturnType<typeof greaterThenZero>;
type TArgsType1 = Parameters<typeof greaterThenZero>;

*/