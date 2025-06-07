import HomeButtons from '@/components/HomeButtons'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='w-2/3 mx-auto min-h-screen py-12'>
			<h1 className='text-5xl font-bold lg:w-2/3 leading-14'>
				Hey Vadym, how are you feeling today?
			</h1>
			<div className=' mt-1 flex w-full items-end justify-between'>
				<h2 className='font-light text-3xl'>Monday, 30 Jun, 2025</h2>
        <HomeButtons/>
			</div>
		</div>
	)
}
