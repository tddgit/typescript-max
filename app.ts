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
    init({ a: 'str' });
    // init(5)

}
