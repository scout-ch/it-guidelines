

export type ScoreList = {
  key: string
  score: number
  warnings: Warning[]
}

export interface Warning {
  question: Question
  response: Response
}

export type Reply = {
  id: string
  question: Question
  response: Response
}

export interface Root {
  questions: Question[]
}

export interface Question {
  index: number
  key: string
  multiple_choice?: boolean
  responses: Response[]
}

export interface Response {
  key: string
  tools: string[]
  kills: string[]
  next_question?: number
}
