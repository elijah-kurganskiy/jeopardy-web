export interface OnCorrectAnswerPayload {
  rightAnswer: string;
  userAnswer: string;
}

export interface OnIncorrectAnswerPayload {
  rightAnswer: string;
}

interface EventInterval {
  createdAt: Date;
  finishedAt: Date;
}

interface OnCorrectAnswerEvent {
  type: "on_correct_answer";
  properties: OnCorrectAnswerPayload;
}

interface OnIncorrectAnswerEvent {
  type: "on_incorrect_answer";
  properties: OnIncorrectAnswerPayload;
}

type CreateEventPayload = OnCorrectAnswerEvent | OnIncorrectAnswerEvent;

export type GameEvent = CreateEventPayload & EventInterval;
