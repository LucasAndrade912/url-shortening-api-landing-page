import { Button } from './Button';

export function LinkShortener() {
	return (
		<section className="bg-bottom-half px-40 mt-12">
			<div className="bg-primary-dark-violet bg-[url('./assets/bg-shorten-desktop.svg')] rounded-lg p-12">
				<div className="flex gap-6">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className="flex-1 rounded-lg py-3 px-6"
					/>
					<Button borderRadius="rounded">Shorten It!</Button>
				</div>
			</div>
		</section>
	);
}
