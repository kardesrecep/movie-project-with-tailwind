/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			screens:{
				lg: "1140px",
				xl: "1140px",
				"2xl": "1140px",
			}
		},
		extend: {
			fontFamily: {
				gemunu: ["Gemunu Libre", "sans-serif"],
				"open-sans": ["Open Sans", "sans-serif"],
			},
			colors: {
				"movie-red": "#BC1A45",
				"movie-melon": "#FFD369",
				"movie-grey": "#DDDDDD",
				"movie-white": "#F7F7F7",
			},

			spacing:{
				"128": "32rem"
				
			}
		},
	},
	plugins: [],
};
