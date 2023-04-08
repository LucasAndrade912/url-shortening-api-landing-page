import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'normal' | 'small';
	borderRadius?: 'full' | 'rounded';
}

export function Button({
	children,
	size = 'normal',
	borderRadius = 'full',
	...props
}: ButtonProps) {
	return (
		<button
			className={`
				flex
				items-center
				justify-center
				bg-primary-cyan
				text-white
				py-3
				transition-colors
				hover:bg-[#96ecec]
				${size === 'normal' ? 'w-40' : 'w-24'}
				${borderRadius === 'full' ? 'rounded-full' : 'rounded-md'}
			`}
			{...props}
		>
			<span className={`font-bold ${size === 'normal' ? 'text-base' : 'text-xs'}`}>{children}</span>
		</button>
	);
}
