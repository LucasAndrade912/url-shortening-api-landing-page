import logo from '../assets/logo.svg';
import { Button } from './Button';

import { Link } from './Link';

export function Header() {
	return (
		<header className="flex justify-between items-center mb-24 mt-12 px-40 mobile:px-6 mobile:mb-14">
			<img src={logo} alt="Shortly Logo" className="object-contain" />

			<button className="hidden mobile:block">
				<div className="w-8 h-1 bg-neutral-grayish-violet mb-2" />
				<div className="w-8 h-1 bg-neutral-grayish-violet mb-2" />
				<div className="w-8 h-1 bg-neutral-grayish-violet" />
			</button>

			<nav className="ml-12 flex w-full justify-between items-center mobile:hidden">
				<ul className="flex gap-8">
					<li>
						<Link href="#">Features</Link>
					</li>

					<li>
						<Link href="#">Pricing</Link>
					</li>

					<li>
						<Link href="#">Resources</Link>
					</li>
				</ul>

				<div className="flex gap-8 items-center">
					<Link href="#">Login</Link>

					<Button size="small">Sign Up</Button>
				</div>
			</nav>
		</header>
	);
}
