import { useLocalStorage } from './hook/useLocalStorage';

import { AdvancedStatistics } from './components/AdvancedStatistics';
import { BoostLinks } from './components/BoostLinks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LinkShortener } from './components/LinkShortener';
import { Presentation } from './components/Presentation';
import { ShortenedLink } from './components/ShortenedLink';

export function App() {
	const [links, setLinks] = useLocalStorage<string[][]>('@links', []);

	return (
		<>
			<Header />
			<Presentation />
			<LinkShortener links={links} setLinks={setLinks} />

			{links.length > 0 && (
				<div className="bg-neutral-light-gray">
					<div className="pt-5 flex flex-col px-40 gap-3 mobile:px-6">
						{links.map((link, index) => (
							<ShortenedLink key={index} originalLink={link[0]} shortenedLink={link[1]} />
						))}
					</div>
				</div>
			)}

			<AdvancedStatistics />
			<BoostLinks />
			<Footer />
		</>
	);
}
