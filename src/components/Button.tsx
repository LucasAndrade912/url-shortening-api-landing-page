import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'normal' | 'small';
	borderRadius?: 'full' | 'rounded';
	bgColor?: 'blue' | 'purple';
}

export function Button({
	children,
	size = 'normal',
	borderRadius = 'full',
	bgColor = 'blue',
	...props
}: ButtonProps) {
	return (
		<button
			className={`
				flex
				items-center
				justify-center
				text-white
				py-3
				transition-colors
				disabled:opacity-60
				${bgColor === 'blue' ? 'bg-primary-cyan hover:bg-[#96ecec]' : 'bg-primary-dark-violet'}
				${size === 'normal' ? 'w-40 mobile:w-48' : 'w-28'}
				${borderRadius === 'full' ? 'rounded-full' : 'rounded-md'}
			`}
			{...props}
		>
			<span className={`font-bold ${size === 'normal' ? 'text-base mobile:text-lg' : 'text-sm'}`}>
				{children}
			</span>
		</button>
	);
}
