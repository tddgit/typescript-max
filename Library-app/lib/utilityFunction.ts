export function CalculateFee(daysLate: number): number {
    return daysLate * 0.25;
}

export function MaxBooksAllowed(age: number): number {
    if (age < 12) {
        return 3;
    } else {
        return 10;
    }
}
function privateFunc(): void {
    console.log('This is private....');
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    // implements fancy logic

    return inventory.splice(2, inventory.length);
}
