export class QuizQuestion {
    // private _question: string;
    // private _answer1: string;
    // private _answer2: string;
    // private _answer3: string;
    // private _correctAnswer: number;

    constructor(
        private _question: string,
        private _answer1: string | null,
        private _answer2: string | null,
        private _answer3: string | null,
        private _answer4: string | null,
        private _correctAnswer: number
    ) {}

    public get question(): string {
        return this._question;
    }
    public get answer1(): string | null {
        return this._answer1;
    }
    public get answer2(): string | null {
        return this._answer2;
    }
    public get answer3(): string | null {
        return this._answer3;
    }
    public get answer4(): string | null {
        return this._answer4;
    }
    public get correctAnswer(): number {
        return this._correctAnswer;
    }
}

export class TrueFalseQuestion extends QuizQuestion {
    constructor(question: string) {
        super(question, 'TRUE', 'FALSE', null, null, 1);
    }
}

function formatQuestion(quizQuestion: QuizQuestion) {
    console.log(quizQuestion.question);
    console.log(`1. ${quizQuestion.answer1}`);
    console.log(`2. ${quizQuestion.answer2}`);
    console.log(`3. ${quizQuestion.answer3}`);
    console.log(`4. ${quizQuestion.answer4}`);
}

let quizQuestion: QuizQuestion = new QuizQuestion(
    'Question',
    'answer1',
    'answer2',
    'answer3',
    'answer4',
    4
);

let trueFalseQuestion: QuizQuestion = new TrueFalseQuestion('Question');

formatQuestion(quizQuestion);
formatQuestion(trueFalseQuestion);
