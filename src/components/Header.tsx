import logo from '../assets/logo.svg';
import { Button } from './Button';

import { Link } from './Link';

export function Header() {
	return (
		<header className="flex justify-between items-center mb-24 mt-12 px-40">
			<div className="flex gap-12">
				<img src={logo} alt="Shortly Logo" className="object-contain" />

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
			</div>

			<div className="flex gap-8 items-center">
				<Link href="#">Login</Link>

				<Button size="small">Sign Up</Button>
			</div>
		</header>
	);
}
