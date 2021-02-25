{
    let isDone: boolean = false;
    let hex: number = 0xf009;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let color: string = 'blue';
    color = 'red';
    let list: number[] = [1, 2, 3];
    let anotherList: Array<number> = [1, 2, 3];
    let data: [string, 10];
    data = ['hello', 10];
    console.log(data[0].substr(1));
    enum Color {
        Red = 5,
        Green = 10,
        Blue = 15,
    }
    let cc: Color = Color.Green;
    console.log(cc);
    enum ColorsData {
        Red,
        Green,
        Blue,
    }
    let colorName: string = ColorsData[2];
    console.log(colorName);
    let n: any = 1;
    n = 'string';
    n = 'false';

    let someitem: any = 4;
    // someitem.print();
    function initFunction(): void {
        console.log('Hello');
    }
    let unusable: void = void 0;
    console.log(unusable);

    let n1: undefined = void 0;
    let n2: null = null;

    // let core: never = (() => {
    //     console.log(true);
    //     throw new Error('Some error');
    //     // return 1;
    // })();

    let obj: object | null;
    obj = null;
    obj = {
        n: 1,
    };

    let someString: any = 'Some string';
    let I: number = (<string>someString).length;

    let value: any = 'value';
    let size: number = (value as string).length;

    const show = (msg: string) => {
        console.log(msg);
    };
    show('hello');

    function f([first, second]: [number, number]) {
        console.log(first, second);
    }
    f([1, 2]);

    const resource = {
        a: 'a',
        b: 2,
    };
    let { a, b = 10 } = resource;
    console.log(b);

    type C = {
        a: string;
        b?: number;
    };
    function showProperties({ a, b = 2 }: C): void {
        console.log(a, b);
    }
    showProperties({ a: 'abc' });

    type Schema = {
        a: string;
        b?: number;
    };
    function init({ a, b = 0 }: Schema = { a: '' }): void {
        console.log(a, b);
    }
    init();
    // init(5)
    console.clear();
}
{
    function add(x: number, y: number): number {
        return x + y;
    }

    const sm = add(1, 2);

    let myAdd = function (x: number, y: number): number {
        return x + y;
    };

    type f = (baseValue: number, increment: number) => number;

    let increase = <f>function increase(x: number, y: number): number {
        return x + y;
    };

    const updatedValue: number = increase(3, 1);

    const f = (a: number, b: number): number => a + b;
    type FType = (a: number, b: number) => number;
    const sum: FType = function (a, b) {
        return a / b;
    };

    function buildName(firstName: string, lastName?: string): string {
        if (lastName) {
            return firstName + lastName;
        } else {
            return firstName;
        }
    }
    type CustomType = [string, string, string, number];
    function buildLetters(
        firstName: string,
        ...restOfLetters: CustomType
    ): string {
        return firstName + restOfLetters.join(' ');
    }
    buildLetters('a', 'b', 'c', 'd', 1);

    const run: (this: void, n: number) => void = function (n: number) {};

    function show(n: number): string | number {
        if (n < 5) {
            return 'Good';
        } else {
            return 100;
        }
    }
    const myValue = show(5);

    const returnNumber = function <T>(arg: T): T {
        return arg;
    };

    const n = returnNumber(1);
    const n1 = returnNumber('string');

    type ff = (a: number, b: number) => number;
    const ff = <ff>(aa: number, bb: number) => aa + bb;
    const fff: ff = (aa: number, bb: number) => aa + bb;
    const ffff = (aa: number, bb: number): number => aa + bb;

    const returnValueByGeneric = function <T>(arg: T): T {
        return arg;
    };

    const text = returnValueByGeneric('str');

    const nnn = returnValueByGeneric(5);
}

{
    const readLength = function <T>(arg: T): T {
        // console.log(arg.length);
        return arg;
    };
}
