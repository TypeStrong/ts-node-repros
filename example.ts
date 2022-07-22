const myClassDecorator: ClassDecorator = (target: any) => {
    console.log('class decorator executed');
}
const myMethodDecorator: MethodDecorator = (target: any) => {
    console.log('method decorator executed');
}
const myPropertyDecorator: PropertyDecorator = (target: any) => {
    console.log('property decorator executed');
}
const myParameterDecorator: ParameterDecorator = (target: any) => {
    console.log('parameter decorator executed');
}

@myClassDecorator
class DecoratedClass {
    @myMethodDecorator
    method() {}

    anotherMethod(
        @myParameterDecorator param: string
    ) {}

    @myPropertyDecorator
    field: string;
}