import { useState } from 'react';
import { Button } from './Button';

interface ShortenedLinkProps {
	originalLink: string;
	shortenedLink: string;
}

export function ShortenedLink({ originalLink, shortenedLink }: ShortenedLinkProps) {
	const [isCopied, setIsCopied] = useState(false);

	async function copyShortenedLink(link: string) {
		await navigator.clipboard.writeText(link);

		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 800);
	}

	return (
		<div className="bg-white rounded-md flex justify-between items-center px-6 py-4">
			<span className="text-neutral-very-dark-violet">{originalLink}</span>

			<div className="flex gap-6 items-center">
				<a
					href={shortenedLink}
					className="text-primary-cyan hover:underline"
					target="_blank"
					rel="noreferrer"
				>
					{shortenedLink}
				</a>

				<Button
					size="small"
					borderRadius="rounded"
					style={{ backgroundColor: isCopied ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)' }}
					onClick={() => copyShortenedLink(shortenedLink)}
				>
					{isCopied ? 'Copied!' : 'Copy'}
				</Button>
			</div>
		</div>
	);
}
