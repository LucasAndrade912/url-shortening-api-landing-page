import { useEffect, useState } from 'react';

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
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowWidth = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowWidth);

		return () => {
			window.removeEventListener('resize', handleWindowWidth);
		};
	}, []);

	return (
		<div
			className="bg-white px-8 pb-10 rounded-md z-10 relative mobile:text-center"
			style={{ translate: windowWidth > 375 ? `0 ${translateY}px` : 0 }}
		>
			<div className="flex items-center justify-center bg-primary-dark-violet w-20 h-20 rounded-full -translate-y-1/2 mobile:-translate-x-1/2 mobile:relative mobile:inset-x-1/2">
				<img src={image.src} alt={image.alt} />
			</div>

			<h3 className="text-xl font-bold text-neutral-very-dark-blue mb-3 mobile:text-2xl">
				{title}
			</h3>

			<p className="text-neutral-grayish-violet text-sm">{text}</p>
		</div>
	);
}
