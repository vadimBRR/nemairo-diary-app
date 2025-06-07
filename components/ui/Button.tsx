import React from 'react'

const Button = ({
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			{...props}
			className={`  hover:brightness-110 scale-100 transition duration-300 easy-in-out hover:scale-105 cursor-pointer  ${className} `}
		>
			{children}
		</button>
	)
}

export default Button
