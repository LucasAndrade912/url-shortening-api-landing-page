interface LinkProps {
	children: React.ReactNode;
	href: string;
}

export function Link({ children, href }: LinkProps) {
	return (
		<a
			href={href}
			className="text-base font-bold text-neutral-grayish-violet mobile:text-white mobile:text-lg"
		>
			{children}
		</a>
	);
}
