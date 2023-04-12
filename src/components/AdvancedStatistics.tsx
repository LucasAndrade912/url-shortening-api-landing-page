import brandRecognitionImg from '../assets/icon-brand-recognition.svg';
import detailedRecordsImg from '../assets/icon-detailed-records.svg';
import fullyCustomizableImg from '../assets/icon-fully-customizable.svg';

import { StatiticCard } from './StatistcCard';

export function AdvancedStatistics() {
	return (
		<section className="bg-neutral-light-gray px-40 pt-28 pb-52">
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
					image={{ src: brandRecognitionImg, alt: 'Brand Recognition' }}
					title="Brand Recognition"
					text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
				/>

				<StatiticCard
					image={{ src: detailedRecordsImg, alt: 'Detailed Records' }}
					title="Detailed Records"
					text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
					translateY={40}
				/>

				<StatiticCard
					image={{ src: fullyCustomizableImg, alt: 'Fully Customizable' }}
					title="Fully Customizable"
					text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagament."
					translateY={80}
				/>
			</div>
		</section>
	);
}
