import { Button } from './Button';

export function BoostLinks() {
	return (
		<section className="bg-primary-dark-violet bg-[url('./assets/bg-boost-desktop.svg')] flex flex-col justify-center items-center gap-8 py-14">
			<h2 className="text-4xl font-bold text-white">Boost your links today</h2>

			<Button>Get Started</Button>
		</section>
	);
}
