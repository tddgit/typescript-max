export function sealed(name: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.isSealed(target.prototype);
    };
}

export function logger<TFunction extends Function>(
    target: TFunction
): TFunction {
    let newConstructor: Function = function () {
        console.log(`Creating new instance. `);
        console.log(target);
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

function MyPropertyDecorator(
    target: Object,
    propertyKey: string,
    parameterIndex: number
) {
    //
}

interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}

function MyMethodDecorator(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {}
