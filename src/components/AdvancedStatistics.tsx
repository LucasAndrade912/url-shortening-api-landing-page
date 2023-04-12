import image from '../assets/icon-brand-recognition.svg';

import { StatiticCard } from './StatistcCard';

export function AdvancedStatistics() {
	return (
		<section className="bg-neutral-light-gray px-40 pt-28">
			<h2 className="text-4xl font-bold text-neutral-very-dark-blue text-center mb-4">
				Advanced Statistics
			</h2>

			<p className="text-center text-neutral-grayish-violet">
				Track how your links are performing across the web with <br />
				our advanced statistcs dashboard.
			</p>

			<div className="flex gap-8 mt-32 relative">
				<div className="absolute h-2 bg-primary-cyan w-full inset-y-1/2" />

				<StatiticCard
					image={{ src: image, alt: 'bla' }}
					title="Brand Recognition"
					text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
				/>

				<StatiticCard
					image={{ src: image, alt: 'bla' }}
					title="Brand Recognition"
					text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
					translateY={40}
				/>

				<StatiticCard
					image={{ src: image, alt: 'bla' }}
					title="Brand Recognition"
					text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
					translateY={80}
				/>
			</div>
		</section>
	);
}
