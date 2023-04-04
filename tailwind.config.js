/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			desktop: '1440px',
			mobile: '375px',
		},
		extend: {
			backgroundImage: {
				'bottom-half': 'linear-gradient(to bottom, transparent 50%, #EFF1F7 50%)',
			},
			colors: {
				primary: {
					cyan: 'hsl(180, 66%, 49%)',
					'dark-violet': 'hsl(257, 27%, 26%)',
				},
				secondary: {
					red: 'hsl(0, 87%, 67%)',
				},
				neutral: {
					gray: 'hsl(0, 0%, 75%)',
					'grayish-violet': 'hsl(257, 7%, 63%)',
					'very-dark-blue': 'hsl(255, 11%, 22%)',
					'very-dark-violet': 'hsl(260, 8%, 14%)',
				},
			},
		},
	},
	plugins: [],
};
