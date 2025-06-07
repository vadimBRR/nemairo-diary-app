import { getTodayFormatted } from '@/utils/formatDate'
import HomeButtons from './HomeButtons'

const Container = ({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) => {
	return (
		<div className='w-2/3 mx-auto min-h-screen py-12'>
			<h1 className='text-5xl font-bold lg:w-2/3 leading-14'>{title}</h1>
			<div className=' mt-1 flex w-full items-end justify-between'>
				<h2 className='font-light text-3xl'>{getTodayFormatted()}</h2>
				<HomeButtons />
			</div>
			{children}
		</div>
	)
}

export default Container
