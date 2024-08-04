
export interface ScoreList {
  tools: Score
}

export interface WarningList {
  tools: ToolWarning
}
export interface Warning {
  question: Question
  response: Response
}
export interface ToolWarning {
  app: Warning[]
  game: Warning[]
  youtube: Warning[]
  e_learning: Warning[]
  website: Warning[]
  podcast: Warning[]
  office: Warning[]
  pdf: Warning[]
  pm_tool: Warning[]
  collaboration: Warning[]
}
export interface Score {
  app: number
  game: number
  youtube: number
  e_learning: number
  website: number
  podcast: number
  office: number
  pdf: number
  pm_tool: number
  collaboration: number
}

export interface Root {
  questions: Question[]
}

export interface Question {
  index: number
  key: string
  responses: Response[]
}

export interface Response {
  key: string
  tools: string[]
  kills: string[]
  next_question?: number
}
