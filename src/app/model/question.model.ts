
export interface Question {
    question: string,
    answers: Answer[]
}

export interface Answer {
    text: string,
    score: number
}