'use client'

import { useState } from 'react'

const Input = () => {
	const [text, setText] = useState('')
	return (
		<div className='py-5 w-full h-90 bg-red-500 bg-card border custom-border custom-shadow  rounded-3xl relative'>
			<textarea
				className='px-6  resize-none font-light text-2xl w-full h-full outline-none '
				value={text}
				onChange={e => setText(e.currentTarget.value)}
				placeholder='Start write about your day...'
        maxLength={1500}
			/>
      <div className="absolute right-4 top-2">
        <h3 className='text-dark-white'>{text.length}/1500</h3>
      </div>
		</div>
	)
}

export default Input
