import { useEffect, useState } from 'react';
import { Button } from './Button';

interface ShortenedLinkProps {
	originalLink: string;
	shortenedLink: string;
}

export function ShortenedLink({ originalLink, shortenedLink }: ShortenedLinkProps) {
	const [isCopied, setIsCopied] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	async function copyShortenedLink(link: string) {
		await navigator.clipboard.writeText(link);

		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 800);
	}

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
		<div className="relative bg-white rounded-md flex justify-between items-center px-6 py-4 mobile:flex-col mobile:p-4 mobile:items-start mobile:gap-4">
			<span className="text-neutral-very-dark-violet mobile:text-base mobile:after:absolute mobile:after:left-0 mobile:after:top-12 mobile:after:content-[''] mobile:after:w-full mobile:after:h-[1px] mobile:after:bg-neutral-gray mobile:after:opacity-50 mobile:max-w-full mobile:overflow-hidden">
				{originalLink}
			</span>

			<div className="flex gap-6 items-center mobile:flex-col mobile:items-start mobile:w-full mobile:gap-3">
				<a
					href={shortenedLink}
					className="text-primary-cyan hover:underline mobile:text-base"
					target="_blank"
					rel="noreferrer"
				>
					{shortenedLink}
				</a>

				<Button
					style={{ paddingTop: '8px', paddingBottom: '8px' }}
					size={windowWidth <= 375 ? 'full' : 'normal'}
					borderRadius="rounded"
					bgColor={isCopied ? 'purple' : 'blue'}
					onClick={() => copyShortenedLink(shortenedLink)}
				>
					{isCopied ? 'Copied!' : 'Copy'}
				</Button>
			</div>
		</div>
	);
}
