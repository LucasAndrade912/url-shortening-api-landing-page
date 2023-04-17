import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'normal' | 'small' | 'full';
	borderRadius?: 'full' | 'rounded';
	bgColor?: 'blue' | 'purple';
}

const widths = {
	normal: 'w-40 mobile:w-48',
	small: 'w-28',
	full: 'w-full',
};

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
				${widths[size]}
				${bgColor === 'blue' ? 'bg-primary-cyan hover:bg-[#96ecec]' : 'bg-primary-dark-violet'}
				${borderRadius === 'full' ? 'rounded-full' : 'rounded-md'}
			`}
			{...props}
		>
			<span className={`font-bold mobile:text-lg ${size === 'normal' ? 'text-base' : 'text-sm'}`}>
				{children}
			</span>
		</button>
	);
}
