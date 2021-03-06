class Game {}

abstract class Piece {
    protected position: Position;
    constructor(private readonly color: Color, file: File, rank: Rank) {
        this.position = new Position(file, rank);
    }
    moveTo(position: Position) {
        this.position = position;
    }
    abstract canMoveTo(position: Position): boolean {}
}

// new Piece('White', 'E', 1)

class Position {
    constructor(private file: File, private rank: Rank) {}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(postion.rank - this.rank)
            file: Math.abs(position.file.charCodeAt(0)-this.file.charCodeAt(0))

        }
    }
}


type Color = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
