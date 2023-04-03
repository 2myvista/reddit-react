  // 1. useState
  // 2. useEffect
  // 3. useRef
  // 4. useReducer
  // 5. useMemo
  // 6. useContext
  // 7. useCallback
  // 8. useImperativeHandle
  // 9. useLayoutEffect
  // 10. useDebugValue


  import React from "react";

  export function MyHooks({title, id}:{title: string, id?: string}) {
    //будет запускаться какждый раз, при каждом рендере
    // React.useEffect(() => {
    //     console.log('component willUpdate');
        
    // });

    // будет использоваться только при изменении свойств, указаных в deps(второй аргумент). 
    // если масси пуст, то это аналог если без указания вобще
    // React.useEffect(() => {
    //     console.log('component didMount');
    //     return () => {
    //         console.log('component will Unmount');

    //     }
    // },[]);

    // будет использоваться только при изменении свойства title

    //  React.useEffect(() => {
    //     console.log('component will receive props:', title);
    // },[title]); 

	//console.log('isMounted', isMounted);
	const [isMounted] = useIsMounted();

	// React.useEffect(()=>{
	// 	console.log('isMounted', isMounted);
	// },[isMounted])

	const items = 3;
	const mult = 5;

	const result = React.useMemo (
		()=> //{
			calc(items,mult)
		/*}*/,
		 [items, mult]
	)
	
     return (
         <div>{title} {id} {result}</div>
     )
  }

  export function useIsMounted() {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(()=>{
		setIsMounted(true);
	},[]);
	return [isMounted]
}

function calc(items: number, mult: number) {
	return new Array(items).fill(1).reduce((a,v)=> a * mult);
}
  
  