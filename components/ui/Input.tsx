'use client'

import { useState } from 'react'

const Input = () => {
	const [text, setText] = useState('')
	return (
		<div>
			<textarea
				className='bg-card border custom-border custom-shadow px-6 py-5 rounded-3xl w-full h-50 resize-none '
				value={text}
				onChange={e => setText(e.currentTarget.value)}
        placeholder='Start write about your day...'
			/>
		</div>
	)
}

export default Input
