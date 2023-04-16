import illustrationWorking from '../assets/illustration-working.svg';
import { Button } from './Button';

export function Presentation() {
	return (
		<section className="flex items-center justify-between px-40 mobile:px-4 mobile:flex-col-reverse">
			<div className="min-w-[540px] mobile:min-w-0 mobile:flex mobile:flex-col mobile:items-center mobile:text-center">
				<h1 className="font-bold text-7xl text-neutral-very-dark-blue leading-tight mobile:text-4xl">
					More than just shorter links
				</h1>

				<h2 className="w-[90%] font-medium text-neutral-grayish-violet mb-7 mobile:mt-4">
					Build your brands recognition and get detailed insights on how your links are performing.
				</h2>

				<Button>Get Started</Button>
			</div>

			<img
				src={illustrationWorking}
				alt="Illustration Working"
				className="ml-10 mobile:max-w-none mobile:w-[480px] mobile:mb-14 mobile:ml-40"
			/>
		</section>
	);
}
