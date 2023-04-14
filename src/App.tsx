import { AdvancedStatistics } from './components/AdvancedStatistics';
import { BoostLinks } from './components/BoostLinks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LinkShortener } from './components/LinkShortener';
import { Presentation } from './components/Presentation';

export function App() {
	return (
		<>
			<Header />
			<Presentation />
			<LinkShortener />
			<AdvancedStatistics />
			<BoostLinks />
			<Footer />
		</>
	);
}
