"use client"
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import { useState } from 'react'

const CreatePage = () => {
	const [text, setText] = useState('')

	return (
		<Container title='Write about your day' isDisplay={false}>
			<div className=''>
				<div className='py-5 w-full h-90 bg-red-500 bg-card border custom-border custom-shadow  rounded-3xl relative'>
					<textarea
						className='px-6  resize-none font-light text-2xl w-full h-full outline-none '
						value={text}
						onChange={e => setText(e.currentTarget.value)}
						placeholder='Start write about your day...'
						maxLength={1500}
					/>
					<div className='absolute right-4 top-2'>
						<h3 className='text-dark-white'>{text.length}/1500</h3>
					</div>
				</div>
				<div className='w-full flex flex-row justify-between gap-24 mt-5'>
					<Button className='w-full py-3 bg-gradient-to-r from-violet-900 to-blue-800  border custom-border rounded-xl text-xl'>
						AI Check
					</Button>
					<Button className='w-full py-3 bg-gradient-to-r from-blue-800 to-violet-900 border custom-border rounded-xl text-xl'>
						Save
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default CreatePage
