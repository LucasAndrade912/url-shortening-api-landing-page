import facebookLogo from '../assets/icon-facebook.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import pinterestLogo from '../assets/icon-pinterest.svg';
import twitterLogo from '../assets/icon-twitter.svg';

export function Footer() {
	return (
		<footer className="bg-neutral-very-dark-violet px-40 pt-20 pb-16 flex justify-between">
			<h3 className="text-3xl font-bold text-white">Shortly</h3>

			<div className="flex items-start gap-28">
				<div className="flex gap-14">
					<div>
						<h4 className="text-white text-sm font-bold mb-6">Features</h4>

						<ul className="flex flex-col gap-3">
							<li className="text-neutral-gray text-sm">Link Shortening</li>
							<li className="text-neutral-gray text-sm">Branded Links</li>
							<li className="text-neutral-gray text-sm">Analytics</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white text-sm font-bold mb-6">Resources</h4>

						<ul className="flex flex-col gap-3">
							<li className="text-neutral-gray text-sm">
								<a href="#">Blog</a>
							</li>
							<li className="text-neutral-gray text-sm">
								<a href="#">Developers</a>
							</li>
							<li className="text-neutral-gray text-sm">
								<a href="#">Support</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white text-sm font-bold mb-6">Company</h4>

						<ul className="flex flex-col gap-3">
							<li className="text-neutral-gray text-sm">
								<a href="#">About</a>
							</li>
							<li className="text-neutral-gray text-sm">
								Our
								<a href="#">Team</a>
							</li>
							<li className="text-neutral-gray text-sm">
								<a href="#">Careers</a>
							</li>
							<li className="text-neutral-gray text-sm">
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>

				<ul className="flex items-center gap-6">
					<li>
						<a href="#">
							<img src={facebookLogo} alt="Facebook Logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={twitterLogo} alt="Twitter Logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={pinterestLogo} alt="Pinterest Logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={instagramLogo} alt="Instagram Logo" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
