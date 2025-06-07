
export type Highlight = {
  original: string
  corrected: string
  start: number
  end: number
}

export type HighlightedCorrection = {
  original: string
  corrected: string
}

export type VocabularySuggestion = {
  original: string
  suggestions: string[]
}

export type WordExample = {
  word: string
  example: string
}

export type AiAnalysis = {
  correctedText: string
  highlights: Highlight[]
  englishLevel: string
  commonMistakes: string[]
  howToImprove: string[]
  learningTip: string
  highlightedCorrections: HighlightedCorrection[]
  enhancedVocabulary: VocabularySuggestion[]
  examples: WordExample[]
}

export type JournalEntry = {
  id: string
  userId: string
  date: string
  originalText: string
  aiAnalysis: AiAnalysis
}
