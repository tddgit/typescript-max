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
}
