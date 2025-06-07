import { JournalEntry } from '@/types/journal'
import Card from './Card'

const CardList = () => {
	const cards: JournalEntry[] = [
		{
			id: 'entry_20240607_001',
			userId: 'user_12345',
			date: '2024-06-07T18:45:00Z',
			originalText:
				"Hello, today was an amazing day, i went outside with my friends, we were jumping on the wall, but my friend fell down and damage his arm, so we decided to go the hospital to check is everything well. Fortunately, everything was good with him and we went to the shopping mall to buy burgers and relax a little bit. It was a good day, but i have to study, because very soon I'll have an exam, so I have to prepare to it",
			aiAnalysis: {
				correctedText:
					"Hello, today was an amazing day. I went outside with my friends. We were jumping on the wall, but my friend fell down and damaged his arm. So we decided to go to the hospital to check if everything was well. Fortunately, everything was good with him and we went to the shopping mall to buy burgers and relax a little bit. It was a good day, but I have to study, because very soon I'll have an exam, so I have to prepare for it.",
				highlights: [
					{
						original: 'i went',
						corrected: 'I went',
						start: 32,
						end: 38,
					},
					{
						original: 'damage',
						corrected: 'damaged',
						start: 100,
						end: 106,
					},
					{
						original: 'go the hospital',
						corrected: 'go to the hospital',
						start: 140,
						end: 156,
					},
					{
						original: 'check is everything well',
						corrected: 'check if everything was well',
						start: 160,
						end: 186,
					},
					{
						original: 'to it',
						corrected: 'for it',
						start: 280,
						end: 285,
					},
				],
				englishLevel: 'B1 (Intermediate)',
				commonMistakes: [
					"Lowercase 'i' instead of 'I'",
					"Missing articles ('the hospital')",
					"Verb tense error: 'damage' → 'damaged'",
				],
				howToImprove: [
					'Use correct verb tenses to describe past events.',
					"Include articles ('a', 'the') where needed.",
					"Capitalize proper nouns and personal pronoun 'I'.",
				],
				learningTip: 'Try writing short diary entries daily and get feedback.',
				highlightedCorrections: [
					{
						original: 'i went',
						corrected: 'I went',
					},
					{
						original: 'damage his arm',
						corrected: 'damaged his arm',
					},
					{
						original: 'go the hospital',
						corrected: 'go to the hospital',
					},
				],
				enhancedVocabulary: [
					{
						original: 'amazing',
						suggestions: ['remarkable', 'extraordinary', 'fantastic'],
					},
					{
						original: 'good',
						suggestions: ['pleasant', 'enjoyable', 'delightful'],
					},
				],
				examples: [
					{
						word: 'remarkable',
						example: 'It was a remarkable day full of joy and laughter.',
					},
					{
						word: 'delightful',
						example: 'We had a delightful meal at the shopping mall.',
					},
				],
			},
		},
	]

	return (
		<div className='mt-6'>
			{cards.map(card => (
				<Card key={card.id} {...card} />
			))}
		</div>
	)
}

export default CardList
