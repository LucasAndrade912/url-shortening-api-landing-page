import { Header } from './components/Header';
import { LinkShortener } from './components/LinkShortener';
import { Presentation } from './components/Presentation';

export function App() {
	return (
		<>
			<Header />
			<Presentation />
			<LinkShortener />
		</>
	);
}
