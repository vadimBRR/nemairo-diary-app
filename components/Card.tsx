import { JournalEntry } from '@/types/journal'
import { formatDate } from '@/utils/formatDate'

const Card = ({ aiAnalysis, userId, originalText, date, id }: JournalEntry) => {
	return (
		<div className='bg-card border custom-border custom-shadow px-6 py-5 rounded-3xl scale-100 duration-200 hover:scale-103 hover:brightness-110 cursor-pointer'>
			<div className='flex w-full flex-row justify-between items-end'>
				<div className='border custom-border p-2 rounded-2xl px-3'>
					<h2 className='text-dark-white font-medium text-xl'>
						{aiAnalysis.englishLevel.split(' ')[0]}
					</h2>
				</div>

				<div className='font-light text-xl text-dark-white'>
					{formatDate(date)}
				</div>
			</div>

			<h2 className='text-xl mt-2'>{originalText}</h2>
		</div>
	)
}

export default Card
