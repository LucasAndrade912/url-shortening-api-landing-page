import { useState } from 'react';

import { Button } from './Button';

import { useLocalStorage } from '../hook/useLocalStorage';
import { shrtcodeApi } from '../services/shrtcodeApi';

const errorStyle =
	'outline outline-2 outline-secondary-red placeholder:text-secondary-red placeholder:opacity-60';

export function LinkShortener() {
	const [link, setLink] = useState('');
	const [error, setError] = useState(false);
	const [links, setLinks] = useLocalStorage('@links');

	async function shortenLink() {
		if (link === '') {
			setError(true);
			return;
		}

		const { data } = await shrtcodeApi.get(`/shorten?url=${link}`);
		const shortLink = data.result.full_short_link;
		const copyLinks = [...links];

		copyLinks.push([link, shortLink]);
		setLinks(copyLinks);
		setLink('');
	}

	return (
		<section className="bg-bottom-half px-40 mt-12">
			<div className="bg-primary-dark-violet bg-[url('./assets/bg-shorten-desktop.svg')] rounded-lg p-12">
				<div className="flex gap-6 relative">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className={`
							flex-1
							rounded-lg
							py-3
							px-6
							focus:outline
							focus:outline-primary-cyan
							focus:outline-2
							focus:outline-offset-0
							${error && errorStyle}
						`}
						value={link}
						onChange={(e) => setLink(e.target.value.trim())}
						onFocus={() => setError(false)}
					/>

					<Button borderRadius="rounded" onClick={shortenLink}>
						Shorten It!
					</Button>

					{error && (
						<span className="absolute -bottom-8 text-sm italic text-secondary-red">
							Please add a link
						</span>
					)}
				</div>
			</div>
		</section>
	);
}
