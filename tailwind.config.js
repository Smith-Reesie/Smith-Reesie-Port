/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: { min: "200px", max: "576px" },
			// => @media (min-width: 320px) { ... }

			md: { min: "577px", max: "768px" },
			// => @media (min-width: 600px) { ... }

			lg: { min: "769px", max: "992px" },
			// => @media (min-width: 1023px) { ... }

			xl: { min: "993px", max: "1200px" },
			// => @media (min-width: 1023px) { ... }

			// xxl: { min: "1201px", max: "1400px" },
			// // => @media (min-width: 1023px) { ... }
		},
		extend: {
			colors: {
				bshadow: "rgba(251, 161, 40, 0.42)",
			},
		},
	},
	plugins: [],
};
