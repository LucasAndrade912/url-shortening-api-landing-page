import { useEffect, useState } from 'react';

import logo from '../assets/logo.svg';

import { Button } from './Button';
import { Link } from './Link';

export function Header() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	function toggleShowMenu() {
		setShowMobileMenu(!showMobileMenu && windowWidth <= 375);
	}

	useEffect(() => {
		const handleWindowWidth = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowWidth);

		return () => {
			window.removeEventListener('resize', handleWindowWidth);
		};
	}, []);

	return (
		<header className="flex justify-between items-center mb-24 mt-12 px-40 mobile:px-6 mobile:mb-14 mobile:relative">
			<img src={logo} alt="Shortly Logo" className="object-contain" />

			<button className="hidden mobile:block" onClick={toggleShowMenu}>
				<div className="w-8 h-1 bg-neutral-grayish-violet mb-2" />
				<div className="w-8 h-1 bg-neutral-grayish-violet mb-2" />
				<div className="w-8 h-1 bg-neutral-grayish-violet" />
			</button>

			<nav
				className={`ml-12 flex w-full justify-between items-center mobile:absolute mobile:bg-primary-dark-violet mobile:flex-col mobile:rounded-lg mobile:top-12 mobile:ml-0 mobile:inset-x-1/2 mobile:-translate-x-1/2 mobile:w-[calc(100vw-48px)] mobile:py-10 mobile:px-6 ${
					!showMobileMenu && 'mobile:hidden'
				}`}
			>
				<ul className="flex gap-8 mobile:flex-col mobile:items-center">
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

				{windowWidth >= 375 && <div className="w-full h-[1px] bg-neutral-gray opacity-20 my-7" />}

				<div className="flex gap-8 items-center mobile:flex-col mobile:w-full">
					<Link href="#">Login</Link>

					<Button size={windowWidth <= 375 ? 'full' : 'normal'}>Sign Up</Button>
				</div>
			</nav>
		</header>
	);
}
