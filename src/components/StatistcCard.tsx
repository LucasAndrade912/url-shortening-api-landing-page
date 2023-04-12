interface StatiticCardProps {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	text: string;
	translateY?: number;
}

export function StatiticCard({ image, title, text, translateY = 0 }: StatiticCardProps) {
	return (
		<div
			className="bg-white px-8 pb-10 rounded-md z-10 relative"
			style={{ translate: `0 ${translateY}px` }}
		>
			<div className="flex items-center justify-center bg-primary-dark-violet w-20 h-20 rounded-full -translate-y-1/2">
				<img src={image.src} alt={image.alt} />
			</div>

			<h3 className="text-xl font-bold text-neutral-very-dark-blue mb-3">{title}</h3>

			<p className="text-neutral-grayish-violet text-sm">{text}</p>
		</div>
	);
}
