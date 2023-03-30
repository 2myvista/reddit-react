
class Constructor {
    public field: number = 123;
    constructor(arg: number) {
        this.field = arg;
    }
    public publicMethod() {
        this.field;
    }

    // protected видна в наследниках, а private не виден
    protected protectedMothod() {
        return this.field+10;
    }

    private privateMethod() {
        return this.field+20;
    }
}
const instance = new Constructor(369);

class Child extends Constructor {
        public childMethod() {
           // this.
            
        }
}

abstract class abstractClass {
    public abstract abstractField: number;

    protected protectedMethod():number {
        return this.abstractField;
    }

}

class NewChild extends abstractClass {
    public abstractField: number = 123;
    public protected abstractMethod(): number {
        return this.protectedMethod();
    }
}


interface myInterface<T> {
    field: string;
    method(): string; 
}

class newIclass<T> implements myInterface<T> {
    field: string = '658';
    public conf?: T;

    method(): string {
        return this.field;
    } 
}

class MyComponent extends React.Component<{prop1: number},{state1: string}> {
    constructor(props: {prop1: number}) {
        super(props);
        this.state = {
            state1 = '123'
        } 

    }

    public render() {
        return (
            <div>{this.props.prop1}</div>
        )
    }
}
