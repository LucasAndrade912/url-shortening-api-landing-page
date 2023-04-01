import illustrationWorking from '../assets/illustration-working.svg';
import { Button } from './Button';

export function Presentation() {
	return (
		<section className="flex items-center justify-between">
			<div className="whitespace-nowrap">
				<h1 className="font-bold text-7xl text-neutral-very-dark-blue leading-tight">
					More than just <br />
					shorter links
				</h1>

				<h2 className="font-medium text-neutral-grayish-violet mb-7">
					Build your brands recognition and get detailed <br />
					insights on how your links are performing.
				</h2>

				<Button>Get Started</Button>
			</div>

			<img src={illustrationWorking} alt="Illustration Working" className="ml-32" />
		</section>
	);
}
