import React from "react";

interface ILifecycleProps {
    someProp: number;
}

interface ILifecycleState {
    stateField: number;
	isMounted: boolean;
	hasError: boolean;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
        super(props);

        this.state = {stateField: 0, isMounted: false, hasError: false};
		// биндим контент - передаем его методу handleClick
		//this.handleClick = this.handleClick.bind(this);

    }

	static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state:Readonly<ILifecycleState>) {
		return {stateField: props.someProp };
		//return null;
	}

	public render() {
		if (this.state.hasError) {
			return <div>Error</div>;
		}
		return <div>1</div>;
		//return <div onClick={this.handleClick()}>1</div>;
		
	}

	public componentDidMount() {
		/*document.addEventListener('resize', ()=>{});
		setTimeout(()=>{},0);
		this.setState({isMounted: true});*/
	}

	public componentWillUnmount() {
	//	document.removeEventListener('reize', ()=>{});

	}
/*
	private handleClick = () => {
		this.setState({stateField:1})
	}
*/
	// метод вызывается перед тем как компонент обновится и состояние необходимых свойств передадутся в следующий за ним componentDidUpdate в параметре snapshot
	public getSnapshotBeforeUpdate(
		prevProps: Readonly<ILifecycleProps>,
		prevState: Readonly<ILifecycleState>): any | null {
			return 12334;
			//return nul;
		
	}

	public componentDidUpdate(
		prevProps: Readonly<ILifecycleProps>,
		prevState: Readonly<ILifecycleState>,
		snapshot?: any) {
			// условие необходимо, чтобы не попасть в бесконечный цикл обновления (т.к вызов setState приводит к обновлению компонента)
			if (snapshot > 1000) {
				this.setState({});
			}
		
	}

	// обработка ошибок
	static getDerivedStateFromError(error: Error) {
		// можем вернуть объект, который будет описывать состояние которое мы хотим изменить
		 return {hasError: true}

	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// можем запустить как5ой-нибудь серрвис логирования
		// logError(errorInfo.conponentStack)
	}


	// не использовать при PureComponent
	public shouldComponentUpdate(
		nextProps: Readonly<ILifecycleProps>,
		nextState: Readonly<ILifecycleState>,
		nextContext: any): boolean {
			//return this.state!== nextState || this.props !== nextProps;
			return false; 

		
	}
}