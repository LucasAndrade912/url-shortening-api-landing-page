interface ButtonProps {
	children: React.ReactNode;
	borderRadius?: 'full' | 'rounded';
	fontSize?: 'small' | 'normal';
}

export function Button({ children, borderRadius = 'full', fontSize = 'normal' }: ButtonProps) {
	return (
		<button
			className={`flex items-center justify-center bg-primary-cyan text-white px-6 py-2 ${
				borderRadius === 'full' ? 'rounded-full' : 'rounded-md'
			}`}
		>
			<span className={`font-bold ${fontSize === 'normal' ? 'text-base' : 'text-xs'}`}>
				{children}
			</span>
		</button>
	);
}
